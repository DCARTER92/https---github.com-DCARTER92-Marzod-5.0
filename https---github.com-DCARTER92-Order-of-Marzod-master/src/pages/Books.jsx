import React from 'react';
import ShaderBackground from '../components/ShaderBackground';

const bookFiles = {
  book1: '/books/book-of-water.txt',
  book2: '/books/book-of-metal.txt',
  book3: '/books/3- The Book of Earth.pdf',
  book4: '/books/book-of-fire.txt',
  book5: '/books/book-of-air.txt',
  book6: '/books/book-of-wood.txt',
  foundational: '/books/foundational-accords.txt',
  bible: '/books/bible-analysis.txt'
};

export default function Books() {
  const downloadBook = async (bookKey, bookTitle) => {
    try {
      const response = await fetch(bookFiles[bookKey]);
      const text = await response.text();
      
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${bookTitle}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {
      console.error('Error downloading book:', error);
      alert('Error downloading book. Please try again later.');
    }
  };

  return (
    <>
      <ShaderBackground />
      <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-12 relative z-10">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>
        <h1 className="text-4xl font-bold mb-8 text-center text-shadow-lg">Books of The Order of Marzod</h1>

        <nav className="mb-8 sticky top-0 bg-gray-900/90 p-4 rounded shadow backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-shadow-lg">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2 text-shadow-lg">
            <li><a href="#book1" className="text-blue-400 hover:underline">Book 1: The Book of Water - Spiritual Foundations & Religious Unity</a></li>
            <li><a href="#book2" className="text-blue-400 hover:underline">Book 2: The Book of Metal - Science, Magic & Technology</a></li>
            <li><a href="#book3" className="text-blue-400 hover:underline">Book 3: The Book of Earth - Practical Living & Personal Growth</a></li>
            <li><a href="#book4" className="text-blue-400 hover:underline">Book 4: The Book of Fire - Transformation & Change</a></li>
            <li><a href="#book5" className="text-blue-400 hover:underline">Book 5: The Book of Air - Mind, Communication & Connection</a></li>
            <li><a href="#book6" className="text-blue-400 hover:underline">Book 6: The Book of Wood - Growth, Flexibility & Strength</a></li>
            <li><a href="#foundational" className="text-blue-400 hover:underline">Foundational Accords</a></li>
            <li><a href="#bible" className="text-blue-400 hover:underline">The Bible - An Analysis</a></li>
          </ul>
        </nav>

        <article id="book1" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 1: The Book of Water</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Water</h3>

              <p className="mb-8 indent-8 text-shadow-lg">
                I want to tell you all how I came to be here today, writing this book. For most of my life, I was an Atheist. I never was all that solid with God, because when I was around 3 or 4, I convinced myself my Dad was going to Hell.
              </p>

              <p className="mb-8 indent-8 text-shadow-lg">
                He drank, smoked, cussed, and I didn't have a real firm grip on the difference between breaking rules and sinning, so I pretty much considered it a done deal, that when he died he'd go to Hell, and I was bound and determined to go with him.
              </p>

              <p className="mb-8 indent-8 text-shadow-lg">
                I eventually grew out of that, just in time to discover the really early stages of social media that we had back in the early 2000s. I was about 13, and for those of you that don't know, the Internet is just packed full of Atheists.
              </p>

              <p className="mb-8 indent-8 text-shadow-lg">
                Now, it had never occurred to me to ask whether God was actually real in all my 13 years, but it turned out every time I got in an argument with somebody about which side made more sense, I'd get my argument ripped to shreds and just feel like an absolute fool.
              </p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book1', 'The Book of Water')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="book2" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 2: The Book of Metal</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Metal</h3>
              <p className="mb-8 indent-8 text-shadow-lg">Now that we've talked about tradition in the Book of Water, and how a unified view of it is possible if you choose to see things that way, let's talk about reconciling that unified view with hard facts. Part One will talk about science, the speculative concepts involved in explaining the supernatural, and how our understanding of the Universe is finally starting to advance to the point that it tells us what was really happening in ancient times. Part Two will be on history of cultures, to give you an idea of the context that went along with the stories. Part Three will deal in mythology, what it is and how it evolves. With it, I hope you'll get a clearer view of why myths get told the way they do, and how things change over time.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book2', 'The Book of Metal')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="book3" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 3: The Book of Earth</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Earth</h3>
              <p className="mb-8 indent-8 text-shadow-lg">Preview not available (PDF format). Please download the full book to view its contents.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book3', 'The Book of Earth')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="book4" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 4: The Book of Fire</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Fire</h3>
              <p className="mb-8 indent-8 text-shadow-lg">The most important aspect of practice is the focus of the Practitioner. Lacking focus, all else is irrelevant, and the effects limited to the mere physical. To that end, the focus of the Book of Fire is the alignment of the Practitioner with the intended work, in addition to other fundamentals of extreme importance. It is hoped that, through mastery of the Book of Fire, when more complex work is attempted, the Practitioner shall find themselves equal to the task, well grounded in the most basic principles. As Fire is the element of passion and self-indulgence, this book aims to tame and control those qualities, that the Practitioner may be the controller rather than the controlled.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book4', 'The Book of Fire')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="book5" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 5: The Book of Air</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Air</h3>
              <p className="mb-8 indent-8 text-shadow-lg">The Book of Air will deal primarily in fully linking spiritually with an intelligent being, including seance and invocation of gods. As explained in the Book of Fire, this form of linking is very dangerous, and should not be attempted by those of insufficient experience. The method of the link is the same as a Reading, but is rendered more difficult by the need to bypass two personalities. The more fundamental the differences between the personalities, the less likely is success to be found. It cannot be overemphasized that caution must be exercised in this endeavor.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book5', 'The Book of Air')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="book6" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Book 6: The Book of Wood</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Book of Wood</h3>
              <p className="mb-8 indent-8 text-shadow-lg">As we turn our focus now to outward effects, it should be known there exist two extremes of magical work: Fire, whose purpose is harm, and Water, whose effects upon the target are positive. Neither may be classed simply as good or evil, as that determination depends mainly upon the target. If a Water ritual is used to aid an evil person, it is generally evil, and if Fire harms an evil person, it is generally good. Therefore, both types of work have their appropriate time and place. The Practitioner should in all cases strive to increase the good in the world based upon all relevant information, rather than limit themselves to certain actions based upon generalizations and predetermined categories.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('book6', 'The Book of Wood')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Book
          </button>
        </article>

        <article id="foundational" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">Foundational Accords</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to Foundational Accords</h3>
              <p className="mb-8 indent-8 text-shadow-lg">Our sacred charge is the tireless pursuit of Knowledge in all its manifold and wondrous forms, and above all, the earnest seeking of understanding concerning the great Mysteries of the Universe. In the service of this divine charge, let there be naught forbidden, save that which brings forth harm surpassing the value of its end.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('foundational', 'Foundational Accords')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Text
          </button>
        </article>

        <article id="bible" className="mb-32 bg-black/30 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-4xl font-bold mb-12 pb-4 border-b-2 border-gray-600 text-shadow-lg">The Bible - An Analysis</h2>
          <div className="prose prose-invert max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed space-y-8 text-shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-shadow-lg">Introduction to The Bible Analysis</h3>
              <p className="mb-8 indent-8 text-shadow-lg">I want to start by telling you what this isn't, because we're going to walk over a minefield here, but I don't think that's any reason not to talk about things. It's just a reason to talk about them carefully.</p>
            </pre>
          </div>
          <button
            onClick={() => downloadBook('bible', 'The Bible - An Analysis')}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold text-lg transition"
          >
            Download Full Text
          </button>
        </article>
      </div>
    </>
  );
}
