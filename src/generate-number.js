
/**
 *
 * @param {*} min
 * @param {*} max
 */
export default function generateNumber (min, max) {
  //
  /// Sanity checks
  if (typeof min !== 'number' && typeof max !== 'number') {
    return Math.random()
  } // else...

  // Compute and return random number
  const num = Math.random() * (max - min) + min // Reference:
  return Math.floor(num)
}
