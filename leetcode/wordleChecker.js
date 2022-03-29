export function wordleCheck (guess, answer) {
  if (guess.length !== answer.length) {
    throw new Error('Unable to process')
  }

  const map = {}
  let idx = 0
  const words = new Array(guess.length)

  while (idx < answer.length) {
    if (guess[idx] === answer[idx]) {
      words[idx] = '+'
    } else {
      map[answer[idx]] = map[answer[idx]] ? map[answer[idx]]++ : 1
    }
    idx++
  }

  for (let i = 0; i < guess.length; i++) {
    // finding char at the write position
    if (map[guess[i]] > 0) {
      words[i] = '#'
      map[guess[i]]--
    } else {
      // finding char at wrong position excluding positive cases
      // fill the remaining with (-)
      words[i] = words[i] ? words[i] : '-'
    }
  }

  return words.join('')
}
