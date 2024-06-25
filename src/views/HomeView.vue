<script setup>
	import { onMounted, nextTick } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(async () => {
		await nextTick();

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: 'section.landing',
				start: 'bottom center',
				end: 'bottom center',
			},
		});

		tl.to('.dot-create', {
			scale: 2,
			filter: 'blur(10px)',
			opacity: 0,
			onComplete: () => {
				document.querySelector('.dot-create').style.display = 'none';
			},
		}).to(
			'.dot-grid-left',
			{
				right: '0',
				ease: 'power3.inOut',
				filter: 'blur(0)',
				scale: 1,
				opacity: 1,
			},
			'-=0.5',
		);

		// GSAP animation for rotating text
		gsap.set('#text', { transformOrigin: 'center center' });
		const textAnimation = gsap.to('#text', {
			rotation: -360,
			duration: 15,
			repeat: -1,
			ease: 'linear',
		});

		// GSAP animation for scaling heart
		gsap.set('#heart', { scale: 0.8, transformOrigin: 'center center' });
		gsap.to('#heart', {
			scale: 1.19,
			transformOrigin: 'center center',
			duration: 0.8,
			repeat: -1,
			yoyo: true,
			ease: 'power1.inOut',
		});

		gsap.fromTo(
			'.images-left .image-left',
			{ x: -100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '#gallery',
					start: 'top center',
					end: 'bottom center',
				},
				stagger: 0.4, // Stagger value in seconds
			},
		);

		// Right container animation with stagger
		gsap.fromTo(
			'.images-right .image-right',
			{ x: 100, opacity: 0 },
			{
				x: 0,
				opacity: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '#gallery',
					start: 'top center',
					end: 'bottom center',
				},
				stagger: 0.5, // Stagger value in seconds
			},
		);
	});
</script>

<template>
	<main>
		<GeneralContainer class="landing" id="landing">
			<Landing />
		</GeneralContainer>
		<div class="dot-create">
			<inner-column>
				<DotGridRight />
			</inner-column>
		</div>

		<GeneralContainer class="mission" id="mission">
			<Mission />
		</GeneralContainer>

		<GeneralContainer class="gallery" id="gallery">
			<Gallery />
		</GeneralContainer>
		<GeneralContainer class="events" id="events">
			<Events />
		</GeneralContainer>

		<GeneralContainer class="partners" id="partners">
			<Partners />
		</GeneralContainer>

		<GeneralContainer class="team" id="team">
			<Team />
		</GeneralContainer>

		<GeneralContainer class="contact" id="contact">
			<Contact />
		</GeneralContainer>
	</main>
</template>

<style lang="scss" scoped>
	.dot-create {
		z-index: -99;
		inner-column {
			padding-top: 0;
			padding-bottom: 0%;
			max-width: 900px;
		}
	}
</style>
