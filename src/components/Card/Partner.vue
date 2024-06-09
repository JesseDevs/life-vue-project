<template>
	<partner-card>
		<picture class="profile-pic">
			<img :src="p.logo" alt="brand logo" />
		</picture>

		<text-content>
			<div class="title">
				<h4 class="step-1">{{ p.name }}<span class="brand-color">.</span></h4>
				<p v-html="p.context"></p>
			</div>
		</text-content>
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
	#team {
		background: linear-gradient(
			180deg,
			rgb(var(--background-rgb) / 0.3),
			rgb(var(--brand-color-rgb) / 0.5),
			rgb(var(--background-rgb) / 0.3)
		);
	}
	partner-card {
		opacity: 0;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;

		column-gap: 10px;
		row-gap: 15px;
		align-items: center;
		justify-content: center;

		div.title {
			display: flex;
			flex-direction: column;

			gap: 15px;
			h4 {
				font-weight: 400;
				font-style: italic;
				border-bottom: 2px solid rgb(78 171 232 / 0.7);
				padding-bottom: 5px;
			}
			p {
				font-weight: 300;
			}
		}
		picture {
			max-width: 200px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			margin: 0 auto;

			img {
				height: 100%;
			}
		}

		picture {
			align-self: start;
			height: auto;
		}

		text-content {
			grid-column: 1/-1;
			display: flex;
			flex-direction: column;
			p + p {
				padding-top: 15px;
			}
		}

		// @media (min-width: 1000px) {
		// 	grid-template-rows: 1fr 1fr;
		// 	column-gap: 30px;
		// 	row-gap: 8px;

		// 	picture {
		// 		grid-row: 1/-1;
		// 		justify-content: center;
		// 		align-items: center;
		// 		margin-top: 60px;
		// 	}

		// 	text-content {
		// 		grid-column: 2/-1;
		// 		grid-row: 1/-1;
		// 	}
		// }
	}
</style>
