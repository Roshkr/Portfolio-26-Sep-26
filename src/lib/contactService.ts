import { DESIGNER_INFO } from '../data/portfolioData';

export interface ContactInquiry {
  name: string;
  email: string;
  message: string;
}

export const submitContactInquiry = async (
  inquiry: ContactInquiry,
  subject: string,
) => {
  const response = await fetch(`https://formsubmit.co/ajax/${DESIGNER_INFO.email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...inquiry,
      _subject: subject,
      _template: 'table',
    }),
  });

  if (!response.ok) throw new Error('Contact service rejected the inquiry.');
};

export const createContactMailto = (inquiry: ContactInquiry, subject: string) => {
  const body = `Hi Roushan,\n\n${inquiry.message}\n\nFrom: ${inquiry.name}\nEmail: ${inquiry.email}`;
  return `mailto:${DESIGNER_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const createContactGmailUrl = (inquiry: ContactInquiry, subject: string) => {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: DESIGNER_INFO.email,
    su: subject,
    body: `Hi Roushan,\n\n${inquiry.message}\n\nFrom: ${inquiry.name}\nEmail: ${inquiry.email}`,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const copyTextToClipboard = async (text: string) => {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const input = document.createElement('textarea');
  input.value = text;
  input.style.position = 'fixed';
  input.style.opacity = '0';
  document.body.appendChild(input);
  let copied = false;
  try {
    input.select();
    copied = document.execCommand('copy');
  } finally {
    input.remove();
  }
  if (!copied) throw new Error('Clipboard access is unavailable.');
};
