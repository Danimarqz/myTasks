export async function encrypt(text) {
    const textBuffer = new TextEncoder().encode(text);
    let keyBuffer = new TextEncoder().encode(import.meta.env.VITE_CRYPTO_KEY);

    const cryptoKey = await crypto.subtle.importKey(
        'raw', keyBuffer, { name: 'AES-CBC' }, false, ['encrypt']
    );

    const iv = crypto.getRandomValues(new Uint8Array(16));

    const encryptedData = await crypto.subtle.encrypt(
        { name: 'AES-CBC', iv: iv },
        cryptoKey,
        textBuffer
    );

    const encryptedBase64 = btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
    const ivBase64 = btoa(String.fromCharCode(...iv));

    return { iv: ivBase64, encryptedText: encryptedBase64 };
}