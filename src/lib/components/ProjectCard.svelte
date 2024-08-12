<script lang="ts">
	import { onMount } from 'svelte';

	type ProjectProps = {
		projectTitle: string;
		projectDescription: string;
		projectLink: string;
		projectImage: string;
		projectImageAlt: string;
		projectGithub: string;
	};

	export let projectTitle: ProjectProps['projectTitle'];
	export let projectDescription: ProjectProps['projectDescription'];
	export let projectLink: ProjectProps['projectLink'];
	export let projectImage: ProjectProps['projectImage'];
	export let projectImageAlt: ProjectProps['projectImageAlt'];
	export let projectGithub: ProjectProps['projectGithub'];

	onMount(() => {
		const requiredProps: (keyof ProjectProps)[] = ['projectTitle', 'projectDescription', 'projectLink', 'projectImage', 'projectGithub'];
		requiredProps.forEach((prop) => {
			if (!eval(prop)) {
				console.error(new Error(`${prop} is required`));
				throw new Error(`${prop} is required`);
			}
		});
	});
</script>

<div class="project-card">
	<div class="project-card__image">
		<img src={projectImage} alt={projectImageAlt} />
	</div>
	<div class="project-card__content">
		<div class="project-card__details">
			<h1 class="project-card__title">{projectTitle}</h1>
			<h4 class="project-card__description">{projectDescription}</h4>
		</div>
		<div class="project-card__links">
			<a href={projectLink} class="button" target="_blank" rel="noopener noreferrer">View Site</a>
			<a href={projectGithub} class="button" target="_blank" rel="noopener noreferrer">View Code</a>
		</div>
	</div>
</div>
