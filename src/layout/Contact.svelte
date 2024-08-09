<script lang="ts">
	import { Anchor, Heading } from '$lib';
	import { onMount } from 'svelte';
	import tippy, { followCursor } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';

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
			})
			.catch((err) => {
				console.error('Failed to copy email: ', err);
			});
	}

	onMount(() => {
		tippy('#copyButton', {
			content: '<h2>Woo-hoo!!!</h2>',
			allowHTML: true,
			arrow: false,
			followCursor: true,
			plugins: [followCursor],
			trigger: 'click',
			theme: 'dark',
			animation: 'scale',

			onShow(instance) {
				setTimeout(() => {
					instance.hide();
				}, 2000);
			}
		});
	});
</script>

<section id="contact" class="contact">
	<Heading customClass="heading--dark" heading="Contact" anchorHeading="Back to top" url="#hero" />
	<div class="contact__content container section--contact">
		<div class="contact__main">
			<h2 class="fw-light">Say hello!</h2>
			<h1 class="fw-regular">INTERESTED IN A NEW PROJECT?</h1>
			<button id="copyButton" class="button--dark" on:click={copyEmailToClipboard}>Copy My Email</button>
		</div>
		<div class="contact__footer">
			<hr />
			<div class="contact__footer-links">
				<Anchor anchorHeading="About" url="#about" />
				<Anchor anchorHeading="Projects" url="#projects" />
				<a href={links.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
			</div>
			<hr />
			<p>© 2024 by Kiane Blackman</p>
		</div>
	</div>
</section>
