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

    get scrollDown() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()');
    }
     scrollToFindText(text) {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${text}")');
    }
    get scrollDownX2() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward().scrollForward()');
    }

    get scrollUp() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollBackward()');
    }

    get scrollUpX2() {
        return $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollBackward().scrollBackward()');
    }

    get backBtn() {
        return driver.back();
    }
}

export default new BaseCommand();
