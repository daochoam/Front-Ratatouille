export const valUser = {
    patterns: {
        email: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9]+@(([\w-]+\.)+[\w-]{2,4})$/,
        password: /^[A-Za-z!-/:-@\[-`\{-~Ññ¿¡°\d]{8,32}$/
    },
    name: {
        specialCharacters: /[!-/:-@[-`{-~¿¡°]/,
        numbers: /\d/,
        multiSpace: /[\s]{ 2,}/
    },
    email: {
        // Check include one @.
        symbol: /@/,
        // MailUserNameM (Gmail rules): Gmail!! + include dash, underscore.
        userName: /^((?!^[._-])(?![-_.]{2,})[a-zñ0-9._-]){5,29}[a-zñ0-9](?=@)/,
        // MailDomain: Check the email domain structure.
        domain: /(?<=@)(([\w-]+\.)+[\w-]{2,4})$/,
        // Special Characters:
        specialCharacters: /([!-,\/:-@\[-\^`\{-~¿¡°])(?=@)/,
        // Space Characters:
        spaces: /\s+/,
        // Init Special Characters:
        initSCharacter: /^([!-/:-@\[-`\{-~¿¡°])/,
        // Consecutive Special Characters:
        multiSCharacter: /[_.-]{2,}/,
        // Capital Letter - No Acent:
        capitaLetter: /[A-ZÑ]/,
        // Username don't finish special character
        charArroba: /([ -/:-@\[-`\{-~¿¡°])(?=@)/, // /[\x20-\x2f\x3a-\x40\x5b-\x60\x7b-\x81](?=@)/  <-- HEXA
        // Acent Characters:
        acentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/,
    },
    password: {
        // Space Characters:
        spaces: /\s+/,
        // Acent Characters:
        acentCharacters: /[À-ÆÈ-ÏÒ-ÖÙ-Ýà-æè-ïò-öù-ýÿ]/,
        // Capital Letter - No Acent:
        capitaLetter: /[A-ZÑ]/,
        // Lowercase Letter - No Acent:
        lowerCaseLetter: /[a-zñ]/,
        // Special Characters:
        specialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
        // Numbers:
        numbers: /\d/
    }
}


export const valRecipe = {
    id: {
        uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        number: /^[\d]{1,4}$/,
        spaces: /\s+/,
    },
    name: {
        // Special Characters:
        specialCharacters: /[!-/:-@\[-`\{-~¿¡°]/,
        // Numbers:
        numbers: /\d/,
        // Multi-Space characters:
        multiSpace: /[\s]{2,}/,
    },
    image: /.(jpg|jpeg|svg|png)$/i,
    healthScore: /^(100|[1-9]?[0-9])$/,
    diet: {

    }
}