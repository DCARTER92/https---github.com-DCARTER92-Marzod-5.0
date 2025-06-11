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

  return (
    <div className="books-container">
      <div>
        <h1>The Order of Marzod - Sacred Texts</h1>
        <nav className="table-of-contents">
          <ul>
            {Object.values(toc).map((book) => (
              <li key={book.slug}>
                <button
                  onClick={() => toggle(book.slug)}
                  className={expanded[book.slug] ? "active" : ""}
                >
                  {book.title}{" "}
                  <span
                    className={`arrow ${
                      expanded[book.slug] ? "expanded" : ""
                    }`}
                  ></span>
                </button>
                {expanded[book.slug] &&
                  book.sections &&
                  book.sections.length > 0 && (
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
                            {section.title}
                            <span
                              className={`arrow ${
                                expanded[`${book.slug}:${section.slug}`]
                                  ? "expanded"
                                  : ""
                              }`}
                            ></span>
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
                                      selectedChapter?.title === chapter.title
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

      <div className="chapter-text">
        {selectedChapter ? (
          <>
            <h2>{selectedChapter.title}</h2>
            <div>{chapterText}</div>
          </>
        ) : (
          <div className="welcome-message">
            <h2>Welcome to the Sacred Texts</h2>
            <p>
              Select a chapter from the table of contents to begin your journey
              through the teachings of Marzod.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
