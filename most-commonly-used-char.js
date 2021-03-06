/**
 * 
 * Plan
 * map each charter to an object with key as the character and value as the character count
 * loop through the key value object and return the key value pair with the highest count
 * return the chararcter with the highest count value
 */

const mapCharAndCount = (str, output = {}) => {
    if (!str) return output

    const char = str.split('').shift();
    const newStr = str.split('').slice(1)
    const newCount = output[char] ? output[char] + 1 : 1
    const newOutput = { ...output, [char]: newCount }

    return mapCharAndCount(newStr.join(''), newOutput)
}

const maxCharCountObj = (keys, obj, output = {}) => {
    if (keys.length < 1) return output

    const char = keys.concat().shift()
    // const newKeys = keys.filter(key => key !== char)
    const newKeys = keys.slice(1)

    if (!output.count) return maxCharCountObj(newKeys, obj, {char: char, count: obj[char]})
    if (output.count <= obj[char]) return maxCharCountObj(newKeys, obj, {char: char, count: obj[char]})

    return maxCharCountObj(newKeys, obj, output)
}

const getMostUsedCharInString = (string) => {
    if (!string || typeof string !== 'string') return null

    const charCountObj = mapCharAndCount(string)
    const output = maxCharCountObj(Object.keys(charCountObj), charCountObj)

    return output.char === ' ' ? 'white-space' : output.char
}

module.exports = getMostUsedCharInString