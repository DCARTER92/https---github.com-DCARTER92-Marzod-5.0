import React from 'react';

export default function About() {
  return (
    <div className="text-white max-w-4xl mx-auto px-8 py-12 space-y-16 relative z-10 scroll-smooth">
      <div className="fixed inset-0 bg-black/10 backdrop-blur-[1px] -z-10"></div>
      
      <h1 className="text-4xl font-bold mb-16 text-center text-shadow-lg">About The Order of Marzod</h1>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Our History</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            The Order of Marzod is dedicated to the pursuit of knowledge and understanding of the great Mysteries of the Universe. Through careful study and rigorous practice, we seek to illuminate the world and advance human understanding.
          </p>
        </div>
      </section>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Our Mission</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            We strive to create a community of dedicated seekers who share in the pursuit of knowledge. Our members range from novices to experienced keepers, each contributing to our collective understanding.
          </p>
        </div>
      </section>

      <section className="mb-20 bg-black/20 backdrop-blur-sm rounded-lg p-8 transition-all hover:bg-black/25">
        <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-600 text-shadow-lg">Join Us</h2>
        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed text-shadow-lg">
          <p className="indent-8">
            If you possess a fervent desire to tread the path of knowledge and wish to join our Order, we welcome you to begin your journey as a Novice. Through dedication and study, you may progress through our ranks and contribute to our understanding of the Universe's mysteries.
          </p>
        </div>
      </section>
    </div>
  );
}
