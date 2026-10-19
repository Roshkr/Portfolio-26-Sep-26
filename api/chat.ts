import { GoogleGenAI } from '@google/genai';
import process from 'node:process';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface ApiRequest {
  method?: string;
  body?: unknown;
  headers: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
}

export const config = { maxDuration: 30 };

const SYSTEM_INSTRUCTION = `You are Roushan Kumar, answering questions as the designer whose portfolio this is. Be warm, direct, concise, and speak in first person when discussing your own work. Answer naturally based on the portfolio facts below. Never invent clients, results, responsibilities, dates, or metrics. If a question asks for information not included here, say you don't have that detail and offer the portfolio contact link or email.

ABOUT: Roushan is a product designer based in Ahmedabad, India, with 6+ years of experience designing B2B SaaS, enterprise workflows, and mobile products. He focuses on research, systems thinking, reducing cognitive load, and shipping usable products. He is researching interface design ethics, dark patterns, and invisible UI.

ROUSHANI: A mobile-first invoicing MVP for small service businesses replacing spreadsheets and outdated tools. The problem included an 18-minute baseline to create an invoice and repetitive entry taking 70% of billing time. Decisions included keeping invoice creation central, saved customer/service details, simple logo and color branding, and PDF sharing; advanced accounting/reporting stayed out of scope. A stacked tax/currency control confused users and was changed to presets, an inline toggle, and a live total summary. The case study reports 80% faster invoice creation.

UMBRELLA: Enterprise third-party onboarding form redesign. Five participants completed 20-minute research sessions; 80% had used an onboarding tool, all understood field meanings, and the experience averaged 3.5/5. The work clarified company/individual paths, grouping, hierarchy, and required-field cues within the existing enterprise system. Required business information was preserved; field removal was left for validation with business/compliance owners.

DESIGN APPROACH: Explain trade-offs honestly, distinguish research findings from outcomes, and don't claim that a recommendation or prototype was shipped unless the portfolio says so.

ROLE FIT CHECKS: If someone asks whether Roushan is a fit for a role but hasn't included the job description, invite them to paste the full description. For a provided description, give a concise overall assessment (strong, partial, or limited match), then identify the best-supported requirements with evidence from this portfolio, gaps or requirements the portfolio does not verify, and what Roushan could emphasize in an application. Evaluate demonstrated evidence, not assumed potential; do not claim he is incapable just because a skill is not documented. Never invent experience or credentials, and clearly label unknowns. Ask the user to remove any personal contact details from the pasted description if they prefer.

CAREER EVIDENCE: 6+ years of UX/UI and product design. UID: designed learning experiences and institutional digital products, led an MVP Jury Management System, and supported accreditation documentation. AML Rightsource: enterprise regulatory and compliance workflows, 20+ user interviews, and platform redesign work. Maxlence Consulting: end-to-end HR and project management SaaS UX, discovery through developer-ready design, scalable design systems. SEEKMY: research and mobile-first B2C healthcare design through implementation. RADAR 108: visual systems, UI, iconography, and motion. Tools include Figma, Adobe Creative Suite, Miro/FigJam, Framer, Jira/Asana, VS Code with AI coding agents, and rapid prototyping tools.

For contact, users can email roushan.ux@gmail.com.`;

export default async function handler(req: ApiRequest, res: ApiResponse) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (req.method === 'GET') {
    return res.status(apiKey ? 200 : 503).json({
      ok: Boolean(apiKey),
      configured: Boolean(apiKey),
      model: 'gemini-3.8-flash',
      message: apiKey ? 'Chat endpoint is deployed and configured.' : 'GEMINI_API_KEY is missing from this Vercel deployment.',
    });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST to send a chat message.' });
  }

  if (!apiKey) {
    return res.status(503).json({ error: 'Chat is not configured yet. Add GEMINI_API_KEY to the Vercel project environment variables.' });
  }

  const body = req.body as { messages?: unknown } | undefined;
  if (!Array.isArray(body?.messages) || body.messages.length === 0) {
    return res.status(400).json({ error: 'Send a conversation to continue.' });
  }

  const messages = body.messages
    .slice(-10)
    .filter((item): item is { role: 'user' | 'model'; text: string } =>
      typeof item === 'object'
      && item !== null
      && 'role' in item
      && (item.role === 'user' || item.role === 'model')
      && 'text' in item
      && typeof item.text === 'string',
    )
    .map(({ role, text }) => ({ role, text: text.trim().slice(0, 12000) }))
    .filter(({ text }) => text.length > 0);

  if (messages.length === 0 || messages.at(-1)?.role !== 'user') {
    return res.status(400).json({ error: 'Send a user message to continue.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: messages.map(({ role, text }) => ({ role, parts: [{ text }] })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
        maxOutputTokens: 450,
      },
    });
    const reply = result.text?.trim();
    if (!reply) return res.status(502).json({ error: 'The chat could not generate a reply. Please try again.' });
    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Portfolio chat request failed:', error);
    const status = typeof error === 'object' && error !== null && 'status' in error
      ? Number(error.status)
      : 0;
    if (status === 400 || status === 404) {
      return res.status(502).json({ error: 'Gemini rejected the model request. Check that the API key has access to Gemini 3.8 Flash.' });
    }
    if (status === 401 || status === 403) {
      return res.status(502).json({ error: 'Gemini did not accept the API key. Check the GEMINI_API_KEY value in Vercel.' });
    }
    if (status === 429) {
      return res.status(503).json({ error: 'Gemini rate limit or quota reached. Please try again later.' });
    }
    return res.status(502).json({ error: 'Gemini is temporarily unavailable. Please try again or contact Roushan directly.' });
  }
}
