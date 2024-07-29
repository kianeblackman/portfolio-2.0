<script lang="ts">
	export let url: string = '/';
	export let text: string = 'This is a button';
	export let onClick: (() => void) | null = null;
</script>

<a href={url} class="button" on:click|preventDefault={onClick}>
	{text}
</a>
