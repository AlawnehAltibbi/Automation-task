class HomePageScreen {
    get contentBtn(){
        return $('~tabbaritem_1')
    }
    get sign_in(){
        return $('~registerBtnText')
    }
    get welcomeMessage(){
        return $('~welcomingMsg')

    }
    get profile_Icon(){
        return $('//com.horcrux.svg.CircleView')

    }
}

export default new HomePageScreen(); // Export AddNoteScreen class
