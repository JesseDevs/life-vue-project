<script setup>
	import { onMounted, nextTick } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { useInterfaceService } from '~/services/InterfaceService';

	const ui = useInterfaceService();

	gsap.registerPlugin(ScrollTrigger);

	onMounted(async () => {
		await nextTick();

		// Fade-in animation for the landing section
		gsap.to('.landing', {
			opacity: 1,
			y: 0,
			ease: 'power2.out',
		});

		// Fade-in animations for other sections
		const sections = document.querySelectorAll(
			'section.GeneralContainer:not(.landing)',
		);
		sections.forEach((section) => {
			gsap.to(section, {
				opacity: 1,
				y: 0,

				ease: 'power2.out',
				scrollTrigger: {
					trigger: section,
					start: 'top 67%',
					end: 'top 20%',
					toggleActions: 'play none none none',
				},
			});
		});

		// Loading picture animation
		gsap.timeline()
			.to('.loading-picture', {
				opacity: 1,
				duration: 1.3,
			})
			.to('.loading-picture', {
				duration: 0.5,
				immediateRender: false,
			})
			.to('.loading-picture', {
				opacity: 0,

				duration: 0.3,
				ease: 'power2.inOut',
				onComplete: () => {
					gsap.to('.launch', {
						opacity: 0,
						duration: 0.5,
						ease: 'power2.inOut',
						onComplete: () => {
							ui.loading = false;
						},
					});
				},
			});

		// Timeline for dot-grid-left animation
		gsap.fromTo(
			'.dot-grid-left',
			{
				opacity: 0,
				right: '-100%',
			},
			{
				opacity: 1,
				right: '0',
				ease: 'power3.inOut',
				scrollTrigger: {
					trigger: '#mission',
					start: 'top-=200px center',
				},
			},
		);
	});
</script>

<template>
	<div class="launch" v-show="ui.loading">
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
		<GeneralContainer class="info" id="info">
			<Info />
		</GeneralContainer>
		<GeneralContainer class="mission" id="mission">
			<Mission />
		</GeneralContainer>

		<GeneralContainer class="naloxone" id="naloxone">
			<Naloxone />
		</GeneralContainer>

		<GeneralContainer class="team" id="team">
			<Team />
		</GeneralContainer>

		<GeneralContainer class="events" id="events">
			<Events />
		</GeneralContainer>

		<GeneralContainer class="gallery" id="gallery">
			<Gallery />
		</GeneralContainer>

		<GeneralContainer class="resources" id="resources">
			<Resources />
		</GeneralContainer>

		<GeneralContainer class="contact" id="contact">
			<Contact />
		</GeneralContainer>
	</main>
</template>

<style lang="scss" scoped>
	.GeneralContainer {
		opacity: 0; // Default hidden state
		// Start below original position
		// Smooth transition
		transform: translateY(100px);
	}

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

			transition: filter 0.3s ease-in-out;
		}

		picture {
			width: 100%;
			margin-top: 100px;
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
