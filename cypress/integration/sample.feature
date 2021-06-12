Feature: Add two number

Scenario Outline: A calculation
    Given web app loaded
    When I enter <first> and <second>
    Then  verify that the result is equal the <result>
 
    Examples:
      | first | second | result |
      | 1     | 2      | 3      |
      | 3     | 4      | 7      |
      | 5     | 6      | 11     |