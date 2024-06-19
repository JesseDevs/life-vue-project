<template>
	<module-landing>
		<div class="centered-content">
			<picture>
				<img
					src="/images/logo-png.png"
					alt="logo-lotp"
					format="png"
					loading="eager"
				/>
				<div class="pulsing-circle"></div>
			</picture>
			<div class="landing-svg-holder">
				<SVL />
				<DYP />
			</div>
		</div>
	</module-landing>
</template>

<script setup>
	import { gsap } from 'gsap';
	onMounted(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			'.centered-content',
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.inOut',
			},
		);

		const svgChildren = document.querySelectorAll(
			'.landing-svg-holder .svg-container',
		);

		tl.fromTo(
			svgChildren,
			{
				opacity: 0,
				x: 100,
				rotation: 0,
			},
			{
				opacity: 1,
				x: 0,
				rotation: -360,
				duration: 1,
				ease: 'power1.out',
				stagger: 0.2,
			},
		);
	});
</script>

<style lang="scss" scoped>
	@keyframes slideFromBottom {
		0% {
			opacity: 0;
			transform: translateY(50%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	module-landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		justify-content: flex-start;
		position: relative;
		min-height: 50vh;

		pointer-events: none;
		.centered-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			min-height: 200px;

			height: 100%;
			width: 100%;
			position: relative;
			pointer-events: none;
			user-select: none;
			// animation-name: slideFromBottom;
			// animation-duration: 2s;
			// animation-fill-mode: forwards;
		}

		.spacer {
			min-height: 250px;
			width: 20px;
			pointer-events: none;
		}

		picture {
			width: 100%;
			max-width: 600px;

			position: relative;
			img {
				max-width: 100%;
				height: auto;
				object-fit: contain;
			}
		}
	}
	.pulsing-circle {
		width: 90%;
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

	.pulsing-circle::before {
		content: '';
		width: 50%;
		height: 50%;
		border-radius: 50%;

		box-shadow: 0 0 40px 20px rgb(var(--brand-two-color-rgb) / 0.2);
		animation: pulse 1.5s infinite;
	}

	div.landing-svg-holder {
		position: absolute;
		bottom: clamp(-100px, -75%, -50px);
		right: 5vmin;
		z-index: 2;
	}

	@media (min-width: 950px) {
		module-landing {
			padding-left: 80px;
		}
		// div.landing-svg-holder {
		// 	bottom: -5vmin;
		// 	right: 20vw;
		// }
	}

	@keyframes pulse {
		0% {
			transform: scale(0.9);
			opacity: 0.7;
			box-shadow: 0 0 40px 20px var(--brand-two-color);
		}
		50% {
			transform: scale(1.1);
			opacity: 1;
			box-shadow: 0 0 60px 30px var(--brand-two-color);
		}
		100% {
			transform: scale(0.9);
			opacity: 0.7;
			box-shadow: 0 0 40px 20px var(--brand-two-color);
		}
	}
</style>
