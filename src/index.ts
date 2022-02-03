export const encryptDecryptXOR = (message: string, key: string): string => {
    checkParams(message, key);
    let encryptedString = "";
    for (let index = 0; index < message.length; index++) {
        encryptedString += String.fromCharCode(message.charCodeAt(index) ^ key.charCodeAt(index));
    }
    return encryptedString;
}

export const encryptAddition = (message: string, key: string): string => {
    checkParams(message, key);
    let encryptedString = "";
    for (let index = 0; index < message.length; index++) {
        encryptedString += message.charCodeAt(index) + key.charCodeAt(index)
    }
    return encryptedString;
}

export const decryptAdditon = (message: string, key: string): string => {
    checkParams(message, key);
    let decryptedString = "";
    for (let index = 0; index < message.length; index++) {
        decryptedString += message.charCodeAt(index) + key.charCodeAt(index)
    }
    return decryptedString;
}

const checkParams = (message: string, key: string) => {
    if (message.length < key.length) {
        throw new Error("key needs to atleast length of the message");
    }
}