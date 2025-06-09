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
    if (selectedChapter) {
      fetch(selectedChapter.path)
        .then((res) => res.text())
        .then(setChapterText);
    }
  }, [selectedChapter]);

  const toggle = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderChapters = (bookSlug, sectionSlug, chapters) => (
    <ul>
      {chapters.map((chapter) => (
        <li key={chapter.slug}>
          <a
            href="#"
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
      ))}
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
              {section.title}
              {expanded[`${book.slug}:${section.slug}`] ? " ▼" : " ►"}
            </a>
            {expanded[`${book.slug}:${section.slug}`] &&
              renderChapters(book.slug, section.slug, section.chapters)}
          </li>
        ))
      ) : (
        // If no sections, show single file(s) in book root
        book.files && book.files.length > 0 && (
          <ul>
            {book.files.map((file) => (
              <li key={file.filename}>
                <a
                  href="#"
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
            ))}
          </ul>
        )
      )}
    </ul>
  );

  return (
    <div className="books-container">
      <h1>Books</h1>
      <nav className="table-of-contents">
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
                {book.title}
                {expanded[book.slug] ? " ▼" : " ►"}
              </a>
              {expanded[book.slug] && renderSections(book)}
            </li>
          ))}
        </ul>
      </nav>
      <div className="chapter-text">
        {selectedChapter && (
          <>
            <h2>{selectedChapter.title}</h2>
            <pre>{chapterText}</pre>
          </>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
