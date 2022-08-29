Feature: Log in/out to Wikipedia

    Scenario: I want to log in to Wikipedia
        Given I have the URL open in the browser
            | URL                                     |
            | https://www.google.com/                 |
            | https://en.wikipedia.org/wiki/Main_Page |
            | https://www.w3schools.com/              |
            | https://en.wikibooks.org/wiki/Main_Page |
        And I am in the log out landing page
        When I click the log in button
        And I fill in the form
            | Username | Password |
            | user     | 1234     |
            | xxxxxxxx | xxxxxxxx |
        Then I want to be in the log in landing page

    Scenario: I want to log out from Wikipedia
        Given I am loged in to Wikipedia
        And I click the log out button
        Then I want to be in the log out landing page
        And I want to close the browser window