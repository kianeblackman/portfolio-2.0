<script lang="ts">
	import Button from '../components/Button.svelte';
	import Heading from '../components/Heading.svelte';

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

<section id="contact" class="contact">
	<Heading customClass="heading--dark" heading="Contact" subheading="Back to top" />
	<div class="contact__content container section--contact">
		<div class="contact__main">
			<h2 class="fw-light">Say hello!</h2>
			<h1 class="fw-regular">INTERESTED IN A NEW PROJECT?</h1>
			<Button customClass="button--dark" text="Copy My Email" onClick={copyEmailToClipboard} />
		</div>
		<div class="contact__footer">
			<hr />
			<div class="contact__footer-links">
				<a href={links.about} target="_blank" rel="noopener noreferrer">ABOUT</a>
				<a href={links.projects} target="_blank" rel="noopener noreferrer">PROJECTS</a>
				<a href={links.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
			</div>
			<hr />
			<p>© 2024 by Kiane Blackman</p>
		</div>
	</div>
</section>
