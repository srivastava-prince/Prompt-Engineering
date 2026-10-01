"use client";

import React, { useState } from "react";
import "./BrowseChapter.css";

const chapters = [
  {
    id: "01",
    title: "Introduction to Prompt Engineering",
    description:
      "Understand what prompt engineering is, how AI interprets prompts, and why good instructions matter.",
    category: "Fundamentals",
    level: "Beginner",
    lessons: 6,
    duration: "18 min",
  },
  {
    id: "02",
    title: "Anatomy of a Good Prompt",
    description:
      "Learn the essential building blocks of a powerful prompt including role, context, task and constraints.",
    category: "Fundamentals",
    level: "Beginner",
    lessons: 8,
    duration: "24 min",
  },
  {
    id: "03",
    title: "Prompting Techniques",
    description:
      "Explore zero-shot, few-shot, role prompting and other techniques for getting better AI responses.",
    category: "Techniques",
    level: "Intermediate",
    lessons: 10,
    duration: "32 min",
  },
  {
    id: "04",
    title: "Common Prompting Mistakes",
    description:
      "Discover common mistakes that reduce response quality and learn how to write clearer prompts.",
    category: "Best Practices",
    level: "Beginner",
    lessons: 7,
    duration: "20 min",
  },
  {
    id: "05",
    title: "Advanced Prompt Engineering",
    description:
      "Go beyond the basics with structured prompts, prompt chaining and advanced reasoning techniques.",
    category: "Advanced",
    level: "Advanced",
    lessons: 12,
    duration: "40 min",
  },
  {
    id: "06",
    title: "Prompt Testing & Optimization",
    description:
      "Learn how to test, compare and continuously improve prompts for more reliable results.",
    category: "Optimization",
    level: "Intermediate",
    lessons: 9,
    duration: "28 min",
  },
];

export default function BrowseChapter() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Fundamentals",
    "Techniques",
    "Best Practices",
    "Advanced",
    "Optimization",
  ];

  const filteredChapters = chapters.filter((chapter) => {
    const searchText = search.toLowerCase().trim();

    const matchesSearch =
      chapter.title.toLowerCase().includes(searchText) ||
      chapter.description.toLowerCase().includes(searchText);

    const matchesCategory =
      activeCategory === "All" || chapter.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="browse-page">
      {/* NAVBAR */}
      <header className="browse-navbar">
        <div className="brand">
          <div className="brand-icon">✦</div>

          <div>
            <h2>Promptly</h2>
            <span>PROMPT ENGINEERING</span>
          </div>
        </div>

        <nav>
          <a href="/">Home</a>

          <a href="/browse-chapter" className="active-link">
            Chapters
          </a>

          <a href="#">Playground</a>
        </nav>

        <button className="profile-btn">
          <span>PS</span>
          Prince
          <b>⌄</b>
        </button>
      </header>

      {/* HERO */}
      <section className="chapter-hero">
        <div className="hero-content">
          <div className="small-label">
            <span></span>
            LEARNING PATH
          </div>

          <h1>
            Explore the world of
            <br />
            <strong>Prompt Engineering.</strong>
          </h1>

          <p>
            Build your prompting skills step by step. Explore carefully
            structured chapters designed to help you create better prompts
            and get better AI results.
          </p>

          <div className="hero-stats">
            <div>
              <strong>06</strong>
              <span>Chapters</span>
            </div>

            <div>
              <strong>52+</strong>
              <span>Lessons</span>
            </div>

            <div>
              <strong>Beginner</strong>
              <span>to Advanced</span>
            </div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="floating-card">
            <div className="mini-icon">✦</div>

            <div>
              <span>YOUR PROGRESS</span>
              <strong>32%</strong>
            </div>

            <div className="progress-line">
              <div></div>
            </div>
          </div>

          <div className="floating-number">01</div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="chapter-content">
        {/* SEARCH + FILTER */}
        <div className="toolbar">
          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search chapters..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "category active"
                    : "category"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION HEADING */}
        <div className="section-heading">
          <div>
            <span>YOUR LEARNING PATH</span>
            <h2>Browse Chapters</h2>
          </div>

          <p>
            {filteredChapters.length}{" "}
            {filteredChapters.length === 1 ? "chapter" : "chapters"} available
          </p>
        </div>

        {/* CHAPTER CARDS */}
        <div className="chapters-grid">
          {filteredChapters.map((chapter) => (
            <article className="chapter-card" key={chapter.id}>
              <div className="card-top">
                <div className="chapter-number">{chapter.id}</div>

                <span className="level">{chapter.level}</span>
              </div>

              <div className="card-line"></div>

              <span className="category-label">{chapter.category}</span>

              <h3>{chapter.title}</h3>

              <p>{chapter.description}</p>

              <div className="chapter-info">
                <span>◉ {chapter.lessons} Lessons</span>

                <span>◷ {chapter.duration}</span>
              </div>

              <button type="button" className="start-btn">
                <span>Start Chapter</span>
                <b>→</b>
              </button>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredChapters.length === 0 && (
          <div className="empty-state">
            <div>⌕</div>

            <h3>No chapters found</h3>

            <p>Try searching with a different keyword.</p>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="browse-footer">
        <span>© 2026 Promptly</span>

        <span>Learn. Experiment. Improve.</span>
      </footer>
    </div>
  );
}