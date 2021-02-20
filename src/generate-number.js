
export default function generateNumber(min, max){
    //
    /// Sanity checks
    if(typeof min === 'undefined' && typeof max === 'undefined'){
        return Math.random()
    } // else...
    if(typeof min !== 'number' && typeof max !== 'number'){
        return Math.random()
    } // else...
    if(typeof max !== 'number'){
        max = 0
    }

    // Computer and return random number
    const num = Math.random() * (max - min) + min // Reference: 
    return Math.floor(num)
}