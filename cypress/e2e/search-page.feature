Feature: Cars search

  Scenario Outline: User must be able to filter cars by model
    Given I visit the search page
    When I filter cars list by "<model>" model filter using valid dates
    Then I should see the table with only particular "<model>" cars
    Examples:
      | model       |
      | Toyota Rav4 |
      | Toyota Aygo |

  Scenario: User must be able to filter by valid pickup and drop off date
    Given I visit the search page
    When I filter cars list using valid dates
    Then I should see the table of cars

  Scenario: User must not be able to filter by pickup date which is later than drop off date
    Given I visit the search page
    When I filter cars list using pickup date later than drop off date
    Then I should see the alert saying "Please enter a valid date!"
