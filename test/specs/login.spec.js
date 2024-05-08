const LoginPage = require('../pages/login.page')

describe('Demo test', function () {
    it('Login Test', async () => {

        browser.url('https://the-internet.herokuapp.com/login')

        browser.pause(20000)


        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        browser.pause(20000)
        await LoginPage.checckMassage('You logged into a secure area!')






        // await $('#username').setValue('tomsmith')
        // await $('#password').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()

        // await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')


    });


});
