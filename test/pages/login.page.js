

class LoginPage{
get usernameTextbox(){
    return $('[name="username"]')
}
get passwordTextbox(){
    return $('#password')
}
get loginButton(){
    return $('button[type="submit"]')
}
get liginMessage(){
    return $('#flash')
}
async login(username,password){
    
    await this.usernameTextbox.setValue(username)
    await this.passwordTextbox.setValue(password)
    await this.loginButton.click()
}
async checckMassage(msg){
    await expect(this.liginMessage).toHaveTextContaining(msg)
}

}
module.exports = new LoginPage()