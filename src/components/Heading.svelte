<script lang="ts">
	import { onMount } from 'svelte';

	export let heading: string;
	export let subheading: string | null = null;
	export let customClass: string = '';
	export let url: string = '';

	onMount(() => {
		if (!heading || !customClass) {
			throw new Error('fields are required');
		}
	});

	onMount(() => {
		if (subheading && !url) {
			throw new Error('url is required');
		}
	});
</script>

<div class={`heading ${customClass ? customClass : ''}`}>
	<div class="container flex align-center space-between">
		<h2>{heading}</h2>
		{#if subheading}
			<h3><a href={url}>{subheading.toUpperCase()}</a></h3>
		{/if}
	</div>
</div>
