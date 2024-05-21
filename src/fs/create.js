const fs = require('fs').promises;
const path = require('path');

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
