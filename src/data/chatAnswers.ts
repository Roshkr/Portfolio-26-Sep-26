export interface ChatAnswer {
  keywords: string[];
  exactMatches?: string[];
  answer: string;
}

export const chatAnswers: ChatAnswer[] = [
  { keywords: [], exactMatches: ['hello'], answer: 'Hello, May I know your name?' },
  { keywords: [], exactMatches: ['yes', 'no'], answer: 'Ok. What do you want to know.' },
  { keywords: ['available for full time', 'available for a full time', 'full time role', 'full time job'], answer: "Yes. I’m wrapping something up and will be available for a full-time role in a week. Please let me know about your requirements." },
  { keywords: ['salary expectation', 'salary range', 'expected salary', 'compensation', 'salary', 'lpa', 'package expectation'], answer: 'My salary expectation is 14 to 20 LPA.' },
  { keywords: ['about yourself', 'tell me about yourself', 'who are you', 'introduce yourself', 'about roushan'], answer: 'I simplify complex user experiences, solve usability challenges, and empower design teams to build better digital products.' },
  { keywords: ['looking for', 'what roles', 'type of role', 'next role', 'career goal', 'role are you'], answer: 'I am looking for roles that combine UX strategy, hands-on experience design, and team leadership. I enjoy solving complex problems, simplifying workflows, validating solutions through user testing, and helping teams deliver better products.' },
  { keywords: ['strong fit', 'why hire', 'why should', 'what makes you', 'good fit', 'role fit'], answer: "I don't just design interfaces; I identify experience problems, simplify complexity, and help teams build products that work better for people." },
  { keywords: ['design process', 'approach design', 'approach a', 'approach to', 'start a project', 'solve a problem', 'design problem'], answer: "I usually start by understanding the problem, the users, and what the business is trying to achieve. Then I look at where users are facing difficulties and explore ways to make the experience simpler. I test my ideas, take feedback, and keep improving the design until it works well for both the users and the business." },
  { keywords: ['industries', 'domains', 'product types', 'what products', 'sectors', 'fintech', 'healthcare', 'education'], answer: "I've worked across different domains, including B2B SaaS, FinTech, healthcare, and productivity platforms. My experience includes improving complex workflows, making digital products easier to use, and designing user-centred experiences. I've also worked on education platforms, including website and conference experiences, and an MVP for a Jury Management System. Working across these industries has helped me understand different user needs and adapt my design approach to different product challenges." },
  { keywords: ['enjoy most', 'enjoy about', 'motivate', 'motivates', 'favorite part', 'favourite part', 'passionate'], answer: "I really enjoy figuring out how to make things work better for people. It's interesting to understand what users need, spot where things aren't working, and find ways to improve them. I also like the creative side of design, exploring different ideas, and working with people to turn those ideas into something useful. The best part is knowing that what I've created has made a real difference in someone's experience." },
  { keywords: ['work with developers', 'developer collaboration', 'collaborate with', 'work with team', 'implementation', 'technical limitations'], answer: 'I usually involve developers and other team members early, so we can discuss ideas, understand technical limitations, and find the best way forward. I make sure my designs and interactions are clearly communicated, stay open to feedback, and work closely with developers during implementation. I also review the final product to make sure the experience works as intended.' },
  { keywords: ['user research', 'user testing', 'validate designs', 'usability testing', 'research and testing', 'test prototypes', 'test your designs'], answer: "I use research and testing to make sure I'm solving the right problem, not just designing based on assumptions. I try to understand user behaviour, identify where they face difficulties, and use those insights to improve the design. I also test prototypes with users, observe how they interact with them, and gather feedback. Based on what I learn, I make changes and refine the experience. I believe design decisions should be backed by real user insights wherever possible." },
];

export const findChatAnswer = (question: string) => {
  const normalizedQuestion = question.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  return chatAnswers.find(({ keywords, exactMatches }) => {
    if (exactMatches?.includes(normalizedQuestion)) return true;
    return keywords.some((keyword) => {
    const normalizedKeyword = keyword.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    return normalizedQuestion.includes(normalizedKeyword);
    });
  })?.answer;
};
