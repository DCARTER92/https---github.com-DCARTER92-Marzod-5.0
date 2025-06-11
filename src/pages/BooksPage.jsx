import React, { useState, useEffect } from "react";
import "../BooksPage.css";

const BooksPage = () => {
  const [toc, setToc] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState("");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch("/books/bookToc.json")
      .then((res) => res.json())
      .then(setToc)
      .catch((error) => {
        console.error("Error loading TOC:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedChapter) {
      // Convert book slug to proper folder name
      const bookFolder = selectedChapter.path
        .replace("/books/", "")
        .split("/")[0]
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("_");

      // Get section name and format it properly
      const sectionName = "Section " + selectedChapter.path.split("/")[2].split("-")[1];
      
      // Construct the path with proper casing and section naming
      const path = `/books/${bookFolder}/${sectionName}/${selectedChapter.path.split("/").pop()}`;
      
      console.log("Fetching from path:", path); // Debug log

      fetch(path)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.text();
        })
        .then((text) => {
          // Clean up the text content and format as paragraphs
          const cleanContent = text
            .replace(
              /<!DOCTYPE.*?>|<html.*?>|<\/html>|<head>.*?<\/head>|<body.*?>|<\/body>|<script.*?<\/script>/gs,
              ""
            )
            .trim()
            .split("\n\n") // Split on double newlines to identify paragraphs
            .map(para => `<p>${para.trim()}</p>`) // Wrap each paragraph in p tags
            .join("\n"); // Join back with newlines
          setChapterContent(cleanContent);
        })
        .catch((error) => {
          console.error("Error loading chapter:", error);
          console.error("Attempted path:", path);
          setChapterContent("Error loading chapter content. Please try again.");
        });
    }
  }, [selectedChapter]);

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="books-container">
      <div className="table-of-contents">
        <h1>Sacred Texts</h1>
        <nav>
          <ul>
            {Object.values(toc).map((book) => (
              <li key={book.slug}>
                <button
                  onClick={() => toggle(book.slug)}
                  className={expanded[book.slug] ? "active" : ""}
                >
                  {book.title} {expanded[book.slug] ? "▼" : "►"}
                </button>
                {expanded[book.slug] && book.sections && (
                  <ul>
                    {book.sections.map((section) => (
                      <li key={section.slug}>
                        <button
                          onClick={() => toggle(`${book.slug}:${section.slug}`)}
                          className={
                            expanded[`${book.slug}:${section.slug}`]
                              ? "active"
                              : ""
                          }
                        >
                          {section.title}{" "}
                          {expanded[`${book.slug}:${section.slug}`] ? "▼" : "►"}
                        </button>
                        {expanded[`${book.slug}:${section.slug}`] && (
                          <ul>
                            {section.chapters.map((chapter) => (
                              <li key={chapter.slug}>
                                <button
                                  onClick={() =>
                                    setSelectedChapter({
                                      path: `/books/${book.slug}/${section.slug}/${chapter.filename}`,
                                      title: chapter.title,
                                    })
                                  }
                                  className={
                                    selectedChapter?.path ===
                                    `/books/${book.slug}/${section.slug}/${chapter.filename}`
                                      ? "active"
                                      : ""
                                  }
                                >
                                  {chapter.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="chapter-content">
        {selectedChapter ? (
          <>
            <h2>{selectedChapter.title}</h2>
            <div
              className="chapter-text"
              dangerouslySetInnerHTML={{ __html: chapterContent }}
            />
          </>
        ) : (
          <div className="welcome-message">
            <h2>Welcome to the Sacred Texts</h2>
            <p>Select a chapter from the table of contents to begin reading.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
