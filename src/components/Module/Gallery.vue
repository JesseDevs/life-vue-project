<template>
	<photo-gallery id="section-content">
		<div class="gallery">
			<picture
				v-for="(image, index) in currentSet"
				:key="image"
				:class="{ active: currentSet.includes(image) }"
			>
				<img
					:style="{ animationDelay: `${index * 0.1}s` }"
					:src="`${image}`"
					alt="Gallery Image"
				/>
			</picture>
		</div>
	</photo-gallery>
</template>

<script setup>
	const set1 = [
		'/gallery/2.webp',
		'/gallery/4.webp',
		'/gallery/1.webp',
		'/gallery/5.webp',
		'/gallery/3.webp',
		'/gallery/8.webp',
		'/gallery/lotp-1.jpg',
		'/gallery/lotp-2.jpg',
	];

	const set2 = [
		'/gallery/lotp-3.jpg',
		'/gallery/lotp-4.jpg',
		'/gallery/lotp-5.jpg',
		'/gallery/lotp-6.jpg',
		'/gallery/lotp-7.jpg',
		'/gallery/lotp-8.jpg',
		'/gallery/lotp-9.jpg',
		'/gallery/lotp-10.jpg',
	];

	const set3 = [
		'/gallery/lotp-11.jpg',
		'/gallery/lotp-12.jpg',
		'/gallery/lotp-13.jpg',
		'/gallery/lotp-14.jpg',
		'/gallery/lotp-15.jpg',
		'/gallery/lotp-16.jpg',
		'/gallery/lotp-17.jpg',
		'/gallery/lotp-18.jpg',
	];

	const getRandomDelay = (index) => {
		const minDelay = 0.1; // Minimum delay
		const maxDelay = 2; // Maximum delay
		const range = maxDelay - minDelay;
		return `${(Math.random() * range + minDelay).toFixed(2)}s`;
	};

	const sets = [set1, set2, set3];
	const currentSetIndex = ref(0);
	const currentSet = computed(() => sets[currentSetIndex.value]);

	const updateSet = () => {
		currentSetIndex.value = (currentSetIndex.value + 1) % sets.length;
	};

	let intervalId = null;

	watch(
		currentSetIndex,
		(newIndex) => {
			// Update the gallery when the currentSetIndex changes
		},
		{ immediate: true },
	);

	onMounted(() => {
		intervalId = setInterval(updateSet, 4000);
	});

	onUnmounted(() => {
		clearInterval(intervalId);
	});
</script>

<style lang="scss" scoped>
	photo-gallery {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		position: relative;
	}

	.gallery picture.active img {
		opacity: 0;
		animation: fadeout 1s forwards;
	}

	@keyframes fadeout {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 10px;
		place-items: center;

		picture {
			max-width: 260px;
			height: auto;
			aspect-ratio: 3/3;
			overflow: hidden;
			background-color: rgb(var(--brand-two-color-rgb) / 0.2);

			transition: opacity 1s ease-in-out;

			&:nth-of-type(odd) {
				justify-self: flex-end;
			}

			&:nth-of-type(even) {
				justify-self: flex-start;
				transform: translateY(40px);
			}

			img {
				object-fit: cover;
				transition: opacity 1s ease-in-out;
				transition: transform 0.3s ease-in-out;

				&:hover {
					transform: scale(1.15);
				}
			}
		}

		@media (min-width: 700px) {
			grid-template-columns: repeat(3, 1fr);
			picture {
				&:nth-of-type(even) {
					transform: translateY(0);
				}
				&:nth-of-type(2),
				&:nth-of-type(5) {
					transform: translateY(100px);
				}

				&:last-child {
					grid-column: 3/-1;
				}
			}
		}

		@media (min-width: 1000px) {
			grid-template-columns: repeat(4, 1fr);
			picture {
				&:nth-of-type(5) {
					transform: translateY(0px);
				}

				&:last-child {
					grid-column: 4/-1;
				}

				&:nth-of-type(even) {
					transform: translateY(60px);
				}
			}
		}
	}

	@mixin sm {
		@media screen and (max-width: 799px) {
			@content;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-leave-active {
		position: absolute;
	}
</style>
