const yearsToYearsMonthsDays = require('./index')

test('2 results in string: 2 years', () => {
  expect(yearsToYearsMonthsDays(2)).toBe("2 years")
})

test('1.5 results in string: 1 year, 6 months and 2 days', () => {
  expect(yearsToYearsMonthsDays(1.5)).toBe("1 year, 6 months and 2 days")
})

test('1.494 results in string: 1 year and 6 months', () => {
  expect(yearsToYearsMonthsDays(1.494)).toBe("1 year and 6 months")
})

test('1.05 results in string: 1 year and 18 days', () => {
  expect(yearsToYearsMonthsDays(1.05)).toBe("1 year and 18 days")
})

test('1 results in string: 1 year', () => {
  expect(yearsToYearsMonthsDays(1)).toBe("1 year")
})

test('0.5 results in string: 6 months and 2 days', () => {
  expect(yearsToYearsMonthsDays(0.5)).toBe("6 months and 2 days")
})

test('0.1 results in string: 1 month and 6 days', () => {
  expect(yearsToYearsMonthsDays(0.1)).toBe("1 month and 6 days")
})

test('0.05 results in string: 18 days', () => {
  expect(yearsToYearsMonthsDays(0.05)).toBe("18 days")
})

test('0.003 results in string: 1 day', () => {
  expect(yearsToYearsMonthsDays(0.003)).toBe("1 day")
})
