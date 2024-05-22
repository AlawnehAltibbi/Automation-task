class Personal_InformationScreen {
    get height (){
        return $('~height_txt');
    }

    get weight (){
        return $('~weight_txt');
    }
    get bloodType (){
        return $('~blood_type_txt');
    }
    get O_plus (){
        return $('~alert_action_2');
    }

    get saveInfo (){
        return $('~profile_save_btn');
    }
    get successAlert (){
        return $('~alertTtile');
    }
    get Done(){
        return $('~alert_action_0');
    }
}

export default new Personal_InformationScreen(); // Export NoteScreenTxt class
