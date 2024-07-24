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

	const images = [
		{ src: '/gallery/2.webp', alt: 'Image 2' },
		{ src: '/gallery/1.webp', alt: 'Image 1' },
		{ src: '/gallery/4.webp', alt: 'Image 4' },
		{ src: '/gallery/5.webp', alt: 'Image 5' },
		{ src: '/gallery/3.webp', alt: 'Image 3' },
		{ src: '/gallery/8.webp', alt: 'Image 8' },
		{ src: '/gallery/lotp-1.jpg', alt: 'Image lotp-1' },
		{ src: '/gallery/lotp-2.jpg', alt: 'Image lotp-2' },
		{ src: '/gallery/lotp-3.jpg', alt: 'Image lotp-3' },
		{ src: '/gallery/lotp-4.jpg', alt: 'Image lotp-4' },
		{ src: '/gallery/lotp-5.jpg', alt: 'Image lotp-5' },
		{ src: '/gallery/lotp-6.jpg', alt: 'Image lotp-6' },
		{ src: '/gallery/lotp-7.jpg', alt: 'Image lotp-7' },
		{ src: '/gallery/lotp-8.jpg', alt: 'Image lotp-8' },
		{ src: '/gallery/lotp-9.jpg', alt: 'Image lotp-9' },
		{ src: '/gallery/lotp-10.jpg', alt: 'Image lotp-10' },
		{ src: '/gallery/lotp-11.jpg', alt: 'Image lotp-11' },
		{ src: '/gallery/lotp-12.jpg', alt: 'Image lotp-12' },
		{ src: '/gallery/lotp-13.jpg', alt: 'Image lotp-13' },
		{ src: '/gallery/lotp-14.jpg', alt: 'Image lotp-14' },
		{ src: '/gallery/lotp-15.jpg', alt: 'Image lotp-15' },
		{ src: '/gallery/lotp-16.jpg', alt: 'Image lotp-16' },
		{ src: '/gallery/lotp-17.jpg', alt: 'Image lotp-17' },
		{ src: '/gallery/lotp-18.jpg', alt: 'Image lotp-18' },
		{ src: '/gallery/lotp-19.jpg', alt: 'Image lotp-19' },
		{ src: '/gallery/lotp-20.jpg', alt: 'Image lotp-20' },
	];

	const chunkArray = (array, chunkSize) => {
		const chunks = [];
		for (let i = 0; i < array.length; i += chunkSize) {
			chunks.push(array.slice(i, chunkSize + i));
		}
		return chunks;
	};

	const imageSets = chunkArray(images, 4);
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
	}

	@mixin sm {
		@media screen and (max-width: 799px) {
			@content;
		}
	}

	.gallery {
		column-count: 4;
		--webkit-column-count: 4;
		--moz-column-count: 4;
		gap: 1rem;
	}

	.image img {
		height: auto;
		width: 100%;
	}

	@media screen and (max-width: 810px) {
		.gallery {
			column-count: 3;
			--webkit-column-count: 3;
			--moz-column-count: 3;
		}
	}

	@media screen and (max-width: 500px) {
		.gallery {
			column-count: 2;
			--webkit-column-count: 2;
			--moz-column-count: 2;
		}
	}

	@media screen and (max-width: 400px) {
		.gallery {
			column-count: 1;
			--webkit-column-count: 1;
			--moz-column-count: 1;
		}
	}
</style>
