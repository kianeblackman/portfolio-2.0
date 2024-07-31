<script lang="ts">
	import { onMount } from 'svelte';
	export let text: string;
	export let onClick: (() => void) | null = null;

	onMount(() => {
		if (!text) {
			throw new Error('text value missing');
		}
	});
</script>

<button class="button" on:click|preventDefault={onClick ? onClick : undefined}>
	{text}
</button>
