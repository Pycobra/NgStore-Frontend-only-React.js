export const genderShuffle = (payload, women, men) => {
  return payload.gender === 'MEN' ? men : payload.gender === 'WOMEN' ? women : null
}
export const genderSlideShuffle = (payload, women, men) => {
  return payload.gender === 'MEN' ? men : payload.gender === 'WOMEN' ? women : null
}