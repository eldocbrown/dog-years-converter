/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age
to dog years. When a user enters a human age into the calculator and pressed
‘convert me to dog years’, the new dog years age should show up in the space
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5
human years.

event listeners, getElementById, operators

*/

// Write your code here 👇

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('myForm').addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const formData = Array.from(new FormData(e.currentTarget))

      const numberConversion = Number(formData[0][1])/10.5

      const resultContainer = document.getElementById('result')

      resultContainer.classList.toggle('fade')

      await new Promise(r => setTimeout(r, 500))

      numberConversion > 0 ?
          resultContainer.innerText = `You're ${yearsToYearsMonthsDays(numberConversion)}!`
          :
          resultContainer.innerText = "You're not born yet!"

      resultContainer.classList.toggle('fade')
  })

})

function yearsToYearsMonthsDays(value)
{
    const totalDays = value * 365
    const years = Math.floor(totalDays/365)
    const yearsStr = years > 1 ? 'years' : 'year'
    const months = Math.floor((totalDays-(years *365))/30)
    const monthsStr = months > 1 ? 'months' : 'month'
    const days = Math.floor(totalDays - (years*365) - (months * 30))
    const daysStr = days > 1 ? 'days' : 'day'
    let result
    years > 0 ?
        result = years + ` ${yearsStr}, ` + months + ` ${monthsStr} and ` + days + ` ${daysStr} dog old`
        :
        result = months + ` ${monthsStr} and ` + days + ` ${daysStr} dog old`

    return result
}


/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag

STRETCH GOALS:
- Can you convert your age into dog years, months and days?
- Can you improve the overall design?

*/
