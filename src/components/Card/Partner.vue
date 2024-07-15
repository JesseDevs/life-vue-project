<template>
	<partner-card>
		<picture class="profile-pic">
			<img :src="p.logo" alt="brand logo" />
		</picture>

		<text-content>
			<h4 class="step-1">{{ p.name }}</h4>
			<p v-html="p.context"></p>
		</text-content>
		<a :href="p.link" target="_blank">More Information <Arrow class="arrow" /> </a>
	</partner-card>
</template>

<script setup>
	const props = defineProps({
		p: {
			type: Object,
			required: true,
		},
	});
</script>

<style lang="scss">
	partner-card {
		scroll-snap-align: start;
		opacity: 1;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 10px;

		column-gap: 10px;

		align-items: center;
		justify-content: space-between;

		picture {
			aspect-ratio: 16 / 9;

			max-height: 125px;
			width: 100%;

			overflow: hidden;
			padding: 5px 35px;

			display: flex;
			align-items: center;
			justify-content: center;
			background-color: white;

			img {
				object-fit: contain;
			}

			@media (min-width: 500px) {
				padding: 10px 120px;
			}
			@media (min-width: 750px) {
				padding: 10px 200px;
			}
			@media (min-width: 1000px) {
				padding: 10px 300px;
			}
		}

		text-content {
			display: flex;
			position: relative;
			flex-direction: column;
			gap: 1.2em;
			padding: 1em;
			align-self: flex-start;
			justify-content: flex-start;
			flex-grow: 1;

			h4 {
				font-family: 'Barlow', serif;
				font-weight: 500;
			}
			// p {
			// 	font-weight: 300;
			// }

			// &:before {
			// 	content: '';
			// 	position: absolute;
			// 	background-color: rgb(75 121 162);
			// 	height: 2px;
			// 	bottom: -2px;
			// 	left: -2px;
			// 	width: 20%;
			// }

			p a {
				display: inline-block;
			}

			a {
				transition: 0.3s;
			}

			// @media (hover: hover) {
			// 	a:hover {
			// 		background-color: var(--brand-color);
			// 		color: white;
			// 	}
			// }
		}

		text-content + a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4px;
			background-color: rgb(75 121 162);
			color: white;

			font-weight: 600;
			outline: none;
			appearance: none;
			border: none;

			padding: 12px 50px;
			z-index: 2;
			position: relative;
			cursor: pointer;
			transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

			letter-spacing: 0.8px;

			// &:before {
			// 	content: '';
			// 	position: absolute;
			// 	background-color: rgb(75 121 162);
			// 	height: 2px;
			// 	top: 0;
			// 	left: -100%;
			// 	width: 100%;
			// }

			div.arrow {
				transition: transform 0.3s ease-in-out;
			}

			&:hover {
				div.arrow {
					transform: scale(1.4);
				}
			}

			transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

			letter-spacing: 0.8px;
		}
	}
</style>
