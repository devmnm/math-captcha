
import numberWordEnum from './number-words-enum'

/**
 * 
 * @param {*} num 
 */
export default function getNumberWord(num){
    if(num > 100){
        console.warn('Not supporting numbers greater than 100')
        return NaN
    }
    if(num<21){
        return numberWordEnum[num]
    }
    if(num === 30 || num === 40 || num === 50 || num === 60 || num === 70 || num === 80 || num === 90 || num === 30 || num === 100){
        return numberWordEnum[num]
    }

    const baseNum = parseFloat(num.toString()[0] + 0)
    const baseWord = numberWordEnum[baseNum]
    return baseWord + '-' + numberWordEnum[num.toString()[1]]
}