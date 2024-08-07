<script lang="ts">
	import { onMount } from 'svelte';
	import { Anchor } from '$lib';

	export let heading: string;
	export let anchorHeading: string | null = null;
	export let customClass: string = '';
	export let url: string = '';
	export let event: (event: Event) => void;

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
	<div class="container flex align-center space-between">
		<h2>{heading}</h2>
		{#if anchorHeading}
			<h3>
				<Anchor {anchorHeading} {url} {event} />
			</h3>
		{/if}
	</div>
</div>
