Feature: Instamotion How it works
   
    Feature This feature is for the how it works for Instamotion
    Scenario: See the home page and check the how it works in instamotion
    Given A User navigate to the Instamotion homepage
    When The page has loaded, accept the cookies
    And A User see the home page
    And A User click the "So funktionierts" button
    And A User validate the title "So funktioniert der Autokauf bei instamotion"
    Then A User see the all details then end of the page