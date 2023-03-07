class searchPage {
  visit() {
    cy.visit("/")
  }

  selectCountry(country) {
    cy.get(`#country`).select(country)

  }

  selectCity(city) {
    cy.get(`#city`).select(city)

  }

  fillModel(model) {
    cy.get("#model").type(model)
  }

  fillPickupDate(date) {
    cy.get("#pickup").type(date)
  }

  fillDropOffDate(date) {
    cy.get("#dropoff").type(date)
  }

  fillFutureDropOffDateByDaysFromNow(days) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    cy.get("#dropoff").type(currentDate.toISOString().split('T')[0])
    
  }

  fillFuturePickupDateByDaysFromNow(days) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    cy.get("#pickup").type(currentDate.toISOString().split('T')[0])
    
  }

  clickSearchButton() {
    cy.get('.btn').click()
  }

}

export default searchPage
