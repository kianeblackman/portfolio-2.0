<script lang="ts">
	import { Heading } from '$lib/components';
	import { graphicStar } from '$lib/images';

	const heading = {
		heading: 'Home',
		anchorHeading: 'Contact',
		url: '#contact',
		customClass: 'heading--green'
	};
</script>

<section id="hero" class="hero">
	<Heading {...heading} />
	<div class="hero__content container--section">
		<h1 class="hero__heading fw-regular">
			<div class="bold">Kiane Blackman</div>
			<div class="hero__heading-star">
				<img src={graphicStar} alt="Graphic Star" />
			</div>
			a curious and creative
			<div class="hero__underline-wrapper">
				web developer
				<div class="hero__underline" style="--underline-url: url('/images/wavey-underline.svg');"></div>
			</div>
			with an eye for design!
			<div class="hero__sticker">
				<h3 class="fw-regular">PORTFOLIO 2024</h3>
			</div>
		</h1>
	</div>
</section>
