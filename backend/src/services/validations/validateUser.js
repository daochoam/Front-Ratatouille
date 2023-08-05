import { valUser } from "./validator.js"

const { email, name, password } = valUser
const validateUser = {}

validateUser.name = (valName) => {
    const { specialCharacters, numbers, multiSpace } = name
    const Name = valName.trim()
    // This field is required.
    if (Name == "" || Name == null || Name == undefined)
        throw Error(`The name is required.`)
    else {
        // The field contain many spaces between names.
        if (multiSpace.test(Name) == true)
            throw Error(`Delete multi-spaces between name.`)

        // The field must not contain numbers.
        if (numbers.test(Name) == true)
            throw Error(`The name mustn't contain numbers.`)

        // The field must not contain name(s) of more than 15 characters.
        if (Math.max(...Name.split(' ').map(p => p.length)) > 15)
            throw Error(`Delete words longer than 15 characters.`)

        // The field must not contain name(s) of less than 3 characters.
        if (Math.min(...Name.split(' ').map(p => p.length)) < 3)
            throw Error(`Remove words of less than 3 characters`)

        // The name must not contain special characters..
        if (specialCharacters.test(Name) == true)
            throw Error(`Remove special characters from the name.`)
    }
    return { status: 200, messages: 'The name is valid.' }
}

validateUser.email = (valEmail) => {
    const { symbol, specialCharacters, spaces, initSCharacter, multiSCharacter, capitaLetter, charArroba, acentCharacters } = email
    const Email = valEmail.trim()
    // This field is required.
    if (Email == "" || Email == null || Email == undefined) throw Error('The email is required.')
    else {
        // The Email must contain @ symbol.
        if (Email.match(symbol)?.length != 1) throw Error("Add only one @ symbol.")
        // Only the use of '._-@' is supported..
        if (specialCharacters.test(Email) == true) throw Error("Username email only supports '._-' characters.")
        // The Email contain spaces.
        if (spaces.test(Email) == true) throw Error("Remove spaces.")
        // Only the use of '._-@' is supported..
        if (capitaLetter.test(Email) == true) throw Error("Remove capital letters.")
        // The Email must not start with a special characters.
        if (initSCharacter.test(Email) == true) throw Error("Remove special characters at start.")
        // The Email must not end with a period.
        if (charArroba.test(Email) == true) throw Error("Remove special characters at end.")
        // The Email must not start with a special characters.
        if (multiSCharacter.test(Email) == true) throw Error("Remove consecutive special characters.")
        // The Email cannot have accented characters
        if (acentCharacters.test(Email) == true) throw Error("The email cannot have accented characters.")
    }
    return { status: 200, messages: 'The email is valid.' }
}

validateUser.password = (valPass) => {
    const { spaces, acentCharacters, capitaLetter, lowerCaseLetter, specialCharacters, numbers } = password
    const Password = valPass.trim()
    // This field is required.
    if (Password == "" || Password == null || Password == undefined) throw Error("The password is required.")
    else {
        // The field contain spaces.
        if (spaces.test(Password) == true) throw Error("Remove spaces.")
        // The field contain acent characters.
        if (8 > Password.length || Password.length > 20) throw Error("Write 8 to 20 characters.")
        // The field contain acent characters.
        if (acentCharacters.test(Password) == true) throw Error("Remove acent characters.")
        // The field contain 1 capial letter.
        if (capitaLetter.test(Password) == false) throw Error("Add at least 1 capital letter.")
        // The field contain 1 lowercase letter.
        if (lowerCaseLetter.test(Password) == false) throw Error("Add at least 1 lowercase letter.")
        // The field contain 1 number.
        if (numbers.test(Password) == false) throw Error("Add at least 1 number.")
        // The field contain 1 special character.
        if (specialCharacters.test(Password) == false) throw Error("Add at least 1 special character.")
    }
    return { status: 200, messages: 'The password is valid.' }
}

validateUser.User = (valName, valEmail, valPass) => {
    try {
        this.name(valName)
        this.email(valEmail)
        this.password(valPass)
        return { status: 200, messages: 'The User is valid.' }
    } catch (error) {
        return { status: 400, messages: error.messages }
    }

}

export default validateUser