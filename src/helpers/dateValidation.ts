
const dateValidation = (value: string) => {
  const currentYear = +(new Date().getFullYear().toString().substring(2, 4))

  const dateArray = value.replace(/[/]/, '').split('')
  const isValidMonth = +dateArray.splice(0, 2).join('') < 12
  const isValidYear = +dateArray.join('') >= currentYear

  return isValidMonth && isValidYear
}

export default dateValidation
