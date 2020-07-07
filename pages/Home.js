class Home {
	get headerNavigationSection() {
		return $('.nav-link-container');
	}
	get careersLink() {
		return $('.nav-link-container a[href*="10clouds.com/careers/"]');
	}
	clickOnCareersLink() {
		logger.step('Clicking careers link on company home page');
		this.careersLink.waitForDisplayed();
		this.careersLink.click();
	}

}
export default new Home();
