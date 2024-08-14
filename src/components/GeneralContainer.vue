<template>
	<section>
		<inner-column>
			<slot />
		</inner-column>
	</section>
</template>

<script setup>
	import { onMounted, nextTick } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(async () => {
		await nextTick();

		const sections = document.querySelectorAll('section');

		sections.forEach((section) => {
			const heading = section.querySelector('#section-heading');
			if (heading) {
				gsap.fromTo(
					heading,
					{ opacity: 0, y: 20 },
					{
						opacity: 1,
						y: 0,
						duration: 0.3,
						ease: 'power1.inOut',
						scrollTrigger: {
							trigger: section,
							start: 'top center+=180',
							end: 'bottom center',
						},
					},
				);
			}

			// Animate content with stagger
			const contents = section.querySelectorAll('#section-content');
			if (contents.length > 0) {
				gsap.fromTo(
					contents,
					{ opacity: 0, y: 20 },
					{
						delay: 0.16,
						opacity: 1,
						y: 0,
						duration: 0.3,
						ease: 'power1.inOut',
						scrollTrigger: {
							trigger: section,
							start: 'top center+=130',
							end: 'bottom center',
						},
						stagger: 0.1,
					},
				);
			}
		});
	});
</script>

<style lang="scss">
	@media (min-width: 800px) {
		section.landing inner-column {
			padding-top: 3rem;
		}
	}
	#section-heading {
		opacity: 0;
	}

	#section-content {
		opacity: 0;
	}
</style>
