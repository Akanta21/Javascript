export const boatToSavePeople = (people, limit) => {
  people = people.sort((a, b) => a - b)

  let i = 0; let j = people.length - 1; let total = 0

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      i++
    }
    j--
    total++
  }

  return total
}
