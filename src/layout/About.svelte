<script lang="ts">
	import Heading from '../components/Heading.svelte';
</script>

<section id="about" class="about">
	<Heading customClass="heading--orange" heading="About" />
	<div class="about__content container section even-columns">
		<div class="about__main">
			<h2 class="fw-regular">
				Hello there! My name is Kiane Blackman. I'm a creative web developer based in the South of
				England with an eye for design! Aside from creating digital stuff I like gardening, cooking,
				swimming and many more outdoor activities.
			</h2>
			<div class="about__aditional even-columns">
				<div class="about__card about__card--position">
					<div class="about__card__item">
						<h6>Position</h6>
						<p>Jnr. Web Developer</p>
					</div>
					<div class="about__card__item">
						<h6>Experience</h6>
						<p>2+ years</p>
					</div>
					<div class="about__card__item">
						<h6>Current Company</h6>
						<p class="d-flex align-items-center">Cormack Advertising</p>
					</div>
					<div class="about__card__item">
						<h6>Degree</h6>
						<p class="mb-0">First in Graphic Design</p>
					</div>
				</div>
				<div class="about__card about__card--contact">
					<div class="about__card__item">
						<h6>Email</h6>
						<p class="p-email">
							<a class="text-decoration-none email-address" href="mailto:hello@gimaev.com">
								hello@gimaev.com
							</a>
						</p>
					</div>
					<div class="about__card__item">
						<h6>LOCATION</h6>
						<p>Eastbourne and London</p>
					</div>
				</div>
			</div>
		</div>
		<div class="about__tech-stack">
			<p>
				I'm a web developer based in Toronto, Canada. I specialize in building websites and web
				applications using modern technologies like React, Svelte, and Node.js. I'm passionate about
				creating beautiful, user-friendly interfaces and writing clean, maintainable code.
			</p>
		</div>
	</div>
</section>
