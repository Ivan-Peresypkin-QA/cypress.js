
describe('Проверка авторизации', function () {
    
    it('Верный логин , верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
         })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#forgotEmailButton').click(); // Нажать забыли пароль
        cy.get('#mailForgot').type('iw.peresypkin2014@yandex.ru'); // ввели логин
        cy.get('#restoreEmailButton').click(); // кнопка отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик

         })

    it(' Негативный кейс НЕ правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1111'); // ввели НЕ правильный пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
       

         })
    it(' Негативный кейс НЕ правильный ЛОГИН', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('iw.peresypkin2014@yandex.ru'); // ввели НЕ правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
       

         })
    it(' Негативный кейс валидации логин без @', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин БЕЗ @
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
       

         })

    it(' Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // захожу на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели СТРОЧНЫЙ логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').click(); // кнопка войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
       

         })

    

})

