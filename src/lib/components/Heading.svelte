<script lang="ts">
	import { onMount } from 'svelte';
	import { Anchor } from '$lib';

	export let heading: string = 'Kiane Blackman';
	export let anchorHeading: string | null = null;
	export let customClass: string = '--dark';
	export let url: string = '/';

	onMount(() => {
		if (!heading) {
			throw new Error('Heading is required.');
		}
		if (!customClass) {
			throw new Error('Custom class is required.');
		}
		if (anchorHeading && !url) {
			throw new Error('URL is required when subheading is provided.');
		}
	});
</script>

<div class={`heading ${customClass}`}>
	<div class="heading__content container">
		<h2>{heading}</h2>
		{#if anchorHeading}
			<h3>
				<Anchor {anchorHeading} {url} />
			</h3>
		{/if}
	</div>
</div>
