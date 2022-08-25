import LoginPage from "../fixtures/PageObjects/LoginPage";

describe('DemoQA', () => {
  it('Scenario 1', () => {
  cy.visit("https://demoqa.com/automation-practice-form");

  LoginPage.FirstName.type('Marta');
  LoginPage.LastName.type('Liepa');
  LoginPage.Email.type('test@test.lv');
  LoginPage.Gender.click({force: true});
  LoginPage.MobileNumber.type('12345678');
  LoginPage.Subjects.type("Math{enter}");
  LoginPage.Hobbies.click({force: true});
  LoginPage.CurrentAdress.type("Latvia");
  

  })
  

  
})