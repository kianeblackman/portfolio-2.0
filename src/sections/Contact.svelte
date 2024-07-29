<script lang="ts">
	import { footerGraphic } from '../lib';
	import Button from '../components/Button.svelte';

	let links: { [key: string]: string } = {
		about: '#about',
		projects: '#projects',
		github: 'https://github.com/kianeblackman'
	};

	function copyEmailToClipboard() {
		const email = 'work@kianeblackman.com';
		navigator.clipboard
			.writeText(email)
			.then(() => {
				console.log('Email copied to clipboard!');
				alert('Email copied to clipboard!');
			})
			.catch((err) => {
				console.error('Failed to copy email: ', err);
			});
	}
</script>

<section id="contact" class="contact__section">
	<div class="contact__heading">
		<div class="container flex align-center space-between">
			<h2>CONTACT</h2>
			<h3>SCROLL TO TOP</h3>
		</div>
	</div>
	<div class="contact__content">
		<div class="contact_section container">
			<div class="start">
				<h3>Say hello!</h3>
				<h1 class="fw-light">INTERESTED IN A NEW PROJECT?</h1>
				<Button text="Copy My Email" onClick={copyEmailToClipboard} />
				<hr />
				<div class="links">
					<a href={links.about} target="_blank" rel="noopener noreferrer"> ABOUT </a>
					<a href={links.projects} target="_blank" rel="noopener noreferrer"> PROJECTS </a>
					<a href={links.github} target="_blank" rel="noopener noreferrer"> GITHUB </a>
				</div>
			</div>
			<div class="end">
				<hr />
				<p>© 2024 by Kiane Blackman</p>
			</div>
		</div>
		<div class="contact__graphic">
			<img src={footerGraphic} alt="contact" />
		</div>
	</div>
</section>
