import React, { useState } from 'react';

const booksContent = {
  Earth: `In the Book of Water we talked about how all religious and spiritual beliefs are essentially the same, and people only think they're different because they're focused on the details rather than the big picture. In the Book of Metal we covered history, mythology, and science, to show how advanced concepts are finally starting to explain what ancient people were trying to say back when the words to say it didn't exist. Now, in the Book of Earth, we look at philosophy, practical applications of Marzodian values in daily life. I'll spoil it for you a little, it's not all Kumbaya, peace and love. That's the end result, but it doesn't work as a path.`,

  Water: `The Book of Water explores the element of Water, its fluidity, adaptability, and emotional depth. It discusses tradition, unity, and the interconnectedness of all things through the metaphor of water.`,

  Metal: `The Book of Metal discusses the reconciliation of tradition with hard facts, science, and mythology. It introduces concepts of higher dimensions, Marzod as a quantum field, and the evolution of universes.`,

  Fire: `The most important aspect of practice is the focus of the Practitioner. Lacking focus, all else is irrelevant, and the effects limited to the mere physical.`,

  Air: `The Book of Air will deal primarily in fully linking spiritually with an intelligent being, including seance and invocation of gods.`,

  Wood: `As we turn our focus now to outward effects, it should be known there exist two extremes of magical work: Fire, whose purpose is harm, and Water, whose effects upon the target are positive.`,
};

const bookFiles = {
  Earth: '/books/3-%20The%20Book%20of%20Earth.docx',
  Water: '/books/1.%20The%20Book%20of%20Water.docx',
  Metal: '/books/2.%20The%20Book%20of%20Metal.docx',
  Fire: '/books/4.%20The%20Book%20of%20Fire.docx',
  Air: '/books/5_%20The%20Book%20of%20Air.docx',
  Wood: '/books/6.%20The%20Book%20of%20Wood.docx',
};

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Cambria, serif', maxWidth: '900px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Order of Marzod - The Seven Elemental Books</h1>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {Object.keys(booksContent).map((book) => (
          <button
            key={book}
            onClick={() => setSelectedBook(book)}
            style={{
              padding: '12px 18px',
              cursor: 'pointer',
              backgroundColor: selectedBook === book ? '#444' : '#eee',
              color: selectedBook === book ? '#fff' : '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              flex: '1 1 120px',
              minWidth: '120px',
              fontSize: '1.1rem',
            }}
          >
            {book}
          </button>
        ))}
      </div>
      {selectedBook ? (
        <article style={{ whiteSpace: 'pre-wrap', lineHeight: '1.8', borderTop: '1px solid #ccc', paddingTop: '20px', fontSize: '1.25rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px' }}>{selectedBook}</h2>
          <p>{booksContent[selectedBook]}</p>
          <a
            href={bookFiles[selectedBook]}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '1.1rem',
            }}
            aria-label={`Download ${selectedBook} book document`}
          >
            Download {selectedBook} Book (Read-Only)
          </a>
        </article>
      ) : (
        <p style={{ fontSize: '1.25rem' }}>Please select a book to read its introduction and download the document.</p>
      )}
    </div>
  );
}
