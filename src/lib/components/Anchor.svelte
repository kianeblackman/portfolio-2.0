<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	export let anchorHeading: string;
	export let url: string;
	export let scrollToSection: (event: Event) => void;

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

<a href={url} on:click={scrollToSection}>{anchorHeading}</a>
