export function NamesFormat(word) {
    if (typeof word == undefined || typeof word == null || word == "") {
        return "";
    } else {
        if (typeof word != 'string') {
            throw TypeError('El argumento debe ser una cadena de caracteres (text)')
        }
        let word_split = word.trim().split(' ')
        return word_split.map(p => p[0].toUpperCase() + p.slice(1).toLowerCase()).join(' ')
    }
}