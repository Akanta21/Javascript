import { boatToSavePeople } from '../boatToSavePeople'

describe('test maxAreaOfIsland', () => {
  test('boatToSavePeople', () => {
    const people = [4, 3, 2, 4, 2, 1]

    expect(boatToSavePeople(people, 5)).toEqual(4)
  })

  test('boatToSavePeople', () => {
    const people = [5, 3, 3, 4, 2, 1]
    expect(boatToSavePeople(people, 6)).toEqual(3)
  })

  test('boatToSavePeople', () => {
    const people = [6, 2, 3, 2, 2, 5]
    expect(boatToSavePeople(people, 7)).toEqual(4)
  })
})
