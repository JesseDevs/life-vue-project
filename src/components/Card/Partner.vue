<template>
	<partner-card>
		<picture class="profile-pic">
			<img :src="p.logo" alt="brand logo" />
		</picture>

		<text-content>
			<h4 class="step-1">{{ p.name }}</h4>
			<p v-html="p.context"></p>
		</text-content>
		<a :href="p.link" class="general-btn" target="_blank"
			>More Information <Arrow class="arrow" />
		</a>
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
			background-color: rgb(254, 254, 254);
			max-width: calc(100% - 2em);

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

			p a {
				display: inline-block;
				text-decoration: underline;

				&:hover {
					background-color: var(--brand-color);
				}
			}

			a {
				transition: 0.3s;
			}
		}

		text-content + a {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4px;

			div.arrow {
				transition: transform 0.3s ease-in-out;
			}

			&:hover {
				div.arrow {
					transform: scale(1.4);
				}
			}
		}
	}
</style>
