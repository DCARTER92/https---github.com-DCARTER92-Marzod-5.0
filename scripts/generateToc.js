const fs = require('fs');
const path = require('path');

const booksDir = path.resolve(__dirname, '../public/books');
const outputFile = path.resolve(__dirname, '../public/books/bookToc.json');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function formatTitle(title) {
  // Replace underscores with spaces
  title = title.replace(/_/g, ' ');
  // Handle special cases
  if (title === 'Bible Analysis') return 'The Bible - An Analysis';
  if (title.startsWith('Book of')) return title; // Keep "Book of X" format
  return title;
}

function readChapters(sectionPath) {
  const files = fs.readdirSync(sectionPath, { withFileTypes: true });
  return files
    .filter(f => f.isFile() && f.name.endsWith('.txt'))
    .map(file => {
      const title = file.name.replace('.txt', '');
      return {
        title: title,
        slug: slugify(title),
        filename: file.name,
      };
    })
    .sort((a, b) => {
      // Sort numerically if chapters start with numbers
      const numA = parseInt(a.title.match(/^\d+/));
      const numB = parseInt(b.title.match(/^\d+/));
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
      return a.title.localeCompare(b.title);
    });
}

function readSections(bookPath) {
  const entries = fs.readdirSync(bookPath, { withFileTypes: true });
  // Sections can be folders or .txt files directly (like in Bible_Analysis)
  const sections = entries
    .filter(e => e.isDirectory())
    .map(dir => {
      const sectionPath = path.join(bookPath, dir.name);
      return {
        title: dir.name,
        slug: slugify(dir.name),
        chapters: readChapters(sectionPath),
      };
    });

  // Also check for .txt files directly under bookPath as sections with one chapter
  const txtFiles = entries.filter(e => e.isFile() && e.name.endsWith('.txt'));
  txtFiles.forEach(file => {
    sections.push({
      title: file.name.replace('.txt', ''),
      slug: slugify(file.name.replace('.txt', '')),
      chapters: [{
        title: file.name.replace('.txt', ''),
        slug: slugify(file.name.replace('.txt', '')),
        filename: file.name,
      }],
    });
  });

  return sections.sort((a, b) => {
    // Sort numerically if sections start with numbers
    const numA = parseInt(a.title.match(/^\d+/));
    const numB = parseInt(b.title.match(/^\d+/));
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    return a.title.localeCompare(b.title);
  });
}

function generateToc() {
  const books = fs.readdirSync(booksDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      const bookPath = path.join(booksDir, dirent.name);
      return {
        title: formatTitle(dirent.name),
        slug: slugify(dirent.name),
        sections: readSections(bookPath),
      };
    })
    // Sort books in a logical order
    .sort((a, b) => {
      const order = [
        'Book of Water',
        'Book of Metal',
        'Book of Earth',
        'Book of Fire',
        'Book of Air',
        'Book of Wood',
        'The Foundational Accords',
        'The Bible - An Analysis',
        'Statement of Purpose'
      ];
      const indexA = order.indexOf(a.title);
      const indexB = order.indexOf(b.title);
      if (indexA === -1 && indexB === -1) return a.title.localeCompare(b.title);
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  fs.writeFileSync(outputFile, JSON.stringify(books, null, 2));
  console.log('toc.json generated successfully.');
}

generateToc();
