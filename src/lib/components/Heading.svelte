<script lang="ts">
	import { onMount } from 'svelte';

	export let heading: string;
	export let subheading: string | null = null;
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
		if (subheading && !url) {
			throw new Error('URL is required when subheading is provided.');
		}
	});
</script>

<div class={`heading ${customClass}`}>
	<div class="container flex align-center space-between">
		<h2>{heading}</h2>
		{#if subheading}
			<h3>
				<a href={url} on:click={event}>{subheading}</a>
			</h3>
		{/if}
	</div>
</div>
