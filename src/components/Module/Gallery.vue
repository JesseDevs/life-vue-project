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

	const allImages = ref([
		{ src: '/gallery/2.webp', alt: 'placeholder' },
		{ src: '/gallery/1.webp', alt: 'placeholder' },
		{ src: '/gallery/4.webp', alt: 'placeholder' },
		{ src: '/gallery/5.webp', alt: 'placeholder' },
		{ src: '/gallery/3.webp', alt: 'placeholder' },
		{ src: '/gallery/8.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-1.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-2.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-3.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-4.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-5.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-6.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-7.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-8.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-9.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-10.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-11.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-12.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-13.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-14.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-15.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-16.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-17.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-18.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-19.webp', alt: 'placeholder' },
		{ src: '/gallery/lotp-20.webp', alt: 'placeholder' },
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
		column-gap: 10px;

		.images-container picture {
			max-width: 300px;
			max-height: 450px;
			overflow: hidden;
			position: relative;

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
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;
			row-gap: 10px;
		}

		.images-container:nth-of-type(2) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: stretch;
			row-gap: 10px;
		}

		.images-right {
			max-width: 47%;
			height: 100%;

			picture:nth-of-type(2) img {
				padding-right: 20px;
			}

			picture:nth-of-type(3) img {
				padding-right: 10px;
			}
		}
	}
</style>
