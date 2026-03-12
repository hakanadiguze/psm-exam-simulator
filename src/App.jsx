/* eslint-disable */
import { useState, useEffect, useCallback } from "react";

// ── Google Analytics ──────────────────────────────────────────────
const GA_ID = "G-76E9H0TCHL"; // Replace with your Measurement ID
function useGoogleAnalytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (document.getElementById("ga-script")) return;
    const s = document.createElement("script");
    s.id = "ga-script";
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);
}
function trackEvent(action, category, label) {
  if (window.gtag) window.gtag("event", action, { event_category: category, event_label: label });
}


// ═══════════════════════════════════════════════════════════════════
// QUESTION BANK — 160 PSM I + 100 PSM II = 260 questions
// Each exam draws a random subset: PSM I → 80 Qs, PSM II → 30 Qs
// ═══════════════════════════════════════════════════════════════════

const PSM1_BANK = [ // eslint-disable-line no-sparse-arrays
  // ── SCRUM THEORY ─────────────────────────────────────────────────────────
  {
    id: 1, topic: "Scrum Theory",
    question: "What are the three pillars of empiricism that Scrum is founded upon?",
    options: ["Transparency, Inspection, Adaptation", "Planning, Execution, Review", "Commitment, Courage, Focus", "Velocity, Capacity, Throughput"],
    correct: [0], multi: false,
    explanation: "Scrum is founded on empirical process control theory. Three pillars uphold every implementation of empirical process control: Transparency, Inspection, and Adaptation."
  },
  {
    id: 2, topic: "Scrum Theory",
    question: "Scrum is founded on:",
    options: ["Defined process control", "Empirical process control", "Waterfall methodology", "Lean manufacturing"],
    correct: [1], multi: false,
    explanation: "Scrum is founded on empirical process control theory, or empiricism. Empiricism asserts that knowledge comes from experience and making decisions based on what is known."
  },
  {
    id: 3, topic: "Scrum Theory",
    question: "When does Inspection occur in Scrum? (Select all that apply)",
    options: ["Daily Scrum", "Sprint Review", "Sprint Retrospective", "Sprint Planning", "All Scrum Events"],
    correct: [4], multi: false,
    explanation: "Inspection occurs at all four formal Scrum Events: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. These events are designed to provoke change."
  },
  {
    id: 4, topic: "Scrum Theory",
    question: "What happens when Inspection reveals that one or more aspects of a process deviate outside acceptable limits?",
    options: ["The Sprint is cancelled", "An adjustment must be made as soon as possible", "A new meeting is scheduled", "The Scrum Master resolves it alone"],
    correct: [1], multi: false,
    explanation: "If an inspector determines that one or more aspects of a process deviate outside acceptable limits, an adjustment must be made as soon as possible to minimize further deviation."
  },
  {
    id: 5, topic: "Scrum Theory",
    question: "For Transparency to be effective, what must inspectors have?",
    options: ["Management approval", "A common understanding of what is being inspected", "Access to all source code", "Sprint velocity data"],
    correct: [1], multi: false,
    explanation: "Transparency requires those performing the work and those accepting the work to share a common understanding of the Definition of Done and what is being inspected."
  },
  {
    id: 6, topic: "Scrum Theory",
    question: "Which of the following best describes Scrum?",
    options: [
      "A complete methodology for software development",
      "A framework within which people can address complex adaptive problems",
      "A set of best practices for project management",
      "A process for defining and following a project plan"
    ],
    correct: [1], multi: false,
    explanation: "Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value."
  },
  {
    id: 7, topic: "Scrum Theory",
    question: "Scrum is: (Select all that apply)",
    options: ["Lightweight", "Simple to understand", "Difficult to master", "A complete process", "A methodology"],
    correct: [0, 1, 2], multi: true,
    explanation: "Scrum is: Lightweight, Simple to understand, Difficult to master. It is NOT a process, technique, or definitive method."
  },
  {
    id: 8, topic: "Scrum Theory",
    question: "What is the primary purpose of each Sprint being no longer than one month?",
    options: [
      "To ensure developers stay focused",
      "To limit risk to one month of cost",
      "To ensure predictability and limit risk to one calendar month of cost",
      "To meet regulatory requirements"
    ],
    correct: [2], multi: false,
    explanation: "Sprints are limited to one calendar month to ensure predictability and to limit risk to one calendar month of cost. When the horizon is too long, complexity may rise and risk may increase."
  },

  // ── SCRUM VALUES ──────────────────────────────────────────────────────────
  {
    id: 9, topic: "Scrum Values",
    question: "What are the five Scrum Values?",
    options: [
      "Commitment, Courage, Focus, Openness, Respect",
      "Transparency, Inspection, Adaptation, Focus, Respect",
      "Commitment, Collaboration, Communication, Courage, Focus",
      "Honesty, Courage, Focus, Openness, Teamwork"
    ],
    correct: [0], multi: false,
    explanation: "The five Scrum Values are: Commitment, Courage, Focus, Openness, and Respect. When these values are embodied and lived by the Scrum Team, the pillars of empiricism come to life."
  },
  {
    id: 10, topic: "Scrum Values",
    question: "When the Scrum Team embodies the Scrum Values, what happens?",
    options: [
      "Velocity increases",
      "The three pillars of empiricism come to life and build trust",
      "The team becomes self-organizing automatically",
      "Stakeholders are always satisfied"
    ],
    correct: [1], multi: false,
    explanation: "When the values of commitment, courage, focus, openness, and respect are embodied and lived by the Scrum Team, the pillars of empiricism (transparency, inspection, adaptation) come to life and build trust for everyone."
  },
  {
    id: 11, topic: "Scrum Values",
    question: "What does the Scrum Value of 'Focus' mean for the Scrum Team?",
    options: [
      "Everyone focuses on the Sprint Goal and the work of the Sprint",
      "The team focuses only on technical tasks",
      "The Product Owner focuses on stakeholder management",
      "Focus means completing all backlog items"
    ],
    correct: [0], multi: false,
    explanation: "Everyone focuses on the work of the Sprint and the goals of the Scrum Team. The Sprint Goal creates coherence and focus."
  },
  {
    id: 12, topic: "Scrum Values",
    question: "What does the Scrum Value of 'Openness' require?",
    options: [
      "Open source software only",
      "The Scrum Team and stakeholders are open about the work and challenges",
      "Open access to all company data",
      "Team members share personal information"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Team and stakeholders are open about all the work and the challenges with performing the work. Openness supports transparency."
  },
  {
    id: 13, topic: "Scrum Values",
    question: "Which Scrum Value is demonstrated when a Developer tells the Scrum Master about a technical impediment they cannot solve alone?",
    options: ["Commitment", "Courage", "Focus", "Openness"],
    correct: [3], multi: false,
    explanation: "Openness means being transparent about challenges. By surfacing the impediment, the Developer demonstrates openness, allowing the Scrum Master to help remove it."
  },

  // ── SCRUM TEAM ────────────────────────────────────────────────────────────
  {
    id: 14, topic: "Scrum Team",
    question: "What is the optimal size for a Scrum Team?",
    options: ["3-5 people", "5-9 people", "10 or fewer people", "No specific size"],
    correct: [2], multi: false,
    explanation: "The Scrum Team consists of the Product Owner, the Scrum Master, and Developers. The team is typically 10 or fewer people — small enough to remain nimble and large enough to complete significant work."
  },
  {
    id: 15, topic: "Scrum Team",
    question: "Who are the accountabilities on a Scrum Team? (Select all that apply)",
    options: ["Product Owner", "Scrum Master", "Developers", "Project Manager", "Architect"],
    correct: [0, 1, 2], multi: true,
    explanation: "The Scrum Team consists of one Product Owner, one Scrum Master, and Developers. There are no other roles in Scrum."
  },
  {
    id: 16, topic: "Scrum Team",
    question: "What is the characteristic of a Scrum Team?",
    options: [
      "It is managed by a Project Manager",
      "It is cross-functional and self-managing",
      "It only includes technical developers",
      "It reports to the Product Owner"
    ],
    correct: [1], multi: false,
    explanation: "Scrum Teams are cross-functional, meaning members have all the skills necessary to create value each Sprint. They are also self-managing, meaning they internally decide who does what, when, and how."
  },
  {
    id: 17, topic: "Scrum Team",
    question: "Who decides how to turn Product Backlog items into Increments of value?",
    options: ["The Product Owner", "The Scrum Master", "The Developers", "The stakeholders"],
    correct: [2], multi: false,
    explanation: "The Developers are always accountable for creating a plan for the Sprint (Sprint Backlog), instilling quality, adapting their plan each day, and holding each other accountable as professionals."
  },
  {
    id: 18, topic: "Scrum Team",
    question: "How many Product Owners are on a Scrum Team?",
    options: ["One per stakeholder group", "One", "Two — business and technical", "As many as needed"],
    correct: [1], multi: false,
    explanation: "The Product Owner is one person, not a committee. The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team."
  },
  {
    id: 19, topic: "Scrum Team",
    question: "Can the Scrum Master also be a Developer on the same team?",
    options: [
      "No, these are always separate roles",
      "Yes, although this is not recommended and is often counterproductive",
      "Only if the team has fewer than 5 members",
      "Yes, and this is encouraged for small teams"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Master can serve as a Developer, though focusing on both roles simultaneously can be challenging and is often counterproductive for larger teams."
  },
  {
    id: 20, topic: "Scrum Team",
    question: "What does it mean that Developers are accountable for 'instilling quality'?",
    options: [
      "They must get QA approval before releasing",
      "They adhere to a Definition of Done",
      "They conduct code reviews only",
      "Quality is the Product Owner's responsibility"
    ],
    correct: [1], multi: false,
    explanation: "Developers are accountable for adhering to the Definition of Done. This creates transparency and ensures every Increment meets an agreed quality standard."
  },

  // ── PRODUCT OWNER ─────────────────────────────────────────────────────────
  {
    id: 21, topic: "Product Owner",
    question: "Who is responsible for maximizing the value of the product?",
    options: ["Scrum Master", "Product Owner", "Developers", "Stakeholders"],
    correct: [1], multi: false,
    explanation: "The Product Owner is accountable for maximizing the value of the product resulting from the work of the Scrum Team."
  },
  {
    id: 22, topic: "Product Owner",
    question: "The Product Owner's decisions are visible in: (Select all that apply)",
    options: ["The content of the Product Backlog", "The ordering of the Product Backlog", "The Sprint Backlog items", "Daily Scrum notes"],
    correct: [0, 1], multi: true,
    explanation: "The Product Owner's decisions are reflected in the content and ordering of the Product Backlog. The Product Owner is the sole person responsible for managing the Product Backlog."
  },
  {
    id: 23, topic: "Product Owner",
    question: "If a stakeholder wants to change the priority of a Product Backlog item, what must they do?",
    options: [
      "Update it directly in the backlog management tool",
      "Convince the Product Owner",
      "Ask the Scrum Master to update it",
      "Raise it at the Sprint Review"
    ],
    correct: [1], multi: false,
    explanation: "The entire organization must respect the Product Owner's decisions. Those wishing to change the Product Backlog can do so only by trying to convince the Product Owner."
  },
  {
    id: 24, topic: "Product Owner",
    question: "What is the Product Owner accountable for? (Select all that apply)",
    options: [
      "Developing and explicitly communicating the Product Goal",
      "Creating and clearly communicating Product Backlog items",
      "Ordering the Product Backlog",
      "Ensuring the Product Backlog is transparent and understood",
      "Assigning tasks to Developers"
    ],
    correct: [0, 1, 2, 3], multi: true,
    explanation: "The Product Owner is accountable for: developing the Product Goal, creating PBIs, ordering the Product Backlog, and ensuring it is transparent and understood. Assigning tasks to developers is NOT their accountability."
  },
  {
    id: 25, topic: "Product Owner",
    question: "Can the Product Owner's responsibilities be performed by a committee?",
    options: [
      "Yes, larger organizations often use a committee",
      "Yes, but the committee must follow Scrum rules",
      "No, the Product Owner is one person",
      "Only if the team is distributed"
    ],
    correct: [2], multi: false,
    explanation: "The Product Owner is one person, not a committee. The Product Owner may represent the needs of many stakeholders in the Product Backlog, but those wanting to change the PB must convince the Product Owner."
  },

  // ── SCRUM MASTER ──────────────────────────────────────────────────────────
  {
    id: 26, topic: "Scrum Master",
    question: "What is the Scrum Master accountable for?",
    options: [
      "Managing the Scrum Team's performance",
      "Establishing Scrum as defined in the Scrum Guide and the team's effectiveness",
      "Writing the Product Backlog",
      "Making decisions about product features"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team's effectiveness."
  },
  {
    id: 27, topic: "Scrum Master",
    question: "How does the Scrum Master serve the Scrum Team? (Select all that apply)",
    options: [
      "Coaching the team members in self-management and cross-functionality",
      "Helping the team focus on creating high-value Increments",
      "Causing the removal of impediments to the team's progress",
      "Ensuring all Scrum events take place and are positive and productive",
      "Deciding technical solutions for the team"
    ],
    correct: [0, 1, 2, 3], multi: true,
    explanation: "The SM serves the team by coaching self-management, helping create high-value Increments, removing impediments, and ensuring events are effective. The SM does NOT make technical decisions."
  },
  {
    id: 28, topic: "Scrum Master",
    question: "How does the Scrum Master serve the Product Owner? (Select all that apply)",
    options: [
      "Helping find techniques for effective Product Goal definition and Product Backlog management",
      "Helping the Scrum Team understand the need for clear and concise Product Backlog items",
      "Helping establish empirical product planning",
      "Writing the Product Backlog items",
      "Facilitating stakeholder collaboration as requested"
    ],
    correct: [0, 1, 2, 4], multi: true,
    explanation: "The SM serves the PO through: techniques for PBM, helping team understand PBIs, empirical planning, and facilitating stakeholder collaboration. The SM does NOT write PBIs."
  },
  {
    id: 29, topic: "Scrum Master",
    question: "How does the Scrum Master serve the organization? (Select all that apply)",
    options: [
      "Leading, training, and coaching the organization in Scrum adoption",
      "Planning and advising Scrum implementations within the organization",
      "Helping employees and stakeholders understand empirical product development",
      "Removing barriers between stakeholders and Scrum Teams",
      "Reporting team performance to management"
    ],
    correct: [0, 1, 2, 3], multi: true,
    explanation: "The SM serves the organization by: leading Scrum adoption, planning implementations, helping understand empirical development, and removing barriers. Reporting performance to management is not an SM accountability."
  },
  {
    id: 30, topic: "Scrum Master",
    question: "What leadership style does the Scrum Master demonstrate?",
    options: ["Authoritative leadership", "Servant leadership", "Transactional leadership", "Directive leadership"],
    correct: [1], multi: false,
    explanation: "The Scrum Master serves the Scrum Team and the organization as a whole — this is servant leadership. The SM is not a manager and does not direct the team's work."
  },

  // ── SPRINT ────────────────────────────────────────────────────────────────
  {
    id: 31, topic: "Sprint",
    question: "What is a Sprint?",
    options: [
      "A fixed-length event of one month or less",
      "A variable length iteration based on team capacity",
      "The time between major releases",
      "A planning session for the quarter"
    ],
    correct: [0], multi: false,
    explanation: "Sprints are the heartbeat of Scrum, where ideas are turned into value. They are fixed-length events of one month or less to create consistency."
  },
  {
    id: 32, topic: "Sprint",
    question: "During the Sprint, which of the following is true? (Select all that apply)",
    options: [
      "No changes are made that would endanger the Sprint Goal",
      "Quality does not decrease",
      "The Product Backlog is refined as needed",
      "Scope may be clarified and renegotiated with the Product Owner",
      "The Sprint can be cancelled by any team member"
    ],
    correct: [0, 1, 2, 3], multi: true,
    explanation: "During a Sprint: no goal-endangering changes, quality is maintained, PB is refined, and scope may be renegotiated. Only the Product Owner can cancel a Sprint."
  },
  {
    id: 33, topic: "Sprint",
    question: "Who has the authority to cancel a Sprint?",
    options: ["The Scrum Master", "The Developers", "The Product Owner", "Any stakeholder"],
    correct: [2], multi: false,
    explanation: "A Sprint can be cancelled only by the Product Owner. A Sprint would be cancelled if the Sprint Goal becomes obsolete."
  },
  {
    id: 34, topic: "Sprint",
    question: "When does a new Sprint begin?",
    options: [
      "After a planning meeting is scheduled",
      "Immediately after the conclusion of the previous Sprint",
      "After the Product Owner approves",
      "At the beginning of the next business week"
    ],
    correct: [1], multi: false,
    explanation: "A new Sprint starts immediately after the conclusion of the previous Sprint. There is no gap between Sprints."
  },
  {
    id: 35, topic: "Sprint",
    question: "What may happen if a Sprint is too long? (Select all that apply)",
    options: [
      "The definition of what is being built may change",
      "Complexity may rise",
      "Risk may increase",
      "Velocity automatically improves",
      "Team motivation always increases"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "When a Sprint's horizon is too long, the definition of what is being built may change, complexity may rise, and risk may increase. That is why Sprints are limited to one month."
  },
  {
    id: 36, topic: "Sprint",
    question: "Each Sprint can be considered a short project. What does this mean?",
    options: [
      "Each Sprint has its own project manager",
      "Each Sprint contains all the work necessary to achieve the Sprint Goal",
      "Each Sprint produces a formal project report",
      "Sprints must be approved by a steering committee"
    ],
    correct: [1], multi: false,
    explanation: "Each Sprint may be considered a project with no more than a one-month horizon. Like projects, Sprints are used to accomplish something — the Sprint Goal."
  },

  // ── SPRINT PLANNING ───────────────────────────────────────────────────────
  {
    id: 37, topic: "Sprint Planning",
    question: "What is the timebox for Sprint Planning for a one-month Sprint?",
    options: ["2 hours", "4 hours", "8 hours", "No limit"],
    correct: [2], multi: false,
    explanation: "Sprint Planning is timeboxed to a maximum of eight hours for a one-month Sprint. For shorter Sprints, the event is usually shorter."
  },
  {
    id: 38, topic: "Sprint Planning",
    question: "Sprint Planning addresses which three topics?",
    options: [
      "Why, What, and How",
      "Who, When, and Where",
      "Vision, Goal, and Plan",
      "Backlog, Team, and Velocity"
    ],
    correct: [0], multi: false,
    explanation: "Sprint Planning initiates the Sprint by laying out the work to be performed. The plan is created by the collaborative work of the entire Scrum Team addressing: Why is this Sprint valuable? What can be Done this Sprint? How will the chosen work get done?"
  },
  {
    id: 39, topic: "Sprint Planning",
    question: "Who creates the Sprint Goal?",
    options: [
      "The Product Owner alone",
      "The Scrum Master",
      "The entire Scrum Team collaboratively",
      "The Developers"
    ],
    correct: [2], multi: false,
    explanation: "The entire Scrum Team collaborates to craft the Sprint Goal. The Sprint Goal is then finalized and committed to during Sprint Planning."
  },
  {
    id: 40, topic: "Sprint Planning",
    question: "How do the Developers select Product Backlog items for the Sprint?",
    options: [
      "The Product Owner assigns items to the Developers",
      "The Scrum Master picks based on capacity",
      "Only the Developers can select — no one tells them which items to select",
      "Items are automatically selected based on priority and velocity"
    ],
    correct: [2], multi: false,
    explanation: "In collaboration with the Product Owner, the Developers select items from the Product Backlog to include in the current Sprint. Only the Developers assess what they can accomplish — no one else tells them which items to select."
  },
  {
    id: 41, topic: "Sprint Planning",
    question: "What is the Sprint Backlog?",
    options: [
      "All items in the Product Backlog",
      "The Sprint Goal, the selected PBIs, and a plan for delivering the Increment",
      "A list of bugs to fix in the Sprint",
      "The Definition of Done for the Sprint"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how)."
  },

  // ── DAILY SCRUM ───────────────────────────────────────────────────────────
  {
    id: 42, topic: "Daily Scrum",
    question: "What is the purpose of the Daily Scrum?",
    options: [
      "To report status to the Scrum Master",
      "To inspect progress toward the Sprint Goal and adapt the Sprint Backlog",
      "To update the burndown chart",
      "To solve technical problems"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is a 15-minute event for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary."
  },
  {
    id: 43, topic: "Daily Scrum",
    question: "Who is required to attend the Daily Scrum?",
    options: ["The entire Scrum Team", "Developers only", "Developers and Scrum Master", "Developers and Product Owner"],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is an event for the Developers. The Scrum Master ensures it happens but is not required to attend. The Product Owner does not attend unless they are also working as a Developer."
  },
  {
    id: 44, topic: "Daily Scrum",
    question: "What is the timebox for the Daily Scrum?",
    options: ["30 minutes", "15 minutes", "1 hour", "As long as needed"],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is a 15-minute event. It is held at the same time and place every working day of the Sprint."
  },
  {
    id: 45, topic: "Daily Scrum",
    question: "The Developers can choose any structure for the Daily Scrum. Which structure is mentioned in the Scrum Guide as an example?",
    options: [
      "Yesterday / Today / Blockers",
      "Any structure is fine; none specifically required",
      "Each member reads from their task list",
      "The Scrum Master facilitates a structured standup"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Guide says Developers can use any structure and techniques they want as long as their Daily Scrum focuses on progress toward the Sprint Goal. The three-question format is common but not required."
  },
  {
    id: 46, topic: "Daily Scrum",
    question: "What does the Daily Scrum improve?",
    options: [
      "Individual developer velocity",
      "Communications, identifies impediments, promotes quick decision-making, and eliminates other meetings",
      "Stakeholder satisfaction",
      "Sprint velocity tracking"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum improves communications, identifies impediments, promotes quick decision-making, and consequently eliminates the need for other meetings."
  },

  // ── SPRINT REVIEW ─────────────────────────────────────────────────────────
  {
    id: 47, topic: "Sprint Review",
    question: "What is the purpose of the Sprint Review?",
    options: [
      "To review individual developer performance",
      "To inspect the outcome of the Sprint and determine future adaptations",
      "To plan the next Sprint",
      "To demonstrate completed features to management"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Review is held to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents their results to key stakeholders and progress toward the Product Goal is discussed."
  },
  {
    id: 48, topic: "Sprint Review",
    question: "What is the timebox for the Sprint Review for a one-month Sprint?",
    options: ["1 hour", "2 hours", "4 hours", "8 hours"],
    correct: [2], multi: false,
    explanation: "The Sprint Review is timeboxed to a maximum of four hours for a one-month Sprint."
  },
  {
    id: 49, topic: "Sprint Review",
    question: "What is the output of the Sprint Review?",
    options: [
      "A completed sprint report",
      "A revised Product Backlog",
      "A list of bugs found",
      "An approved Increment"
    ],
    correct: [1], multi: false,
    explanation: "The result of the Sprint Review is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint. The Product Backlog may also be adjusted to meet new opportunities."
  },
  {
    id: 50, topic: "Sprint Review",
    question: "Is the Sprint Review a demo?",
    options: [
      "Yes, it is a formal demo to stakeholders",
      "No, it is a working session — not a demo",
      "Yes, but only to internal stakeholders",
      "Only if the Product Owner requests it"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Review is a working session and should not be considered as a presentation. The entire Scrum Team and key stakeholders review what was accomplished and discuss what to do next."
  },

  // ── SPRINT RETROSPECTIVE ──────────────────────────────────────────────────
  {
    id: 51, topic: "Sprint Retrospective",
    question: "What is the purpose of the Sprint Retrospective?",
    options: [
      "To identify what went wrong in the Sprint",
      "To plan ways to increase quality and effectiveness",
      "To report team performance to management",
      "To update the Definition of Done"
    ],
    correct: [1], multi: false,
    explanation: "The purpose of the Sprint Retrospective is to plan ways to increase quality and effectiveness. The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done."
  },
  {
    id: 52, topic: "Sprint Retrospective",
    question: "What is the timebox for the Sprint Retrospective for a one-month Sprint?",
    options: ["1 hour", "2 hours", "3 hours", "4 hours"],
    correct: [2], multi: false,
    explanation: "The Sprint Retrospective is timeboxed to a maximum of three hours for a one-month Sprint."
  },
  {
    id: 53, topic: "Sprint Retrospective",
    question: "What does the Scrum Team inspect during the Sprint Retrospective? (Select all that apply)",
    options: ["Individuals", "Interactions", "Processes", "Tools", "Definition of Done"],
    correct: [0, 1, 2, 3, 4], multi: true,
    explanation: "The Scrum Team inspects how the last Sprint went with regards to individuals, interactions, processes, tools, and their Definition of Done."
  },
  {
    id: 54, topic: "Sprint Retrospective",
    question: "Where does the Sprint Retrospective occur in the Sprint cycle?",
    options: [
      "Before Sprint Planning",
      "After Sprint Planning but before the Sprint starts",
      "After the Sprint Review and prior to the next Sprint Planning",
      "At any point during the Sprint"
    ],
    correct: [2], multi: false,
    explanation: "The Sprint Retrospective concludes the Sprint. It occurs after the Sprint Review and prior to the next Sprint Planning."
  },
  {
    id: 55, topic: "Sprint Retrospective",
    question: "What is identified in the Sprint Retrospective? (Select all that apply)",
    options: [
      "Most helpful changes to improve effectiveness",
      "Actions to improve the process for the next Sprint",
      "Individual performance ratings",
      "Business value delivered",
      "Improvements that can be implemented anytime"
    ],
    correct: [0, 1], multi: true,
    explanation: "The Scrum Team identifies the most helpful changes to improve its effectiveness and addresses the most impactful improvements for the next Sprint. These improvements are added to the Sprint Backlog."
  },

  // ── PRODUCT BACKLOG ───────────────────────────────────────────────────────
  {
    id: 56, topic: "Product Backlog",
    question: "What is the Product Backlog?",
    options: [
      "A complete list of all tasks for the project",
      "An emergent, ordered list of what is needed to improve the product",
      "A list of bugs and defects to fix",
      "A fixed requirements document"
    ],
    correct: [1], multi: false,
    explanation: "The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team."
  },
  {
    id: 57, topic: "Product Backlog",
    question: "When is the Product Backlog complete?",
    options: [
      "At the end of each Sprint",
      "When the project is finished",
      "Never — it is a living artifact",
      "When the Product Owner approves it"
    ],
    correct: [2], multi: false,
    explanation: "The Product Backlog is never complete. As long as a product exists, its Product Backlog also exists. The backlog evolves as the product and the environment in which it is used evolves."
  },
  {
    id: 58, topic: "Product Backlog",
    question: "What is Product Backlog refinement?",
    options: [
      "The process of removing old items from the backlog",
      "Adding detail, estimates, and order to Product Backlog items",
      "Approving backlog items by the Product Owner",
      "A formal Scrum Event held before Sprint Planning"
    ],
    correct: [1], multi: false,
    explanation: "Product Backlog refinement is the act of breaking down and further defining Product Backlog items into smaller more precise items. This is an ongoing activity to add detail, estimates, and order."
  },
  {
    id: 59, topic: "Product Backlog",
    question: "What is the commitment for the Product Backlog?",
    options: ["Sprint Goal", "Definition of Done", "Product Goal", "Release Plan"],
    correct: [2], multi: false,
    explanation: "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus. The Product Backlog's commitment is the Product Goal."
  },
  {
    id: 60, topic: "Product Backlog",
    question: "Developers who will be doing the work make the final estimates of Product Backlog items. Which statement is TRUE?",
    options: [
      "The Product Owner can override estimates",
      "The Scrum Master provides the estimates",
      "Only the Developers can ultimately do the estimating",
      "External experts provide the estimates"
    ],
    correct: [2], multi: false,
    explanation: "The Developers who will be doing the work are responsible for the sizing. The Product Owner may influence the Developers by helping them understand and select trade-offs, but only the Developers decide on the estimates."
  },

  // ── SPRINT BACKLOG ────────────────────────────────────────────────────────
  {
    id: 61, topic: "Sprint Backlog",
    question: "Who owns the Sprint Backlog?",
    options: ["The Product Owner", "The Scrum Master", "The Developers", "The entire Scrum Team"],
    correct: [2], multi: false,
    explanation: "The Sprint Backlog is a plan by and for the Developers. It is a highly visible, real-time picture of the work that the Developers plan to accomplish during the Sprint."
  },
  {
    id: 62, topic: "Sprint Backlog",
    question: "Can the Sprint Backlog be updated during the Sprint?",
    options: [
      "No, it is fixed at Sprint Planning",
      "Yes, only by the Product Owner",
      "Yes, by the Developers throughout the Sprint",
      "Only during the Daily Scrum"
    ],
    correct: [2], multi: false,
    explanation: "The Sprint Backlog is updated throughout the Sprint as more is learned. It should have enough detail that the team can inspect their progress in the Daily Scrum."
  },
  {
    id: 63, topic: "Sprint Backlog",
    question: "What are the three components of the Sprint Backlog?",
    options: [
      "Product Backlog items, estimates, and owner assignments",
      "Sprint Goal, selected Product Backlog items, and a plan for delivering the Increment",
      "Tasks, stories, and bugs",
      "User stories, acceptance criteria, and test cases"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Backlog is composed of the Sprint Goal (why), the set of Product Backlog items selected for the Sprint (what), as well as an actionable plan for delivering the Increment (how)."
  },

  // ── INCREMENT & DEFINITION OF DONE ───────────────────────────────────────
  {
    id: 64, topic: "Increment & Definition of Done",
    question: "What is an Increment?",
    options: [
      "Any completed task in the Sprint",
      "A concrete stepping stone toward the Product Goal — usable and potentially releasable",
      "The set of all completed stories",
      "A release to production"
    ],
    correct: [1], multi: false,
    explanation: "An Increment is a concrete stepping stone toward the Product Goal. Each Increment is additive to all prior Increments and thoroughly verified, ensuring that all Increments work together. It must be usable."
  },
  {
    id: 65, topic: "Increment & Definition of Done",
    question: "Can multiple Increments be created within a single Sprint?",
    options: ["No, only one Increment per Sprint", "Yes, multiple Increments may be created within a Sprint", "Only if the Sprint is longer than 2 weeks", "Only with Product Owner approval"],
    correct: [1], multi: false,
    explanation: "Multiple Increments may be created within a Sprint. The sum of the Increments is presented at the Sprint Review thus supporting empiricism."
  },
  {
    id: 66, topic: "Increment & Definition of Done",
    question: "What is the Definition of Done?",
    options: [
      "A checklist of acceptance criteria for each story",
      "A formal description of the state of the Increment when it meets the quality measures required for the product",
      "The exit criteria for the Sprint",
      "A list of tasks required to complete a backlog item"
    ],
    correct: [1], multi: false,
    explanation: "The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. The moment a PBI meets the DoD, an Increment is born."
  },
  {
    id: 67, topic: "Increment & Definition of Done",
    question: "If the Definition of Done is not an organizational standard, who creates it?",
    options: ["The Product Owner", "The Scrum Master", "The Scrum Team", "The organization's QA department"],
    correct: [2], multi: false,
    explanation: "If the DoD is not an organizational standard, the Scrum Team must create a Definition of Done appropriate for the product. Multiple Scrum Teams working on the same product must mutually define and comply with the same DoD."
  },
  {
    id: 68, topic: "Increment & Definition of Done",
    question: "What happens to a Product Backlog item that does not meet the Definition of Done?",
    options: [
      "It is released with known issues",
      "It is returned to the Product Backlog and does not become an Increment",
      "The Sprint is extended",
      "The Scrum Master approves an exception"
    ],
    correct: [1], multi: false,
    explanation: "If a PBI does not meet the DoD, it cannot be released or presented at the Sprint Review. It returns to the Product Backlog for future consideration."
  },
  {
    id: 69, topic: "Increment & Definition of Done",
    question: "What is the commitment for the Increment?",
    options: ["Sprint Goal", "Product Goal", "Definition of Done", "Release Plan"],
    correct: [2], multi: false,
    explanation: "Each artifact has a commitment: Product Backlog → Product Goal, Sprint Backlog → Sprint Goal, Increment → Definition of Done."
  },
  {
    id: 70, topic: "Increment & Definition of Done",
    question: "Work cannot be considered part of an Increment unless it meets:",
    options: ["The acceptance criteria of the story", "The Definition of Done", "The Product Owner's approval", "All of the team's tasks"],
    correct: [1], multi: false,
    explanation: "Work cannot be considered part of an Increment unless it meets the Definition of Done. The DoD creates transparency by providing everyone a shared understanding of what work was completed."
  },

  // ── PRODUCT GOAL ──────────────────────────────────────────────────────────
  {
    id: 71, topic: "Product Goal",
    question: "What is the Product Goal?",
    options: [
      "The annual revenue target for the product",
      "The long-term objective for the Scrum Team",
      "The Sprint Goal for the final Sprint",
      "The release date for the next major version"
    ],
    correct: [1], multi: false,
    explanation: "The Product Goal describes a future state of the product which can serve as a target for the Scrum Team to plan against. The Product Goal is the long-term objective for the Scrum Team."
  },
  {
    id: 72, topic: "Product Goal",
    question: "The Scrum Team should fulfill one Product Goal before:",
    options: [
      "Starting the next Sprint",
      "Conducting the Sprint Review",
      "Pursuing the next objective",
      "Releasing the product"
    ],
    correct: [2], multi: false,
    explanation: "The Scrum Team must fulfill (or abandon) one objective (Product Goal) before taking on the next. The Product Goal is in the Product Backlog — the rest of the PB defines 'what' will fulfill the Product Goal."
  },

  // ── SPRINT GOAL ───────────────────────────────────────────────────────────
  {
    id: 73, topic: "Sprint Goal",
    question: "What flexibility does the Sprint Goal provide?",
    options: [
      "Flexibility to change the team composition during the Sprint",
      "Flexibility to change what is built if the Developers learn something",
      "Flexibility to extend the Sprint length",
      "Flexibility to skip Scrum events"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Goal provides flexibility in terms of the exact work needed to achieve it. As Developers work, they keep the Sprint Goal in mind. If the work turns out to be different than expected, they collaborate to negotiate the scope of the Sprint Backlog."
  },
  {
    id: 74, topic: "Sprint Goal",
    question: "What happens if the work turns out to be different than the Developers expected during the Sprint?",
    options: [
      "The Sprint is immediately cancelled",
      "They escalate to the Product Owner for approval",
      "They collaborate with the Product Owner to negotiate the Sprint Backlog scope",
      "The Scrum Master resolves the conflict"
    ],
    correct: [2], multi: false,
    explanation: "If the work turns out to be different than they expected, they collaborate with the Product Owner to negotiate the scope of the Sprint Backlog within the Sprint without affecting the Sprint Goal."
  },

  // ── SCRUM ARTIFACTS & TRANSPARENCY ───────────────────────────────────────
  {
    id: 75, topic: "Scrum Artifacts",
    question: "What is the purpose of Scrum Artifacts?",
    options: [
      "To document the project for auditing purposes",
      "To represent work or value and maximize transparency of key information",
      "To track individual developer performance",
      "To communicate status to management"
    ],
    correct: [1], multi: false,
    explanation: "Scrum's artifacts represent work or value. They are designed to maximize transparency of key information. Thus, everyone inspecting them has the same basis for adaptation."
  },
  {
    id: 76, topic: "Scrum Artifacts",
    question: "What are the three Scrum Artifacts?",
    options: [
      "Sprint Backlog, Release Plan, Product Roadmap",
      "Product Backlog, Sprint Backlog, Increment",
      "User Stories, Epics, Tasks",
      "Sprint Goal, Product Goal, Definition of Done"
    ],
    correct: [1], multi: false,
    explanation: "The three Scrum Artifacts are: Product Backlog, Sprint Backlog, and Increment. Each artifact contains a commitment to ensure it provides information that enhances transparency."
  },
  {
    id: 77, topic: "Scrum Artifacts",
    question: "Each Scrum Artifact has a commitment. Match the artifact to its commitment: (Select all that apply)",
    options: [
      "Product Backlog → Product Goal",
      "Sprint Backlog → Sprint Goal",
      "Increment → Definition of Done",
      "Sprint Backlog → Definition of Done",
      "Product Backlog → Sprint Goal"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "Product Backlog commitment = Product Goal. Sprint Backlog commitment = Sprint Goal. Increment commitment = Definition of Done."
  },

  // ── ADDITIONAL MIXED QUESTIONS ────────────────────────────────────────────
  {
    id: 78, topic: "Scrum Theory",
    question: "Scrum uses an iterative, incremental approach to optimize predictability and control risk. What does 'iterative' mean?",
    options: [
      "Delivering a complete product at the end",
      "Repeating cycles to refine and improve the product",
      "Working on multiple products simultaneously",
      "Following a sequential waterfall process"
    ],
    correct: [1], multi: false,
    explanation: "Iterative means working in repeated cycles (Sprints) where each cycle refines and improves the product based on feedback and learning."
  },
  {
    id: 79, topic: "Scrum Team",
    question: "What should happen if a Scrum Team is too large?",
    options: [
      "The Scrum Master should manage the extra members",
      "Consider reorganizing into multiple cohesive Scrum Teams",
      "Reduce the Sprint length",
      "Add more Product Owners"
    ],
    correct: [1], multi: false,
    explanation: "If Scrum Teams become too large, they should consider reorganizing into multiple cohesive Scrum Teams, each focused on the same product with the same Product Goal, Product Backlog, and Product Owner."
  },
  {
    id: 80, topic: "Sprint Planning",
    question: "Who may be invited to attend Sprint Planning to provide advice?",
    options: [
      "Only Scrum Team members",
      "The Scrum Team may also invite other people to provide advice",
      "Only the Product Owner's stakeholders",
      "Senior management only"
    ],
    correct: [1], multi: false,
    explanation: "Sprint Planning is attended by the entire Scrum Team. It may also invite other people to provide advice. Subject matter experts or technical advisors can attend to help the team plan."
  },
,
  {
    id: 81, topic: "Scrum Theory",
    question: "Which statement best describes the concept of 'Done' in Scrum?",
    options: [
      "It means all planned tasks are completed",
      "It means the Increment meets the Definition of Done and is potentially releasable",
      "It means the Sprint is finished",
      "It means the Product Owner has signed off"
    ],
    correct: [1], multi: false,
    explanation: "Done means the Increment meets the formal Description of the state defined in the Definition of Done. Without a DoD, transparency is impossible and decisions based on inspection become flawed."
  },
  {
    id: 82, topic: "Scrum Theory",
    question: "What is the meaning of 'empiricism' in Scrum?",
    options: [
      "Making decisions based on detailed upfront planning",
      "Knowledge comes from experience and decisions are based on what is known",
      "Following best practices from similar projects",
      "Using statistical models to predict outcomes"
    ],
    correct: [1], multi: false,
    explanation: "Empiricism asserts that knowledge comes from experience and making decisions based on what is known. Scrum employs an iterative, incremental approach to optimize predictability and control risk."
  },
  {
    id: 83, topic: "Scrum Theory",
    question: "A Scrum Team finds that their process is not producing the expected results. According to the Scrum pillars, what should they do?",
    options: [
      "Wait until the end of the project to evaluate",
      "Inspect the situation and adapt their process as soon as possible",
      "Add more developers to increase speed",
      "Ask the Product Owner to reprioritize the backlog"
    ],
    correct: [1], multi: false,
    explanation: "Inspection without Adaptation is pointless. When inspection reveals deviation, an adjustment must be made as soon as possible to minimize further deviation."
  },
  {
    id: 84, topic: "Scrum Values",
    question: "A Developer disagrees with the Product Owner's decision about priority. The Developer believes another approach would deliver more value. What should they do?",
    options: [
      "Ignore the decision and implement their preferred approach",
      "Raise the concern with courage and openness — share their perspective with the Product Owner",
      "Escalate to the Scrum Master to override the PO",
      "Stay quiet and comply without voicing the concern"
    ],
    correct: [1], multi: false,
    explanation: "Scrum Values of Courage and Openness require team members to voice their perspectives honestly. The Developer should transparently share their reasoning with the Product Owner — who ultimately makes the decision."
  },
  {
    id: 85, topic: "Scrum Team",
    question: "The Developers tell the Scrum Master that one team member is not contributing enough and is slowing the team down. What should the Scrum Master do?",
    options: [
      "Remove the team member immediately",
      "Report the team member to management",
      "Coach the team to address the issue as a self-managing team and have a direct conversation with the team member",
      "Assign the team member easier tasks"
    ],
    correct: [2], multi: false,
    explanation: "Scrum Teams are self-managing. The SM should coach the team to resolve interpersonal issues internally first. The SM may facilitate the conversation but should not take a management role in resolving it."
  },
  {
    id: 86, topic: "Scrum Team",
    question: "What does 'cross-functional' mean for a Scrum Team?",
    options: [
      "Team members can work across multiple teams",
      "The team has all the skills needed to create value each Sprint without external dependencies",
      "Team members rotate roles every Sprint",
      "The team works across multiple departments"
    ],
    correct: [1], multi: false,
    explanation: "Cross-functional means the Scrum Team has all the skills necessary to create value each Sprint — without depending on people outside the team. This reduces dependencies and increases the team's ability to deliver."
  },
  {
    id: 87, topic: "Product Owner",
    question: "A new stakeholder wants to directly update the Product Backlog with their requirements. What should happen?",
    options: [
      "They can update the backlog directly",
      "They should work through the Product Owner",
      "The Scrum Master should add the items",
      "The Developers decide whether to add them"
    ],
    correct: [1], multi: false,
    explanation: "The Product Owner is the sole person responsible for managing the Product Backlog. Those wishing to change the Product Backlog can do so by trying to convince the Product Owner."
  },
  {
    id: 88, topic: "Product Owner",
    question: "What is the Product Owner's role during the Sprint?",
    options: [
      "To assign tasks to Developers daily",
      "To be available to clarify and answer questions about Product Backlog items",
      "To attend all technical meetings",
      "To measure individual developer performance"
    ],
    correct: [1], multi: false,
    explanation: "The Product Owner should be available to the Scrum Team during the Sprint to clarify questions about Product Backlog items and to help the team understand the product vision."
  },
  {
    id: 89, topic: "Scrum Master",
    question: "What does it mean for the Scrum Master to 'cause the removal of impediments'?",
    options: [
      "The SM personally fixes all technical problems",
      "The SM helps the team remove obstacles — sometimes directly, sometimes by coaching the team or escalating",
      "The SM documents impediments and sends reports",
      "The SM assigns impediments to individual developers"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Master helps remove impediments in various ways — sometimes directly resolving them, sometimes coaching the team to handle them, and sometimes escalating organizational barriers to where they can be resolved."
  },
  {
    id: 90, topic: "Scrum Master",
    question: "The organization asks the Scrum Master to track and report individual developer performance. What should the SM do?",
    options: [
      "Comply — management needs this information",
      "Explain that individual performance tracking undermines team self-management and suggest team-level transparency instead",
      "Ask developers to self-report their performance",
      "Create the reports but keep them confidential"
    ],
    correct: [1], multi: false,
    explanation: "Individual performance tracking is antithetical to Scrum. It damages psychological safety, creates competition within the team, and undermines self-management. The SM should coach toward team-level and outcome-based metrics."
  },
  {
    id: 91, topic: "Sprint",
    question: "What consistency do Sprints create?",
    options: [
      "Consistent feature delivery",
      "Consistency in process, inspection, and adaptation",
      "Consistent team velocity",
      "Consistent stakeholder satisfaction"
    ],
    correct: [1], multi: false,
    explanation: "Sprints are fixed-length events to create consistency. A consistent rhythm enables empiricism — regular inspection of the Increment and adaptation of the Product Backlog and process."
  },
  {
    id: 92, topic: "Sprint",
    question: "Can scope change during a Sprint?",
    options: [
      "No, scope is completely fixed once Sprint Planning ends",
      "Yes, anyone can change scope at any time",
      "Scope may be clarified and renegotiated between PO and Developers without endangering the Sprint Goal",
      "Only the Scrum Master can approve scope changes"
    ],
    correct: [2], multi: false,
    explanation: "During a Sprint, scope may be clarified and renegotiated with the Product Owner as more is learned. However, no changes should be made that would endanger the Sprint Goal."
  },
  {
    id: 93, topic: "Sprint Planning",
    question: "What is the minimum input required for Sprint Planning?",
    options: [
      "A completed velocity calculation",
      "The Product Backlog, latest Increment, projected team capacity, and past performance",
      "The release roadmap and stakeholder requests",
      "The Definition of Done and acceptance criteria"
    ],
    correct: [1], multi: false,
    explanation: "Sprint Planning requires as input: the Product Backlog, the latest product Increment, projected capacity of the Developers during the Sprint, and past performance of the Developers."
  },
  {
    id: 94, topic: "Sprint Planning",
    question: "Who is responsible for ensuring Sprint Planning happens?",
    options: ["The Product Owner", "The Scrum Master", "The Developers", "Senior Management"],
    correct: [1], multi: false,
    explanation: "The Scrum Master ensures that all Scrum Events take place and are within the timebox. This includes Sprint Planning."
  },
  {
    id: 95, topic: "Daily Scrum",
    question: "What does it mean that the Daily Scrum is held 'at the same time and place'?",
    options: [
      "It must be at 9 AM",
      "Consistency reduces complexity and creates a shared habit",
      "It must be in a specific room",
      "It is a regulatory requirement"
    ],
    correct: [1], multi: false,
    explanation: "Holding the Daily Scrum at the same time and place every working day reduces complexity and friction — it's simply a consistent practice that the team builds as a habit."
  },
  {
    id: 96, topic: "Daily Scrum",
    question: "If a Developer is sick and misses the Daily Scrum, what happens?",
    options: [
      "The Daily Scrum is cancelled",
      "The Daily Scrum happens without them",
      "The Scrum Master covers for them",
      "The Sprint is put on hold"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is for the Developers who are present. One missing Developer does not stop the event. The team proceeds with the members who are available."
  },
  {
    id: 97, topic: "Sprint Review",
    question: "Who presents at the Sprint Review?",
    options: [
      "Only the Scrum Master",
      "Only the Developers",
      "The entire Scrum Team presents the results of their work",
      "The Product Owner presents to stakeholders"
    ],
    correct: [2], multi: false,
    explanation: "The entire Scrum Team presents the results of their work to key stakeholders and progress toward the Product Goal is discussed. It is a team effort, not a single person's presentation."
  },
  {
    id: 98, topic: "Sprint Review",
    question: "Who decides what is 'Done' and therefore presentable at the Sprint Review?",
    options: [
      "The Product Owner decides at the Sprint Review",
      "The Definition of Done determines what is Done — not the Product Owner's approval",
      "Stakeholders decide during the review",
      "The Scrum Master determines Done status"
    ],
    correct: [1], multi: false,
    explanation: "The Definition of Done is the objective standard. A PBI is Done when it meets the DoD. The Product Owner does not 'accept' work at the Sprint Review — Done is determined by the DoD, not by approval."
  },
  {
    id: 99, topic: "Sprint Retrospective",
    question: "An improvement identified in the Retrospective is highly valuable. How should it be tracked?",
    options: [
      "In a separate improvement register",
      "It can be added to the Sprint Backlog for the next Sprint",
      "In the Product Backlog",
      "In a management report"
    ],
    correct: [1], multi: false,
    explanation: "The most impactful improvements for the Scrum Team should be addressed as soon as possible and may even be added to the Sprint Backlog for the next Sprint."
  },
  {
    id: 100, topic: "Sprint Retrospective",
    question: "When should the Scrum Team apply the Sprint Retrospective improvements?",
    options: [
      "In the quarter following the Retrospective",
      "In the next Sprint",
      "Only when approved by management",
      "At the next Retrospective"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Team plans to implement improvements to its way of working in the next Sprint. The Scrum Master also coaches the team to improve within the Scrum process framework."
  },
  {
    id: 101, topic: "Product Backlog",
    question: "What attributes do Product Backlog items typically have? (Select all that apply)",
    options: ["Description", "Order", "Estimate", "Acceptance criteria", "Value"],
    correct: [0, 1, 2, 4], multi: true,
    explanation: "Product Backlog items have attributes: description, order (priority), estimate, and value. Acceptance criteria are common in practice but not specifically mandated in the Scrum Guide."
  },
  {
    id: 102, topic: "Product Backlog",
    question: "Who is responsible for Product Backlog refinement?",
    options: [
      "The Product Owner alone",
      "The Scrum Master",
      "The Product Owner and Developers together",
      "External business analysts"
    ],
    correct: [2], multi: false,
    explanation: "Product Backlog refinement is done by the Product Owner and Developers together. The PO provides clarity on value and priority; Developers provide technical insight and estimates."
  },
  {
    id: 103, topic: "Product Backlog",
    question: "How much time should a Scrum Team spend on Product Backlog refinement?",
    options: [
      "No more than 10% of the Developers' capacity",
      "1 full day per Sprint",
      "As much as needed",
      "Only during Sprint Planning"
    ],
    correct: [0], multi: false,
    explanation: "The Scrum Team decides how and when refinement is done. This activity usually consumes no more than 10% of the capacity of the Developers."
  },
  {
    id: 104, topic: "Sprint Backlog",
    question: "Can Developers add work to the Sprint Backlog during the Sprint?",
    options: [
      "No, only work from Sprint Planning can be in the Sprint Backlog",
      "Yes, Developers may add items as they discover more about the work needed to achieve the Sprint Goal",
      "Only with the Product Owner's approval",
      "Only with Scrum Master approval"
    ],
    correct: [1], multi: false,
    explanation: "As Developers learn more during the Sprint, they may add tasks or items to the Sprint Backlog. This is part of the adaptive nature of Scrum — the Sprint Backlog is updated throughout the Sprint."
  },
  {
    id: 105, topic: "Increment & Definition of Done",
    question: "Is it mandatory to release the Increment at the end of every Sprint?",
    options: [
      "Yes, every Increment must be released",
      "No, the Increment must be usable, but the decision to release is made by the Product Owner",
      "Yes, but only to internal users",
      "No, release happens only when the product is complete"
    ],
    correct: [1], multi: false,
    explanation: "The Increment must meet the DoD and be usable, but the decision to release (deploy to users) is made by the Product Owner. Multiple Increments may exist before a release decision is made."
  },
  {
    id: 106, topic: "Increment & Definition of Done",
    question: "When can a Product Backlog item be released?",
    options: [
      "After the Product Owner approves it",
      "After it meets the Definition of Done",
      "After all Sprint Backlog items are done",
      "After the Sprint Review"
    ],
    correct: [1], multi: false,
    explanation: "A Product Backlog item is Done — and can be part of a releasable Increment — when it meets the Definition of Done. Release decisions are then up to the Product Owner."
  },
  {
    id: 107, topic: "Scrum Theory",
    question: "What is the key benefit of using timeboxes in Scrum?",
    options: [
      "They ensure all work gets completed",
      "They limit the amount of time spent and force decisions within a defined window",
      "They replace the need for planning",
      "They guarantee predictable velocity"
    ],
    correct: [1], multi: false,
    explanation: "Timeboxes limit the amount of time devoted to an event. They create urgency and force decisions — preventing infinite discussion or planning. All Scrum events are timeboxed."
  },
  {
    id: 108, topic: "Sprint Planning",
    question: "The Sprint Goal is created during which event?",
    options: ["Sprint Retrospective", "Sprint Review", "Sprint Planning", "Daily Scrum"],
    correct: [2], multi: false,
    explanation: "The Sprint Goal is crafted during Sprint Planning. It is the single objective for the Sprint to which the Scrum Team commits."
  },
  {
    id: 109, topic: "Scrum Team",
    question: "A Scrum Team has an external dependency on a vendor that keeps delaying the team. What should the Scrum Master do?",
    options: [
      "Accept the delay and adjust the Sprint Backlog",
      "Make the impediment visible and work to resolve the dependency at the organizational level",
      "Ask the Developers to work around the vendor",
      "Extend the Sprint to accommodate the delay"
    ],
    correct: [1], multi: false,
    explanation: "External dependencies are organizational impediments. The SM must make them transparent and work to resolve them — potentially involving stakeholders, procurement, or leadership — not just work around them."
  },
  {
    id: 110, topic: "Scrum Master",
    question: "The Scrum Team has been asked to provide detailed technical specifications before starting development. This is not required by Scrum. What should the SM do?",
    options: [
      "Comply with the request",
      "Refuse entirely and cite the Scrum Guide",
      "Coach the organization on Scrum principles and how just-enough upfront design supports agility",
      "Ask the Developers to create the specs secretly"
    ],
    correct: [2], multi: false,
    explanation: "The SM should coach the organization on how Scrum works — just-enough design, emergent architecture, and iterative delivery. The goal is to help the organization understand the tradeoffs, not just refuse requests."
  },
  {
    id: 111, topic: "Sprint",
    question: "What is the relationship between Sprints and the product?",
    options: [
      "Each Sprint produces a final product version",
      "Sprints are containers for all events and activities needed to build a product",
      "Sprints are optional if the team is experienced",
      "The product is built after all Sprints are complete"
    ],
    correct: [1], multi: false,
    explanation: "Each Sprint is a container that encompasses Sprint Planning, Daily Scrums, Sprint Review, Sprint Retrospective, and the development work. Everything that happens to build the product occurs within Sprints."
  },
  {
    id: 112, topic: "Scrum Theory",
    question: "Scrum is intentionally incomplete. What does this mean?",
    options: [
      "Scrum is a work in progress and not ready for use",
      "Scrum only defines the minimal elements necessary; teams add complementary practices as needed",
      "Teams don't need to follow all Scrum rules",
      "The Scrum Guide will be completed in future editions"
    ],
    correct: [1], multi: false,
    explanation: "Scrum is intentionally incomplete, only defining the parts required to implement Scrum theory. Rather than providing detailed instructions, Scrum is built upon the collective intelligence of the people using it and complementary practices."
  },
  {
    id: 113, topic: "Scrum Values",
    question: "What does 'Commitment' mean in the context of the Scrum Team?",
    options: [
      "Committing to complete all Sprint Backlog items",
      "Committing to their goals and supporting each other",
      "Committing to a project deadline",
      "Committing to a release date"
    ],
    correct: [1], multi: false,
    explanation: "Commitment in Scrum means the Scrum Team commits to their goals — including the Sprint Goal and Product Goal — and commits to supporting each other. It does not mean committing to completing every item in the Sprint Backlog."
  },
  {
    id: 114, topic: "Daily Scrum",
    question: "Can the Daily Scrum be held outside of working hours?",
    options: [
      "No, it must be during business hours",
      "Yes, the Developers decide when and how it is held",
      "Only with Scrum Master approval",
      "Only for distributed teams"
    ],
    correct: [1], multi: false,
    explanation: "The Developers own the Daily Scrum. They decide the structure, time, and place. As long as it happens daily and focuses on progress toward the Sprint Goal, the specifics are up to the team."
  },
  {
    id: 115, topic: "Sprint Review",
    question: "What input does the Sprint Review provide for Sprint Planning?",
    options: [
      "A formal list of approved features",
      "A revised Product Backlog that defines the probable items for the next Sprint",
      "A completed velocity calculation",
      "A list of bugs to fix"
    ],
    correct: [1], multi: false,
    explanation: "The output of the Sprint Review is a revised Product Backlog. This revised backlog serves as the primary input for the next Sprint Planning."
  },
  {
    id: 116, topic: "Product Goal",
    question: "Where is the Product Goal described?",
    options: ["In the Sprint Backlog", "In the Product Backlog", "In the Sprint Goal statement", "In the project charter"],
    correct: [1], multi: false,
    explanation: "The Product Goal is in the Product Backlog. The rest of the Product Backlog defines what will fulfill the Product Goal. The Product Goal is the commitment for the Product Backlog artifact."
  },
  {
    id: 117, topic: "Sprint Goal",
    question: "What is unique about the Sprint Goal compared to individual Sprint Backlog items?",
    options: [
      "It is more specific than individual items",
      "It is the single objective for the Sprint — providing coherence and focus even if items need to change",
      "It is created by the Product Owner alone",
      "It can be changed at any time during the Sprint"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Goal is the single objective for the Sprint. While specific PBIs may change during the Sprint, the Sprint Goal provides coherent focus. Developers keep it in mind and negotiate scope around it."
  },
  {
    id: 118, topic: "Scrum Artifacts",
    question: "What is the purpose of the 'commitment' attached to each Scrum Artifact?",
    options: [
      "To provide targets for management",
      "To enhance transparency and provide focus against which progress can be measured",
      "To create legally binding agreements",
      "To document decisions made in Sprint Planning"
    ],
    correct: [1], multi: false,
    explanation: "Each artifact contains a commitment to ensure it provides information that enhances transparency and focus. Against this transparency, progress can be measured and adaptations made."
  },
  {
    id: 119, topic: "Scrum Team",
    question: "Within a Scrum Team, are there sub-teams or hierarchies?",
    options: [
      "Yes, senior developers lead junior developers",
      "Yes, the Product Owner leads the team",
      "No, there are no sub-teams or hierarchies within a Scrum Team",
      "Yes, there is a technical lead role"
    ],
    correct: [2], multi: false,
    explanation: "Within a Scrum Team, there are no sub-teams or hierarchies. It is a cohesive unit of professionals focused on one objective at a time — the Product Goal."
  },
  {
    id: 120, topic: "Sprint Retrospective",
    question: "The Sprint Retrospective is the last event before which other event?",
    options: ["Sprint Review", "Daily Scrum", "Next Sprint Planning", "Product Backlog Refinement"],
    correct: [2], multi: false,
    explanation: "The Sprint Retrospective concludes the Sprint. The next Sprint begins with Sprint Planning. The order is: Sprint Planning → Daily Scrums → Sprint Review → Sprint Retrospective → (next) Sprint Planning."
  },
  {
    id: 121, topic: "Scrum Theory",
    question: "What type of problems is Scrum best suited for?",
    options: [
      "Simple, well-defined problems with clear solutions",
      "Complex adaptive problems where requirements emerge over time",
      "Complicated technical problems requiring specialized expertise",
      "Routine operational tasks requiring predictable execution"
    ],
    correct: [1], multi: false,
    explanation: "Scrum is a framework designed for complex adaptive problems — those where the solution is not known upfront and requirements emerge through iterative delivery and feedback. It uses empiricism to navigate complexity."
  },
  {
    id: 122, topic: "Scrum Master",
    question: "True or False: The Scrum Master is responsible for the team meeting its Sprint commitments.",
    options: [
      "True — the SM is accountable for delivery",
      "False — the SM is accountable for the team's effectiveness, not for specific delivery commitments",
      "True — the SM coordinates work delivery",
      "False — no one is accountable for Sprint delivery"
    ],
    correct: [1], multi: false,
    explanation: "The SM is accountable for the team's effectiveness, not for what the team delivers. The Developers are accountable for their Sprint work. The SM enables effectiveness but does not manage delivery."
  },
  {
    id: 123, topic: "Increment & Definition of Done",
    question: "If an organization already has a Definition of Done, what must the Scrum Team do?",
    options: [
      "Create their own more specific Definition of Done",
      "Comply with it as a minimum and expand it as appropriate",
      "Ignore it and use their own",
      "Negotiate a separate definition with the Product Owner"
    ],
    correct: [1], multi: false,
    explanation: "If the DoD is an organizational standard, all Scrum Teams must follow it as a minimum. If not, the Scrum Team must create its own DoD appropriate for the product."
  },
  {
    id: 124, topic: "Product Owner",
    question: "Can the Product Owner delegate Product Backlog management activities to the Developers?",
    options: [
      "No, only the PO can manage the Product Backlog",
      "Yes, but the Product Owner remains accountable",
      "Only with Scrum Master approval",
      "Yes, and the PO is then no longer accountable"
    ],
    correct: [1], multi: false,
    explanation: "The Product Owner may delegate tasks related to backlog management to the Developers, but the Product Owner remains accountable for the outcomes of those decisions."
  },
  {
    id: 125, topic: "Sprint",
    question: "What should a Scrum Team do if they complete all Sprint Backlog items early in the Sprint?",
    options: [
      "End the Sprint early",
      "Wait until the Sprint ends",
      "Pull in additional Product Backlog items in collaboration with the Product Owner",
      "Start the next Sprint Planning"
    ],
    correct: [2], multi: false,
    explanation: "If work is completed before the Sprint ends, the Developers work with the Product Owner to pull in additional items from the Product Backlog. The Sprint does not end early — it runs its full duration."
  },
  {
    id: 126, topic: "Scrum Events",
    question: "How do Scrum events create regularity and reduce the need for other meetings?",
    options: [
      "By replacing all organizational meetings",
      "By providing structured opportunities for inspection and adaptation at the right cadence",
      "By creating meeting-free weeks",
      "By automating communication"
    ],
    correct: [1], multi: false,
    explanation: "Scrum events are designed to provoke inspection and adaptation at the right cadence. This regularity reduces the need for other meetings — the Daily Scrum, for example, eliminates the need for separate 'catch-up' conversations."
  },
  {
    id: 127, topic: "Scrum Master",
    question: "How does the Scrum Master help ensure transparency within the team?",
    options: [
      "By writing status reports for management",
      "By coaching the team to make work, impediments, and progress visible through Scrum artifacts and events",
      "By monitoring individual developer activity",
      "By attending all technical meetings"
    ],
    correct: [1], multi: false,
    explanation: "The SM helps ensure transparency by coaching the team to maintain Scrum artifacts accurately and use events effectively. Transparent artifacts enable effective inspection and adaptation."
  },
  {
    id: 128, topic: "Product Backlog",
    question: "Items at the top of the Product Backlog are generally:",
    options: [
      "Oldest items added to the backlog",
      "More detailed, clearer, and smaller than lower items",
      "Technical debt items",
      "Bug fixes and defects"
    ],
    correct: [1], multi: false,
    explanation: "Higher-ordered Product Backlog items are usually clearer and more detailed than lower-ordered items. Refinement ensures that top items are small enough to complete in a Sprint."
  },
  {
    id: 129, topic: "Sprint Planning",
    question: "The Sprint Goal must be finalized by the end of:",
    options: ["The first day of the Sprint", "Sprint Planning", "The second Daily Scrum", "The Sprint Review"],
    correct: [1], multi: false,
    explanation: "The Sprint Goal is crafted and the Scrum Team commits to it during Sprint Planning. The Sprint Goal must be finalized prior to the end of Sprint Planning."
  },
  {
    id: 130, topic: "Scrum Theory",
    question: "Which of the following is NOT a formal Scrum Event?",
    options: ["Sprint Planning", "Sprint Review", "Product Backlog Refinement", "Sprint Retrospective"],
    correct: [2], multi: false,
    explanation: "Product Backlog Refinement is an ongoing collaborative activity, not a formal Scrum Event. The four formal events are: Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective (plus the Sprint itself as a container event)."
  },
  {
    id: 131, topic: "Increment & Definition of Done",
    question: "What is meant by 'technical debt' in Scrum context?",
    options: [
      "Money owed for technical tools and licenses",
      "The accumulation of substandard work that doesn't meet the DoD, creating future rework",
      "Features planned but not yet developed",
      "The cost of technology infrastructure"
    ],
    correct: [1], multi: false,
    explanation: "Technical debt accumulates when work is released without meeting the DoD. Having a strong Definition of Done and adhering to it is the primary Scrum mechanism for preventing technical debt."
  },
  {
    id: 132, topic: "Scrum Master",
    question: "A new Scrum Master joins a team that has been doing Scrum for a year. The team uses many non-Scrum practices. What should the SM do?",
    options: [
      "Immediately enforce strict Scrum rules",
      "Observe, understand the team's context, and gradually coach toward better Scrum implementation",
      "Replace all non-Scrum practices immediately",
      "Report the team's non-compliance to management"
    ],
    correct: [1], multi: false,
    explanation: "Effective change requires understanding context first. A new SM should observe, build trust, and then incrementally coach improvements. Forcing immediate change without understanding risks losing the team's trust and engagement."
  },
  {
    id: 133, topic: "Sprint Retrospective",
    question: "The Sprint Retrospective is the Scrum Team's opportunity to inspect itself. Which of the following is a key outcome?",
    options: [
      "A list of bugs to fix next Sprint",
      "An actionable improvement plan for the next Sprint",
      "Updated velocity calculations",
      "Stakeholder satisfaction scores"
    ],
    correct: [1], multi: false,
    explanation: "The key outcome of the Sprint Retrospective is a concrete improvement plan: specific changes the team will implement in the next Sprint to improve quality and effectiveness."
  },
  {
    id: 134, topic: "Scrum Team",
    question: "A Scrum Team member receives a request from someone outside the team to do work not in the Sprint Backlog. What should they do?",
    options: [
      "Do the work if it doesn't take too long",
      "Direct the person to the Product Owner",
      "Immediately add the work to the Sprint Backlog",
      "Ignore the request"
    ],
    correct: [1], multi: false,
    explanation: "All work flows through the Product Owner and the Product Backlog. The team member should direct external requests to the Product Owner, who evaluates and prioritizes appropriately."
  },
  {
    id: 135, topic: "Scrum Values",
    question: "How do the Scrum Values relate to the pillars of empiricism?",
    options: [
      "They are completely separate concepts",
      "Embodying the Scrum Values builds the trust that makes the three pillars of empiricism come to life",
      "The pillars are more important than the values",
      "The values replace the need for the pillars"
    ],
    correct: [1], multi: false,
    explanation: "When the Scrum Team embodies and lives the five Scrum Values, the pillars of empiricism (Transparency, Inspection, Adaptation) come to life and build trust for everyone."
  },
  {
    id: 136, topic: "Sprint Review",
    question: "What is the focus of the Sprint Review?",
    options: [
      "Looking back at the Sprint process",
      "Inspecting the Increment and adapting the Product Backlog based on new insights",
      "Reviewing individual performance",
      "Planning the release schedule"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Review focuses on the product — what was built and what should be built next. The team and stakeholders inspect the Increment and collaborate on the Product Backlog going forward."
  },
  {
    id: 137, topic: "Product Backlog",
    question: "The Product Backlog is the single source of work for the Scrum Team. What does this mean?",
    options: [
      "All work — features, bugs, improvements, and knowledge acquisition — comes from the Product Backlog",
      "Only feature development comes from the Product Backlog",
      "The Product Backlog replaces all project documentation",
      "Team members cannot add work discovered during the Sprint"
    ],
    correct: [0], multi: false,
    explanation: "The Product Backlog is the single source of work undertaken by the Scrum Team. Everything — features, fixes, improvements, technical work — should be visible in the Product Backlog."
  },
  {
    id: 138, topic: "Scrum Master",
    question: "A Scrum Team member is missing Sprint events. What is the Scrum Master's first action?",
    options: [
      "Report them to management",
      "Have a private, empathetic conversation to understand the reasons",
      "Reassign their work to other team members",
      "Add attendance tracking to the Sprint Backlog"
    ],
    correct: [1], multi: false,
    explanation: "The SM's first response should be to understand — have a coaching conversation to find out why. Is it competing priorities? Disengagement? External pressure? Understanding root cause enables an effective response."
  },
  {
    id: 139, topic: "Sprint",
    question: "Should the length of Sprints vary from Sprint to Sprint?",
    options: [
      "Yes, based on team capacity",
      "Yes, based on the complexity of work",
      "No, Sprint length should be consistent to create predictability",
      "Only if approved by the Product Owner"
    ],
    correct: [2], multi: false,
    explanation: "Sprint length should be consistent. Consistent Sprint length creates a predictable cadence for the team, stakeholders, and the organization. Variable Sprint length undermines planning and empiricism."
  },
  {
    id: 140, topic: "Daily Scrum",
    question: "What should happen with issues that cannot be resolved in the Daily Scrum's 15 minutes?",
    options: [
      "Extend the Daily Scrum until resolved",
      "Table them and address after the Daily Scrum with the relevant people",
      "Add them to the Product Backlog",
      "Escalate to the Scrum Master immediately"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is not a problem-solving session. Detailed discussions should happen after the event with the specific people who need to be involved, not with the entire team."
  },
  {
    id: 141, topic: "Scrum Team",
    question: "What is the Scrum Team's responsibility regarding quality?",
    options: [
      "Quality is only the QA team's responsibility",
      "All Scrum Team members are collectively responsible for quality through the DoD",
      "Only senior developers are responsible for quality",
      "The Product Owner approves quality"
    ],
    correct: [1], multi: false,
    explanation: "Quality is a shared responsibility. The Scrum Team collectively maintains quality by adhering to the Definition of Done. Developers instill quality; the PO ensures the right product is being built."
  },
  {
    id: 142, topic: "Scrum Events",
    question: "What is true about all Scrum Events?",
    options: [
      "They are all mandatory and timeboxed",
      "They can be skipped if the team agrees",
      "They must be attended by all stakeholders",
      "They require written minutes"
    ],
    correct: [0], multi: false,
    explanation: "All Scrum Events are mandatory and timeboxed. Prescribed events are used in Scrum to create regularity and to minimize the need for meetings not defined in Scrum."
  },
  {
    id: 143, topic: "Product Owner",
    question: "During Sprint Planning, the Product Owner is asked to clarify a Product Backlog item. They are unavailable. What should the team do?",
    options: [
      "Cancel Sprint Planning and reschedule",
      "Use their best understanding of the item and confirm with the PO as soon as possible",
      "Select a different item instead",
      "Ask management to decide"
    ],
    correct: [1], multi: false,
    explanation: "The team should use their best understanding and flag clarification needed. The PO should be available during Sprint Planning, but if temporarily unavailable, the team can proceed with what they know and clarify quickly."
  },
  {
    id: 144, topic: "Increment & Definition of Done",
    question: "Can a Definition of Done be changed?",
    options: [
      "No, once agreed it cannot be changed",
      "Yes, the Scrum Team can update the DoD — typically in the Retrospective — to make it more stringent",
      "Only the Product Owner can change it",
      "Only with organizational approval"
    ],
    correct: [1], multi: false,
    explanation: "The DoD can evolve. The Scrum Team can expand the DoD over time to include more rigorous criteria. If the organization has a standard, the team can use that as a minimum and add to it."
  },
  {
    id: 145, topic: "Scrum Theory",
    question: "In complex environments, what does Scrum's iterative approach help manage?",
    options: [
      "The budget and timeline",
      "Unpredictability through frequent inspection and adaptation",
      "Team communication challenges",
      "Technical debt accumulation"
    ],
    correct: [1], multi: false,
    explanation: "Scrum's iterative approach uses frequent inspection and adaptation to navigate unpredictability in complex environments. Rather than predicting everything upfront, it responds to what is learned each Sprint."
  },
  {
    id: 146, topic: "Scrum Master",
    question: "How does the Scrum Master address team conflicts?",
    options: [
      "Resolves conflicts by making decisions for the team",
      "Avoids involvement — teams should resolve conflicts themselves",
      "Facilitates conflict resolution, coaching team members toward constructive dialogue",
      "Escalates all conflicts to management"
    ],
    correct: [2], multi: false,
    explanation: "The SM facilitates conflict resolution using coaching skills. The goal is for the team to develop their own conflict resolution capabilities — not dependency on the SM. The SM creates safe space for dialogue."
  },
  {
    id: 147, topic: "Sprint Retrospective",
    question: "Who facilitates the Sprint Retrospective?",
    options: [
      "Always the Scrum Master",
      "The Product Owner",
      "The most senior Developer",
      "Typically the Scrum Master, but the team can facilitate it themselves"
    ],
    correct: [3], multi: false,
    explanation: "The Scrum Master typically facilitates the Sprint Retrospective, but as the team matures, they can facilitate it themselves. The SM participates as a peer, not just as a facilitator."
  },
  {
    id: 148, topic: "Sprint Planning",
    question: "The Sprint Goal describes the 'why' of the Sprint. What does this mean?",
    options: [
      "Why the Sprint is taking place at all",
      "Why the chosen Product Backlog items will be valuable to stakeholders in this Sprint",
      "Why the team chose specific technical solutions",
      "Why the Sprint has its specific length"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Goal articulates why the Sprint is valuable — what value will be delivered and to whom. It answers 'Why is this Sprint valuable?' from the stakeholder/business perspective."
  },
  {
    id: 149, topic: "Product Backlog",
    question: "Who is responsible for ensuring the Product Backlog is visible and transparent?",
    options: ["Scrum Master", "Product Owner", "Developers", "All stakeholders"],
    correct: [1], multi: false,
    explanation: "The Product Owner is accountable for the Product Backlog, including ensuring that it is transparent, visible, and understood. This transparency is essential for effective collaboration."
  },
  {
    id: 150, topic: "Scrum Team",
    question: "Multiple Scrum Teams working on the same product should have:",
    options: [
      "Separate Product Owners for each team",
      "The same Product Owner, Product Goal, and Product Backlog",
      "Separate Definitions of Done",
      "Different Sprint lengths to avoid conflicts"
    ],
    correct: [1], multi: false,
    explanation: "Multiple Scrum Teams working on the same product must use the same Product Backlog, work toward the same Product Goal, and have the same Product Owner."
  },
  {
    id: 151, topic: "Increment & Definition of Done",
    question: "What is the purpose of the Definition of Done regarding transparency?",
    options: [
      "It shows management what was completed",
      "It gives everyone a shared understanding of what 'work was completed' means as part of the Increment",
      "It defines the sprint acceptance criteria",
      "It creates a checklist for the QA team"
    ],
    correct: [1], multi: false,
    explanation: "The DoD creates transparency by giving everyone — developers, PO, stakeholders — a shared understanding of what it means for work to be complete. Without this shared understanding, transparency breaks down."
  },
  {
    id: 152, topic: "Sprint",
    question: "What happens to incomplete Sprint Backlog items at the end of a Sprint?",
    options: [
      "They are automatically carried over to the next Sprint",
      "They are re-estimated and returned to the Product Backlog",
      "The Sprint is extended until they are done",
      "They are automatically deleted"
    ],
    correct: [1], multi: false,
    explanation: "Incomplete Sprint Backlog items are returned to the Product Backlog. The Product Owner decides if and when to schedule them in a future Sprint."
  },
  {
    id: 153, topic: "Scrum Values",
    question: "Which Scrum Value is most directly violated when a team member hides a mistake to avoid criticism?",
    options: ["Commitment", "Openness", "Respect", "Courage"],
    correct: [1], multi: false,
    explanation: "Openness requires the Scrum Team to be transparent about their work and challenges. Hiding mistakes violates openness — which in turn undermines transparency, a key pillar of empiricism."
  },
  {
    id: 154, topic: "Scrum Master",
    question: "The Scrum Master's role is best described as:",
    options: [
      "A project manager who ensures delivery commitments are met",
      "A servant leader who helps everyone understand and enact Scrum",
      "A technical lead who guides architectural decisions",
      "An administrator who schedules and documents meetings"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Master serves as a servant leader — putting the needs of the team and organization first to help everyone understand and effectively use Scrum."
  },
  {
    id: 155, topic: "Sprint Review",
    question: "The Scrum Team has worked on 10 Product Backlog items during the Sprint. At Sprint Review, only 7 meet the Definition of Done. What should be presented?",
    options: [
      "All 10 items with notes on what's incomplete",
      "Only the 7 items that meet the Definition of Done",
      "None — the Sprint is a failure",
      "All 10 items after getting a waiver from the Product Owner"
    ],
    correct: [1], multi: false,
    explanation: "Only work that meets the Definition of Done is presented at the Sprint Review. Incomplete items are not part of the Increment and are not presented — they return to the Product Backlog."
  },
  {
    id: 156, topic: "Product Owner",
    question: "The Product Owner needs to balance multiple stakeholder requests. What is the most effective approach?",
    options: [
      "Implement all requests equally",
      "Prioritize stakeholders by seniority",
      "Maximize overall product value by ordering items based on value, risk, and dependency",
      "Let the Developers decide which requests to implement"
    ],
    correct: [2], multi: false,
    explanation: "The Product Owner orders the Product Backlog to maximize value. This involves considering multiple factors: business value, risk reduction, stakeholder needs, technical dependencies, and the Product Goal."
  },
  {
    id: 157, topic: "Daily Scrum",
    question: "Why is the Daily Scrum important for achieving the Sprint Goal?",
    options: [
      "It ensures everyone is working at maximum capacity",
      "It provides daily inspection of progress and enables same-day adaptation of the plan",
      "It allows the Scrum Master to track individual performance",
      "It keeps stakeholders informed of daily progress"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum provides a daily opportunity to inspect progress toward the Sprint Goal and adapt the Sprint Backlog. This daily feedback loop allows the team to course-correct quickly."
  },
  {
    id: 158, topic: "Scrum Theory",
    question: "Why does Scrum use an incremental approach?",
    options: [
      "To release frequently for marketing purposes",
      "To reduce risk by delivering valuable, usable work frequently and receiving early feedback",
      "To make development easier to track",
      "To reduce the cost of development"
    ],
    correct: [1], multi: false,
    explanation: "Incremental delivery reduces risk by delivering and validating value frequently. Early feedback means course corrections are made before too much investment is made in the wrong direction."
  },
  {
    id: 159, topic: "Scrum Team",
    question: "Can the Scrum Team add new members during a Sprint?",
    options: [
      "Yes, at any time with Product Owner approval",
      "No — team stability during a Sprint supports focus and predictability; changes should happen between Sprints",
      "Yes, if the team agrees",
      "Only with Scrum Master approval"
    ],
    correct: [1], multi: false,
    explanation: "Team composition changes during a Sprint can disrupt focus and predictability. While Scrum does not explicitly prohibit it, stability is preferred. Changes are best made between Sprints."
  },
  {
    id: 160, topic: "Sprint Retrospective",
    question: "What is the primary difference between Sprint Review and Sprint Retrospective?",
    options: [
      "Sprint Review is internal; Retrospective is for stakeholders",
      "Sprint Review inspects the product; Retrospective inspects the team's process and ways of working",
      "Sprint Review is optional; Retrospective is required",
      "Sprint Review is longer than Retrospective"
    ],
    correct: [1], multi: false,
    explanation: "Sprint Review focuses on the product (what was built, what to build next). Sprint Retrospective focuses on the team's process, interactions, and ways of working (how to work better)."
  },

  // ── FROM WORKSHOP PDF (Q1–Q40) ────────────────────────────────────────────
  {
    id: 161, topic: "Daily Scrum",
    question: "During the Daily Scrum, the Scrum Master's role is to:",
    options: [
      "Facilitate discussions of the Development Team",
      "Ensure that each team member has a chance to speak",
      "Ensure that all 3 questions have been answered",
      "Teach the Development Team to keep the Daily Scrum within the 15 minute timebox",
      "All of the above"
    ],
    correct: [3], multi: false,
    explanation: "The Scrum Master's role in the Daily Scrum is to ensure the Developers hold the event and keep it within the 15-minute timebox. The SM teaches and coaches — not facilitates or manages the meeting."
  },
  {
    id: 162, topic: "Sprint Planning",
    question: "The Product Owner makes sure the team selects enough from the Product Backlog for a Sprint to satisfy the stakeholders.",
    options: ["True", "False"],
    correct: [1], multi: false,
    explanation: "False. Only the Developers can select how much work they take into a Sprint. No one — not even the Product Owner — tells Developers how much to select. The PO proposes what would be most valuable; the Developers decide what is achievable."
  },
  {
    id: 163, topic: "Sprint Backlog",
    question: "Who determines when it is appropriate to update the Sprint Backlog during a Sprint?",
    options: ["The Scrum Team", "The Development Team", "The Project Manager", "The Product Owner"],
    correct: [1], multi: false,
    explanation: "The Sprint Backlog is a plan by and for the Developers. Only the Development Team updates the Sprint Backlog during the Sprint as more is learned about the work needed to achieve the Sprint Goal."
  },
  {
    id: 164, topic: "Product Owner",
    question: "Which of the following are true about the Product Owner role? (Choose 3)",
    options: [
      "The Product Owner can be influenced by a committee",
      "Multiple people can share the Product Owner role on a Scrum Team",
      "The Product Owner is one person",
      "The Product Owner role can be played by a committee or a team of people",
      "The Product Owner is accountable for ordering the Product Backlog"
    ],
    correct: [0, 2, 4], multi: true,
    explanation: "The PO is one person (not a committee), is accountable for ordering the Product Backlog, and can be influenced by a committee — but represents their needs as a single decision-maker. Multiple people cannot share the PO role."
  },
  {
    id: 165, topic: "Sprint",
    question: "The purpose of a Sprint is to produce a done Increment of product.",
    options: ["True", "False"],
    correct: [0], multi: false,
    explanation: "True. Each Sprint is a container within which a Done, usable, and potentially releasable Increment of product is created. This is the fundamental unit of delivery in Scrum."
  },
  {
    id: 166, topic: "Scrum Master",
    question: "The Product Owner is not collaborating with the Development Team during the Sprint. What are two valuable actions for a Scrum Master to take?",
    options: [
      "Stop the Sprint, send the Product Owner to a course and restart",
      "Coach the Product Owner in the values of Scrum and incremental delivery",
      "Bring up the problem in the Sprint Retrospective",
      "Inform the Product Owner's functional manager",
      "Nominate a proxy Product Owner"
    ],
    correct: [1, 2], multi: true,
    explanation: "The SM serves the PO by coaching on Scrum values and collaboration. The Retrospective is the right forum to surface process issues like insufficient PO collaboration. Stopping the Sprint or going to management are disproportionate responses."
  },
  {
    id: 167, topic: "Scrum Master",
    question: "The Development Team informs the Scrum Master that the IT manager has asked for a status report during the Sprint. The Scrum Master will:",
    options: [
      "Ask the Product Owner to send the manager the report",
      "Create and deliver the report to the manager herself",
      "Tell the Development Team to fit the report into the Sprint Backlog",
      "Tell the Development Team to figure it out themselves",
      "Talk to the IT manager and explain that progress in Scrum comes from inspecting an Increment at the Sprint Review"
    ],
    correct: [4], multi: false,
    explanation: "The Scrum Master coaches the organization on Scrum. The SM explains to the IT manager that progress is made transparent through Scrum's inspect-and-adapt events — especially the Sprint Review — not through separate status reports."
  },
  {
    id: 168, topic: "Scrum Theory",
    question: "What is the role of management in Scrum?",
    options: [
      "To continually monitor staffing levels of the Development Team",
      "To identify and remove people that aren't working hard enough",
      "To facilitate the Scrum Teams with insights and resources that help them improve",
      "To monitor the Development Team's productivity"
    ],
    correct: [2], multi: false,
    explanation: "Management's role in Scrum is to support Scrum Teams — providing resources, removing organizational impediments, and sharing strategic insights. Management does not direct or monitor the team's internal work."
  },
  {
    id: 169, topic: "Scrum Artifacts",
    question: "Sprint burndown charts are an efficient tracking tool because they show:",
    options: [
      "How much effort has gone into a Sprint",
      "How many Product Backlog items remain",
      "An estimate of the total work remaining for the Sprint",
      "How many hours have been worked by each Development Team member"
    ],
    correct: [2], multi: false,
    explanation: "A Sprint burndown chart tracks the total remaining work (e.g., story points or hours) across the Sprint, giving the team a daily view of progress toward the Sprint Goal. It is a forecasting and transparency tool, not an individual tracker."
  },
  {
    id: 170, topic: "Increment & Definition of Done",
    question: "How much work must a Development Team do to a Product Backlog item it selects for a Sprint?",
    options: [
      "Analysis, design, programming, testing, and documentation",
      "As much as it can fit into the Sprint",
      "As much as it has told the Product Owner will be done for every Product Backlog item it selects in conformance with the Definition of Done",
      "The best it can do given that it is usually impossible for QA to finish all testing needed to prove shippability"
    ],
    correct: [2], multi: false,
    explanation: "Developers must complete each selected PBI to the Definition of Done — the agreed quality standard. There are no partial completions. This is what makes the Increment transparent and potentially releasable."
  },
  {
    id: 171, topic: "Scrum Team",
    question: "Which does a self-organizing Development Team choose?",
    options: [
      "Stakeholders for the Sprint Review",
      "Product Backlog ordering",
      "Sprint length",
      "How to best accomplish its work",
      "When to release, based on its progress"
    ],
    correct: [3], multi: false,
    explanation: "Self-organizing (self-managing) Developers decide internally how to do their work — the technical approach, who does what, and when. They do not decide PB ordering (PO), stakeholders (PO), Sprint length (team + org), or release decisions (PO)."
  },
  {
    id: 172, topic: "Scrum Team",
    question: "Choose three responsibilities of a self-organizing Development Team.",
    options: [
      "Report daily progress to stakeholders",
      "Do the work planned in the Sprint Backlog",
      "Increase velocity",
      "Pull Product Backlog items for the Sprint",
      "Reorder the Product Backlog",
      "Set the time for the Daily Scrum"
    ],
    correct: [1, 3, 5], multi: true,
    explanation: "Developers are responsible for: doing planned Sprint Backlog work (B), pulling PBIs into the Sprint during planning (D), and setting the Daily Scrum time (F). Velocity increase is not a direct responsibility, and PB reordering belongs to the PO."
  },
  {
    id: 173, topic: "Scrum Events",
    question: "Which three of the following are feedback loops in Scrum?",
    options: [
      "Daily Scrum",
      "Sprint Retrospective",
      "Refinement Meeting",
      "Sprint Review",
      "Release Planning"
    ],
    correct: [0, 1, 3], multi: true,
    explanation: "Daily Scrum, Sprint Retrospective, and Sprint Review are all formal Scrum feedback loops — they create inspect-and-adapt opportunities. Refinement is an ongoing activity, not a formal feedback loop. Release Planning is not a Scrum event."
  },
  {
    id: 174, topic: "Sprint",
    question: "Which two things should the Development Team do during the first Sprint?",
    options: [
      "Develop at least one piece of functionality",
      "Analyse, design, and describe the complete architecture and infrastructure",
      "Make up a plan for the rest of the project",
      "Analyse, describe, and document the requirements for subsequent Sprints",
      "Create an Increment of potentially releasable software"
    ],
    correct: [0, 4], multi: true,
    explanation: "From the very first Sprint, the Developers must create a Done, usable Increment — including at least one piece of working functionality. Complete upfront architecture or long-range planning are not consistent with Scrum's empirical approach."
  },
  {
    id: 175, topic: "Scrum Team",
    question: "When many Scrum Teams are working on the same product, should all of their increments be integrated every Sprint?",
    options: [
      "No, that is far too hard and must be done in a hardening Sprint",
      "No, each Scrum Team stands alone",
      "Yes, but only for Scrum Teams whose work has dependencies",
      "Yes, otherwise the Product Owners and stakeholders may not be able to accurately inspect what is done"
    ],
    correct: [3], multi: false,
    explanation: "When multiple teams work on the same product, their Increments must be integrated every Sprint so stakeholders can inspect a coherent, combined Increment. 'Hardening Sprints' are an anti-pattern in Scrum."
  },
  {
    id: 176, topic: "Sprint Retrospective",
    question: "A Sprint Retrospective should be held:",
    options: [
      "At the end of the last Sprint in a project or a release",
      "At the beginning of each Sprint",
      "At the end of each Sprint",
      "Only when the Scrum Team determines it needs one"
    ],
    correct: [2], multi: false,
    explanation: "The Sprint Retrospective is held at the end of every Sprint — it is mandatory, not optional. It occurs after the Sprint Review and before the next Sprint Planning."
  },
  {
    id: 177, topic: "Sprint Goal",
    question: "Why does a Development Team need a Sprint Goal?",
    options: [
      "A Sprint Goal only gives purpose to Sprint 0",
      "A Sprint Goal ensures that all PBIs selected for the Sprint are implemented",
      "The Development Team is more focused with a common yet specific goal",
      "Sprint Goals are not valuable — everything is known from the Product Backlog"
    ],
    correct: [2], multi: false,
    explanation: "The Sprint Goal provides a shared, meaningful objective that focuses and unifies the Development Team's efforts. It offers flexibility on the exact items while keeping the team aligned on the value to deliver."
  },
  {
    id: 178, topic: "Sprint",
    question: "Which of the following are true about the length of the Sprint? (Choose 2)",
    options: [
      "All Sprints must be 1 month or less",
      "The length of the Sprint should be proportional to the work done between Sprints",
      "Sprint length is determined during Sprint Planning and should include only coding time, not testing",
      "Sprint length is determined during Sprint Planning and should be long enough to deliver what is planned",
      "It is best to have Sprints of consistent length throughout a development effort"
    ],
    correct: [0, 4], multi: true,
    explanation: "Sprints are limited to one calendar month or less (A), and consistent Sprint lengths create a predictable delivery cadence (E). Length is not determined Sprint-by-Sprint based on work volume — it should remain stable."
  },
  {
    id: 179, topic: "Increment & Definition of Done",
    question: "A product Increment must be released to production at the end of each Sprint.",
    options: ["True", "False"],
    correct: [1], multi: false,
    explanation: "False. The Increment must be Done and potentially releasable, but the release decision belongs to the Product Owner. The team creates a releasable Increment; whether to actually release it is a business decision."
  },
  {
    id: 180, topic: "Scrum Team",
    question: "What are three benefits of self-organization?",
    options: [
      "Increased creativity",
      "Increased rule compliance",
      "Increased accuracy of estimates",
      "Increased commitment",
      "Increased self-accountability"
    ],
    correct: [0, 3, 4], multi: true,
    explanation: "Self-organizing teams benefit from: increased creativity (people own their approach), increased commitment (autonomy drives engagement), and increased self-accountability (the team holds itself responsible for outcomes). Rule compliance and estimate accuracy are not primary benefits."
  },
  {
    id: 181, topic: "Sprint",
    question: "When is a Sprint over?",
    options: [
      "When all Product Backlog items meet their Definition of Done",
      "When the timebox expires",
      "When the Product Owner says it is done",
      "When all the tasks are completed"
    ],
    correct: [1], multi: false,
    explanation: "A Sprint ends when the timebox expires — period. Sprints are fixed-length events. A Sprint does not end early when all tasks are done, nor is it extended if work remains."
  },
  {
    id: 182, topic: "Scrum Team",
    question: "When a Development Team is having trouble delivering a working Increment because they don't understand a functional requirement, what should they do?",
    options: [
      "Defer the work to a more appropriate Sprint",
      "Add a specialist to the Development Team",
      "Partially complete the functionality and discuss the remaining work at the Sprint Review",
      "Collaborate with the Product Owner to determine what is possible and acceptable"
    ],
    correct: [3], multi: false,
    explanation: "When requirements are unclear, the Developers should immediately collaborate with the Product Owner to clarify and find a path forward. The PO is the primary source of product knowledge and acceptance criteria."
  },
  {
    id: 183, topic: "Daily Scrum",
    question: "Why is the Daily Scrum held at the same time and same place?",
    options: [
      "The place can be named",
      "The consistency reduces complexity and overhead",
      "The Product Owner demands it",
      "Rooms are hard to book and this lets it be booked in advance"
    ],
    correct: [1], multi: false,
    explanation: "Holding the Daily Scrum at the same time and place every working day reduces complexity and cognitive overhead. Consistency builds habit and eliminates the coordination cost of re-scheduling each day."
  },
  {
    id: 184, topic: "Daily Scrum",
    question: "The timebox for the Daily Scrum is:",
    options: [
      "15–30 minutes",
      "15 minutes",
      "15 minutes for a 4-week Sprint, proportionally less for shorter Sprints",
      "15 minutes, but may be shorter for smaller teams"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is always timeboxed to 15 minutes — regardless of Sprint length or team size. The timebox is fixed, though the actual event may finish sooner."
  },
  {
    id: 185, topic: "Sprint",
    question: "The CEO asks the Development Team to add a 'very important' item to the current Sprint. What should the Development Team do?",
    options: [
      "Add the item to the current Sprint without any adjustments",
      "Add the item to the current Sprint and drop an item of equal size",
      "Add the item to the next Sprint",
      "Inform the Product Owner so he/she can work with the CEO"
    ],
    correct: [3], multi: false,
    explanation: "All work flows through the Product Owner. Developers should not accept external requests directly — even from the CEO. The PO evaluates the request against the Product Backlog and Sprint Goal, and negotiates with the team if needed."
  },
  {
    id: 186, topic: "Sprint Backlog",
    question: "Development Team members volunteer to own a Sprint Backlog item:",
    options: [
      "At the Sprint Planning meeting",
      "Never. All Sprint Backlog items are 'owned' by the entire Development Team, even though each one may be done by an individual team member",
      "Whenever a team member can accommodate more work",
      "During the Daily Scrum"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Backlog is owned collectively by the Development Team. No individual 'owns' a PBI — the entire team is accountable. Members self-select work from the Sprint Backlog, but collective ownership remains."
  },
  {
    id: 187, topic: "Sprint Backlog",
    question: "Who owns the Sprint Backlog?",
    options: ["The Product Owner", "The Development Team", "The Scrum Team", "The Scrum Master"],
    correct: [1], multi: false,
    explanation: "The Sprint Backlog is owned by the Development Team. It is their plan for the Sprint — highly visible and updated by them throughout the Sprint."
  },
  {
    id: 188, topic: "Product Backlog",
    question: "Product Backlog estimates are created by:",
    options: [
      "Appropriate subject matter experts",
      "The Product Owner",
      "The Development Team in collaboration with the Product Owner",
      "The Scrum Master"
    ],
    correct: [2], multi: false,
    explanation: "Estimates are done by the Developers who will perform the work, in collaboration with the Product Owner who helps clarify requirements. Only Developers can ultimately size the work — the PO may influence but not override."
  },
  {
    id: 189, topic: "Product Backlog",
    question: "Who has the last say on the order of the Product Backlog?",
    options: ["The Stakeholders", "The Development Team", "The Scrum Master", "The Product Owner"],
    correct: [3], multi: false,
    explanation: "The Product Owner has sole authority over the order of the Product Backlog. Others may influence or provide input, but the PO makes the final decision on what comes first."
  },
  {
    id: 190, topic: "Scrum Team",
    question: "Who is on the Scrum Team?",
    options: [
      "The Scrum Master",
      "The Product Owner",
      "The Development Team",
      "The Project Manager",
      "All of the above",
      "None of the above"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "The Scrum Team consists of: the Scrum Master, the Product Owner, and the Developers (formerly 'Development Team'). There is no Project Manager role in Scrum."
  },
  {
    id: 191, topic: "Scrum Artifacts",
    question: "Sprint burndown charts are an effective way to track:",
    options: [
      "Sprint effort in story points",
      "Size of the Product Backlog",
      "Estimated work remaining for the Sprint",
      "Earned Value metrics for the project"
    ],
    correct: [2], multi: false,
    explanation: "A Sprint burndown chart shows remaining estimated work (hours or points) over time within the Sprint. It helps the team and stakeholders understand progress toward completing Sprint Backlog work."
  },
  {
    id: 192, topic: "Scrum Theory",
    question: "On a typical day, members of a Scrum team work:",
    options: [
      "As much as is needed to get the job done",
      "Nine hours",
      "At a sustainable pace (normally 7–8 hours)",
      "As long as the timebox permits"
    ],
    correct: [2], multi: false,
    explanation: "Agile principles call for sustainable pace. Teams work at a consistent, healthy pace — typically 7–8 hours — so they can maintain this indefinitely. Overtime leads to burnout and declining quality."
  },
  {
    id: 193, topic: "Scrum Team",
    question: "The Development Team may change or adjust its engineering practices:",
    options: [
      "At any time it is determined to be necessary",
      "During the Sprint Planning meeting",
      "Prior to the beginning of a Sprint",
      "At project startup",
      "When company policy dictates it"
    ],
    correct: [0], multi: false,
    explanation: "As a self-managing team, Developers can adapt their technical practices at any time — they are not restricted to specific events or approval windows. Continuous improvement includes engineering practices."
  },
  {
    id: 194, topic: "Increment & Definition of Done",
    question: "A Product Backlog item is complete when:",
    options: [
      "The Sprint in which it was selected ends",
      "When corresponding Sprint Backlog items are completed",
      "When all acceptance criteria are met",
      "When it meets the Scrum Team's Definition of Done"
    ],
    correct: [3], multi: false,
    explanation: "A PBI is Done when it meets the Definition of Done — the shared quality standard. This is the only valid measure of completion in Scrum. Acceptance criteria may be part of the DoD, but the DoD is the authoritative standard."
  },
  {
    id: 195, topic: "Scrum Theory",
    question: "What does it mean to say that an event has a timebox?",
    options: [
      "The event must happen at a set time",
      "The event must happen by a given time",
      "The event must take at least a minimum amount of time",
      "The event can take no more than a maximum amount of time"
    ],
    correct: [3], multi: false,
    explanation: "A timebox sets a maximum duration for an event — it cannot exceed that limit. The event may finish early, but never runs over. All Scrum events are timeboxed."
  },
  {
    id: 196, topic: "Product Backlog",
    question: "The Product Backlog is ordered by:",
    options: [
      "Small items at the top to large items at the bottom",
      "Safer items at the top to riskier items at the bottom",
      "Least valuable items at the top to most valuable at the bottom",
      "Items are randomly arranged",
      "Whatever is deemed most appropriate by the Product Owner"
    ],
    correct: [4], multi: false,
    explanation: "The Product Owner orders the Product Backlog in whatever way maximizes value. There is no prescribed ordering rule — the PO uses judgment based on value, risk, dependencies, and strategy."
  },
  {
    id: 197, topic: "Sprint Retrospective",
    question: "The Sprint Retrospective is:",
    options: [
      "A 4-hour timeboxed event",
      "Held at the end of each Sprint",
      "Held after a product release",
      "Held at the beginning of each Sprint"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Retrospective is held at the end of each Sprint (not each release). Its timebox is 3 hours for a one-month Sprint — not 4 hours."
  },
  {
    id: 198, topic: "Sprint Planning",
    question: "Once the Development Team has forecast its work for the current Sprint, who determines how the work will be accomplished?",
    options: [
      "The functional managers to whom the Scrum Team reports",
      "The Scrum Master",
      "The Chief Architect and Chief Engineer, working collaboratively",
      "The Development Team"
    ],
    correct: [3], multi: false,
    explanation: "How the work gets done is entirely within the Development Team's authority. They are self-managing — no manager, architect, or Scrum Master dictates technical approach or task assignment."
  },
  {
    id: 199, topic: "Scrum Events",
    question: "Scrum timeboxed events are (choose all that apply):",
    options: [
      "Sprint 0",
      "Sprint Testing",
      "Release Retrospective",
      "Daily Scrum",
      "Sprint Planning Meeting",
      "Sprint Testing (duplicate)",
      "Release Testing"
    ],
    correct: [3, 4], multi: true,
    explanation: "The formal timeboxed Scrum events are: Sprint (container), Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. 'Sprint 0', 'Sprint Testing', 'Release Retrospective', and 'Release Testing' are not Scrum events."
  },
];

const PSM2_BANK = [ // eslint-disable-line no-sparse-arrays
  // ── ADVANCED SCRUM MASTER STANCES ─────────────────────────────────────────
  {
    id: 201, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Team consistently delivers Increments that meet the Definition of Done, but the Product Owner complains the product is not creating business value. What is the MOST appropriate action for the Scrum Master?",
    options: [
      "Ask the Developers to focus more on business value metrics",
      "Coach the Product Owner on techniques to better define and measure value, and connect team outcomes to business results",
      "Report the issue to senior management so they can set clearer goals",
      "Suggest extending the Sprint length to allow more value-generating work"
    ],
    correct: [1], multi: false,
    explanation: "An advanced Scrum Master coaches the Product Owner. The issue is the PO's ability to define and measure value — not the team's delivery capability. The SM should coach the PO on Product Goal definition, outcome metrics, and Evidence-Based Management."
  },
  {
    id: 202, topic: "Advanced Scrum Master Stances",
    question: "A senior manager asks you (as Scrum Master) for a detailed weekly status report on each Developer's individual progress. What should you do?",
    options: [
      "Provide the report to maintain management relationships",
      "Decline and explain that individual tracking can undermine team self-management and trust",
      "Ask the Developers to prepare the report themselves",
      "Provide team-level metrics but not individual metrics, and coach the manager on Scrum transparency mechanisms"
    ],
    correct: [3], multi: false,
    explanation: "The SM protects the team from practices that undermine self-management. Providing team-level transparency through Scrum artifacts (Sprint Backlog, velocity, burndown) serves the manager's legitimate need for information while coaching them on how Scrum provides visibility without micromanagement."
  },
  {
    id: 203, topic: "Advanced Scrum Master Stances",
    question: "The Developers are spending too much time in technical discussions during the Daily Scrum, causing it to frequently exceed 15 minutes. What should the Scrum Master do?",
    options: [
      "Enforce the timebox strictly, cutting off discussions",
      "Allow extra time since technical discussions are valuable",
      "Coach the Developers to table detailed discussions for after the Daily Scrum, and help them use the 15 minutes to inspect progress toward the Sprint Goal",
      "Cancel the Daily Scrum and replace it with a written status update"
    ],
    correct: [2], multi: false,
    explanation: "The Scrum Master coaches the Developers on the purpose and format of the Daily Scrum. Detailed problem-solving should happen after the event in smaller groups. The 15-minute timebox serves coordination, not deep technical discussion."
  },
  {
    id: 204, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Master notices the team is not improving Sprint over Sprint. The Retrospective produces good ideas, but nothing changes. What are the MOST effective interventions? (Select all that apply)",
    options: [
      "Help the team select one specific, measurable improvement with an owner and due date",
      "Facilitate a meta-retrospective on why improvements are not being implemented",
      "Add improvement items to the Sprint Backlog to make them visible and committed",
      "Require mandatory participation in improvement workshops",
      "Accept it as normal — not all teams improve"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "Effective improvement requires specificity (option A), self-reflection on the system (option B), and making improvements visible by including them in the Sprint Backlog (option C). Mandating workshops and accepting stagnation are ineffective responses."
  },
  {
    id: 205, topic: "Advanced Scrum Master Stances",
    question: "A Product Owner is acting as a proxy PO and has limited decision-making authority. This is causing significant delays in backlog refinement. How should the Scrum Master address this?",
    options: [
      "Accept it — proxy POs are a normal organizational pattern",
      "Coach the proxy PO to make decisions more autonomously",
      "Escalate to leadership to address the governance gap, using evidence of the impact on value delivery",
      "Skip refinement meetings until the situation improves"
    ],
    correct: [2], multi: false,
    explanation: "A proxy PO without authority is an organizational impediment. The Scrum Master must make this visible to leadership with evidence of the cost of delay. The SM acts as a change agent, addressing root cause systemic issues rather than working around them."
  },
  {
    id: 206, topic: "Advanced Scrum Master Stances",
    question: "During a Sprint Review, stakeholders are asking for features that contradict the current Product Goal. How should the Scrum Master handle this?",
    options: [
      "Allow stakeholders to add items directly to the Sprint Backlog",
      "Facilitate a discussion that surfaces the tension and helps the Product Owner make informed decisions about the Product Goal and backlog priorities",
      "Ask stakeholders to leave and come back at the next Sprint Review",
      "Immediately update the Product Backlog to reflect stakeholder requests"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Review is a collaborative working session. The SM facilitates the discussion, surfaces tensions transparently, and supports the Product Owner in making informed product decisions. The PO ultimately decides — the SM enables that decision-making process."
  },
  {
    id: 207, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Master is asked by the organization to start tracking individual developer productivity metrics. How should the Scrum Master respond?",
    options: [
      "Agree and implement velocity per developer",
      "Decline and explain that individual metrics can damage psychological safety, team cohesion, and self-management",
      "Implement the metrics but don't share them with the team",
      "Ask the Product Owner to make the decision"
    ],
    correct: [1], multi: false,
    explanation: "Individual productivity metrics undermine team dynamics, create local optimization, and destroy psychological safety. Scrum measures team outcomes, not individual output. The SM should coach the organization toward team-level and business-value metrics."
  },
  {
    id: 208, topic: "Advanced Scrum Master Stances",
    question: "The team has been working together for 6 months but still relies on the Scrum Master to facilitate every meeting and resolve every conflict. What should the Scrum Master do?",
    options: [
      "Continue facilitating — this is the SM's job",
      "Gradually step back, coaching team members to develop their own facilitation and conflict-resolution capabilities",
      "Assign a team member as deputy Scrum Master",
      "Raise this as an impediment at the next retrospective"
    ],
    correct: [1], multi: false,
    explanation: "A Scrum Master's goal is to make themselves progressively less necessary for day-to-day facilitation. Coaching team members toward self-management means transferring facilitation and conflict resolution skills so the team becomes truly self-managing."
  },

  // ── ORGANIZATIONAL IMPEDIMENTS ────────────────────────────────────────────
  {
    id: 209, topic: "Organizational Impediments",
    question: "Your Scrum Team is part of a large organization where multiple departments must approve any production deployment, causing 2-3 week delays after each Sprint. What are the BEST approaches? (Select all that apply)",
    options: [
      "Make the impediment visible to leadership using data and Scrum's empirical principles",
      "Ask the team to reduce Sprint length to work around the process",
      "Work with the Product Owner to quantify the cost of delay caused by the approval process",
      "Coach the organization on Continuous Delivery practices as an Agile adoption goal",
      "Accept the constraint as it's outside the Scrum Team's control"
    ],
    correct: [0, 2, 3], multi: true,
    explanation: "A skilled SM makes impediments visible with evidence (A), quantifies business impact (C), and coaches toward better practices (D). Reducing Sprint length doesn't solve the root cause, and accepting it abandons the SM's change agent responsibility."
  },
  {
    id: 210, topic: "Organizational Impediments",
    question: "A Scrum Team's manager insists on assigning tasks directly to Developers, bypassing the Sprint Backlog and self-management. Team morale has dropped. What is the Scrum Master's MOST effective response?",
    options: [
      "Allow it since the manager has formal authority",
      "Ask the Developers to ignore the manager's instructions",
      "Have a coaching conversation with the manager using evidence of impact on delivery outcomes",
      "Escalate immediately to the manager's supervisor"
    ],
    correct: [2], multi: false,
    explanation: "The SM protects the team's self-management through education and coaching — not confrontation or capitulation. A data-driven coaching conversation helps the manager understand how their behavior impacts team effectiveness and business results."
  },
  {
    id: 211, topic: "Organizational Impediments",
    question: "Your organization mandates detailed upfront project plans and fixed-scope contracts, conflicting with Scrum's adaptive nature. Which approaches would be MOST effective? (Select all that apply)",
    options: [
      "Refuse to use Scrum until contracts are changed",
      "Educate stakeholders on outcome-based contracts and the value of flexibility",
      "Use empirical data from previous Sprints to demonstrate forecasting accuracy",
      "Work within the constraint while systematically coaching toward change",
      "Implement Scrum exactly as written and ignore the contracts"
    ],
    correct: [1, 2, 3], multi: true,
    explanation: "Systemic change requires patience and evidence. An effective change agent educates (B), uses data to build trust (C), and works pragmatically within constraints while driving change (D)."
  },
  {
    id: 212, topic: "Organizational Impediments",
    question: "A newly formed Scrum Team is blocked because another department won't provide necessary information. The issue has persisted for two Sprints. What should the Scrum Master do?",
    options: [
      "Wait patiently — the department will eventually respond",
      "Have the Developers work around the missing information",
      "Make the impediment transparent and escalate to where it can be resolved, using evidence of impact",
      "Cancel the Sprint until the information is provided"
    ],
    correct: [2], multi: false,
    explanation: "The SM is accountable for removing impediments that are beyond the team's control. After making it transparent and attempting to resolve it at the team level, the SM must escalate to wherever in the organization the decision can be made."
  },
  {
    id: 213, topic: "Organizational Impediments",
    question: "Your Scrum Team is frequently interrupted by urgent production support requests, disrupting Sprint work. How should this be addressed? (Select all that apply)",
    options: [
      "Dedicate one Developer per Sprint as a support rotation",
      "Work with the Product Owner to create a Product Backlog item buffer for support work",
      "Coach the organization on the cost of interruptions and work to establish a sustainable support model",
      "Ignore support requests until the Sprint is complete",
      "Cancel the Sprint whenever a major issue arises"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "Sustainable solutions include support rotations (A), accounting for support work in the backlog (B), and coaching the organization on systemic improvement (C). Ignoring production issues or cancelling Sprints creates greater harm."
  },

  // ── SCALING SCRUM ─────────────────────────────────────────────────────────
  {
    id: 214, topic: "Scaling Scrum",
    question: "Multiple Scrum Teams are working on the same product. Team A's changes keep breaking Team B's work. What should the Scrum Master do FIRST?",
    options: [
      "Escalate to management immediately",
      "Facilitate cross-team alignment on integration standards and a shared Definition of Done",
      "Tell Team A to add more unit tests",
      "Ask the other team's Scrum Master to control their Developers"
    ],
    correct: [1], multi: false,
    explanation: "Integration issues across teams are systemic. The first step is cross-team facilitation — establishing shared standards, a unified DoD, and integration practices. This is a collaboration and system design problem."
  },
  {
    id: 215, topic: "Scaling Scrum",
    question: "When multiple Scrum Teams work on the same product, which practices help ensure coherence? (Select all that apply)",
    options: [
      "A single Product Owner and single Product Backlog",
      "A shared Definition of Done",
      "Separate Sprint cadences for each team",
      "Cross-team backlog refinement sessions",
      "Each team having its own product goal"
    ],
    correct: [0, 1, 3], multi: true,
    explanation: "Multiple teams on the same product need: one PO, one PB (A), shared DoD (B), and cross-team coordination (D). Separate cadences and goals fragment the product and create misalignment."
  },
  {
    id: 216, topic: "Scaling Scrum",
    question: "As an RTE (Release Train Engineer) in a SAFe environment, a Program Increment Planning event is approaching, but several teams report their Product Owners are unclear about priorities. What should you do?",
    options: [
      "Proceed with PI Planning and allow teams to figure out priorities on their own",
      "Cancel the PI Planning until priorities are clarified",
      "Facilitate a pre-PI Planning session with Product Owners to align on business priorities and ensure readiness",
      "Assign priorities yourself based on business value"
    ],
    correct: [2], multi: false,
    explanation: "Readiness is a key success factor for PI Planning. The RTE/SM should ensure Product Owners are aligned on priorities before the event. A pre-PI session prevents wasted planning time and ensures business context is shared."
  },
  {
    id: 217, topic: "Scaling Scrum",
    question: "In a scaled environment, a Scrum of Scrums is held but teams use it mostly for status reporting. How should the Scrum Master improve this?",
    options: [
      "Cancel Scrum of Scrums — it's redundant",
      "Shift the focus from status reporting to identifying and resolving cross-team dependencies and impediments",
      "Add more teams to the Scrum of Scrums",
      "Have management attend to ensure accountability"
    ],
    correct: [1], multi: false,
    explanation: "Scrum of Scrums is a coordination mechanism, not a status meeting. The SM should coach participants to use it for identifying cross-team dependencies, integration risks, and systemic impediments — focusing on what needs to be resolved across teams."
  },

  // ── COACHING & FACILITATION ───────────────────────────────────────────────
  {
    id: 218, topic: "Coaching & Facilitation",
    question: "During Sprint Retrospectives, the same 2-3 people dominate while others stay silent. Which facilitation techniques would BEST address this? (Select all that apply)",
    options: [
      "Use silent brainstorming (e.g., sticky notes) before group discussion",
      "Ask the loudest team members to leave the retrospective",
      "Use round-robin sharing to ensure every voice is heard",
      "Cancel the retrospective and try again next Sprint",
      "Use anonymous input tools or dot voting to surface perspectives safely"
    ],
    correct: [0, 2, 4], multi: true,
    explanation: "Psychological safety is essential for effective retrospectives. Silent brainstorming, structured turn-taking, and anonymous input tools surface quieter voices without exclusion or avoidance."
  },
  {
    id: 219, topic: "Coaching & Facilitation",
    question: "A Scrum Master notices the team is avoiding conflict and always reaching quick consensus. What is the risk and what should be done?",
    options: [
      "Quick consensus is ideal — no action needed",
      "The team may be experiencing groupthink; the SM should create safe space for healthy conflict and divergent thinking",
      "The Scrum Master should introduce more conflict artificially",
      "Conflict avoidance is a sign of team maturity"
    ],
    correct: [1], multi: false,
    explanation: "Quick consensus without genuine debate can be a sign of groupthink or fear of conflict, not team maturity. The SM should facilitate techniques that encourage divergent thinking, psychological safety, and constructive disagreement — these lead to better decisions."
  },
  {
    id: 220, topic: "Coaching & Facilitation",
    question: "A Developer comes to the Scrum Master with a technical solution to a complex problem and asks for approval to implement it. What should the Scrum Master do?",
    options: [
      "Approve or disapprove based on their technical assessment",
      "Facilitate the Developer in validating the decision with the team and Product Owner",
      "Refer the Developer to the Project Manager",
      "Tell the Developer that technical decisions are outside the SM's scope"
    ],
    correct: [1], multi: false,
    explanation: "The SM is not a technical authority. Instead, the SM coaches the Developer to bring the decision to the team. This builds team self-management and ensures decisions are made collaboratively, not in isolation."
  },
  {
    id: 221, topic: "Coaching & Facilitation",
    question: "Sprint Planning consistently runs over its timebox. What should the Scrum Master do? (Select all that apply)",
    options: [
      "Identify root causes — are PBIs insufficiently refined? Is the Sprint Goal unclear?",
      "Simply extend Sprint Planning — it's better to plan thoroughly",
      "Coach the team on timeboxing and preparation practices",
      "Work with the Product Owner to ensure top PBIs are refined and ready before Sprint Planning",
      "Skip Sprint Planning when time is short"
    ],
    correct: [0, 2, 3], multi: true,
    explanation: "Overrunning Sprint Planning usually indicates insufficient backlog refinement or unclear Sprint Goal. The SM addresses root causes by identifying why (A), coaching on preparation (C), and improving refinement practices (D)."
  },
  {
    id: 222, topic: "Coaching & Facilitation",
    question: "A stakeholder insists on attending the Daily Scrum to monitor progress. What should the Scrum Master do?",
    options: [
      "Allow it — stakeholders should be kept informed",
      "Explain that the Daily Scrum is for Developers; offer alternative transparency mechanisms like a dashboard or Sprint Review",
      "Ask the Developers to vote on whether to allow it",
      "Require the stakeholder to sign a non-disclosure agreement before attending"
    ],
    correct: [1], multi: false,
    explanation: "The Daily Scrum is a Developer event. While stakeholders can attend as observers in some cases, the SM should protect the Developers' ability to self-manage and provide alternative, appropriate transparency mechanisms for stakeholders."
  },
  {
    id: 223, topic: "Coaching & Facilitation",
    question: "What is the difference between coaching and mentoring as Scrum Master stances?",
    options: [
      "There is no difference — both involve giving advice",
      "Coaching draws out answers from the individual; mentoring shares the SM's own experience and expertise",
      "Mentoring is for teams; coaching is for individuals",
      "Coaching is directive; mentoring is non-directive"
    ],
    correct: [1], multi: false,
    explanation: "Coaching uses powerful questions to help individuals find their own answers and solutions. Mentoring involves sharing experience and expertise. Both are valuable SM stances, applied in different contexts depending on the situation."
  },

  // ── EVIDENCE-BASED MANAGEMENT ─────────────────────────────────────────────
  {
    id: 224, topic: "Evidence-Based Management",
    question: "Your organization wants to know if the Agile transformation is delivering value. Which EBM metrics would be MOST relevant? (Select all that apply)",
    options: [
      "Current Value (CV) — what value is being delivered today",
      "Lines of code written per Sprint",
      "Time-to-Market (T2M) — how quickly can new value be delivered",
      "Number of Scrum ceremonies held per quarter",
      "Ability to Innovate (A2I) — capacity for new product development"
    ],
    correct: [0, 2, 4], multi: true,
    explanation: "EBM uses four Key Value Areas: Current Value, Unrealized Value, Time-to-Market, and Ability to Innovate. Lines of code and ceremony counts are vanity metrics that don't measure actual business value."
  },
  {
    id: 225, topic: "Evidence-Based Management",
    question: "What are the four Key Value Areas (KVAs) of Evidence-Based Management?",
    options: [
      "Velocity, Quality, Predictability, Satisfaction",
      "Current Value, Unrealized Value, Time-to-Market, Ability to Innovate",
      "Business Value, Technical Value, Team Value, Customer Value",
      "Sprint Value, Release Value, Product Value, Market Value"
    ],
    correct: [1], multi: false,
    explanation: "EBM's four Key Value Areas are: Current Value (CV), Unrealized Value (UV), Time-to-Market (T2M), and Ability to Innovate (A2I). These provide a balanced view of organizational value delivery."
  },
  {
    id: 226, topic: "Evidence-Based Management",
    question: "A leadership team wants to increase team velocity by 30%. As a Scrum Master, how do you respond?",
    options: [
      "Agree and coach the team to increase output",
      "Set the velocity target and track it each Sprint",
      "Explain that velocity is a planning tool, not a performance metric, and coach toward outcome-based goals like reducing Time-to-Market or improving customer satisfaction",
      "Report that velocity cannot be improved"
    ],
    correct: [2], multi: false,
    explanation: "Velocity is an internal planning tool, not a measure of business value. Targeting velocity increase leads to gaming the metric. The SM should coach leadership to use EBM outcome metrics that reflect actual business value delivery."
  },
  {
    id: 227, topic: "Evidence-Based Management",
    question: "What does 'Unrealized Value' represent in Evidence-Based Management?",
    options: [
      "The value of work not completed in the last Sprint",
      "The potential future value that could be realized if the product met all customer needs",
      "Technical debt that hasn't been addressed",
      "Features that were deprioritized in the Product Backlog"
    ],
    correct: [1], multi: false,
    explanation: "Unrealized Value (UV) represents the potential future value that could be realized if the product fully met all of the needs of all potential users. It helps organizations identify the gap between current state and ideal state."
  },

  // ── SELF-MANAGING TEAMS ───────────────────────────────────────────────────
  {
    id: 228, topic: "Self-Managing Teams",
    question: "A senior manager directly assigns tasks to Developers during the Sprint, bypassing the Sprint Backlog. Team velocity has dropped and morale is low. What is the Scrum Master's MOST effective response?",
    options: [
      "Allow it to continue since the manager has authority",
      "Remove the manager from access to the team space",
      "Have a private coaching conversation with the manager about the impact on self-management and delivery outcomes",
      "Ask the Developers to ignore the manager's instructions"
    ],
    correct: [2], multi: false,
    explanation: "The SM protects team self-management and educates the organization. A respectful, evidence-based coaching conversation helps the manager understand the impact of their behavior on team effectiveness without confrontation."
  },
  {
    id: 229, topic: "Self-Managing Teams",
    question: "What distinguishes a 'self-managing' Scrum Team from a 'self-organizing' one (as described in older Scrum Guides)?",
    options: [
      "There is no difference",
      "Self-managing means the team decides not just how to work, but also who is on the team and what to work on",
      "Self-managing means deciding internally who does what, when, and how — going beyond just task organization",
      "Self-organizing was the better term"
    ],
    correct: [2], multi: false,
    explanation: "The 2020 Scrum Guide replaced 'self-organizing' with 'self-managing.' Self-managing teams decide internally who does what, when, and how — implying a deeper level of team autonomy over their own process and work approach."
  },
  {
    id: 230, topic: "Self-Managing Teams",
    question: "A team member frequently misses Sprint events. Other Developers are frustrated. How should the Scrum Master handle this?",
    options: [
      "Report the behavior to the team member's manager",
      "Ignore it — attendance is voluntary",
      "Have a private conversation with the team member to understand the cause, and facilitate a team discussion about agreements and accountability",
      "Remove the team member from the Scrum Team"
    ],
    correct: [2], multi: false,
    explanation: "The SM addresses team dynamics through coaching, not management. Understanding the root cause (competing priorities, disengagement, etc.) and facilitating team accountability agreements is more effective than escalation or ignoring the issue."
  },
  {
    id: 231, topic: "Self-Managing Teams",
    question: "Developers are waiting for the Product Owner to make all backlog refinement decisions and never refine items independently. What should the Scrum Master do?",
    options: [
      "Accept this — backlog refinement is the PO's responsibility",
      "Coach the team that Developers play an active role in refinement, questioning, decomposing, and estimating PBIs",
      "Have the Scrum Master do the refinement instead",
      "Schedule more frequent refinement meetings with the PO"
    ],
    correct: [1], multi: false,
    explanation: "Refinement is a collaborative activity. Developers bring technical insights, decompose items, identify dependencies, and provide estimates. The SM should coach the team toward shared ownership of the refinement process."
  },

  // ── SCRUM MASTER AS CHANGE AGENT ──────────────────────────────────────────
  {
    id: 232, topic: "Scrum Master as Change Agent",
    question: "An organization has been 'doing Scrum' for two years but the Developers still work in siloes, handoff work sequentially, and rarely collaborate. What should the Scrum Master focus on?",
    options: [
      "Ensure Scrum ceremonies are run correctly",
      "Address the deeper cultural and structural issues limiting cross-functional collaboration, using coaching and systemic change techniques",
      "Implement Kanban instead of Scrum",
      "Report the issue to senior management and wait for direction"
    ],
    correct: [1], multi: false,
    explanation: "Running Scrum events without changing the underlying culture produces 'Scrum-but' — the form without the substance. The SM must address root causes: team structure, incentive systems, psychological safety, and the culture of collaboration."
  },
  {
    id: 233, topic: "Scrum Master as Change Agent",
    question: "Leadership is supportive of Agile in words but continues to demand traditional project reports and milestone-based commitments. How should the Scrum Master respond? (Select all that apply)",
    options: [
      "Provide the traditional reports to keep leadership happy",
      "Educate leadership on how Scrum's transparency mechanisms provide the information they actually need",
      "Identify and address the underlying concerns driving the request for traditional reports",
      "Refuse to provide any non-Scrum artifacts",
      "Work incrementally to evolve reporting toward outcome-based metrics"
    ],
    correct: [1, 2, 4], multi: true,
    explanation: "Change requires empathy and pragmatism. Understanding what leadership really needs (B, C), providing value through Scrum's mechanisms (B), and incrementally evolving practices (D) are more effective than refusal or pure compliance."
  },
  {
    id: 234, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master is new to an organization where Scrum has been practiced for 3 years with poor results. Teams are disengaged. What should the Scrum Master do FIRST?",
    options: [
      "Immediately fix all the Scrum practices that are wrong",
      "Observe, listen, and understand the current state before intervening",
      "Introduce a new framework to replace Scrum",
      "Call out all problems in the first team meeting"
    ],
    correct: [1], multi: false,
    explanation: "Before intervening, an effective SM must understand the system — the people, history, culture, and root causes of disengagement. Rushing to fix without understanding often causes harm. Deep listening and observation build trust and surface real problems."
  },
  {
    id: 235, topic: "Scrum Master as Change Agent",
    question: "A Scrum Team consistently delivers working software every Sprint, but business stakeholders complain they're 'not getting what they asked for.' What is the most likely systemic cause?",
    options: [
      "Developers have poor technical skills",
      "The Definition of Done is too loose",
      "Insufficient collaboration between the Scrum Team and stakeholders — particularly around feedback loops and shared understanding",
      "Sprints are too long"
    ],
    correct: [2], multi: false,
    explanation: "When technically sound software doesn't meet stakeholder expectations, the issue is usually in the feedback loop — not enough stakeholder engagement during refinement, Sprint Reviews used as rubber-stamp sessions, or a Product Owner who is not effectively translating stakeholder needs."
  },

  // ── SCRUM VALUES IN PRACTICE ──────────────────────────────────────────────
  {
    id: 236, topic: "Scrum Values in Practice",
    question: "A Developer discovers a critical security vulnerability midway through the Sprint. Disclosing it would mean abandoning most of the Sprint Backlog. What should the Developer do?",
    options: [
      "Keep quiet and fix it quietly to not disrupt the Sprint",
      "Immediately make it transparent and work with the team to adapt the Sprint Backlog",
      "Wait until the Sprint Review to disclose it",
      "Fix it on personal time to avoid impacting the Sprint Goal"
    ],
    correct: [1], multi: false,
    explanation: "The Scrum Values of Openness and Courage require immediate transparency about risks. The team then uses Inspection and Adaptation to respond. Hiding information directly violates empiricism — the foundation of Scrum."
  },
  {
    id: 237, topic: "Scrum Values in Practice",
    question: "A Product Owner consistently commits to stakeholders about features that will be in the next Sprint before Sprint Planning, putting pressure on the team. Which Scrum values are being violated? (Select all that apply)",
    options: ["Commitment", "Respect", "Openness", "Courage", "Focus"],
    correct: [1, 3], multi: true,
    explanation: "By making commitments on behalf of the team without their input, the PO is violating Respect (not honoring team autonomy) and Courage (avoiding the honest conversation with stakeholders that estimates are uncertain)."
  },
  {
    id: 238, topic: "Scrum Values in Practice",
    question: "During a Retrospective, team members are hesitant to raise issues about a respected senior developer's coding practices. What should the Scrum Master do?",
    options: [
      "Raise the issue on the team's behalf",
      "Ignore it — team members can raise it if they want",
      "Create psychological safety through facilitation techniques that allow feedback to emerge without targeting individuals",
      "Ask the senior developer to leave the retrospective"
    ],
    correct: [2], multi: false,
    explanation: "The SM creates conditions for psychological safety and constructive feedback. Techniques like anonymous input, focus on processes (not people), and structured retrospective formats allow sensitive issues to be raised safely."
  },

  // ── ADVANCED SPRINT PLANNING & BACKLOG ────────────────────────────────────
  {
    id: 239, topic: "Advanced Sprint Management",
    question: "A Developer raises a concern that the Sprint Goal is too vague to guide their work. What should the Scrum Master do?",
    options: [
      "Accept it — Sprint Goals are intentionally broad",
      "Rewrite the Sprint Goal yourself",
      "Facilitate a discussion with the Scrum Team during Sprint Planning to clarify and sharpen the Sprint Goal",
      "Ask the Product Owner to rewrite it after Planning"
    ],
    correct: [2], multi: false,
    explanation: "The Sprint Goal should provide clarity and focus. If it's too vague, the SM should facilitate a collaborative conversation during Sprint Planning to make it specific, meaningful, and shared by the entire team."
  },
  {
    id: 240, topic: "Advanced Sprint Management",
    question: "The Developers realize mid-Sprint that they over-committed and cannot complete all Sprint Backlog items. What should happen?",
    options: [
      "Extend the Sprint to finish all items",
      "The Scrum Master should work overtime to help",
      "The Developers collaborate with the Product Owner to negotiate scope while protecting the Sprint Goal",
      "Cancel the Sprint immediately"
    ],
    correct: [2], multi: false,
    explanation: "Scope can be negotiated during a Sprint without endangering the Sprint Goal. The team should work with the Product Owner to identify which items are essential to the Sprint Goal and de-scope others rather than extending the Sprint or cancelling it."
  },
,
  {
    id: 241, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Team has been 'doing Scrum' for 6 months. The Daily Scrum has become a routine status reporting session — developers read task updates with no real collaboration. What should the Scrum Master do?",
    options: [
      "Cancel the Daily Scrum — it's not adding value",
      "Accept it — the team is experienced and knows what they need",
      "Facilitate a discussion with the team about the purpose of the Daily Scrum and experiment with formats that foster genuine collaboration toward the Sprint Goal",
      "Report the issue to the Product Owner"
    ],
    correct: [2], multi: false,
    explanation: "The Daily Scrum should be a collaborative event for Developers to inspect progress and adapt. When it degrades into status reporting, the SM should coach the team back to its real purpose through facilitation and experimentation with formats."
  },
  {
    id: 242, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Master is coaching a team where the Product Owner has low trust from stakeholders. Stakeholders bypass the PO and go directly to developers. What is the root cause and how should the SM address it?",
    options: [
      "The developers are too accessible — restrict access",
      "The PO lacks the skills or authority needed; the SM should coach the PO and help establish clearer stakeholder engagement channels",
      "The stakeholders don't understand Scrum — train them",
      "This is normal and should be accepted"
    ],
    correct: [1], multi: false,
    explanation: "Stakeholder bypass is usually a symptom of a PO credibility or authority gap. The SM should coach the PO on stakeholder management, communication, and the behaviors that build trust — while also educating stakeholders on proper engagement channels."
  },
  {
    id: 243, topic: "Advanced Scrum Master Stances",
    question: "During Sprint Planning, the team repeatedly takes on too much work and fails to meet the Sprint Goal. What systemic interventions should the Scrum Master make? (Select all that apply)",
    options: [
      "Help the team reflect on historical capacity and velocity during Sprint Planning",
      "Coach the team to decompose items more finely before committing",
      "Set a maximum capacity limit for the team",
      "Coach the team on the difference between commitment and forecasting",
      "Ask the PO to reduce the number of items proposed for the Sprint"
    ],
    correct: [0, 1, 3], multi: true,
    explanation: "Overcommitment is often about poor forecasting skills. The SM should help the team use historical data (A), work with smaller items (B), and understand that Sprint Planning is a forecast — not a fixed promise (C). Imposing limits or restricting the PO are not effective system-level solutions."
  },
  {
    id: 244, topic: "Organizational Impediments",
    question: "An organization wants to use Scrum but insists on maintaining a traditional PMO that controls all project gates, budgets, and staffing. How should a Scrum Master navigate this?",
    options: [
      "Refuse to work within the PMO structure",
      "Replace the PMO immediately with Scrum structures",
      "Work with the PMO to identify which controls can be adapted to support empirical planning, while gradually building evidence for further change",
      "Run Scrum secretly without the PMO's knowledge"
    ],
    correct: [2], multi: false,
    explanation: "Organizational change is incremental. The SM works within existing structures while building the case for change through evidence. Collaboration with the PMO — showing how Scrum provides the transparency and control they need — is more effective than confrontation."
  },
  {
    id: 245, topic: "Organizational Impediments",
    question: "A Scrum Team identifies a systemic impediment that would take months to resolve at the organizational level. How should they handle it in the short term?",
    options: [
      "Halt work until the impediment is resolved",
      "Accept the impediment and don't mention it again",
      "Make it transparent at the organizational level, continue working while making the impediment visible, and track its business impact",
      "Work around it without escalating"
    ],
    correct: [2], multi: false,
    explanation: "The SM makes systemic impediments transparent, tracks their impact, and escalates to where they can be resolved. Meanwhile, the team continues delivering value. Visibility and persistence — not paralysis or resignation — are key."
  },
  {
    id: 246, topic: "Organizational Impediments",
    question: "A Scrum Team's key Developer is being pulled into another project by their line manager, reducing available capacity significantly. What should the Scrum Master do?",
    options: [
      "Adjust the Sprint Backlog to accommodate reduced capacity and say nothing",
      "Make the capacity impact transparent to the Product Owner and escalate the team stability issue to leadership",
      "Ask the Developer to work overtime to compensate",
      "Cancel the Sprint"
    ],
    correct: [1], multi: false,
    explanation: "Team stability is essential for predictable delivery. The SM must make the impact transparent (to the PO for planning purposes) and address the root cause (part-time allocation) with leadership using business impact data."
  },
  {
    id: 247, topic: "Coaching & Facilitation",
    question: "A Scrum Master notices that Retrospectives have become superficial and team members seem disengaged. What are the MOST likely root causes to investigate? (Select all that apply)",
    options: [
      "Lack of psychological safety — people don't feel safe to speak honestly",
      "Retrospective format has become repetitive and stale",
      "Improvements from previous Retrospectives were never implemented",
      "The Scrum Master talks too much during the Retrospective",
      "The Sprint was too successful"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "Superficial Retrospectives are usually caused by: fear of speaking honestly (A), format fatigue (B), or learned helplessness from unimplemented improvements (C). The SM should investigate all three and address accordingly."
  },
  {
    id: 248, topic: "Coaching & Facilitation",
    question: "A Product Owner and a senior Developer have a persistent disagreement about technical approach that is creating team tension. What stance should the Scrum Master take?",
    options: [
      "Side with the Developer since they have technical expertise",
      "Side with the Product Owner since they have authority over the backlog",
      "Facilitate a structured conversation that separates the technical concerns from the business concerns, helping each party understand the other's perspective",
      "Ignore it — the team will resolve it themselves"
    ],
    correct: [2], multi: false,
    explanation: "The SM facilitates without taking sides. Technical decisions belong to Developers; product decisions to the PO. A facilitated conversation that honors both perspectives — using techniques like interest-based negotiation — is most effective."
  },
  {
    id: 249, topic: "Coaching & Facilitation",
    question: "The Scrum Master realizes they have been solving problems for the team instead of coaching them to solve problems themselves. What should they do?",
    options: [
      "Continue — solving problems quickly is more efficient",
      "Gradually shift from providing solutions to asking coaching questions, building the team's problem-solving capability",
      "Stop helping the team with any problems immediately",
      "Delegate problem-solving to the Product Owner"
    ],
    correct: [1], multi: false,
    explanation: "An SM who solves all problems creates dependency and inhibits team growth. The SM should transition to a coaching stance — asking powerful questions that help team members think through solutions themselves, building sustainable capability."
  },
  {
    id: 250, topic: "Coaching & Facilitation",
    question: "What is the most effective way for a Scrum Master to build psychological safety in a new team?",
    options: [
      "Tell the team that everything said in meetings is confidential",
      "Model vulnerability, reward honesty, create low-stakes opportunities for open dialogue, and address violations of safety immediately",
      "Require everyone to share their personal goals",
      "Avoid discussing difficult topics until the team is established"
    ],
    correct: [1], multi: false,
    explanation: "Psychological safety is built through consistent behavior over time. The SM models it (by being vulnerable and honest), rewards it (by responding positively to honest input), creates practice opportunities, and protects it (by addressing violations)."
  },
  {
    id: 251, topic: "Self-Managing Teams",
    question: "A Scrum Team is asked to estimate features for the upcoming quarter to support organizational budgeting. The team is uncomfortable committing to long-range estimates. How should the Scrum Master advise them?",
    options: [
      "Refuse to provide estimates",
      "Provide detailed story point estimates for the entire quarter",
      "Use probabilistic, range-based forecasts from historical velocity data and communicate them as estimates with confidence intervals, not commitments",
      "Ask management to set the estimates"
    ],
    correct: [2], multi: false,
    explanation: "Probabilistic forecasting using historical data (throughput, velocity ranges) provides the planning information organizations need while maintaining integrity. The SM should coach both the team and leadership on the difference between estimates and commitments."
  },
  {
    id: 252, topic: "Self-Managing Teams",
    question: "The team wants to use a technical practice (e.g., Test-Driven Development) but the Product Owner objects, saying it slows down delivery. What should the Scrum Master do?",
    options: [
      "Side with the Product Owner — delivery speed matters most",
      "Mandate TDD regardless of the PO's objection",
      "Facilitate a conversation about the long-term quality and speed tradeoffs, helping the PO understand how engineering practices affect the Definition of Done and sustainable pace",
      "Ask the developers to practice TDD secretly"
    ],
    correct: [2], multi: false,
    explanation: "Technical practices that support quality are within the Developers' purview. The SM should facilitate a transparent conversation about tradeoffs — helping the PO understand how engineering excellence actually enables faster, sustainable delivery."
  },
  {
    id: 253, topic: "Scaling Scrum",
    question: "In a scaled Scrum environment, dependencies between teams are not being identified until mid-Sprint, causing integration failures. What systemic changes would help? (Select all that apply)",
    options: [
      "Cross-team Sprint Planning or dependency mapping before Sprints",
      "Shared backlog refinement sessions across teams",
      "Regular integration testing environments and practices",
      "Each team working completely independently",
      "Separate release schedules for each team"
    ],
    correct: [0, 1, 2], multi: true,
    explanation: "Preventing integration failures in scaled environments requires proactive dependency identification (A), shared refinement to align understanding (B), and technical practices that support continuous integration (C). Independence and separate schedules increase divergence."
  },
  {
    id: 254, topic: "Scaling Scrum",
    question: "When scaling Scrum, the overall product still needs a coherent vision. Who is responsible for this?",
    options: [
      "Each team's Product Owner independently",
      "The Release Train Engineer",
      "A single Product Owner for the product, supported by the overall Product Backlog and Product Goal",
      "The Scrum Masters of each team collectively"
    ],
    correct: [2], multi: false,
    explanation: "Regardless of how many teams work on a product, there should be one Product Owner with one Product Backlog and one Product Goal. This ensures coherent direction and prevents fragmented product development."
  },
  {
    id: 255, topic: "Evidence-Based Management",
    question: "A team is measuring success by the number of story points delivered. Why might this be misleading?",
    options: [
      "Story points are too difficult to count",
      "Velocity doesn't measure customer value, business outcomes, or whether the right things were built",
      "Story points should be replaced by hours",
      "Story points require specialized training to use"
    ],
    correct: [1], multi: false,
    explanation: "Velocity measures internal throughput, not external value. A team can deliver many story points without creating customer value or achieving business outcomes. EBM shifts focus to outcomes — Time-to-Market, Current Value, Ability to Innovate."
  },
  {
    id: 256, topic: "Evidence-Based Management",
    question: "How can Evidence-Based Management help a Scrum Master justify investment in improving engineering practices?",
    options: [
      "By showing the number of Retrospectives held",
      "By using Ability to Innovate metrics to show how technical debt reduces the team's capacity for new features",
      "By tracking lines of code written",
      "By measuring team happiness scores"
    ],
    correct: [1], multi: false,
    explanation: "Ability to Innovate (A2I) measures what percentage of capacity goes to new value vs. maintenance and fixes. High technical debt lowers A2I. This EBM metric provides business-relevant evidence for investing in engineering practices."
  },
  {
    id: 257, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master wants to introduce mob programming to the team. The team is skeptical. What is the MOST effective approach?",
    options: [
      "Mandate mob programming for one Sprint",
      "Present the concept, run a small experiment with the team's consent, and let results inform the decision",
      "Abandon the idea since the team is resistant",
      "Ask management to mandate the practice"
    ],
    correct: [1], multi: false,
    explanation: "Effective change uses experimentation — hypothesis, action, measure, learn. The SM introduces the idea, creates a safe low-stakes experiment with team buy-in, and lets the evidence drive the decision. This respects team autonomy."
  },
  {
    id: 258, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master has been working with the same team for 18 months. The team is highly effective and self-managing. What should the SM focus on now?",
    options: [
      "Continue doing what they've always done",
      "Shift focus more toward coaching at the organizational level and driving broader Agile adoption",
      "Reduce the frequency of Scrum events",
      "Start managing a second team"
    ],
    correct: [1], multi: false,
    explanation: "As a team matures, they need less day-to-day facilitation. An experienced SM with a high-performing team should invest more energy in organizational coaching, systemic change, and helping other teams and leaders adopt Agile practices."
  },
  {
    id: 259, topic: "Scrum Master as Change Agent",
    question: "Leadership says they want 'Agile transformation' but are not willing to change how they set annual budgets, measure performance, or make staffing decisions. What is the SM's role?",
    options: [
      "Accept the constraint and focus only on team-level Scrum",
      "Coach leadership to understand that organizational structures and processes must evolve for Agile to deliver its full value",
      "Implement Agile at the team level and ignore leadership behaviors",
      "Report the situation to an external Agile consultant"
    ],
    correct: [1], multi: false,
    explanation: "True Agile transformation requires organizational system change — not just team practices. The SM acts as a change agent, coaching leadership on how budgeting, incentive structures, and governance must evolve to support agility."
  },
  {
    id: 260, topic: "Advanced Sprint Management",
    question: "A Scrum Team is three days into a two-week Sprint when they discover that a core technical assumption was wrong, making the Sprint Goal unachievable. What should they do?",
    options: [
      "Continue the Sprint and deliver what they can",
      "Immediately cancel the Sprint and start over",
      "Collaboratively reassess with the Product Owner — either adapt the Sprint Goal if possible, or cancel the Sprint if the goal is truly unachievable",
      "Ask the Scrum Master to extend the Sprint"
    ],
    correct: [2], multi: false,
    explanation: "The team should first try to adapt. If the Sprint Goal can be modified to remain valuable, do so. If the goal is genuinely unachievable and continuing would waste effort, the Product Owner may cancel the Sprint. This decision belongs to the PO after consultation."
  },
  {
    id: 261, topic: "Advanced Sprint Management",
    question: "Stakeholders are disappointed that a feature from last Sprint has defects. The Developers say the feature met the Definition of Done. What is the most likely root cause?",
    options: [
      "The Developers were lying about meeting the DoD",
      "The DoD is not comprehensive enough to prevent defects that matter to stakeholders",
      "Stakeholders have unrealistic expectations",
      "The Sprint was too short"
    ],
    correct: [1], multi: false,
    explanation: "If work meets the DoD but still has quality gaps that matter to stakeholders, the DoD needs to be strengthened. The SM should facilitate a conversation about expanding the DoD to include quality criteria that prevent the types of defects being found."
  },
  {
    id: 262, topic: "Advanced Sprint Management",
    question: "The Product Owner wants to add a 'critical' item to the Sprint three days before the Sprint ends. What is the Scrum Master's role?",
    options: [
      "Add the item to the Sprint Backlog immediately",
      "Refuse the request on behalf of the team",
      "Facilitate a conversation between the PO and Developers about the Sprint Goal impact and let the team negotiate scope",
      "Cancel the Sprint and start a new one"
    ],
    correct: [2], multi: false,
    explanation: "The SM facilitates — not decides. The PO and Developers should discuss: Does this endanger the Sprint Goal? Can something be removed to accommodate it? The team negotiates scope with the PO while protecting the Sprint Goal."
  },
  {
    id: 263, topic: "Scrum Values in Practice",
    question: "A Developer knows that a key product feature has a serious flaw that will affect users, but disclosure would delay the Sprint Review. What should they do?",
    options: [
      "Wait until after the Sprint Review to disclose it",
      "Fix it quietly without telling anyone",
      "Immediately make it transparent — Courage and Openness require disclosure regardless of the consequence",
      "Ask the Scrum Master whether to disclose it"
    ],
    correct: [2], multi: false,
    explanation: "Transparency is non-negotiable in Scrum. The pillars of empiricism require that serious issues be made visible immediately. Hiding problems leads to worse outcomes — users being affected is far worse than a delayed Sprint Review."
  },
  {
    id: 264, topic: "Scrum Values in Practice",
    question: "A Scrum Master observes that the team's Retrospectives produce long lists of improvements but the team only acts on one or two. Is this a problem?",
    options: [
      "Yes — all improvement items must be actioned",
      "No — focusing on a small number of high-impact improvements is more effective than attempting to action everything",
      "Yes — the team should add all items to the Product Backlog",
      "No — improvements are optional in Scrum"
    ],
    correct: [1], multi: false,
    explanation: "Focus is a Scrum value. Acting on one or two carefully chosen, high-impact improvements is more effective than attempting to change everything at once. The SM should coach the team to prioritize depth over breadth."
  },
  {
    id: 265, topic: "Scrum Values in Practice",
    question: "The Scrum Team is facing pressure from senior leadership to cut the Definition of Done to release faster. How should the Scrum Master respond?",
    options: [
      "Agree — stakeholder relationships are important",
      "Explain that reducing the DoD creates technical debt and long-term costs, and help leadership understand the consequences using concrete data",
      "Expand the DoD instead to compensate",
      "Ask the Developers to vote on reducing the DoD"
    ],
    correct: [1], multi: false,
    explanation: "Cutting the DoD creates hidden technical debt and reduces transparency. The SM must protect quality by coaching leadership using data — showing the long-term cost of low-quality releases versus the short-term gain of faster release."
  },
  {
    id: 266, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Master is asked to evaluate if Scrum is being implemented 'correctly' across teams. What is the best approach?",
    options: [
      "Check if all Scrum events are being held and all roles are filled",
      "Assess whether the teams are achieving better outcomes over time through empiricism — not just compliance with Scrum form",
      "Conduct a Scrum audit using a checklist",
      "Report non-compliant teams to management"
    ],
    correct: [1], multi: false,
    explanation: "Scrum maturity is measured by outcomes, not compliance. Teams can run every ceremony perfectly and still not improve. The SM should assess whether empiricism is being used, whether the team is improving, and whether value is being delivered."
  },
  {
    id: 267, topic: "Organizational Impediments",
    question: "An organization wants to use Scrum but has a culture where failure is punished and mistakes are hidden. What does the Scrum Master need to address first?",
    options: [
      "Run a Scrum training course for all employees",
      "Create psychological safety — without it, transparency and empiricism cannot function",
      "Start with Kanban instead since it requires less change",
      "Focus on technical practices first since they are easier to change"
    ],
    correct: [1], multi: false,
    explanation: "A fear-based culture makes Scrum's transparency impossible — people won't surface problems, inspect honestly, or adapt effectively. Psychological safety is the prerequisite for empiricism. The SM must make this the foundational change."
  },
  {
    id: 268, topic: "Coaching & Facilitation",
    question: "What is the difference between a Scrum Master using a 'teaching' stance versus a 'coaching' stance?",
    options: [
      "Teaching is for experienced teams; coaching is for new teams",
      "Teaching transfers knowledge and concepts; coaching helps people discover insights through questioning and reflection",
      "They are the same thing",
      "Teaching is longer; coaching is shorter"
    ],
    correct: [1], multi: false,
    explanation: "Teaching provides knowledge — the SM explains Scrum theory, practices, or concepts. Coaching draws out the learner's own wisdom through questions and reflection. Both are important SM stances applied in different situations."
  },
  {
    id: 269, topic: "Scaling Scrum",
    question: "In a scaled Scrum environment, what is the primary role of a meta-Scrum or overall Product Owner?",
    options: [
      "Managing the Scrum Masters across teams",
      "Ensuring a single, coherent product vision and ordered Product Backlog across all teams working on the product",
      "Assigning work to each team's Sprint",
      "Conducting performance reviews for all Scrum Teams"
    ],
    correct: [1], multi: false,
    explanation: "At scale, the Product Owner remains accountable for the overall product — one Product Goal, one ordered Product Backlog. This ensures all teams work toward the same objective and priorities are coherent across the product."
  },
  {
    id: 270, topic: "Evidence-Based Management",
    question: "A leadership team asks: 'How do we know if our Agile transformation is working?' What EBM-based answer would the Scrum Master give?",
    options: [
      "Count the number of teams practicing Scrum",
      "Measure outcomes like Time-to-Market improvement, customer satisfaction, reduction in time spent on maintenance vs. new features, and business value delivered",
      "Track whether all Scrum events are being held",
      "Measure employee satisfaction scores"
    ],
    correct: [1], multi: false,
    explanation: "EBM measures transformation effectiveness through business outcomes — not Agile activities. The four KVAs (Current Value, T2M, A2I, Unrealized Value) provide evidence-based indicators of whether the transformation is actually delivering better results."
  },
  {
    id: 271, topic: "Self-Managing Teams",
    question: "A new Developer joins the team and immediately begins giving strong opinions on how the team should work. More experienced team members are getting frustrated. What should the Scrum Master do?",
    options: [
      "Ask the new Developer to be quiet until they've been on the team for 3 months",
      "Facilitate a team conversation about how to onboard new members and integrate new perspectives constructively",
      "Side with the experienced team members",
      "Have the new Developer present their ideas to management instead"
    ],
    correct: [1], multi: false,
    explanation: "Team integration challenges are opportunities for the SM to facilitate. The team needs a conversation about how to respectfully integrate new perspectives — balancing the team's established practices with fresh insights from new members."
  },
  {
    id: 272, topic: "Advanced Sprint Management",
    question: "The team notices that the Sprint Review is consistently attended by the same few stakeholders, while the people who most need to give feedback are absent. What should happen?",
    options: [
      "Accept the low attendance — it's the stakeholders' choice",
      "The Product Owner and Scrum Master should work to identify and engage the right stakeholders, making the value of participation clear",
      "Hold a separate, mandatory meeting for absent stakeholders",
      "Record the Sprint Review and email the recording"
    ],
    correct: [1], multi: false,
    explanation: "Sprint Review effectiveness depends on having the right people present. The SM should work with the PO to identify who needs to be there (those who can provide meaningful feedback) and make the case for their participation."
  },
  {
    id: 273, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master wants to measure the impact of coaching interventions. What approach would be MOST effective?",
    options: [
      "Count the number of coaching conversations held",
      "Define specific, observable outcomes before interventions and measure change over time using those outcomes",
      "Ask team members to rate the SM's coaching on a scale of 1-10",
      "Track whether the team attends all Scrum events"
    ],
    correct: [1], multi: false,
    explanation: "Effective measurement requires defining what success looks like upfront. The SM should identify specific, observable changes — team behavior, delivery outcomes, impediment resolution time — and track changes over time to assess coaching effectiveness."
  },
  {
    id: 274, topic: "Advanced Scrum Master Stances",
    question: "A Product Owner at a startup is overwhelmed — they need to conduct customer research, write user stories, manage stakeholders, AND attend all Scrum events. What should the Scrum Master do?",
    options: [
      "Suggest the PO skip Scrum events to manage their time",
      "Coach the PO on time management",
      "Help the PO identify which activities to delegate, simplify, or eliminate, while ensuring core PO accountabilities are maintained",
      "Replace the PO with a committee"
    ],
    correct: [2], multi: false,
    explanation: "An overwhelmed PO is an organizational impediment. The SM helps the PO clarify priorities and identify sustainable ways to fulfill their core accountabilities — which cannot be delegated: Product Goal ownership, backlog ordering, and stakeholder clarity."
  },
  {
    id: 275, topic: "Organizational Impediments",
    question: "An organization decides to cut Sprint length from 2 weeks to 1 week to 'be more Agile.' What concerns should the Scrum Master raise?",
    options: [
      "No concerns — shorter Sprints are always better",
      "Raise concerns if the team doesn't have time to produce a Done Increment in 1 week, as this would undermine the feedback loop",
      "Oppose it entirely since Scrum recommends 2-week Sprints",
      "Support it without question since the organization decided it"
    ],
    correct: [1], multi: false,
    explanation: "Sprint length should be chosen based on the team's ability to produce a Done, potentially releasable Increment. If the team can't produce usable work in 1 week, shorter Sprints reduce feedback quality. The SM should facilitate a discussion about the real goals."
  },
  {
    id: 276, topic: "Coaching & Facilitation",
    question: "A Scrum Master facilitates a Sprint Planning where the team agrees to a Sprint Goal but key assumptions are never surfaced or discussed. What risk does this create?",
    options: [
      "No risk — the goal was agreed",
      "Hidden assumptions that could invalidate the Sprint Goal mid-Sprint, leading to wasted work or a cancelled Sprint",
      "The Sprint Goal will be too narrow",
      "Stakeholders will be disappointed"
    ],
    correct: [1], multi: false,
    explanation: "Unstated assumptions are a major risk in planning. The SM should facilitate techniques (e.g., assumption mapping, pre-mortem) to surface and discuss key assumptions during Sprint Planning, reducing the risk of mid-Sprint surprises."
  },
  {
    id: 277, topic: "Self-Managing Teams",
    question: "A Scrum Team consistently delivers working software but team members are clearly unhappy and some have started looking for other jobs. What should the Scrum Master prioritize?",
    options: [
      "Focus on delivery — the team's job is to deliver",
      "Investigate and address the root causes of team dissatisfaction — sustainable pace and team health are essential for long-term delivery",
      "Ask management to intervene",
      "Increase the frequency of Retrospectives"
    ],
    correct: [1], multi: false,
    explanation: "Sustainable pace is a core Agile principle. A team that delivers but is burning out will eventually collapse. The SM must address team health as a priority — unhealthy teams are not sustainable, and turnover is far more costly than short-term productivity."
  },
  {
    id: 278, topic: "Scaling Scrum",
    question: "In a multi-team product development scenario, what should happen when different teams have different quality standards?",
    options: [
      "Each team keeps their own standards",
      "The team with the highest standards should impose theirs on others",
      "All teams working on the same product must agree on and use the same Definition of Done",
      "Management decides the quality standard"
    ],
    correct: [2], multi: false,
    explanation: "When multiple teams work on the same product, they must have the same Definition of Done. Inconsistent quality standards make integration impossible and undermine transparency across teams."
  },
  {
    id: 279, topic: "Advanced Sprint Management",
    question: "During the Sprint, a Developer realizes the approach they committed to is technically unfeasible. They have an alternative that would take twice as long. What should they do?",
    options: [
      "Keep trying the original approach and say nothing",
      "Abandon the Sprint Goal and start new work",
      "Immediately make it transparent in the Daily Scrum and work with the team and PO to adapt",
      "Ask the Scrum Master to resolve it"
    ],
    correct: [2], multi: false,
    explanation: "Transparency requires surfacing problems immediately. The Daily Scrum is the right forum. The team then collaborates to assess impact on the Sprint Goal and decides together — with the PO if needed — how to adapt."
  },
  {
    id: 280, topic: "Scrum Values in Practice",
    question: "Leadership has mandated that no Sprint can be cancelled, even if the Sprint Goal becomes obsolete. How should the Scrum Master respond?",
    options: [
      "Accept the mandate — leadership has authority",
      "Educate leadership on why Sprint cancellation authority is an important safety valve for the Product Owner, and explain the cost of continuing work on an obsolete goal",
      "Cancel Sprints regardless of the mandate",
      "Ask the Product Owner to ignore the mandate quietly"
    ],
    correct: [1], multi: false,
    explanation: "The SM coaches the organization on Scrum principles. Preventing Sprint cancellation removes an important adaptive mechanism and forces teams to deliver work with no value. Leadership needs to understand the cost of this constraint."
  },
  {
    id: 281, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Master is working with a team that has low trust between team members. They avoid pairing, rarely ask for help, and work in silos. What should the SM focus on?",
    options: [
      "Assign pair programming tasks in the Sprint Backlog",
      "Create opportunities for team members to build relationships, surface the trust issue explicitly, and work on team agreements",
      "Report the trust issues to management",
      "Add more Scrum events to increase interaction"
    ],
    correct: [1], multi: false,
    explanation: "Trust is foundational. The SM should create safe spaces for the team to surface the issue, use team-building techniques, and establish working agreements. Forced collaboration without trust creates more friction."
  },
  {
    id: 282, topic: "Organizational Impediments",
    question: "An organization's HR policy requires annual performance reviews with individual goals for each developer. How does this conflict with Scrum, and how should the SM address it?",
    options: [
      "Accept it — HR policies cannot be changed",
      "Ignore the policy and focus only on team metrics",
      "Educate HR and leadership on how individual performance metrics can undermine team cohesion, and work toward team-based performance measures",
      "Ask developers to set their own individual goals aligned with Sprint performance"
    ],
    correct: [2], multi: false,
    explanation: "Individual performance goals create local optimization and can damage team collaboration. The SM should work with HR and leadership to explore team-based performance frameworks that reward collective outcomes, not individual metrics."
  },
  {
    id: 283, topic: "Evidence-Based Management",
    question: "A Scrum Team has been stable for 6 months. How can the Scrum Master use historical data to improve Sprint Planning accuracy?",
    options: [
      "Use the team's average velocity over the last 3-5 Sprints as a planning guide",
      "Always plan for 100% of average velocity",
      "Use the maximum velocity ever achieved",
      "Ignore historical data and re-estimate from scratch each Sprint"
    ],
    correct: [0], multi: false,
    explanation: "Historical velocity data (last 3-5 Sprints) provides a probabilistic guide for Sprint Planning. Using an average accounts for natural variation. The team can use this as a starting point and adjust for known capacity changes."
  },
  {
    id: 284, topic: "Coaching & Facilitation",
    question: "A Scrum Master notices that the Product Owner is writing very large, vague Product Backlog items that the team struggles to estimate and implement. What should the SM do?",
    options: [
      "Write the PBIs on the PO's behalf",
      "Coach the Product Owner on the INVEST criteria and techniques for writing clear, small, independently valuable stories",
      "Ask the Developers to break down the items during the Sprint",
      "Accept it — PBI quality is the PO's responsibility"
    ],
    correct: [1], multi: false,
    explanation: "The SM serves the PO by helping with effective backlog management techniques. Coaching on PBI quality (clarity, size, value) is a core SM responsibility that improves the entire team's ability to deliver."
  },
  {
    id: 285, topic: "Self-Managing Teams",
    question: "After a Sprint Retrospective, the team agrees to three improvements. Two Sprints later, none have been implemented. What is the Scrum Master's responsibility?",
    options: [
      "This is the team's problem, not the SM's",
      "Implement the improvements on behalf of the team",
      "Help the team understand why improvements aren't happening, and coach them to build improvement into their Sprint Backlog and commitments",
      "Report the team's non-compliance to management"
    ],
    correct: [2], multi: false,
    explanation: "The SM is accountable for the team's effectiveness, which includes helping them actually improve. The SM should investigate root causes (forgotten, deprioritized, too big?) and coach the team to treat improvements as real work with commitment."
  },
  {
    id: 286, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master wants to introduce the practice of Definition of Ready (DoR) to the team. What should they be mindful of?",
    options: [
      "DoR should be mandated immediately",
      "DoR is a useful team practice when used as a guideline, but becomes counterproductive if it creates a gate that blocks work from entering Sprints",
      "DoR is required by the Scrum Guide",
      "DoR should replace the Definition of Done"
    ],
    correct: [1], multi: false,
    explanation: "Definition of Ready can be a helpful team agreement for ensuring items are ready to work on. However, if used as a rigid gate, it can create unnecessary bureaucracy. The SM should coach the team to use it as a guideline, not a blocker."
  },
  {
    id: 287, topic: "Advanced Scrum Master Stances",
    question: "A Scrum Team in a regulated industry argues they can't follow Scrum because of compliance requirements. What is the Scrum Master's response?",
    options: [
      "Abandon Scrum for a regulated environment",
      "Scrum is flexible enough to work within regulatory constraints; the SM helps the team understand how to integrate compliance activities within the Scrum framework",
      "Ignore compliance requirements that conflict with Scrum",
      "Add a compliance officer to the Scrum Team"
    ],
    correct: [1], multi: false,
    explanation: "Scrum is designed to work in complex environments, including regulated industries. Compliance activities become part of the Definition of Done, are reflected in the Sprint Backlog, and are incorporated into the team's practices — not added on top."
  },
  {
    id: 288, topic: "Scaling Scrum",
    question: "Multiple teams are working on separate components of a product but each has a different sprint cadence. What is the primary risk?",
    options: [
      "Teams will develop at different speeds",
      "Integration challenges, misaligned planning, and difficulty producing a combined Increment become significantly harder",
      "Retrospectives cannot be coordinated",
      "Different cadences have no real impact"
    ],
    correct: [1], multi: false,
    explanation: "Aligned Sprint cadences across teams enable synchronized planning, integration, and review. Misaligned cadences create integration complexity, make combined Sprint Reviews impossible, and undermine the rhythm needed for scaling to work effectively."
  },
  {
    id: 289, topic: "Coaching & Facilitation",
    question: "What is a 'powerful question' in the context of coaching, and when should a Scrum Master use them?",
    options: [
      "Questions with complex answers that challenge the team",
      "Open-ended questions that evoke discovery, insight, and creative thinking — used when helping individuals or teams find their own solutions",
      "Questions that only the Scrum Master can answer",
      "Closed questions that quickly gather data"
    ],
    correct: [1], multi: false,
    explanation: "Powerful questions are open-ended and evoke reflection and discovery. Examples: 'What would you do if you weren't afraid of failing?' or 'What's really stopping the team?' They are most valuable when the SM wants to help someone think more deeply rather than provide an answer."
  },
  {
    id: 290, topic: "Organizational Impediments",
    question: "A Scrum Team is co-located but their organization is moving everyone to a new open office layout without dedicated team spaces. What are the risks and how should the SM respond?",
    options: [
      "No risk — open offices are fine for Scrum",
      "Identify the risk to collaboration, focus, and psychological safety; advocate for dedicated team spaces and make the business case to leadership",
      "Accept it without comment",
      "Ask the team to work from home instead"
    ],
    correct: [1], multi: false,
    explanation: "Team space affects collaboration, focus, and psychological safety. The SM should make the risks transparent and advocate for physical conditions that support team effectiveness — using evidence about how workspace impacts delivery."
  },
  {
    id: 291, topic: "Advanced Sprint Management",
    question: "The Sprint Review for Sprint 10 reveals that stakeholders have been unaware of significant progress. They feel disconnected from the product direction. What systemic change should the Scrum Master facilitate?",
    options: [
      "Schedule more frequent stakeholder meetings outside Scrum",
      "Improve the quality and inclusiveness of Sprint Reviews, and help the Product Owner maintain ongoing stakeholder communication between reviews",
      "Send weekly email updates to stakeholders",
      "Include stakeholders in Daily Scrums"
    ],
    correct: [1], multi: false,
    explanation: "The Sprint Review is the primary formal touchpoint, but stakeholder engagement shouldn't wait 2 weeks. The SM should help the PO develop better ongoing communication practices AND improve Sprint Review quality to create genuine connection to the product."
  },
  {
    id: 292, topic: "Scrum Values in Practice",
    question: "A team member consistently says 'yes' to everything but then doesn't deliver. How does this relate to Scrum Values and what should the SM do?",
    options: [
      "This is a commitment issue — remove them from the team",
      "This relates to Courage and Commitment — coach the individual to say 'no' when appropriate and make realistic commitments",
      "Assign them less work each Sprint",
      "Report the behavior to management"
    ],
    correct: [1], multi: false,
    explanation: "Saying yes to everything while underdelivering violates both Courage (not saying no when warranted) and Commitment (not honoring agreements). The SM should coach on making honest, realistic commitments — which requires courage to disappoint in the short term."
  },
  {
    id: 293, topic: "Self-Managing Teams",
    question: "A Scrum Team decides to change their Sprint length without consulting anyone. Is this acceptable?",
    options: [
      "No — Sprint length requires management approval",
      "No — the Scrum Master must approve changes to Sprint length",
      "Yes — the Scrum Team has the authority to decide their Sprint length as part of self-management",
      "Only if the Product Owner approves"
    ],
    correct: [2], multi: false,
    explanation: "Sprint length is a team decision. As a self-managing team, the Scrum Team decides how they work, including their Sprint cadence. They should consider the impact on stakeholders and organizational planning, but the decision is theirs."
  },
  {
    id: 294, topic: "Advanced Scrum Master Stances",
    question: "What is the Scrum Master's responsibility regarding the Scrum Team's technical practices?",
    options: [
      "The SM must approve all technical decisions",
      "The SM has no role in technical practices",
      "The SM coaches the team toward technical excellence and engineering practices that support agility, without directing specific technical choices",
      "The SM implements technical practices that the team refuses to adopt"
    ],
    correct: [2], multi: false,
    explanation: "The SM promotes technical excellence as a foundation for sustainable delivery and agility. This might mean introducing concepts like TDD, CI/CD, or refactoring — but the Developers make specific technical decisions. The SM creates awareness and removes obstacles to good practice."
  },
  {
    id: 295, topic: "Evidence-Based Management",
    question: "A team's velocity has been consistently decreasing over 5 Sprints. Using an EBM lens, what should the Scrum Master investigate? (Select all that apply)",
    options: [
      "Increasing technical debt reducing Ability to Innovate",
      "Developer performance issues",
      "Growing complexity in the Product Backlog items",
      "Team morale and sustainability issues",
      "Whether velocity was inflated initially by gaming the metric"
    ],
    correct: [0, 2, 3, 4], multi: true,
    explanation: "Decreasing velocity signals a systemic issue. Possible causes include: technical debt (A), increased item complexity (C), team morale/burnout (D), or initial velocity inflation (E). Developer performance (B) is rarely the root cause and should be investigated last, not first."
  },
  {
    id: 296, topic: "Scrum Master as Change Agent",
    question: "An organization is adopting Scrum but insists on calling the Scrum Master 'Project Manager' to align with existing HR job classifications. What is the risk and what should the SM do?",
    options: [
      "No risk — the title doesn't matter",
      "The title change will cause confusion about the role's authority and responsibilities; the SM should work to clarify the distinct nature of the SM role while working pragmatically with the title constraint",
      "Refuse the title change completely",
      "Take on project management responsibilities to justify the title"
    ],
    correct: [1], multi: false,
    explanation: "Title misalignment creates role confusion — people will expect the SM to behave like a Project Manager (directive, controlling). The SM must continuously clarify their servant leadership role while working pragmatically on changing the organizational understanding over time."
  },
  {
    id: 297, topic: "Advanced Sprint Management",
    question: "A team uses story points for estimation. A new team member estimates items much higher than others. What should the Scrum Master facilitate?",
    options: [
      "Force the new member to align with team averages",
      "Use the new member's estimates since they may reflect new insights",
      "Facilitate a conversation to understand the different perspectives — the disagreement often surfaces valuable information about complexity or risk",
      "Ask the Product Owner to decide the right estimate"
    ],
    correct: [2], multi: false,
    explanation: "Estimation disagreements are valuable — they reveal different assumptions, knowledge, or risk perceptions. The SM should facilitate discussion to surface these differences. The conversation is often more valuable than the final number."
  },
  {
    id: 298, topic: "Coaching & Facilitation",
    question: "What is a 'meta-retrospective' and when would a Scrum Master use one?",
    options: [
      "A retrospective held at the end of the project",
      "A retrospective about the retrospective process itself — used when the team's Retrospectives are ineffective or stagnant",
      "A retrospective attended by multiple teams",
      "A retrospective facilitated by an external coach"
    ],
    correct: [1], multi: false,
    explanation: "A meta-retrospective inspects the team's retrospective process — asking: 'How effective are our Retrospectives? What prevents us from having honest conversations? What format changes would help?' It's used when the Retrospective itself needs improvement."
  },
  {
    id: 299, topic: "Organizational Impediments",
    question: "A Scrum Team's organization insists they must use a specific project management tool that doesn't support agile workflows. This is causing significant overhead. What should the SM do?",
    options: [
      "Accept the tool constraint without question",
      "Use a workaround tool secretly",
      "Make the overhead cost transparent and work with the organization to either adapt the tool configuration or build a business case for better tooling",
      "Ask the Developers to automate around the tool"
    ],
    correct: [2], multi: false,
    explanation: "Tooling impediments have real costs. The SM should quantify the overhead (time wasted, cognitive load) and use this evidence to engage with the organization about either adapting the tool or selecting more appropriate tooling."
  },
  {
    id: 300, topic: "Scrum Master as Change Agent",
    question: "A Scrum Master has successfully coached a team to high performance over 2 years. Leadership offers the SM a promotion to manage multiple teams. What considerations should guide their decision?",
    options: [
      "Always accept promotions — career advancement is the priority",
      "Consider whether the move aligns with their coaching skills, whether it will allow them to still embody servant leadership, and what impact it will have on the high-performing team they're leaving",
      "Decline — Scrum Masters should never move into management",
      "Accept only if they can remain the SM for their current team"
    ],
    correct: [1], multi: false,
    explanation: "This is a nuanced career decision. Moving to manage multiple teams can extend coaching impact at scale — if done with servant leadership. Key considerations: team handover, fit with the SM's strengths, and whether the new role supports or undermines the principles they've been coaching."
  },
];

// ═══════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }

function drawExam(bank, count) {
  return shuffle(bank).slice(0, Math.min(count, bank.length));
}

const TOPICS_PSM1 = [...new Set(PSM1_BANK.map(q => q.topic))];
const TOPICS_PSM2 = [...new Set(PSM2_BANK.map(q => q.topic))];

// ═══════════════════════════════════════════════════════════════════
// AI QUESTION GENERATOR
// ═══════════════════════════════════════════════════════════════════
async function generateAIQuestion(level, topic) {
  const levelDesc = level === "PSM1"
    ? "PSM I (conceptual, definition-based Scrum knowledge, multiple choice)"
    : "PSM II (advanced scenario-based Scrum Master judgment, nuanced options)";

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `You are an expert Scrum.org exam question writer. Generate a unique, realistic ${levelDesc} question about: "${topic}". 
Return ONLY valid JSON (no markdown, no explanation):
{"question":"...","options":["A","B","C","D"],"correct":[0],"multi":false,"explanation":"Why correct per Scrum Guide 2020."}`
      }]
    })
  });
  const data = await res.json();
  const text = data.content?.find(b => b.type === "text")?.text || "";
  const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
  return { ...parsed, id: Date.now(), topic, ai: true };
}

// ═══════════════════════════════════════════════════════════════════
// UI PRIMITIVES
// ═══════════════════════════════════════════════════════════════════
function ProgressBar({ value, max, color = "#0ea5e9" }) {
  const pct = max ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ background: "#f1f5f9", borderRadius: 8, height: 6, overflow: "hidden" }}>
      <div style={{ width: `${pct}%`, height: "100%", borderRadius: 8, background: color, transition: "width 0.4s ease" }} />
    </div>
  );
}

function Badge({ children, color = "#0ea5e9" }) {
  return (
    <span style={{
      background: color + "15", color, border: `1px solid ${color}35`,
      borderRadius: 20, padding: "2px 10px", fontSize: 11, fontWeight: 600,
      fontFamily: "monospace", letterSpacing: 0.5, whiteSpace: "nowrap"
    }}>{children}</span>
  );
}
// ── Google AdSense Banner ─────────────────────────────────────────────────────
// Replace ca-pub-5940576309620894 with your Publisher ID
// Replace the data-ad-slot with your actual Ad Unit slot ID
function AdBanner() {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {}
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "24px auto", maxWidth: 728, padding: "0 16px" }}>
      <div style={{ fontSize: 10, color: "#cbd5e1", marginBottom: 4, textTransform: "uppercase", letterSpacing: 1 }}>Advertisement</div>
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5940576309620894"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true" />
    </div>
  );
}



// ═══════════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════════
export default function App() {
  useGoogleAnalytics();
  const [screen, setScreen] = useState("home");
  const [examLevel, setExamLevel] = useState(null);
  const [examMode, setExamMode] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft(p => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timerActive, timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { if (timeLeft === 0 && timerActive) finishExam(); }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps // eslint-disable-line react-hooks/exhaustive-deps

  const startFullExam = useCallback((level) => {
    const bank = level === "PSM1" ? PSM1_BANK : PSM2_BANK;
    const count = level === "PSM1" ? 80 : 30;
    setQuestions(drawExam(bank, count));
    setExamLevel(level); setExamMode("full");
    setCurrent(0); setAnswers({}); setSelected([]); setShowResult(false);
    setTimeLeft(level === "PSM1" ? 3600 : 5400);
    setTimerActive(true); setScreen("exam"); trackEvent("start_exam", "exam", level + "_full");
  }, []);

  const startTopicMode = useCallback((level, topic) => {
    const bank = level === "PSM1" ? PSM1_BANK : PSM2_BANK;
    const topicQs = shuffle(bank.filter(q => q.topic === topic));
    setQuestions(topicQs); setExamLevel(level); setExamMode("topic"); setSelectedTopic(topic);
    setCurrent(0); setAnswers({}); setSelected([]); setShowResult(false);
    setTimerActive(false); setTimeLeft(0); setScreen("exam");
  }, []);

  const startAIExam = useCallback(async (level, topic) => {
    setLoading(true);
    try {
      const bank = level === "PSM1" ? PSM1_BANK : PSM2_BANK;
      const base = shuffle(bank.filter(q => q.topic === topic));
      const aiQ = await generateAIQuestion(level, topic);
      setQuestions([aiQ, ...base]);
      setExamLevel(level); setExamMode("ai"); setSelectedTopic(topic);
      setCurrent(0); setAnswers({}); setSelected([]); setShowResult(false);
      setTimerActive(false); setScreen("exam");
    } catch (e) {
      alert("AI generation failed. Using bank questions instead.");
      startTopicMode(level, topic);
    }
    setLoading(false);
  }, [startTopicMode]); // eslint-disable-line react-hooks/exhaustive-deps

  const selectOption = (idx) => {
    if (showResult) return;
    const q = questions[current];
    if (q.multi) {
      setSelected(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    } else {
      setSelected([idx]);
    }
  };

  const submitAnswer = () => {
    const q = questions[current];
    const isCorrect = q.correct.length === selected.length && q.correct.every(c => selected.includes(c));
    setAnswers(prev => ({ ...prev, [q.id]: { selected, correct: isCorrect } }));
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(p => p + 1); setSelected([]); setShowResult(false);
    } else { finishExam(); }
  };

  const finishExam = () => {
    setTimerActive(false);
    const all = { ...answers };
    const q = questions[current];
    if (selected.length && !all[q.id]) {
      all[q.id] = { selected, correct: q.correct.length === selected.length && q.correct.every(c => selected.includes(c)) };
    }
    const total = questions.length;
    const correct = Object.values(all).filter(a => a.correct).length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    setResults({ total, correct, score, passing: 85, passed: score >= 85, answers: all });
    setScreen("results");
  };

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  // ── HOME ──────────────────────────────────────────────────────────
  if (screen === "home") return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <div style={{ background: "#0f172a", padding: "72px 24px 56px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% -10%, #0ea5e922 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0ea5e912", border: "1px solid #0ea5e928", borderRadius: 20, padding: "5px 14px", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, background: "#34d399", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 0 3px #34d39930" }} />
            <span style={{ color: "#7dd3fc", fontSize: 11, fontWeight: 600, letterSpacing: 1.2, textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>Scrum.org Exam Preparation</span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", color: "#fff", fontSize: "clamp(34px, 6vw, 52px)", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.15 }}>
            PSM Exam<br /><span style={{ color: "#38bdf8", fontStyle: "italic" }}>Simulator</span>
          </h1>
          <p style={{ color: "#94a3b8", maxWidth: 440, margin: "0 auto 40px", fontSize: 15, lineHeight: 1.75 }}>
            260-question bank. Every exam draws a unique random set — just like Scrum.org. Includes AI-generated questions for unlimited practice.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {[["PSM I", "#0ea5e9"], ["PSM II", "#8b5cf6"]].map(([lvl, color]) => (
              <button key={lvl} onClick={() => { setExamLevel(lvl.replace(" ", "")); setScreen("mode-select"); }}
                style={{ background: color, color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.15s", boxShadow: `0 8px 24px ${color}45`, fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${color}55`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = `0 8px 24px ${color}45`; }}
              >Practice {lvl} →</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 14, marginBottom: 44 }}>
          {[
            { v: "160+", l: "PSM I Questions", s: "from 260-Q bank" },
            { v: "100+", l: "PSM II Scenarios", s: "advanced cases" },
            { v: "80 / 30", l: "Qs per Exam", s: "randomly drawn" },
            { v: "85%", l: "Passing Score", s: "both exams" },
            { v: "∞", l: "AI Questions", s: "unique per topic" }
          ].map(s => (
            <div key={s.l} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "20px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 30, fontWeight: 700, color: "#0f172a" }}>{s.v}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#334155", marginTop: 4 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.s}</div>
            </div>
          ))}
        </div>

        <AdBanner />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { title: "PSM I", color: "#0ea5e9", items: ["80 questions drawn from 199+ bank", "60 minutes timed", "85% to pass", "Conceptual Scrum knowledge", "Multiple choice & multi-select"] },
            { title: "PSM II", color: "#8b5cf6", items: ["30 questions drawn from 100+ bank", "90 minutes timed", "85% to pass", "Advanced scenario judgment", "Complex multi-select cases"] }
          ].map(card => (
            <div key={card.title} style={{ background: "#fff", border: `1.5px solid ${card.color}25`, borderRadius: 14, padding: "24px" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 700, color: card.color, marginBottom: 16 }}>{card.title}</div>
              {card.items.map(item => (
                <div key={item} style={{ display: "flex", gap: 8, marginBottom: 8, fontSize: 13, color: "#475569", alignItems: "flex-start" }}>
                  <span style={{ color: card.color, marginTop: 1, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ borderTop: "1px solid #e2e8f0", marginTop: 40, paddingTop: 24, textAlign: "center" }}>
          <p style={{ color: "#94a3b8", fontSize: 12, margin: 0, lineHeight: 1.8 }}>
            Built by{" "}
            <a href="https://github.com/hakanmertb" target="_blank" rel="noopener noreferrer"
              style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: 600 }}>
              Hakan
            </a>
            {" "}· Not affiliated with Scrum.org · Practice tool only
          </p>
        </div>
      </div>
    </div>
  );

  // ── MODE SELECT ───────────────────────────────────────────────────
  if (screen === "mode-select") {
    const level = examLevel;
    const color = level === "PSM1" ? "#0ea5e9" : "#8b5cf6";
    const topics = level === "PSM1" ? TOPICS_PSM1 : TOPICS_PSM2;
    const bank = level === "PSM1" ? PSM1_BANK : PSM2_BANK;
    const examCount = level === "PSM1" ? 80 : 30;

    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,400&family=DM+Mono&display=swap" rel="stylesheet" />
        <div style={{ background: "#0f172a", padding: "28px 24px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={() => setScreen("home")} style={{ background: "none", border: "1px solid #334155", color: "#94a3b8", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>← Back</button>
            <div>
              <h2 style={{ fontFamily: "'Fraunces', serif", color: "#fff", margin: 0, fontSize: 22 }}>
                {level.replace("PSM", "PSM ")} — <span style={{ color, fontStyle: "italic" }}>Choose Mode</span>
              </h2>
              <p style={{ color: "#64748b", margin: "4px 0 0", fontSize: 12, fontFamily: "'DM Mono', monospace" }}>
                {bank.length} questions in bank → {examCount} randomly drawn per exam
              </p>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px" }}>
          {/* Full Exam */}
          <div onClick={() => startFullExam(level)} style={{
            background: "#fff", border: `2px solid ${color}35`, borderRadius: 16, padding: "24px 28px",
            cursor: "pointer", transition: "all 0.15s", marginBottom: 16
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.boxShadow = `0 6px 24px ${color}18`; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = `${color}35`; e.currentTarget.style.boxShadow = ""; e.currentTarget.style.transform = ""; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 6 }}>🎯 Full Exam Simulation</div>
                <div style={{ color: "#64748b", fontSize: 13 }}>
                  {level === "PSM1" ? "80 questions randomly drawn" : "30 questions randomly drawn"} · Timed · New mix every attempt
                </div>
              </div>
              <Badge color={color}>RECOMMENDED</Badge>
            </div>
          </div>

          <AdBanner />

          {/* Topic Study */}
          <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 16, padding: "24px 28px", marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a", marginBottom: 6 }}>📚 Topic Study Mode</div>
            <div style={{ color: "#64748b", fontSize: 13, marginBottom: 18 }}>Practice specific areas. All topic questions, shuffled. No timer.</div>
            <div style={{ display: "grid", gap: 9 }}>
              {topics.map(t => {
                const count = bank.filter(q => q.topic === t).length;
                return (
                  <div key={t} onClick={() => startTopicMode(level, t)} style={{
                    background: "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 10,
                    padding: "13px 18px", cursor: "pointer", transition: "all 0.15s",
                    display: "flex", justifyContent: "space-between", alignItems: "center"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = color + "08"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "#f8fafc"; }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 13 }}>{t}</div>
                      <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{count} questions</div>
                    </div>
                    <span style={{ color: color, fontSize: 16 }}>→</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Mode */}
          <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 16, padding: "24px 28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>✨ AI-Generated Questions</div>
              <Badge color="#10b981">AI POWERED</Badge>
            </div>
            <div style={{ color: "#64748b", fontSize: 13, marginBottom: 18 }}>Fresh AI question + bank questions, per topic. Unlimited variety.</div>
            <div style={{ display: "grid", gap: 9 }}>
              {topics.map(t => (
                <div key={t} onClick={() => !loading && startAIExam(level, t)} style={{
                  background: loading ? "#f8fafc" : "#f0fdf4", border: "1.5px solid #d1fae5", borderRadius: 10,
                  padding: "13px 18px", cursor: loading ? "not-allowed" : "pointer", transition: "all 0.15s",
                  display: "flex", justifyContent: "space-between", alignItems: "center", opacity: loading ? 0.5 : 1
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.borderColor = "#10b981"; e.currentTarget.style.background = "#dcfce7"; }}}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#d1fae5"; e.currentTarget.style.background = "#f0fdf4"; }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: "#1e293b", fontSize: 13 }}>{t}</div>
                    <div style={{ fontSize: 11, color: "#6b7280", marginTop: 2 }}>1 fresh AI question + bank questions</div>
                  </div>
                  <span style={{ fontSize: 15 }}>{loading ? "⏳" : "✨"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── EXAM ──────────────────────────────────────────────────────────
  if (screen === "exam" && questions.length > 0) {
    const q = questions[current];
    const color = examLevel === "PSM1" ? "#0ea5e9" : "#8b5cf6";
    const timerColor = timeLeft < 300 ? "#ef4444" : timeLeft < 600 ? "#f59e0b" : "#10b981";

    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,400&family=DM+Mono&display=swap" rel="stylesheet" />
        <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }`}</style>

        <div style={{ background: "#0f172a", borderBottom: "1px solid #1e293b" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 56 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button onClick={() => { setTimerActive(false); setScreen("mode-select"); }}
                style={{ background: "none", border: "1px solid #334155", color: "#94a3b8", borderRadius: 7, padding: "5px 12px", cursor: "pointer", fontSize: 12 }}>← Exit</button>
              <span style={{ fontFamily: "'DM Mono', monospace", color: "#64748b", fontSize: 11 }}>
                {examLevel} · {examMode === "full" ? "Full Exam" : selectedTopic}
              </span>
              {q.ai && <Badge color="#10b981">AI</Badge>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ fontFamily: "'DM Mono', monospace", color: "#94a3b8", fontSize: 12 }}>{current + 1}/{questions.length}</span>
              {timerActive && (
                <span style={{ fontFamily: "'DM Mono', monospace", color: timerColor, fontSize: 13, fontWeight: 600, background: timerColor + "18", padding: "3px 10px", borderRadius: 7 }}>
                  ⏱ {fmt(timeLeft)}
                </span>
              )}
            </div>
          </div>
          <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px 10px" }}>
            <ProgressBar value={current} max={questions.length} color={color} />
          </div>
        </div>

        <div style={{ maxWidth: 780, margin: "0 auto", padding: "36px 24px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <Badge color={color}>{q.topic}</Badge>
            {q.multi && <Badge color="#f59e0b">Select all that apply</Badge>}
          </div>

          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(17px, 2.5vw, 21px)", color: "#0f172a", fontWeight: 700, lineHeight: 1.55, marginBottom: 28 }}>
            {q.question}
          </h2>

          <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
            {q.options.map((opt, idx) => {
              const isSel = selected.includes(idx);
              const isCorrect = q.correct.includes(idx);
              let bg = "#fff", border = "#e2e8f0", tc = "#334155", fw = 400;
              if (showResult) {
                if (isCorrect) { bg = "#f0fdf4"; border = "#22c55e"; tc = "#15803d"; fw = 600; }
                else if (isSel) { bg = "#fef2f2"; border = "#ef4444"; tc = "#b91c1c"; }
              } else if (isSel) { bg = color + "0d"; border = color; tc = "#0f172a"; fw = 500; }

              const icon = showResult
                ? isCorrect ? "✓" : isSel ? "✗" : ""
                : isSel ? "●" : "";
              const iconColor = showResult ? (isCorrect ? "#22c55e" : "#ef4444") : color;

              return (
                <div key={idx} onClick={() => selectOption(idx)} style={{
                  background: bg, border: `1.5px solid ${border}`, borderRadius: 11,
                  padding: "15px 18px", cursor: showResult ? "default" : "pointer",
                  transition: "all 0.14s", display: "flex", alignItems: "flex-start", gap: 12
                }}
                  onMouseEnter={e => { if (!showResult && !isSel) { e.currentTarget.style.borderColor = color; e.currentTarget.style.background = color + "07"; }}}
                  onMouseLeave={e => { if (!showResult && !isSel) { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.background = "#fff"; }}}
                >
                  <span style={{ color: iconColor, fontSize: 14, fontWeight: 700, width: 18, flexShrink: 0, marginTop: 1 }}>{icon}</span>
                  <span style={{ color: tc, fontSize: 14, lineHeight: 1.65, fontWeight: fw }}>{opt}</span>
                </div>
              );
            })}
          </div>

          {showResult && (
            <div style={{ background: "#f0f9ff", border: "1.5px solid #bae6fd", borderRadius: 12, padding: "18px 22px", marginBottom: 24, animation: "fadeUp 0.3s ease" }}>
              <div style={{ fontWeight: 700, color: "#0369a1", marginBottom: 8, fontSize: 11, letterSpacing: 0.8, textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>💡 Explanation</div>
              <p style={{ color: "#0c4a6e", fontSize: 14, lineHeight: 1.7, margin: 0 }}>{q.explanation}</p>
            </div>
          )}

          <div style={{ display: "flex", gap: 10 }}>
            {!showResult ? (
              <button onClick={submitAnswer} disabled={selected.length === 0} style={{
                background: selected.length ? color : "#e2e8f0", color: selected.length ? "#fff" : "#94a3b8",
                border: "none", borderRadius: 11, padding: "13px 30px", fontSize: 14, fontWeight: 600,
                cursor: selected.length ? "pointer" : "not-allowed", fontFamily: "'DM Sans', sans-serif", transition: "all 0.14s"
              }}>Submit Answer</button>
            ) : (
              <button onClick={current < questions.length - 1 ? nextQuestion : finishExam} style={{
                background: color, color: "#fff", border: "none", borderRadius: 11,
                padding: "13px 30px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif"
              }}>{current < questions.length - 1 ? "Next Question →" : "Finish & See Results →"}</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTS ───────────────────────────────────────────────────────
  if (screen === "results" && results) {
    const color = examLevel === "PSM1" ? "#0ea5e9" : "#8b5cf6";
    const sc = results.passed ? "#22c55e" : results.score >= 70 ? "#f59e0b" : "#ef4444";

    return (
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,700;1,9..144,400&family=DM+Mono&display=swap" rel="stylesheet" />

        <div style={{ background: "#0f172a", padding: "48px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>{results.passed ? "🎉" : results.score >= 70 ? "📈" : "📚"}</div>
            <h1 style={{ fontFamily: "'Fraunces', serif", color: "#fff", fontSize: 28, margin: "0 0 8px" }}>
              {results.passed ? "You passed!" : results.score >= 70 ? "Getting closer!" : "Keep studying!"}
            </h1>
            <p style={{ color: "#64748b", fontSize: 14, marginBottom: 28 }}>
              {examLevel.replace("PSM", "PSM ")} · {examMode === "full" ? "Full Exam" : selectedTopic || "Topic Practice"} · Need 85% to pass
            </p>
            <div style={{ display: "inline-block", background: sc + "18", border: `2px solid ${sc}`, borderRadius: 16, padding: "18px 52px" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 60, fontWeight: 700, color: sc, lineHeight: 1 }}>{results.score}%</div>
              <div style={{ color: "#64748b", fontSize: 12, marginTop: 4, fontFamily: "'DM Mono', monospace" }}>{results.correct} / {results.total} correct</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 580, margin: "0 auto", padding: "36px 24px" }}>
          <div style={{ marginBottom: 8 }}>
            <ProgressBar value={results.score} max={100} color={sc} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#94a3b8" }}>0%</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#f59e0b" }}>Pass: 85%</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#94a3b8" }}>100%</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 32 }}>
            {[
              { l: "Score", v: results.score + "%", c: sc },
              { l: "Correct", v: results.correct, c: "#22c55e" },
              { l: "Incorrect", v: results.total - results.correct, c: "#ef4444" }
            ].map(s => (
              <div key={s.l} style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 12, padding: "18px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 26, fontWeight: 700, color: s.c }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <AdBanner />

          <div style={{ background: "#fff", border: "1.5px solid #e2e8f0", borderRadius: 14, padding: "20px", marginBottom: 28 }}>
            <div style={{ fontWeight: 600, color: "#334155", marginBottom: 12, fontSize: 13 }}>
              {results.passed ? "✅ Well done! Ready for the real exam." : "📌 Study tips for improvement:"}
            </div>
            {!results.passed && (
              <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
                • Review the explanations for incorrect answers<br />
                • Focus on topic-specific study for weak areas<br />
                • Try the AI mode for fresh question variety<br />
                • Take multiple full exams to build confidence
              </div>
            )}
            {results.passed && (
              <div style={{ fontSize: 13, color: "#475569", lineHeight: 1.7 }}>
                • Practice with more full exams to build consistency<br />
                • Aim for 90%+ consistently before the real exam<br />
                • Each attempt uses a different random question set<br />
                • Review the Scrum Guide one more time before exam day
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={() => startFullExam(examLevel)} style={{ background: color, color: "#fff", border: "none", borderRadius: 11, padding: "13px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              New Exam (fresh questions)
            </button>
            <button onClick={() => setScreen("mode-select")} style={{ background: "#fff", color: "#475569", border: "1.5px solid #e2e8f0", borderRadius: 11, padding: "13px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Choose Mode
            </button>
            <button onClick={() => setScreen("home")} style={{ background: "#fff", color: "#475569", border: "1.5px solid #e2e8f0", borderRadius: 11, padding: "13px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>
              Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <div style={{ padding: 40, color: "#94a3b8", fontFamily: "sans-serif" }}>Loading...</div>;
}
