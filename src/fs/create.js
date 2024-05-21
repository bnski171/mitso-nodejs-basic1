import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущего каталога
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    try {
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
        console.log('File created successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

create();
