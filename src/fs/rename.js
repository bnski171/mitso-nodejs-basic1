import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущего каталога
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(oldPath, newPath);
        console.log('File renamed successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

rename();
