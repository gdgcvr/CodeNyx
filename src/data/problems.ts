type ProblemStatement = {
  id: number;
  title: string;
  problem: string;
};

export const problemStatements: ProblemStatement[] = [
  {
    id: 1,
    title: "Digital Ledger for Informal Savings Circles",
    problem:
      "Informal savings circles (chit funds) run on trust with no digital trail. One unpaid organiser manages everything manually, leaving no receipt history and no dispute resolution mechanism. There is a need for a digital backbone that gives the organiser control and members transparency, without replacing the human relationship at the centre.",
  },
  {
    id: 2,
    title: "AI-Powered Adaptive Tutoring System for Late-Night Learners",
    problem:
      "Students stuck on concepts at odd hours have no reliable help. The internet offers 47 conflicting answers but no actual teaching or adaptation to individual understanding gaps. There is a need for a system that teaches — not just answers — adapting to where the student is getting stuck.",
  },
  {
    id: 3,
    title: "Offline-First Utility Platform for Zero-Connectivity Environments",
    problem:
      "Power cuts, network outages, and disaster zones make connectivity disappear — along with everything that depends on it. Traditional digital tools fail entirely in these conditions, leaving people without access to critical information and services when they need them most.",
  },
  {
    id: 4,
    title: "Personalised Career Intelligence Platform for Students",
    problem:
      "Students receive outdated, generic career advice — 'get a government job', 'do MBA', 'learn Java' — that does not reflect where the world is heading. There is a need for a system that gives students career signal that is honest, current, and specific to them.",
  },
  {
    id: 5,
    title: "Contextual Product Knowledge Assistant for Real-Time Support",
    problem:
      "Every device and software ships with documentation nobody reads. When something breaks, users are left helpless with a buried PDF from years ago. There is a need for a system that makes product knowledge accessible at the exact moment someone needs it.",
  },
  {
    id: 6,
    title:
      "Student Grievance Aggregation System for Institutional Accountability",
    problem:
      "Hostel students universally experience poor conditions — bad food, broken amenities, unavailable wardens — and every student knows it, but nobody in administration does. There is no system that aggregates student experience into something actionable, resulting in persistent, unresolved issues.",
  },
  {
    id: 7,
    title: "Automated Meeting Summariser with Action Item Assignment",
    problem:
      "Every team has too many meetings and not enough documentation. Meetings end with memories, not records — action items get lost, ownership is unclear, and accountability disappears. There is a need for a system that automatically summarises meetings and extracts assigned action items.",
  },
  {
    id: 8,
    title: "Intelligent Codebase Comprehension Tool for Developer Onboarding",
    problem:
      "When a developer leaves, the codebase stays but understanding leaves with them. New developers waste enormous time reverse-engineering undocumented systems. There is a need for a tool that helps developers understand an unfamiliar codebase faster through documentation, visualisation, or intelligent Q&A.",
  },
  {
    id: 9,
    title:
      "AI-Driven Bug Localisation System Using Code History and Error Patterns",
    problem:
      "Developers spend more time debugging than building. Finding a bug typically starts with guesswork rather than evidence. There is a need for a system that uses code history, error logs, or pattern recognition to identify where a bug is likely hiding — before the developer starts guessing.",
  },
  {
    id: 10,
    title: "Real-Time Last-Mile Delivery Transparency System for End Customers",
    problem:
      "Delivery apps show 'out for delivery' for hours with no real updates and no explanation when packages arrive late. Last-mile logistics is a black box for the person who matters most — the one waiting. There is a need for a solution that gives delivery transparency to the end customer without requiring expensive GPS infrastructure or courier cooperation.",
  },
];
