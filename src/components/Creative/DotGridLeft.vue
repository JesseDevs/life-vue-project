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
	const dots = ref([]);
	onMounted(() => {
		dots.value = new Array(60).fill(null);
	});
</script>

<style lang="scss" scoped>
	.dot-grid-left {
		right: -100%;
		top: -20px;
		z-index: -99;
		opacity: 0;

		grid-template-columns: repeat(5, 1fr);
		grid-row: repeat(auto-fill, minmax(40px, 1fr));

		display: grid;
		position: absolute;

		height: fit-content;
		overflow: hidden;

		transition: right 0.3s ease-in-out;

		@media (min-width: 460px) {
			max-height: 660px;
		}
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
			opacity: 0.45;
			animation: flicker 1.75s infinite;
			box-shadow: 0 2px 4px rgb(var(--brand-two-color-rgb) / 0.5);
		}

		@keyframes flicker {
			0%,
			100% {
				opacity: 0.45;
			}
			50% {
				scale: 1.1;
				opacity: 1;
			}
			75% {
				opacity: 0.8;
			}
		}
	}
</style>
