<script lang="ts">
	import { onMount } from 'svelte';
	export let text: string;
	export let onClick: (() => void) | null = null;
	export let customClass: string = '';

	onMount(() => {
		if (!text || !customClass) {
			const error = new Error('text value missing');
			console.error(error);
			throw error;
		}
	});
</script>

<button class={`heading ${customClass ? customClass : ''}`} on:click|preventDefault={onClick ? onClick : undefined}>{text}</button>
