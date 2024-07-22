<template>
	<module-info id="section-content">
		<!-- <div class="icon-container">
			<Quote class="quote" />
		</div> -->

		<h2>Give the gift of saving lives from opioid overdose</h2>
		<a
			class="general-btn"
			href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
			target="_blank"
			>Donate <Arrow class="arrow"
		/></a>

		<div class="purple"></div>
		<div class="blue c-one"></div>
		<div class="blue c-two"></div>
	</module-info>
</template>

<script setup>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#info',
				start: 'top-=50px center',
				end: 'top center',
			},
		});

		tl.fromTo(
			'.main-content',
			{
				opacity: 0,
				y: 100,
			},
			{
				y: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.inOut',
			},
			'<',
		);
	});
</script>

<style lang="scss">
	module-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;

		width: 100%;
		min-height: 200px;
		margin: 0 auto;
		padding: 30px 0;

		h2 {
			font-size: 1.75rem;
			line-height: 2.2rem;

			margin: 0 auto;

			margin: 0 auto;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			text-align: center;

			@media (min-width: 800px) {
				font-size: 3rem;
				line-height: 3.5rem;
			}
		}

		@media (min-width: 800px) {
			gap: 70px;
			h2 {
				font-size: 3rem;
				line-height: 3.5rem;
			}
		}

		// .icon-container {
		// 	position: absolute;
		// 	top: -40px;
		// 	left: -1rem;
		// 	max-width: 20%;
		// 	svg {
		// 		width: 100%;
		// 	}
		// }
	}

	div.purple {
		width: 70%;
		height: 50%;
		background-color: rgb(255, 0, 212);
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		border-radius: 9999px;
		transform: translate(-50%, -50%) skew(30deg); /* Center the div and apply skew */
		filter: blur(200px);
		opacity: 0.9;
	}

	div.blue {
		width: 40%;
		height: 30%;
		background-color: var(--brand-color);
		position: absolute;

		// z-index: -1;
		// border-radius: 9999px;
		/* Center the div and apply skew */
		filter: blur(130px);
	}

	div.c-one {
		bottom: 10px;
		left: -40px;
		z-index: -3;
		opacity: 0.8;
		transform: skewY(40deg);
	}

	div.c-two {
		top: 0;
		right: 0;
		opacity: 0.8;
		z-index: -1;
		transform: skewY(20deg);
	}
</style>
