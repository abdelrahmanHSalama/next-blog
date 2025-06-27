import AllPosts from "@/components/AllPosts";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";
import RecentPosts from "@/components/RecentPosts";
import Separator from "@/components/Separator";

const articles = [
  {
    userId: 1,
    id: 1,
    title: "5 Leadership Lessons from Top Tech Leads: What Designers Can Learn",
    body: "In a world dominated by fast product cycles, great leadership is the difference between chaos and collaboration. Drawing parallels from both sports and startups, we break down five key leadership principles that tech leads use to drive alignment, foster creativity, and shield their teams from burnout.",
  },
  {
    userId: 1,
    id: 2,
    title: "What Even Is a UX Audit? Breaking Down the Process for Startups",
    body: "UX audits are often misunderstood—many startups skip them entirely or treat them as optional. But in reality, a proper UX audit can reveal friction points that drain conversions and frustrate users. We explore the structure of an audit, the key metrics to track, and how to turn findings into action.",
  },
  {
    userId: 1,
    id: 3,
    title: "How to Handle Client Feedback Without Burning Out Your Design Team",
    body: "It’s one thing to receive feedback—it’s another to manage it gracefully. Designers often face vague, late, or contradictory client comments. This article explores strategies for setting boundaries, defining feedback phases, and creating psychologically safe workflows to protect both creativity and morale.",
  },
  {
    userId: 1,
    id: 4,
    title: "The Dark Side of MVP Culture: When 'Just Ship It' Goes Too Far",
    body: "The MVP (Minimum Viable Product) approach is praised for its speed and efficiency, but taken to extremes, it can lead to sloppy launches and poor brand trust. We unpack when MVP thinking is helpful—and when it quietly sabotages long-term product health.",
  },
  {
    userId: 1,
    id: 5,
    title:
      "Dark Patterns in UX: Why Ethics Should Be Part of Your Design System",
    body: "From forced opt-ins to sneaky unsubscribe links, dark patterns erode user trust. Designers wield real influence over user decisions—and with that comes responsibility. Here's how to recognize manipulative UX tactics and how to build systems that are ethical and user-first.",
  },
  {
    userId: 1,
    id: 6,
    title: "How to Build Accessible Components with TailwindCSS",
    body: "Accessibility is more than a checkbox—it's foundational to inclusive design. TailwindCSS offers a powerful toolkit, but it’s up to developers to ensure their components are screen-reader friendly and keyboard navigable. Learn practical tips to make your Tailwind-based UI usable by all.",
  },
  {
    userId: 1,
    id: 7,
    title: "Design Tokens: The Secret Sauce Behind Scalable UI Systems",
    body: "As design systems grow, maintaining consistency across platforms becomes a challenge. Design tokens act as the connective tissue between design and development—bridging Figma files and codebases. This article covers what they are, how to implement them, and why they're essential for scalable design.",
  },
  {
    userId: 1,
    id: 8,
    title:
      "From Figma to Code: Streamlining Handoff Between Designers and Developers",
    body: "The designer-developer handoff is often a messy game of broken specs and unclear intentions. We explore tools, workflows, and mindset shifts that make this transition smoother—reducing rework, missed edge cases, and confusion for everyone involved.",
  },
  {
    userId: 1,
    id: 9,
    title: "CSS Grid vs. Flexbox: When to Use What in 2025",
    body: "Both CSS Grid and Flexbox are powerful layout tools, but each has its strengths. This guide breaks down the core differences, ideal use cases, and common anti-patterns—so you can make confident layout decisions without trial and error.",
  },
  {
    userId: 1,
    id: 10,
    title: "AI-Powered Design Tools: Hype or the Future of UI?",
    body: "From Figma plugins to full-on AI design assistants, artificial intelligence is entering the design workflow fast. But can it really replace human intuition and creativity? We explore what these tools do well, where they fall short, and how to integrate them into your process without losing control.",
  },
];

export default function Posts() {
  return (
    <>
      <Header version="full" className="my-8" />
      <RecentPosts articles={articles.slice(0, 4)} className="my-8" />{" "}
      <AllPosts articles={articles.slice(4, 10)} className="my-8" />
      <Separator className="my-8" />
      <Pagination pages={5} className="my-8" />
    </>
  );
}
