import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { encrypt } from '../assets/js/utils/crypto.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_PATH = path.join(__dirname, 'items_source.json');
const DEST_PATH = path.join(__dirname, '../assets/data/products.json');

async function build() {
    try {
        console.log('📖 Reading source file...');
        const sourceData = await fs.readFile(SOURCE_PATH, 'utf-8');
        const items = JSON.parse(sourceData);

        console.log('🔒 Encrypting content...');
        const encryptedItems = items.map(item => {
            // We only encrypt the 'content' field as requested
            // content: {fusingOrEncryptItemContent}
            return {
                ...item,
                content: encrypt(item.content)
            };
        });

        console.log('💾 Writing to destination...');
        await fs.mkdir(path.dirname(DEST_PATH), { recursive: true });
        await fs.writeFile(DEST_PATH, JSON.stringify(encryptedItems, null, 2), 'utf-8');

        console.log('✅ Build complete! Products generated at assets/data/products.json');
        
        // Verification (Optional: print first item decrypted to verify logic matches)
        // import { decrypt } from '../assets/js/utils/crypto.js';
        // console.log("Verification Decrypt:", decrypt(encryptedItems[0].content));

    } catch (error) {
        console.error('❌ Build failed:', error);
        process.exit(1);
    }
}

build();
