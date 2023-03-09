import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor'
import SearchPage from '../../page_objects/searchPage'
const search = new SearchPage()

Given('I visit homepage', () => {
  search.visit()
})

When(
  'I filter cars list by {string} model filter using valid dates',
  (model: string) => {
    search.fillModel(model)
    search.fillPickupDate('2023-05-05')
    search.fillDropOffDate('2023-06-05')
    search.clickSearchButton()
  },
)

When(
  'I filter cars list using pickup date later than drop off date',
  () => {
    search.fillFuturePickupDateByDaysFromNow(15)
    search.fillFutureDropOffDateByDaysFromNow(10)
    search.clickSearchButton()
  },
)

When('I filter cars list using valid dates', () => {
  search.fillFuturePickupDateByDaysFromNow(5)
  search.fillFutureDropOffDateByDaysFromNow(10)
  search.clickSearchButton()
})

Then(
  'I should see the table with only particular {string} cars',
  (model: string) => {
    cy.get('tbody > tr').each($el => {
      expect($el).to.contain(model)
    })
  },
)

Then(
  'I should see the alert saying {string}',
  (alert: string) => {
    cy.get('.alert').should('contain', alert)
  },
)

Then('I should see the table of cars', () => {
  cy.get('#search-results').should('be.visible')
})
