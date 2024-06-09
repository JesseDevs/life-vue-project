<template>
	<bubble-grid></bubble-grid>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		gsap.timeline({
			scrollTrigger: {
				trigger: 'bubble-grid',
				start: 'top-=70px center',
				end: 'bottom-=20px center',
				scrub: true,
			},
		})
			.to('bubble-grid', {
				y: '50%', // Move it vertically
				left: '30%', // New final position
				duration: 0.25, // Duration for scaling up
				ease: 'power1.inOut', // Smooth easing
				scale: 1.2,
				filter: 'blur(2px)', // Apply blur effect
			})
			.to('bubble-grid', {
				scale: 1, // Return to original scale
				filter: 'blur(0)', // Remove blur effect
				duration: 0.25, // Duration for scaling back
				ease: 'power1.inOut', // Smooth easing
			});
	});
</script>

<style lang="scss" scoped>
	bubble-grid {
		width: 100%;
		height: 250px;
		content: '';
		position: absolute;

		// left: -20%;
		// bottom: -70%;

		transition: all;
		background-image: radial-gradient(
			circle at center center,
			rgba(var(--brand-two-color-rgb) / 0.75) 12%,
			rgba(var(--brand-two-inner-color-rgb) / 0) 12%
		);
		background-size: 29px 29px;
		z-index: -10;
	}
</style>
