<template>
	<photo-gallery>
		<div class="images-container images-left">
			<picture v-for="(image, index) in imagesLeft" :key="index" class="image-left">
				<img :src="image.src" :alt="image.alt" />
			</picture>
		</div>
		<div class="images-container images-right">
			<picture
				v-for="(image, index) in imagesRight"
				:key="index"
				class="image-right"
			>
				<img :src="image.src" :alt="image.alt" />
			</picture>
		</div>
	</photo-gallery>
</template>

<script setup>
	const imagesLeft = ref([
		{ src: '/gallery/2.webp', alt: 'placeholder' },
		{ src: '/gallery/1.webp', alt: 'placeholder' },
		{ src: '/gallery/4.webp', alt: 'placeholder' },
	]);

	const imagesRight = ref([
		{ src: '/gallery/5.webp', alt: 'placeholder' },
		{ src: '/gallery/3.webp', alt: 'placeholder' },
		{ src: '/gallery/8.webp', alt: 'placeholder' },
	]);
</script>

<style lang="scss" scoped>
	photo-gallery {
		display: block;
		width: 100%;
		position: relative;

		align-items: center;
		display: flex;
		flex-wrap: nowrap;
		justify-content: center;
		position: relative;
		column-gap: 8px;

		.images-container picture {
			max-width: 400px;
			overflow: hidden;

			img {
				transition: transform 0.3s ease-in-out;
			}
			&:hover {
				img {
					transform: scale(1.24);
				}
			}
		}

		.images-container:first-of-type {
			display: grid;
			grid-template-columns: 35% 1fr;
			justify-content: center;
			align-items: stretch;
			row-gap: 8px;
		}

		.images-left {
			picture:first-of-type {
				grid-column: 1/-1;
			}

			picture:nth-of-type(2) {
				grid-column: 2/-1;
			}
			picture:nth-of-type(3) {
				grid-column: 1/-1;
			}
		}

		.images-container:nth-of-type(2) {
			display: grid;
			grid-template-columns: 20% 40% 1fr;
			justify-content: center;
			align-items: stretch;
			row-gap: 10px;
		}

		.images-right {
			max-width: 47%;
			height: 100%;

			picture:first-of-type {
				grid-column: 1/-1;
			}

			picture:nth-of-type(2) {
				grid-column: 1/3;
				grid-row: 2;
			}
			picture:nth-of-type(3) {
				grid-column: 1/-1;
				grid-row: 3;
				padding-right: 20px;
			}
		}
	}
</style>
