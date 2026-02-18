/**
 * Obfuscated crypto utils
 */

// Key is no longer used in simple shift, but we can keep a dummy or remove it.
// The user reference just does char + 6.

/**
 * Encrypts a string using Shift -6 algorithm (Reverse of decryption).
 * Formula: char - 6
 * @param {string} text 
 * @returns {string} Encrypted string
 */
export function _0x5a1b(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        let encrypted = charCode - 6;
        result += String.fromCharCode(encrypted);
    }
    return result;
}

/**
 * Decrypts a string using Shift +6 algorithm.
 * Formula: char + 6
 * Matches user reference: _0x4f78a7=_0x5342b2+0x6
 * @param {string} _0x4640bd Encrypted string
 * @returns {string} Original text
 */
export function _0x26db16(_0x4640bd) {
    var _0x26db16 = '';
    for (var _0x2d2829 = 0x0; _0x2d2829 < _0x4640bd['length']; _0x2d2829++) {
        var _0x5342b2 = _0x4640bd['charCodeAt'](_0x2d2829);
        var _0x4f78a7 = _0x5342b2 + 0x6;
        _0x26db16 = _0x26db16 + String['fromCharCode'](_0x4f78a7);
    }
    return _0x26db16;
}
