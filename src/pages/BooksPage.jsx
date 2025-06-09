import React, { useState, useEffect } from "react";
import "../BooksPage.css";

const BooksPage = () => {
  const [toc, setToc] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterText, setChapterText] = useState("");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetch("/books/bookToc.json")
      .then((res) => res.json())
      .then(setToc);
  }, []);

  useEffect(() => {
    if (selectedChapter?.path) {
      setChapterText("Loading...");
      fetch(selectedChapter.path)
        .then((res) => res.text())
        .then(setChapterText)
        .catch(() => setChapterText("Error loading chapter content."));
    }
  }, [selectedChapter]);

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderChapters = (bookSlug, sectionSlug, chapters) => (
    <ul>
      {chapters.map((chapter) => {
        const isActive =
          selectedChapter?.path === `/books/${bookSlug}/${sectionSlug}/${chapter.filename}`;
        return (
          <li key={chapter.slug}>
            <a
              href="#"
              className={isActive ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setSelectedChapter({
                  path: `/books/${bookSlug}/${sectionSlug}/${chapter.filename}`,
                  title: chapter.title,
                });
              }}
            >
              {chapter.title}
            </a>
          </li>
        );
      })}
    </ul>
  );

  const renderSections = (book) => (
    <ul>
      {book.sections && book.sections.length > 0 ? (
        book.sections.map((section) => (
          <li key={section.slug}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggle(`${book.slug}:${section.slug}`);
              }}
            >
              <span className={`arrow ${expanded[`${book.slug}:${section.slug}`] ? 'expanded' : ''}`}></span>
              {section.title}
            </a>
            {expanded[`${book.slug}:${section.slug}`] &&
              renderChapters(book.slug, section.slug, section.chapters)}
          </li>
        ))
      ) : (
        book.files && book.files.length > 0 && (
          <ul>
            {book.files.map((file) => {
              const isActive =
                selectedChapter?.path === `/books/${book.slug}/${file.filename}`;
              return (
                <li key={file.filename}>
                  <a
                    href="#"
                    className={isActive ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedChapter({
                        path: `/books/${book.slug}/${file.filename}`,
                        title: file.title,
                      });
                    }}
                  >
                    {file.title}
                  </a>
                </li>
              );
            })}
          </ul>
        )
      )}
    </ul>
  );

  return (
    <div className="books-container">
      <nav className="table-of-contents">
        <h2>Table of Contents</h2>
        <ul>
          {Object.values(toc).map((book) => (
            <li key={book.slug}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggle(book.slug);
                }}
              >
                <span className={`arrow ${expanded[book.slug] ? 'expanded' : ''}`}></span>
                {book.title}
              </a>
              {expanded[book.slug] && renderSections(book)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="chapter-text">
        {selectedChapter ? (
          <>
            <h2>{selectedChapter.title}</h2>
            <pre>{chapterText}</pre>
          </>
        ) : (
          <div className="welcome-message">
            <h2>Welcome to the Books of The Order of Marzod</h2>
            <p>Please select a chapter from the table of contents to begin reading.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
