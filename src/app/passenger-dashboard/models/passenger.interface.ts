export type Child = {
  name: string,
  age: number,
}

export type Passenger = {
  id: number,
  name: string,
  age: number,
  checkedIn: boolean,
  checkInDate: number | null,
  children: Child[] | null,
}
