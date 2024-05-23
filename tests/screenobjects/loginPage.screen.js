class LoginPageScreen {
    get PhoneOrEmailBox(){
        return $('~email_login_user_txt');
    }
    get PasswordBox(){
        return $('~email_login_pass_txt')
    }
    get LoginBtn(){
        return $('~emailLoginActionBtn')
    }
}

export default new LoginPageScreen();
