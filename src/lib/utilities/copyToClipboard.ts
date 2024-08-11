function copyEmailToClipboard(input: string) {
	navigator.clipboard
		.writeText(input)
		.then(() => {
			console.log('Input copied to clipboard!');
		})
		.catch((err) => {
			console.error('Failed to copy input: ', err);
		});
}

export default copyEmailToClipboard;
