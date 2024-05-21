import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущего каталога
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const dirPath = path.join(__dirname, 'files');

    try {
        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (error) {
        console.error('FS operation failed');
    }
};

list();
