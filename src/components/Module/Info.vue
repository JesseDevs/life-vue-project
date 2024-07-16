<template>
	<module-info>
		<div class="icon-container">
			<Quote class="quote" />
		</div>
		<div class="main-content">
			<h2>Give the gift of saving lives from opioid overdose</h2>
			<a
				class="general-btn"
				href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
				target="_blank"
				>Donate <Arrow class="arrow"
			/></a>
		</div>
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
			'.quote',
			{
				opacity: 0,
				y: -100,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: 'power3.inOut',
			},
		).fromTo(
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
		display: grid;
		grid-template-columns: 20vw 1fr;
		width: 100%;
		justify-content: center;
		position: relative;

		min-height: 200px;
		row-gap: 5vh;
		margin: 0 auto;

		@media (min-width: 768px) {
			grid-template-columns: 15vw 1fr;
		}

		h2 {
			font-size: clamp(1.425rem, 0.1705rem + 3.5727vw, 2.8rem);

			padding-top: 10vh;
			margin: 0 auto;

			margin: 0 auto;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}

		.main-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
		}

		.icon-container {
			svg {
				width: 100%;
			}
		}
	}
</style>
