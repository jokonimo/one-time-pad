abstract class templateAlgo {
    encrypt = (message: string, key: string): string => {
        this.checkParams(message, key);
        let enCryptedString = "";
        for (let index = 0; index < message.length; index++) {
            enCryptedString += String.fromCharCode(this.encryptChar(message.charCodeAt(index), key.charCodeAt(index)));
        }
        return enCryptedString;
    }

    decrypt = (message: string, key: string): string => {
        this.checkParams(message, key);
        let decryptedString = "";
        for (let index = 0; index < message.length; index++) {
            decryptedString += String.fromCharCode(this.decryptChar(message.charCodeAt(index), key.charCodeAt(index)));
        }
        return decryptedString;
    }

    checkParams = (message: string, key: string) => {
        if (message.length < key.length) {
            throw new Error("key needs to atleast length of the message");
        }
    }


    protected abstract encryptChar(charCodeMessage: number, charCodeKey: number): number;
    protected abstract decryptChar(charCodeMessage: number, charCodeKey: number): number;
}

class AdditionEncrypt extends templateAlgo {
    encryptChar(charCodeMessage: number, charCodeKey: number): number {
        return charCodeMessage + charCodeKey;
    }
    decryptChar(charCodeMessage: number, charCodeKey: number): number {
        return charCodeMessage - charCodeKey;
    }
}

class XOREncrypt extends templateAlgo {
    encryptChar(charCodeMessage: number, charCodeKey: number): number {
        return charCodeMessage ^ charCodeKey;
    }
    decryptChar(charCodeMessage: number, charCodeKey: number): number {
        return charCodeMessage ^ charCodeKey;
    }
}

export const xorEncrypt = new XOREncrypt();
export const additionEncrypt = new AdditionEncrypt();