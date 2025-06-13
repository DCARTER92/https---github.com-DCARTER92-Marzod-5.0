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

  // Handle Roman numerals - preserve their case
  if (/^[IVXLCDM]+\s*[-–—]\s*/.test(title)) {
    return title;
  }

  // Handle special book naming cases
  if (title === 'Bible Analysis') return 'The Bible - An Analysis';
  if (title.startsWith('Book of')) return title;

  // Remove .md extension if present
  title = title.replace(/\.md$/, '');

  // Special handling for section titles
  if (/^Section \d+$/.test(title)) return title;
  if (/^section-\d+$/.test(title)) {
    return title.replace(/section-(\d+)/, 'Section $1');
  }

  // Handle numbered titles (e.g., "1 - Introduction")
  if (/^\d+\s*[-–—]\s*/.test(title)) {
    return title;
  }

  return title;
}

function readChapters(sectionPath) {
  const files = fs.readdirSync(sectionPath, { withFileTypes: true });
  return files
    .filter(f => f.isFile() && f.name.endsWith('.md'))
    .map(file => {
      const title = file.name.replace('.md', '');
      return {
        title: formatTitle(title),
        slug: slugify(title),
        filename: file.name,
      };
    })
    .sort((a, b) => {
      // First, try to sort by leading Roman numerals
      const romanA = a.title.match(/^([IVXLCDM]+)/);
      const romanB = b.title.match(/^([IVXLCDM]+)/);
      if (romanA && romanB) {
        const romanValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        const valueA = romanA[1].split('').reduce((sum, char) => sum + romanValues[char], 0);
        const valueB = romanB[1].split('').reduce((sum, char) => sum + romanValues[char], 0);
        return valueA - valueB;
      }

      // Then try to sort by leading numbers
      const numA = parseInt(a.title.match(/^\d+/));
      const numB = parseInt(b.title.match(/^\d+/));
      if (!isNaN(numA) && !isNaN(numB)) return numA - numB;

      // Finally, sort alphabetically
      return a.title.localeCompare(b.title);
    });
}
function readSections(bookPath) {
  const entries = fs.readdirSync(bookPath, { withFileTypes: true });
  // Sections can be folders or .md files directly (like in Bible_Analysis)
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

  // Also check for .md files directly under bookPath as sections with one chapter
  const mdFiles = entries.filter(e => e.isFile() && e.name.endsWith('.md'));
  mdFiles.forEach(file => {
    sections.push({
      title: file.name.replace('.md', ''),
      slug: slugify(file.name.replace('.md', '')),
      chapters: [{
        title: file.name.replace('.md', ''),
        slug: slugify(file.name.replace('.md', '')),
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