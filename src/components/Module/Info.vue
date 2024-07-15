<template>
	<module-info>
		<div class="icon-container">
			<Quote class="quote" />
		</div>
		<div class="main-content">
			<h2>Give the gift of saving lives from opioid overdose</h2>
			<a class="donate" href="/">Donate</a>
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
		padding-top: 50px;
		padding-bottom: 50px;
		min-height: 200px;
		row-gap: 5vh;
		margin: 0 auto;

		h2 {
			font-size: clamp(1.425rem, 0.1705rem + 3.5727vw, 3rem);

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

		a.donate {
			background-color: rgb(75 121 162);
			color: white;

			font-weight: 600;
			outline: none;
			appearance: none;
			border: none;
			grid-column: 2/-1;
			text-align: center;

			margin: 0 auto;

			max-width: 165px;
			padding: 12px 50px;
			z-index: 2;
			position: relative;
			cursor: pointer;
			transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

			letter-spacing: 0.8px;

			&:hover {
				background-color: rgb(var(--brand-color-rgb) / 0.5);
				box-shadow: 0 0 5px rgba(var(--brand-color-rgb) / 0.5),
					0 10px 20px rgba(var(--brand-color-rgb) / 0.5),
					0 0 20px rgba(var(--brand-color-rgb) / 0.5),
					0 0 100px rgba(var(--brand-color-rgb) / 0.5);
			}
		}
	}
</style>
