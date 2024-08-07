<script lang="ts">
	import { Heading } from '$lib';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

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
						}
					});
				}
			};
		} catch (error) {
			console.error('Error loading GSAP ScrollToPlugin:', error);
		}
	});
</script>

<section id="hero" class="hero">
	<Heading
		customClass="heading--green"
		event={scrollToSection}
		heading="Home"
		subheading="Contact"
		url="#contact"
	/>
	<div class="hero__content container--section">
		<h1 class="hero__heading fw-regular">
			<div class="bold">Kiane Blackman</div>
			🡢 a curious and creative
			<div class="hero__underline-wrapper">
				web developer
				<div
					class="hero__underline"
					style="--underline-url: url('/images/wavey-underline.svg');"
				></div>
			</div>
			with an eye for design!
			<div class="hero__sticker">
				<h3 class="fw-regular">PORTFOLIO 2024</h3>
			</div>
		</h1>
		<div class="hero__image">
			<img src="/images/image.svg" alt="Hero Graphic" />
		</div>
	</div>
</section>
