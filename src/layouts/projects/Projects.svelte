<script lang="ts">
	import { Heading, ProjectCard } from '$lib/components';
	import { projects } from '$lib/data';

	const projectsHeading = {
		heading: 'Projects',
		customClass: 'heading--orange'
	};
</script>

<section id="projects" class="projects">
	<Heading {...projectsHeading} />
	<div class="container--section">
		<ol class="projects__list">
			{#each projects as project}
				<li class="projects__list-item">
					<ProjectCard {...project} />
				</li>
			{/each}
		</ol>
	</div>
</section>
