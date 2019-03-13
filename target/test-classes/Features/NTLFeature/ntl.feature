@ulti
Feature: To test ultimatix login page


  Scenario Outline: To test ultimatix login page
    Given The user should be in ultimatix home page
    When The user should enter combination of username and password"<username>","<password>"
    Then The user should should see the error" The information you entered is incorrect. Please try again."message 

    Examples: 
      |username|password|
      |11111111|22222222|
      |33333333|44444444|
