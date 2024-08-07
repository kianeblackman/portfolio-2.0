<script lang="ts">
	export let text: string;
	export let url: string;
	export let event: (event: Event) => void;
</script>

<a class="button" href={url} on:click={event}>{text}</a>
