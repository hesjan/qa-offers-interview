export const startBrowserMaximized = () => {
	logger.step('Starting browser and maximizing it');
	browser.url('');
	browser.maximizeWindow();
};
