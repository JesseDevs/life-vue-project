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
	const dots = ref([]);
	onMounted(() => {
		dots.value = new Array(100).fill(null);
	});
</script>

<style lang="scss" scoped>
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.dot-grid-right {
		animation: fadeIn 1.5s ease-in-out;
	}
	.dot-grid-right {
		grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
		grid-row: repeat(auto-fill, minmax(40px, 1fr));

		pointer-events: none;
		display: grid;
		position: absolute;
		opacity: 1;
		left: 0;
		top: 10%;

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
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background: linear-gradient(
				195deg,
				var(--background),
				var(--brand-two-color)
			);
			opacity: 0.9;
		}

		@media (min-width: 700px) {
			grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

			.dot-right {
				width: 15px;
				height: 15px;
			}
		}
	}
</style>
