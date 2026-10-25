"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./ChapterLesson.css";

const lessons = {
  "01": {
    title: "Introduction to Prompt Engineering",
    category: "Fundamentals",
    level: "Beginner",
    duration: "18 min",
    description:
      "Understand how to communicate with AI and get more useful, relevant results.",
    sections: [
      {
        title: "What is Prompt Engineering?",
        text: "Prompt engineering is the process of designing and improving instructions given to an AI model. A prompt may be a question, command, or detailed description of the result you want.",
        points: [
          "Clearly explain what you want.",
          "Provide relevant context.",
          "Mention your expected answer format.",
        ],
      },
      {
        title: "Why does it matter?",
        text: "Clear instructions help AI understand your goal. They can reduce ambiguity and make the response more relevant, although AI can still make mistakes.",
        points: [
          "Get more relevant answers.",
          "Save time on repeated instructions.",
          "Use AI effectively for study, coding, and writing.",
        ],
      },
      {
        title: "The basic structure of a prompt",
        text: "A useful prompt often contains a role, task, context, and output format. These are helpful building blocks, not mandatory rules for every prompt.",
        points: [
          "Role: Act as a computer science tutor.",
          "Task: Explain machine learning.",
          "Context: I am a beginner.",
          "Format: Use five simple bullet points.",
        ],
      },
    ],
    example: {
      bad: "Explain computers.",
      good: "Act as a computer science teacher. Explain how computers work to a beginner using five simple bullet points and one real-life example.",
      reason: "The improved prompt specifies the role, audience, task, and format.",
    },
    exercise:
      "Ask AI to explain a topic you are studying. Specify your audience, the task, and how you want the answer formatted.",
  },

  "02": {
    title: "Anatomy of a Good Prompt",
    category: "Fundamentals",
    level: "Beginner",
    duration: "24 min",
    description:
      "Learn the building blocks that make an AI prompt clear and effective.",
    sections: [
      {
        title: "Give a clear role",
        text: "A role helps establish the perspective or style you want from AI.",
        points: [
          "Act as a programming tutor.",
          "Act as a technical interviewer.",
          "Act as a professional content editor.",
        ],
      },
      {
        title: "Define the task and context",
        text: "Explain the exact task and include information that helps AI tailor its response to your situation.",
        points: [
          "Replace vague requests with specific tasks.",
          "Mention your skill level or intended audience.",
          "Provide relevant examples or background.",
        ],
      },
      {
        title: "Add constraints and output format",
        text: "Constraints set boundaries. Output instructions explain how the result should be presented.",
        points: [
          "Specify a word limit when necessary.",
          "Request a table, checklist, or numbered steps.",
          "Mention the language and tone you prefer.",
        ],
      },
    ],
    example: {
      bad: "Teach me JavaScript.",
      good: "Act as a beginner-friendly JavaScript tutor. Explain variables with three simple examples and finish with a short practice question.",
      reason: "The improved prompt defines the role, topic, examples, and expected ending.",
    },
    exercise:
      "Write a prompt that includes a role, a specific task, useful context, and an expected output format.",
  },

  "03": {
    title: "Prompting Techniques",
    category: "Techniques",
    level: "Intermediate",
    duration: "32 min",
    description:
      "Explore zero-shot, few-shot, role prompting, and iterative refinement.",
    sections: [
      {
        title: "Zero-shot prompting",
        text: "Give AI a task without providing examples of the desired answer.",
        points: [
          "Useful for common and straightforward tasks.",
          "Keep instructions direct and clear.",
          "Example: Summarize this paragraph in three sentences.",
        ],
      },
      {
        title: "Few-shot prompting",
        text: "Provide a small number of examples so AI can follow a particular pattern.",
        points: [
          "Show examples of input and expected output.",
          "Keep examples consistent.",
          "Use this when a specific format or style matters.",
        ],
      },
      {
        title: "Role prompting and refinement",
        text: "Set a useful perspective for AI, then improve your instructions based on the response.",
        points: [
          "Specify the relevant expertise or audience.",
          "Identify what is missing from the first answer.",
          "Add instructions and try again.",
        ],
      },
    ],
    example: {
      bad: "Classify this review.",
      good: "Classify the review as Positive or Negative. Example: 'Loved the service' → Positive. Review: 'The delivery was late and the food was cold.'",
      reason: "The example demonstrates the expected classification pattern.",
    },
    exercise:
      "Try the same task once without examples and once with two examples. Compare the responses.",
  },

  "04": {
    title: "Common Prompting Mistakes",
    category: "Best Practices",
    level: "Beginner",
    duration: "20 min",
    description:
      "Discover common instruction problems and learn how to improve your prompts.",
    sections: [
      {
        title: "Being too vague",
        text: "Broad instructions leave AI guessing about your real goal.",
        points: [
          "State the exact task.",
          "Specify the audience and purpose.",
          "Replace 'make it better' with measurable improvements.",
        ],
      },
      {
        title: "Missing context and constraints",
        text: "Without relevant context, an answer may not fit your requirements.",
        points: [
          "Mention the project or problem.",
          "Include technical or formatting requirements.",
          "Avoid contradictory instructions.",
        ],
      },
      {
        title: "Not checking the answer",
        text: "Even a well-written prompt cannot guarantee that every AI response is correct.",
        points: [
          "Verify important facts.",
          "Test generated code before using it.",
          "Ask for clarification when assumptions are unclear.",
        ],
      },
    ],
    example: {
      bad: "Write some code for my website.",
      good: "Create a responsive React contact form with name, email, and message fields. Include basic validation and explain where the component should be placed.",
      reason: "The improved prompt defines the framework, required fields, behavior, and explanation.",
    },
    exercise:
      "Take one vague prompt you have used before. Rewrite it with a clear task, context, and specific requirements.",
  },

  "05": {
    title: "Advanced Prompt Engineering",
    category: "Advanced",
    level: "Advanced",
    duration: "40 min",
    description:
      "Learn structured instructions, task decomposition, and multi-step AI workflows.",
    sections: [
      {
        title: "Structured prompting",
        text: "Organize complex instructions into clearly labeled sections so requirements are easier to follow.",
        points: [
          "Separate context, task, constraints, and output.",
          "Use headings or delimiters to distinguish supplied data.",
          "Define success criteria.",
        ],
      },
      {
        title: "Break complex tasks into steps",
        text: "Large tasks are often easier to manage as smaller stages with clear outputs.",
        points: [
          "Define the overall objective.",
          "Split work into manageable subtasks.",
          "Review intermediate results before continuing.",
        ],
      },
      {
        title: "Prompt chaining and evaluation",
        text: "Prompt chaining uses the output of one step as input to another. Evaluate each stage rather than assuming the entire workflow is correct.",
        points: [
          "Use separate prompts for distinct stages.",
          "Check intermediate outputs.",
          "Compare results against defined requirements.",
        ],
      },
    ],
    example: {
      bad: "Build my entire application.",
      good: "First propose the application architecture and routes. Next, outline the components and data flow. Wait for review before generating implementation code.",
      reason: "The improved prompt breaks a complex task into reviewable stages.",
    },
    exercise:
      "Choose a complex task and divide it into three stages. Write a separate prompt for each stage and define how you will check the output.",
  },

  "06": {
    title: "Prompt Testing & Optimization",
    category: "Optimization",
    level: "Intermediate",
    duration: "28 min",
    description:
      "Learn to test prompts systematically and improve response quality.",
    sections: [
      {
        title: "Define success criteria",
        text: "Before comparing prompts, decide what a successful response should contain.",
        points: [
          "Accuracy and relevance.",
          "Following the requested format.",
          "Completeness and clarity.",
        ],
      },
      {
        title: "Test one change at a time",
        text: "Compare versions using the same task and similar conditions. Change one important instruction at a time to understand its effect.",
        points: [
          "Save the original prompt.",
          "Create a revised version.",
          "Compare both against the same criteria.",
        ],
      },
      {
        title: "Evaluate and refine",
        text: "Review multiple outputs when possible. A prompt that works once may not work equally well on every input.",
        points: [
          "Record failures and useful results.",
          "Test different representative examples.",
          "Keep changes that improve your evaluation criteria.",
        ],
      },
    ],
    example: {
      bad: "Make this prompt better.",
      good: "Compare these two prompts using relevance, factual accuracy, and format compliance. Score each criterion from 1 to 5, explain the scores, and recommend one improvement.",
      reason: "The improved prompt defines measurable evaluation criteria.",
    },
    exercise:
      "Create two versions of a prompt, test them on the same three inputs, and record which version better meets your success criteria.",
  },
};

