Feature: Instamotion Marke and Modell Search
   
    Feature This feature is for see the Car Searching 
    Scenario: See the home page and Search the Car
    Given A User navigate to the Instamotion home page
    When The page has loaded, accept the cookies
    And A User see the home page
    And A User click the Marke and selected "Audi"
    Then A User click the Treffer button and searched all Audi Car