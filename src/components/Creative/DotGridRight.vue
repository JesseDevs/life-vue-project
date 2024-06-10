<template>
	<div class="dot-grid-right">
		<div
			v-for="(dot, index) in dots"
			:key="index"
			class="dot-wrapper"
			:style="{ animationDelay: `${index * 0.1}s` }"
		>
			<div class="dot-right"></div>
		</div>
	</div>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	const dots = ref([]);
	onMounted(() => {
		dots.value = new Array(205).fill(null);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: 'module-landing',
				start: 'bottom-=100px center',
				end: 'bottom-=100px  center',
			},
		});

		tl.to('.dot-grid-right', {
			scale: 2,
			filter: 'blur(10px)',
			opacity: 0,
			onComplete: function () {
				document.querySelector('.dot-grid-right').style.display = 'none';
			},
		});
	});
</script>

<style lang="scss" scoped>
	.dot-grid-right {
		grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));

		pointer-events: none;
		display: grid;
		position: absolute;
		left: 0;
		top: -20dvh;

		@media (min-width: 650px) {
			top: -10dvh;
		}

		width: 100%;
		max-width: 100%;
		height: fit-content;
		min-height: 100px;
		overflow: hidden;

		transition: grid-template-columns 2s ease-in-out;
		z-index: -99;
		scale: 1;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 40px;
			background-color: var(--background);
			backdrop-filter: blur(10px);
			z-index: 1;
		}

		.dot-wrapper {
			padding: 0.8rem;
			cursor: none;
			transition: 0.25s background;
			border-radius: 8px;
			height: max-content;
		}

		.dot-right {
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: linear-gradient(
				195deg,
				var(--background),
				var(--brand-two-color)
			);
			opacity: 0.79;
		}

		@media (min-width: 700px) {
			grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

			.dot-right {
				width: 20px;
				height: 20px;
			}
		}
	}
</style>
