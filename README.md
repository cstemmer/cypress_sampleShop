<h1> cypress_sampleShop </h1>
This is a small test suite for a sample shop website https://automationexercise.com/ 

I made it to showcase what kind of work I can do with Cypress within a very limited timeframe. 

<h2>How to get these tests running?</h2>

1. Install Cypress following the instructions from the official documentation:
   https://docs.cypress.io/guides/getting-started/installing-cypress

2. Clone this repo:
   git clone "https://github.com/cstemmer/cypress_sampleShop.git"

3. The repo has 6 spec files:

   <i>add_to_cart.cy.js</i> - checks whether items can be successfully added to cart 

   <i>header.cy.js</i> - checks whether all ui elements of header are present

   <i>login.cy.js</i> - tests for successful and unsuccessful login

   <i>logout.cy.js</i> - checks whether user can log out

   <i>product_catalog.cy.js</i> - checks whether elements of product catalog are displayed correctly and if hover behavior works correctly

   <i>registration.cy.js</i> - registers a new user with unique name and email

   It supports tests for two kinds of devices, <b>mobile</b> and <b>desktop</b>.

   <h3>How to run all tests at once?</h3>
   
   In order to run all of them on mobile, run this in terminal:

   npm run test:mobile

   For desktop, run this in termimal:

   npm run test:desktop

   <h3>How to run specific tests?</h3>

   Run this command in terminal (replacing the fragments within <> with actual values):

   npx cypress run --spec <absolute path to spec> --env device=<desktop or mobile> --config video=false --browser chrome --headed

   You can also run
   
   npx cypress open

   This will open cypress navigation window and you will be able to choose a spec you'd like to run. 

   
