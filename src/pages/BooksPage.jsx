import React, { useState, useEffect } from "react";
import "../BooksPage.css";

const BooksPage = () => {
  const [toc, setToc] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [chapterContent, setChapterContent] = useState("");
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    console.log("Loading TOC...");
    fetch("/books/bookToc.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("TOC loaded successfully:", data);
        setToc(data);
      })
      .catch((error) => {
        console.error("Error loading TOC:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedChapter) {
      try {
        // Extract the book name from the path
        const pathParts = selectedChapter.path.split('/');
        const bookSlug = pathParts[2];
        const sectionSlug = pathParts[3];
        
        // Convert book slug to folder name format (with underscores)
        const bookFolder = bookSlug
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('_');
        
        // Get section folder name
        const sectionFolder = sectionSlug
          .replace(/section-(\d+)/, 'Section $1');
        
        // Construct the final path
        const path = `/books/${bookFolder}/${sectionFolder}/${selectedChapter.filename}`;
        
        console.log("Loading chapter with details:", {
          path,
          bookFolder,
          sectionFolder,
          filename: selectedChapter.filename,
          originalPath: selectedChapter.path,
          fullChapter: selectedChapter
        });

        fetch(path)
          .then((res) => {
            if (!res.ok) {
              console.error("Failed to load file:", path, "Status:", res.status);
              throw new Error(`Failed to load file: ${res.status} ${res.statusText}`);
            }
            return res.text();
          })
          .then((text) => {
            if (!text || !text.trim()) {
              throw new Error("Empty content received");
            }
            
            // Format the content with paragraphs
            const formattedContent = text
              .split("\n\n")
              .map(para => para.trim())
              .filter(para => para.length > 0)
              .map(para => `<p>${para.replace(/\n/g, '<br/>')}</p>`)
              .join("\n");
            
            setChapterContent(formattedContent);
            console.log("Content loaded successfully:", {
              originalLength: text.length,
              formattedLength: formattedContent.length,
              preview: text.substring(0, 100) + '...'
            });
          })
          .catch((error) => {
            console.error("Error loading chapter:", error);
            setChapterContent(`Error loading chapter content: ${error.message}`);
          });
      } catch (error) {
        console.error("Error processing chapter:", error);
        setChapterContent("Error processing chapter information.");
      }
    }
  }, [selectedChapter, toc]);

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
                  <span className="icon">{expanded[book.slug] ? "📖" : "📚"}</span>
                  {book.title}
                </button>
                {expanded[book.slug] && book.sections && (
                  <ul>
                    {book.sections.map((section) => (
                      <li key={section.slug}>
                        <button
                          onClick={() => toggle(`${book.slug}:${section.slug}`)}
                          className={expanded[`${book.slug}:${section.slug}`] ? "active" : ""}
                        >
                          <span className="icon">{expanded[`${book.slug}:${section.slug}`] ? "📂" : "📁"}</span>
                          {section.title}
                        </button>
                        {expanded[`${book.slug}:${section.slug}`] && (
                          <ul>
                            {section.chapters.map((chapter) => (
                              <li key={chapter.slug}>
                                <button
                                  onClick={() =>
                                    setSelectedChapter({
                                      path: `/books/${book.slug}/${section.slug}/${chapter.slug}`,
                                      filename: chapter.filename,
                                      title: chapter.title,
                                    })
                                  }
                                  className={
                                    selectedChapter?.path ===
                                    `/books/${book.slug}/${section.slug}/${chapter.slug}`
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <span className="icon">📄</span>
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
