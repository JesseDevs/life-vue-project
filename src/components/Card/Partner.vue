<template>
	<partner-card>
		<div class="picture-holder">
			<picture class="profile-pic">
				<img :src="p.logo" alt="brand logo" />
			</picture>
		</div>

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

		min-height: 560px;
		column-gap: 0.9em;
		row-gap: 1rem;

		cursor: grab;

		.picture-holder {
			background-color: white;
			margin-left: 1.4rem;
			margin-right: 1.4rem;
			height: fit-content;
		}

		picture {
			padding: 0.5em;
			max-width: 200px;
			margin: 0 auto;
			aspect-ratio: 5/3;

			img {
				object-fit: contain;
			}
		}

		h4,
		p {
			padding-left: 1.7rem;
			padding-right: 1.7rem;
		}

		h4 {
			font-weight: 500;
		}
		p {
			flex-grow: 1;
		}

		a.general-btn {
			margin-top: auto;
			margin-left: 0.8rem;
			margin-right: 0.8rem;

			padding-left: 20px;
			padding-right: 20px;

			@media (min-width: 500px) {
				margin-left: 1.4rem;
				margin-right: 1.4rem;
			}
		}

		&:active {
			cursor: grabbing;
		}
	}

	@media (min-width: 768px) {
		partner-card {
			// display: grid;
			// grid-template-columns: 1fr 1fr;
			align-items: center;

			width: 89%;

			picture {
				min-width: 280px;
			}

			div.picture-holder {
				width: 96%;
			}

			h4 {
				width: 100%;
				text-align: center;
			}

			p {
				max-width: 63ch;
			}

			.general-btn {
				width: 94%;
				margin-top: auto;
			}
		}
	}
</style>
