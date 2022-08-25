import BasePage from "./BasePage";

class LoginPage extends BasePage {
    static get FirstName() {
        return cy.get("#firstName");
    }
    static get LastName() {
        return cy.get("#lastName");
    }
    static get Email() {
        return cy.get("#userEmail");
    }
    static get Gender() {
        return cy.get('#gender-radio-2')
    }
    static get MobileNumber() {
        return cy.get("#userNumber");
    }
    static get Subjects() {
        return cy.get(".subjects-auto-complete__value-container");
    }
    static get Hobbies() {
        return cy.get("#hobbies-checkbox-2");
    }
    static get CurrentAdress() {
        return cy.get("#currentAddress");
    }
    

}


export default LoginPage