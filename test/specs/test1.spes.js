
describe('Demo Test',()=>{

    it('My Firt Test',async()=>{

        browser.url('https://www.google.com/')


       await $('[name="q"]').setValue('WebdriverIO')
       browser.pause(2000)

       //(await $('[name="btnK"]')).click()
       browser.keys('Enter')
        browser.pause(2000)






    })
})