<script lang="ts">
	import { Anchor, Heading } from '$lib/components';
	import { copyToClipboard } from '$lib/utilities';
	import { onMount } from 'svelte';
	import tippy, { followCursor } from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';

	const contactHeading = {
		heading: 'Contact',
		anchorHeading: 'Back to Top',
		url: '#hero',
		customClass: 'heading--dark'
	};

	const aboutLinks = {
		anchorHeading: 'About',
		url: '#about'
	};

	const projectsLinks = {
		anchorHeading: 'Projects',
		url: '#projects'
	};

	const githubLink = 'https://github.com/kianeblackman';
	const email = 'hi@kianeblackman';

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
	<Heading {...contactHeading} />
	<div class="contact__content container--contact">
		<div class="contact__main">
			<h2 class="fw-light">Say hello!</h2>
			<h1 class="fw-regular">INTERESTED IN A NEW PROJECT?</h1>
			<button id="copyButton" class="button--dark" on:click={() => copyToClipboard(email)}>Copy My Email</button>
		</div>
		<div class="contact__footer">
			<hr />
			<div class="contact__footer-links">
				<Anchor {...aboutLinks} />
				<Anchor {...projectsLinks} />
				<a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
			</div>
			<hr />
			<p>© 2024 by Kiane Blackman</p>
		</div>
	</div>
</section>
