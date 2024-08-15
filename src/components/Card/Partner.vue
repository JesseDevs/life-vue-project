<template>
	<partner-card>
		<picture class="profile-pic">
			<img :src="p.logo" alt="brand logo" />
		</picture>

		<h4 class="step-1">{{ p.name }}</h4>
		<p v-html="p.context"></p>

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
		display: flex;
		flex-direction: column;
		width: 100%;
		background: rgb(221, 219, 219);
		color: rgb(10, 5, 7);
		padding: 1em;
		min-height: 500px;
		column-gap: 0.9em;

		picture {
			padding: 0.8em;
			max-width: 200px;
			margin: 0 auto;

			img {
				object-fit: contain;
			}
		}

		a {
			margin-top: auto;
		}
	}

	@media (min-width: 768px) {
		partner-card {
			display: grid;
			grid-template-columns: 1fr 1fr;
			align-items: center;
			row-gap: 0.5em;
			width: 92%;

			picture {
				min-width: 280px;
			}

			p,
			a {
				grid-column: 1/-1;
			}
		}
	}
</style>
