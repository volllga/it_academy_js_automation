Feature: Blog Page
  Blog page has title Blog | WebdriverIO

  Scenario Outline: Every Blog Page Post has Title

    Given I am on the home page
    When  I go to the contribute page
    Then I should see a page title

  Scenario Outline: Every Blog Page Post has Date

    Given I am on the home page
    When  I go to the blog page
    Then I should see a page title
