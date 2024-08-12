<script lang="ts">
	import { Heading } from '$lib';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	type TechItem = {
		name: string;
		icon: string;
	};

	let hardStack: TechItem[] = [];
	let learningStack: TechItem[] = [];

	onMount(async () => {
		const response = await fetch('/data/techstack.json');
		const data = await response.json();
		hardStack = data.hardStack;
		learningStack = data.learningStack;
	});
</script>

<section id="about" class="about">
	<Heading customClass="heading--purple" heading="About" />
	<div class="about__content container--section even-columns">
		<div class="about__main">
			<h1>Hello there!</h1>
			<h2 class="about__introduction fw-regular">
				My name is Kiane Blackman. I'm a creative web developer based in the South of England with an eye for design! Aside from creating digital stuff I like gardening, cooking, swimming and many
				more outdoor activities.
			</h2>
			<div class="about__additional">
				<div class="about__card about__card--position">
					<div class="about__card-item">
						<h6>Position</h6>
						<p>Jnr. Web Developer</p>
					</div>
					<div class="about__card-item">
						<h6>Experience</h6>
						<p>2+ years</p>
					</div>
					<div class="about__card-item">
						<h6>Current Company</h6>
						<p class="d-flex align-items-center">Cormack Advertising</p>
					</div>
					<div class="about__card-item">
						<h6>Degree</h6>
						<p class="mb-0">First in Graphic Design</p>
					</div>
				</div>
				<div class="about__card about__card--contact">
					<div class="about__card-item">
						<h6>Email</h6>
						<p>hi@kianeblackman.com</p>
					</div>
					<div class="about__card-item">
						<h6>Location</h6>
						<p>Eastbourne and London</p>
					</div>
				</div>
			</div>
		</div>
		<div class="about__techstack">
			<div class="about__techstack-category">
				<h3 class="about__techstack-heading">Hard Stack</h3>
				<ul class="about__techstack-list">
					{#each hardStack as tech}
						<li class="about__techstack-sticker">
							<Icon icon={tech.icon} style="color: black;" />
							{tech.name}
						</li>
					{/each}
				</ul>
			</div>
			<div class="about__techstack-category">
				<h3 class="about__techstack-heading">Learning Stack</h3>
				<ul class="about__techstack-list">
					{#each learningStack as tech}
						<li class="about__techstack-sticker">
							<Icon icon={tech.icon} style="color: black;" />
							{tech.name}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
