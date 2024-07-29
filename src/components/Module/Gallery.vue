<template>
	<photo-gallery id="section-content">
		<!-- <SectionTitle text="Gallery Showcase" /> -->
		<!-- <TransitionGroup name="fade" tag="div" mode="in-out"> -->
		<div class="gallery">
			<picture v-for="image in set1" :key="image" class="gallery-item">
				<img :src="`${image}`" alt="Gallery Image" />
			</picture>
		</div>
	</photo-gallery>
</template>

<script setup>
	const set1 = ref([
		'/gallery/2.webp',
		'/gallery/4.webp',
		'/gallery/1.webp',

		'/gallery/5.webp',
		'/gallery/3.webp',
		'/gallery/8.webp',
		'/gallery/lotp-1.jpg',
		'/gallery/lotp-2.jpg',
	]);

	const set2 = ref([
		'/gallery/lotp-3.jpg',
		'/gallery/lotp-4.jpg',
		'/gallery/lotp-5.jpg',
		'/gallery/lotp-6.jpg',
		'/gallery/lotp-7.jpg',
		'/gallery/lotp-8.jpg',
		'/gallery/lotp-9.jpg',
		'/gallery/lotp-10.jpg',
	]);

	const set3 = ref([
		'/gallery/lotp-11.jpg',
		'/gallery/lotp-12.jpg',
		'/gallery/lotp-13.jpg',
		'/gallery/lotp-14.jpg',
		'/gallery/lotp-15.jpg',
		'/gallery/lotp-16.jpg',
		'/gallery/lotp-17.jpg',
		'/gallery/lotp-18.jpg',
		// '/gallery/lotp-19.jpg',
		// '/gallery/lotp-20.jpg',
	]);
</script>

<style lang="scss" scoped>
	photo-gallery {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		position: relative;
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
			aspect-ratio: 3/4;
			overflow: hidden;

			&:nth-of-type(odd) {
				justify-self: flex-end;
			}

			&:nth-of-type(even) {
				justify-self: flex-start;
				transform: translateY(40px);
			}

			img {
				object-fit: cover;
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
