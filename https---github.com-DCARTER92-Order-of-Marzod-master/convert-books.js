const mammoth = require('mammoth');
const fs = require('fs').promises;
const path = require('path');

const bookMappings = {
  '1. The Book of Water.docx': 'book-of-water.txt',
  '2. The Book of Metal.docx': 'book-of-metal.txt',
  '3- The Book of Earth.pdf': 'book-of-earth.txt',
  '4. The Book of Fire.docx': 'book-of-fire.txt',
  '5_ The Book of Air.docx': 'book-of-air.txt',
  '6. The Book of Wood.docx': 'book-of-wood.txt',
  'Foundational Accords.docx': 'foundational-accords.txt',
  'The Bible - An Analysis.docx': 'bible-analysis.txt'
};

async function convertDocxToTxt() {
  const sourceDir = path.join(__dirname, 'public', 'books');
  
  for (const [source, target] of Object.entries(bookMappings)) {
    if (source.endsWith('.docx')) {
      try {
        const sourcePath = path.join(sourceDir, source);
        const targetPath = path.join(sourceDir, target);
        
        console.log(`Converting ${source} to ${target}...`);
        
        const result = await mammoth.extractRawText({ path: sourcePath });
        await fs.writeFile(targetPath, result.value);
        
        console.log(`Successfully converted ${source}`);
      } catch (error) {
        console.error(`Error converting ${source}:`, error);
      }
    }
  }
}

convertDocxToTxt().catch(console.error);
