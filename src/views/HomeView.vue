<script setup>
	import { onMounted, nextTick } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
	const loading = ref(true);
	const body = document.body;
	body.classList.add('overflow-hidden');

	watch(loading, (newValue) => {
		const body = document.body;
		if (newValue) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
	});

	onMounted(async () => {
		await nextTick();

		gsap.to('.loading-picture', {
			opacity: 1,
			filter: 'blur(0px)',
			duration: 2, // Adjust the duration as needed
			onComplete: () => {
				// Animate the blur effect and fade out to reveal the main content
				gsap.to('.launch', {
					filter: 'blur(10px)',
					opacity: 0,
					duration: 0.8, // Adjust the duration as needed
					onComplete: () => {
						// Set loading to false to hide the loading screen
						loading.value = false;
					},
				});
			},
		});

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
	<div class="launch" v-show="loading">
		<picture class="loading-picture">
			<img
				src="/images/logo-png.png"
				alt="logo-lotp"
				format="png"
				loading="eager"
			/>
			<div class="pulsing-circle"></div>
		</picture>
	</div>
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

	.launch {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: black; /* or any other background color */
		color: black; /* or any other text color */
		font-size: 2rem; /* adjust the size as needed */
		z-index: 9999;

		.loading-picture {
			opacity: 0;
			filter: blur(5px);
		}

		picture {
			width: 100%;
			max-width: 600px;
			max-height: 600px;
			position: relative;
			margin-bottom: 200px;
			img {
				max-width: 100%;
				height: 100%;
				object-fit: contain;
			}
		}

		.pulsing-circle {
			width: 100%;
			height: 100%;
			transform: translate(-50%, -50%);
			border-radius: 50%;
			top: 50%;
			left: 50%;
			position: absolute;
			background: radial-gradient(
				circle,
				rgb(var(--brand-two-color-rgb) / 0.2) 30%,
				transparent 80%
			);
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 1;
			filter: blur(30px);
			z-index: -1;
		}
	}
</style>
