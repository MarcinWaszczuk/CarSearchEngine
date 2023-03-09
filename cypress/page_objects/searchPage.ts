class searchPage {
  
  element = {
    countryDropdown: "#country",
    cityDropdown: "#city",
    modelInput: "#model",
    pickupDateSelect: "#pickup",
    dropOffDateSelect: "#dropoff",
    searchButton: ".btn",
  }

  visit() {
    cy.visit("/")
  }

  selectCountry(country: string) {
    cy.get(this.element.countryDropdown).select(country)
  }

  selectCity(city: string) {
    cy.get(this.element.cityDropdown).select(city)
  }

  fillModel(model: string): void {
    cy.get(this.element.modelInput).type(model)
  }

  fillPickupDate(date: string) {
    cy.get(this.element.pickupDateSelect).type(date)
  }

  fillDropOffDate(date: string) {
    cy.get(this.element.dropOffDateSelect).type(date)
  }

  fillFuturePickupDateByDaysFromNow(days: number) {
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + days)
    cy.get(this.element.pickupDateSelect).type(
      currentDate.toISOString().split("T")[0]
    )
  }

  fillFutureDropOffDateByDaysFromNow(days: number) {
    let currentDate = new Date()
    currentDate.setDate(currentDate.getDate() + days)
    cy.get(this.element.dropOffDateSelect).type(
      currentDate.toISOString().split("T")[0]
    )
  }

  clickSearchButton() {
    cy.get(this.element.searchButton).click()
  }
}

export default searchPage
