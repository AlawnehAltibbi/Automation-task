import profileScreen from '../../screenobjects/android/profile.screen.js';
import baseCommandScreen from '../../screenobjects/android/baseCommand.screen.js';
import personal_InformationScreen from '../../screenobjects/android/personal_Information.screen.js';
import countryScreen from '../../screenobjects/android/country.screen.js';
import medicalRecordScreen from '../../screenobjects/android/medicalRecord.screen.js';
import homePageScreen from '../../screenobjects/android/homePage.screen.js';
import PHRScreen from '../../screenobjects/android/PHR.screen.js';
import loginPageScreen from '../../screenobjects/android/loginPage.screen.js';

 function validatePHRData(expectedHeight, expectedWeight, expectedBloodType) {
    const apiurl = 'https://api-stg.altibb.com/active/v1/phrs/29313626';

    fetch(apiurl, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer oYKqtcwsnenbEO_vmsdMkxF1KeRc71WR',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            const height = data.height;
            const weight = data.weight;
            const blood_type = data.blood_type;

            if (height === expectedHeight && weight === expectedWeight && blood_type === expectedBloodType) {
                console.log('PHR data validation successful.');
            }
            else {
                console.log("fail")
            }
        })
}

describe('Login User App, Edit PHR Record Information', () => {
    before(async () => {
        await countryScreen.saudiArabia.click();
        await baseCommandScreen.delayFor8s;
    });

    it('Should be able to access the user', async () => {
        await homePageScreen.sign_in.click();
        await loginPageScreen.PhoneOrEmailBox.setValue('962798365448');
        await loginPageScreen.PasswordBox.setValue('123123');
        await loginPageScreen.LoginBtn.click();
        await expect(homePageScreen.welcomeMessage).toBeDisplayed();
    });

    it('Edit PHR Record Information', async () => {
        await homePageScreen.profile_Icon.click();
        await profileScreen.first_PHR.click();
        await PHRScreen.medical_Record.click();
        await medicalRecordScreen.personal_Information.click();
        await personal_InformationScreen.height.setValue('171');
        await personal_InformationScreen.weight.setValue('68');
        await personal_InformationScreen.bloodType.click();
        await personal_InformationScreen.O_plus.click();
        await personal_InformationScreen.saveInfo.click();
        await expect(personal_InformationScreen.successAlert).toBeDisplayed();
        await personal_InformationScreen.Done.click();
        await validatePHRData(171, 68, 'O+');
    });
});
