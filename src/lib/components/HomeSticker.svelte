<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { graphicFlower } from '$lib/images';

	onMount(async () => {
		try {
			const { ScrollToPlugin } = await import('gsap/ScrollToPlugin');
			gsap.registerPlugin(ScrollToPlugin);

			const homeSticker = document.querySelector('.home-sticker img');

			window.addEventListener('scroll', () => {
				const rotation = window.scrollY / 10;
				gsap.to(homeSticker, {
					rotation,
					duration: 0.5
				});
			});
		} catch (error) {
			console.error('Error loading GSAP ScrollToPlugin:', error);
		}
	});
</script>

<div class="home-sticker container">
	<img class="scroll" src={graphicFlower} alt="" />
</div>
