<template>
	<div class="dot-grid-left">
		<div
			v-for="(dot, index) in dots"
			:key="index"
			class="dot-wrapper"
			:style="{ animationDelay: `${index * 0.1}s` }"
		>
			<div class="dot"></div>
		</div>
	</div>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	const dots = ref([]);
	onMounted(() => {
		dots.value = new Array(100).fill(null);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#landing',
				start: 'bottom+50px bottom',
				end: 'bottom+50px center',
			},
		});

		tl.to('.dot-grid-left', {
			right: '0%',
			ease: 'power3.inOut',
			filter: 'blur(0)',
			scale: 1,
			opacity: 1,
			duration: 1.2,
			delay: 0.3,
		});
	});
</script>

<style lang="scss" scoped>
	.dot-grid-left {
		right: -100%;
		top: -20px;
		z-index: -10;
		opacity: 0;
		filter: blur(10px);
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(5, 1fr);

		display: grid;
		position: absolute;

		height: fit-content;
		overflow: hidden;
		scale: 2;

		transition: right 0.3s ease-in-out;

		.dot-wrapper {
			padding: 0.8rem;
			cursor: none;
			transition: 0.25s background;
			border-radius: 8px;
			height: fit-content;
		}

		.dot {
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background: linear-gradient(
				195deg,
				var(--background),
				var(--brand-two-color)
			);
			opacity: 0.35;
			animation: flicker 1.75s infinite;
			box-shadow: 0 2px 4px rgb(var(--brand-two-color-rgb) / 0.5);
		}

		@keyframes flicker {
			0%,
			100% {
				opacity: 0.35;
			}
			50% {
				opacity: 1;
			}
			75% {
				opacity: 0.5;
			}
		}
	}
</style>
