const fs = require('fs');
const path = require('path');

const booksDir = path.resolve(__dirname, '../page content/books page content');
const outputFile = path.resolve(__dirname, '../src/data/toc.json');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\\-]+/g, '')       // Remove all non-word chars
    .replace(/\\-\\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
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

  return sections;
}

function generateToc() {
  const books = fs.readdirSync(booksDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      const bookPath = path.join(booksDir, dirent.name);
      return {
        title: dirent.name,
        slug: slugify(dirent.name),
        sections: readSections(bookPath),
      };
    });

  fs.writeFileSync(outputFile, JSON.stringify(books, null, 2));
  console.log('toc.json generated successfully.');
}

generateToc();
