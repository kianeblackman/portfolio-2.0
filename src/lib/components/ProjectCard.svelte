<script lang="ts">
	import Icon from '@iconify/svelte';

	export let projectTitle: string;
	export let projectDescription: string;
	export let projectImage: string;
	export let projectImageAlt: string;
	export let projectLink: string;
	export let projectGithub: string;
	export let projectTech: Array<{ name: string; icon: string }>;
</script>

<div class="project-card">
	<div class="project-card__image">
		<img src={projectImage} alt={projectImageAlt} />
	</div>
	<div class="project-card__content">
		<div class="project-card__details">
			<h2 class="project-card__title bold">{projectTitle}</h2>
			<h4 class="project-card__description">{projectDescription}</h4>
			<ul class="project-card__techstack-list">
				{#each projectTech as tech}
					<li class="tech-sticker">
						<Icon icon={tech.icon} style="color: black;" />
						{tech.name}
					</li>
				{/each}
			</ul>
		</div>
		<div class="project-card__links">
			<a href={projectLink} class="button" target="_blank" rel="noopener noreferrer">View Site</a>
			<a href={projectGithub} class="button" target="_blank" rel="noopener noreferrer">View Code</a>
		</div>
	</div>
</div>
