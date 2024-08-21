<template>
	<module-landing>
		<div class="centered-content">
			<picture class="landing-logo">
				<img
					src="/images/logo-png.png"
					alt="logo-lotp"
					format="png"
					loading="eager"
				/>
				<div class="pulsing-circle"></div>
			</picture>

			<p class="landing-sup">
				Give the gift of saving&nbsp;lives<br />
				from opioid overdose
			</p>
			<a href="https://www.instagram.com/lifeofthepartyorg/" class="flex-holder">
				<Insta />
				<p>lifeofthepartyorg</p>
			</a>
		</div>
	</module-landing>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	import { gsap } from 'gsap';

	const ui = useInterfaceService();
	onMounted(() => {
		const tl = gsap.timeline();

		setTimeout(() => {
			startAnimations();
		}, 1600);

		function startAnimations() {
			tl.fromTo(
				'.landing-logo',
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
				'<',
			);
			tl.fromTo(
				'.landing-sup',
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
				'<.3',
			);
			tl.fromTo(
				'.flex-holder',
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
				'<',
			);
		}
	});
</script>

<style lang="scss" scoped>
	.landing-sup {
		padding-top: 10px;
		font-weight: 400;
		letter-spacing: 0.12em;

		text-transform: uppercase;
		text-align: center;
		margin: 0 auto;
	}
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
	a.flex-holder {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		gap: 10px;
		color: var(--brand-color);
		margin-top: 10px;
	}

	module-landing {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		justify-content: flex-start;
		position: relative;
		min-height: 30vh;

		.centered-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
			min-height: 200px;

			height: 100%;
			width: 100%;
			position: relative;
		}

		.spacer {
			min-height: 250px;
			width: 20px;
			pointer-events: none;
		}

		picture {
			width: 100%;
			max-width: 600px;
			margin: 0 auto;
			position: relative;
			pointer-events: none;
			user-select: none;
			animation: pulse-logo 3s infinite alternate;
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
		border-radius: 70%;

		box-shadow: 0 0 40px 20px rgb(var(--brand-two-color-rgb) / 0.2);
		animation: pulse 2s infinite alternate;
	}

	div.landing-svg-holder {
		position: absolute;
		bottom: -65%;

		right: 0px;
		width: 40%;
		max-width: 225px;
		height: 100%;
		z-index: -10;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.8);
			opacity: 0.7;
			box-shadow: 0 0 60px 30px var(--brand-two-color);
		}
		50% {
			transform: scale(1); /* Increased scale */
			opacity: 1;
			box-shadow: 0 0 40px 40px var(--brand-two-color); /* Adjusted shadow */
		}
		100% {
			transform: scale(0.8);
			opacity: 0.7;
			box-shadow: 0 0 60px 30px var(--brand-two-color);
		}
	}
	@keyframes pulse-logo {
		0% {
			scale: 1;
		}
		50% {
			scale: 1.006;
		}
		100% {
			scale: 1;
		}
	}
</style>
