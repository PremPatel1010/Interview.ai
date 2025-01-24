import mammoth from 'mammoth';
import fs from 'fs';

export const parseDocx = async(filePath) => {
  const fileBuffer = fs.readFileSync(filePath);

  const result = await mammoth.extractRawText({buffer: fileBuffer});
  return { text: result.value};
}
