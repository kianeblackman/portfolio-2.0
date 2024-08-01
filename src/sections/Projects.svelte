<script lang="ts">
	import Heading from '../components/Heading.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<section id="projects" class="projects">
	<Heading customClass="heading--orange" heading="Projects" />
	<div class="container section">
		<ol class="projects__list">
			<li class="projects__list-item">
				<ProjectCard
					projectTitle="Project 1"
					projectDescription="This is a description of project 1"
					projectLink="/"
					projectImage="/"
					projectImageAlt="Project 1"
					projectGithub="/"
				/>
			</li>
		</ol>
	</div>
</section>
