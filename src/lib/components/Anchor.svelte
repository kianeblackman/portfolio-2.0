<script lang="ts">
	export let anchorHeading: string;
	export let url: string;
	export let event: (event: Event) => void;
</script>

<a href={url} on:click={event}>{anchorHeading}</a>
