export const encryptAndDecrypt = (message: string, key: string): string => {
    //check if message and key are same length
    if (message.length !== key.length) {
        throw new Error("key needs to be same length");
    }
    let encryptedString = "";
    //xor each message key with each key
    for (let index = 0; index < message.length; index++) {
        encryptedString += String.fromCharCode(message.charCodeAt(index) ^ key.charCodeAt(index));
    }
    //success
    return encryptedString;
}