export default function ChapterLesson() {
  const params = useParams();
  const router = useRouter();
  const id = String(params.id || "").padStart(2, "0");
  const lesson = lessons[id];

  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <main className="lesson-not-found">
        <h1>Chapter not found</h1>
        <p>Please select a valid chapter from Browse Chapters.</p>
        <button onClick={() => router.push("/browse-chapter")}>
          Back to Chapters
        </button>
      </main>
    );
  }

  const previous = String(Number(id) - 1).padStart(2, "0");
  const next = String(Number(id) + 1).padStart(2, "0");

  return (
    <main className="lesson-page">
      <header className="lesson-navbar">
        <a href="/browse-chapter" className="lesson-brand">
          <span>✦</span> promptly
        </a>

        <button
          className="back-chapters"
          onClick={() => router.push("/browse-chapter")}
        >
          ← All Chapters
        </button>
      </header>

      <section className="lesson-hero">
        <div className="lesson-breadcrumb">
          <button onClick={() => router.push("/browse-chapter")}>
            Learning Path
          </button>
          <span>/</span>
          <span>Chapter {id}</span>
        </div>

        <div className="lesson-kicker">
          CHAPTER {id} <span>•</span> {lesson.category.toUpperCase()}
        </div>

        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>

        <div className="lesson-meta">
          <span>◉ {lesson.level}</span>
          <span>◷ {lesson.duration}</span>
          <span>▤ {lesson.sections.length} lessons</span>
        </div>
      </section>

      <div className="lesson-layout">
        <aside className="lesson-sidebar">
          <span className="lesson-sidebar-label">IN THIS CHAPTER</span>

          {lesson.sections.map((section, index) => (
            <a key={section.title} href={`#section-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          ))}

          <div className="lesson-progress">
            <span>CHAPTER STATUS</span>
            <strong>{completed ? "Completed ✓" : "In progress"}</strong>
            <div className="lesson-progress-track">
              <div
                style={{ width: completed ? "100%" : "10%" }}
              />
            </div>
          </div>
        </aside>

        <article className="lesson-body">
          <div className="lesson-welcome">
            <span>✦</span>
            <div>
              <strong>Welcome to Chapter {id}</strong>
              <p>
                Read the concepts, review the example, and complete the
                practical exercise at your own pace.
              </p>
            </div>
          </div>

          {lesson.sections.map((section, index) => (
            <section
              className="lesson-topic"
              id={`section-${index + 1}`}
              key={section.title}
            >
              <span className="topic-number">
                {String(index + 1).padStart(2, "0")} / CONCEPT
              </span>

              <h2>{section.title}</h2>
              <p>{section.text}</p>

              <ul>
                {section.points.map((point) => (
                  <li key={point}>
                    <span>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="lesson-example">
            <span className="topic-number">PRACTICAL EXAMPLE</span>
            <h2>Improve the prompt</h2>

            <div className="prompt-example-box basic">
              <span>BEFORE</span>
              <p>{lesson.example.bad}</p>
            </div>

            <div className="prompt-example-box improved">
              <span>AFTER</span>
              <p>{lesson.example.good}</p>
            </div>

            <p className="example-reason">
              <strong>Why it works:</strong> {lesson.example.reason}
            </p>
          </section>

          <section className="lesson-exercise">
            <span className="topic-number">YOUR TURN</span>
            <h2>Practice what you learned</h2>
            <p>{lesson.exercise}</p>
            <button onClick={() => router.push("/playground")}>
              Open Prompt Playground ↗
            </button>
          </section>

          <div className="lesson-finish">
            <div>
              <h3>{completed ? "Chapter completed!" : "Finished this chapter?"}</h3>
              <p>
                {completed
                  ? "You can revisit this lesson whenever you like."
                  : "Mark this chapter complete when you finish the lesson."}
              </p>
            </div>

            <button
              className={completed ? "finish-button completed" : "finish-button"}
              onClick={() => setCompleted(!completed)}
            >
              {completed ? "✓ Completed" : "Mark Complete"}
            </button>
          </div>

          <div className="lesson-navigation">
            {Number(id) > 1 ? (
              <button onClick={() => router.push(`/chapter/${previous}`)}>
                <span>← Previous Chapter</span>
                <strong>Chapter {previous}</strong>
              </button>
            ) : (
              <button onClick={() => router.push("/browse-chapter")}>
                <span>← Go back</span>
                <strong>All Chapters</strong>
              </button>
            )}

            {Number(id) < 6 ? (
              <button
                className="next-chapter"
                onClick={() => router.push(`/chapter/${next}`)}
              >
                <span>Next Chapter →</span>
                <strong>Chapter {next}</strong>
              </button>
            ) : (
              <button
                className="next-chapter"
                onClick={() => router.push("/playground")}
              >
                <span>Ready to practice? →</span>
                <strong>Open Playground</strong>
              </button>
            )}
          </div>
        </article>
      </div>

      <footer className="lesson-footer">
        <strong>✦ promptly</strong>
        <span>Learn. Experiment. Improve.</span>
      </footer>
    </main>
  );
}