import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toc from '../data/toc.json';

export default function Books() {
  const { book: activeBook, section: activeSection, chapter: activeChapter } = useParams();
  const [expandedBooks, setExpandedBooks] = useState({});

  const toggleBook = (slug) => {
    setExpandedBooks(prev => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div className="p-6">
      {toc.map(book => (
        <div key={book.slug} className="mb-6 border rounded-lg bg-gray-800">
          <button
            onClick={() => toggleBook(book.slug)}
            className={`w-full text-left px-4 py-3 font-bold text-xl text-white focus:outline-none ${
              expandedBooks[book.slug] ? 'bg-gray-700' : 'bg-gray-900'
            }`}
          >
            {book.title}
          </button>
          {expandedBooks[book.slug] && (
            <div className="pl-6 py-3">
              {book.sections.map(section => (
                <div key={section.slug} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-300">{section.title}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {section.chapters.map(chapter => {
                      const isActive =
                        activeBook === book.slug &&
                        activeSection === section.slug &&
                        activeChapter === chapter.slug;
                      return (
                        <li key={chapter.slug}>
                          <Link
                            to={`/books/${book.slug}/${section.slug}/${chapter.slug}`}
                            className={`block text-blue-400 hover:underline ${
                              isActive ? 'font-bold underline text-yellow-300' : ''
                            }`}
                          >
                            {chapter.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
