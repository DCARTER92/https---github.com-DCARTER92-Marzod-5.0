const fs = require('fs');
const path = require('path');

// Function to format text content with proper HTML
function formatContent(text) {
  return text
    .split('\n\n')  // Split on double newlines for paragraphs
    .map(para => para.trim())  // Trim whitespace
    .filter(para => para.length > 0)  // Remove empty paragraphs
    .map(para => {
      // Check if paragraph appears to be a heading
      if (para.length < 100 && /^[IVX\d]+[\s\-]+|Chapter|Book|Section/i.test(para)) {
        return `<h3>${para}</h3>`;
      }
      return `<p>${para}</p>`;
    })
    .join('\n\n');
}

// Process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const formattedContent = formatContent(content);
    fs.writeFileSync(filePath, formattedContent, 'utf8');
    console.log(`✓ Formatted: ${filePath}`);
  } catch (error) {
    console.error(`× Error processing ${filePath}:`, error);
  }
}

// Process all text files in a directory recursively
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.txt')) {
      processFile(fullPath);
    }
  }
}

// Start processing from the books directory
const booksDir = path.join(__dirname, '..', 'public', 'books');
console.log('Starting content formatting...');
processDirectory(booksDir);
console.log('Content formatting complete!');
