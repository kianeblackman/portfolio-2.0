<script lang="ts">
	import { Anchor, Button, Heading } from '$lib';

	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

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

	let scrollToSection: (event: Event) => void;

	onMount(async () => {
		try {
			const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
			gsap.registerPlugin(ScrollToPlugin);

			scrollToSection = (event: Event) => {
				event.preventDefault();

				const targetId = (event.target as HTMLAnchorElement).getAttribute('href') || '';
				const targetSection = document.querySelector(targetId);

				if (targetSection) {
					gsap.to(window, {
						duration: 2,
						scrollTo: {
							y: targetSection,
							offsetY: -1
						},
						ease: 'power4.inOut'
					});
				}
			};
		} catch (error) {
			console.error('Error loading GSAP ScrollToPlugin:', error);
		}
	});
</script>

<section id="contact" class="contact">
	<Heading customClass="heading--dark" event={scrollToSection} heading="Contact" anchorHeading="Back to top" url="#hero" />
	<div class="contact__content container section--contact">
		<div class="contact__main">
			<h2 class="fw-light">Say hello!</h2>
			<h1 class="fw-regular">INTERESTED IN A NEW PROJECT?</h1>
			<Button customClass="button--dark" text="Copy My Email" onClick={copyEmailToClipboard} />
		</div>
		<div class="contact__footer">
			<hr />
			<div class="contact__footer-links">
				<Anchor anchorHeading="About" url="#about" event={scrollToSection} />
				<Anchor anchorHeading="Projects" url="#projects" event={scrollToSection} />
				<a href={links.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
			</div>
			<hr />
			<p>© 2024 by Kiane Blackman</p>
		</div>
	</div>
</section>
