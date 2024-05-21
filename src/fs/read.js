import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущего каталога
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content);
    } catch (error) {
        console.error('FS operation failed');
    }
};

read();
