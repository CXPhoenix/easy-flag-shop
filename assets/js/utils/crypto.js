export const KEY = 0x37; // 55
export const SHIFT = 4;

/**
 * Encrypts a string using Shift + XOR algorithm.
 * Formula: (InputChar + SHIFT) ^ KEY
 * @param {string} text 
 * @returns {string} Hex string
 */
export function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        // Add shift then XOR
        let encrypted = (charCode + SHIFT) ^ KEY;
        // Convert to hex for safe transport
        result += encrypted.toString(16).padStart(2, '0');
    }
    return result;
}

/**
 * Decrypts a string using Shift + XOR algorithm.
 * Formula: (HexChar ^ KEY) - SHIFT
 * @param {string} encryptedText Hex string
 * @returns {string} Original text
 */
export function decrypt(encryptedText) {
    let result = '';
    for (let i = 0; i < encryptedText.length; i += 2) {
        let hex = encryptedText.substr(i, 2);
        let charCode = parseInt(hex, 16);
        // XOR then subtract shift
        let original = (charCode ^ KEY) - SHIFT;
        result += String.fromCharCode(original);
    }
    return result;
}
