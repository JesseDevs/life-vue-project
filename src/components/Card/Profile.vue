<template>
	<profile-card>
		<div class="profile-title">
			<picture class="profile-pic">
				<img :src="profile.imgsrc" alt="profile picture" />
			</picture>

			<div class="title">
				<h4 class="step-2">
					{{ profile.name }}
				</h4>
				<h5 v-for="(text, index) in profile.role" :key="index">
					<span>{{ text }}</span>
				</h5>
			</div>
		</div>
		<text-content>
			<p v-for="(text, index) in profile.text" :key="index">
				{{ text }}
			</p>
		</text-content>
	</profile-card>
</template>

<script setup>
	const props = defineProps({
		profile: {
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
	profile-card {
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: 220px 1fr;

		column-gap: 10px;
		align-items: center;
		justify-content: center;

		div.title {
			display: flex;
			flex-direction: column;
			padding-bottom: 10px;
			gap: 3px;

			h4 {
				font-family: 'Barlow', serif;
				font-weight: 500;
			}
			h5 {
				font-weight: 400;
				font-family: 'Barlow', serif;
				text-transform: uppercase;
				letter-spacing: 0.8px;
				font-style: italic;
			}

			h5 + h5 {
				padding-top: 3px;
			}
		}
		.profile-title {
			width: 100%;

			grid-column: 1/-1;
		}
		picture {
			max-width: 240px;
			aspect-ratio: 4/5;
			margin-bottom: 20px;
			align-self: start;
			height: auto;

			img {
				object-fit: cover;
				object-position: top;
			}
		}

		text-content {
			grid-column: 1/-1;
			display: flex;
			flex-direction: column;
			gap: 20px;
		}

		@media (min-width: 900px) {
			display: flex;
			flex-direction: row;
			column-gap: 40px;
			row-gap: 8px;
			align-items: flex-start;

			.profile-title {
				display: flex;
				flex-direction: column-reverse;
				max-width: 30%;
			}

			social-block {
				position: absolute;
				right: 0;
				top: 0;
				ul {
					flex-direction: row;
				}
			}
		}
	}
</style>
