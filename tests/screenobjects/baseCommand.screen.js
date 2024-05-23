class BaseCommand {
    get delayFor2s() {
        return driver.pause(2000);
    }

    get delayFor4s() {
        return driver.pause(4000);
    }

    get delayFor8s() {
        return driver.pause(8000);
    }


    get backBtn() {
        return driver.back();
    }
}

export default new BaseCommand();
