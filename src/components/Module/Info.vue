<template>
	<section id="info">
		<inner-column>
			<module-info>
				<h2 class="step-4">Save Lives Now</h2>

				<a
					class="general-btn"
					href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
					target="_blank"
					>Donate
					<Arrow class="arrow" />
				</a>
				<div class="spinner-wrap">
					<div class="spinner-item"></div>
					<div class="spinner-item spinner-item--2"></div>
					<div class="spinner-item spinner-item--3"></div>
				</div>
			</module-info>
		</inner-column>
	</section>
</template>

<script setup>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#info',
				start: 'top+=70px center',
				end: 'bottom center',
			},
		});

		tl.fromTo(
			'module-info',
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
	.spinner {
		&-wrap {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
			height: 100%;
			z-index: -2;
		}

		&-item {
			//background: red;
			border: 5px solid var(--brand-two-color);
			border-radius: 50%;
			height: 500px;
			width: 500px;
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			animation: zoom 4s linear 0.75s infinite;
			box-shadow: 4px 4px 20px 1px rgb(var(--brand-two-color-rgb) / 0.7);

			&--2 {
				animation-delay: 2.25s;
			}

			&--3 {
				animation-delay: 3.75s;
			}
		}
	}

	@keyframes zoom {
		0% {
			transform: translate(-50%, -50%) scale(0.2);
			opacity: 0;
		}
		50% {
			opacity: 0.9;
		}
		100% {
			transform: translate(-50%, -50%) scale(1);
			opacity: 0;
		}
	}

	.bg-dots {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	section {
		position: relative;
		min-height: 500px;
	}

	module-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 30px;
		opacity: 0;

		width: 100%;
		min-height: 350px;
		margin: 0 auto;
		padding: 30px 0;

		.vol-link {
			display: flex;
			align-items: center;
			justify-content: center;

			&:hover {
				svg {
					transform: translate(1px, -1px);
				}
			}
		}

		div {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 5px;
		}

		h2 {
			font-weight: 800 !important;
			font-style: normal;

			margin: 0 auto;

			margin: 0 auto;
			font-weight: 600;
			text-transform: uppercase;
			letter-spacing: 0.08em;
			text-align: center;

			// @media (min-width: 800px) {
			// 	font-size: 3rem;
			// 	line-height: 3.5rem;
			// }
		}

		@media (min-width: 800px) {
			// gap: 70px;
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
</style>
