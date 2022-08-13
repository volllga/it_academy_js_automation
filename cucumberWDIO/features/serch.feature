Feature: Search

  Scenario: Search from the search bar produces correct images
    Given I am on the gettingStarted page
    When I enter "pause" into the search bar
    Then URL should contain "pause"
