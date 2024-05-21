import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущего каталога
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        await fs.mkdir(destDir, { recursive: false });
        const files = await fs.readdir(srcDir);
        await Promise.all(files.map(file => {
            const srcFile = path.join(srcDir, file);
            const destFile = path.join(destDir, file);
            return fs.copyFile(srcFile, destFile);
        }));
        console.log('Files copied successfully');
    } catch (error) {
        console.error('FS operation failed');
    }
};

copy();
