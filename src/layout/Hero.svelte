<script lang="ts">
	import { waveyUnderline, heroGraphic } from '../lib';
	import Heading from '../components/Heading.svelte';
</script>

<section id="hero" class="hero">
	<Heading customClass="heading--green" heading="Home" subheading="Contact" />
	<div class="container section">
		<h1 class="fw-regular hero-text">
			<div class="bold">Kiane Blackman</div>
			🡢 a curious and creative
			<div class="underline-wrapper">
				web developer
				<div class="underline" style="--underline-url: url('{waveyUnderline}');"></div>
			</div>
			with an eye for design!
			<div class="sticker">
				<h3 class="fw-regular">PORTFOLIO 2024</h3>
			</div>
		</h1>
		<!-- <div class="hero-graphic">
			<img src={heroGraphic} alt="Hero Graphic" />
		</div> -->
	</div>
</section>
