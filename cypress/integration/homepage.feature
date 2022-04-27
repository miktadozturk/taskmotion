Feature: Instamotion Home Page
   
    Feature This feature is for see the instamotion homepage 
    Scenario: See the home page and validate the instamotion title and form
    Given A User navigate to the Instamotion home page
    When The page has loaded, accept the cookies
    And A User see the home page
    And A User validate the Instamotion title "Geprüfte Gebrauchtwagen mit Garantie | instamotion"
    Then A User validate the form 