<script lang="ts">
	import Heading from '../lib/components/Heading.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';

	import { onMount } from 'svelte';

	let projects: Project[] = [];

	type Project = {
		projectTitle: string;
		projectDescription: string;
		projectLink: string;
		projectImage: string;
		projectImageAlt: string;
		projectGithub: string;
	};

	onMount(async () => {
		try {
			const response = await fetch('/data/projects.json');
			if (!response.ok) {
				throw new Error('Failed to fetch projects');
			}
			projects = await response.json();
		} catch (error) {
			console.error(error);
		}
	});
</script>

<section id="projects" class="projects">
	<Heading customClass="heading--purple" heading="Projects" />
	<div class="container section">
		<ol class="projects__list">
			{#each projects as project}
				<li class="projects__list-item">
					<ProjectCard
						projectTitle={project.projectTitle}
						projectDescription={project.projectDescription}
						projectLink={project.projectLink}
						projectImage={project.projectImage}
						projectImageAlt={project.projectImageAlt}
						projectGithub={project.projectGithub}
					/>
				</li>
			{/each}
		</ol>
	</div>
</section>
