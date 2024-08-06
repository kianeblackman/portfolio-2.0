<script lang="ts">
	import Heading from '../components/Heading.svelte';
</script>

<section id="hero" class="hero">
	<Heading customClass="heading--green" heading="Home" subheading="Contact" url="#contact" />
	<div class="hero__content container--section">
		<h1 class="hero__heading fw-regular">
			<div class="bold">Kiane Blackman</div>
			🡢 a curious and creative
			<div class="hero__underline-wrapper">
				web developer
				<div
					class="hero__underline"
					style="--underline-url: url('/images/wavey-underline.svg');"
				></div>
			</div>
			with an eye for design!
			<div class="hero__sticker">
				<h3 class="fw-regular">PORTFOLIO 2024</h3>
			</div>
		</h1>
		<div class="hero__image">
			<img src="/images/image.svg" alt="Hero Graphic" />
		</div>
	</div>
</section>
