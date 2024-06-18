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
		</div>
		<div class="landing-svg-holder">
			<SVL />
			<DYP />
		</div>
	</module-landing>
</template>

<script setup>
	import { gsap } from 'gsap';
</script>

<style lang="scss" scoped>
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
		}

		.spacer {
			min-height: 250px;
			width: 20px;
			pointer-events: none;
		}

		picture {
			aspect-ratio: 3/2;
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
		bottom: -15vmin;
		right: 3vmin;
	}

	@media (min-width: 950px) {
		module-landing {
			padding-left: 80px;
		}
		div.landing-svg-holder {
			bottom: -5vmin;
			right: 20vw;
		}
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
