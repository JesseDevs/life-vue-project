<template>
	<profile-card>
		<div class="profile-title">
			<picture class="profile-pic">
				<img :src="profile.imgsrc" alt="profile picture" />
			</picture>
			<!--
			<social-block>
				<ul>
					<li>
						<a href="twitter.com" target="_blank">
							<Icon name="entypo-social:twitter" />
						</a>
					</li>
					<li>
						<a href="twitter.com" target="_blank">
							<Icon name="ph:instagram-logo-fill"
						/></a>
					</li>
					<li>
						<a href="twitter.com" target="_blank">
							<Icon name="mdi:gmail" />
						</a>
					</li>
				</ul>
			</social-block> -->
			<div class="title">
				<h4 class="step-2">
					{{ profile.name }}<span class="brand-color">.</span>
				</h4>
				<h5>{{ profile.role }}</h5>
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
		}
		.profile-title {
			width: 100%;
			max-width: 300px;
		}
		picture {
			max-width: 325px;
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

		social-block {
			align-self: flex-start;
			margin-right: auto;

			ul {
				display: flex;
				flex-direction: column;
				gap: 10px;
				align-self: flex-end;
				svg {
					width: 30px;
					height: 30px;
					transition: scale 0.3s ease-in-out;

					filter: drop-shadow(2px 2px 3px rgb(var(--brand-color-rgb) / 0.5));

					path {
						transition: fill 0.3s ease-in-out;
					}

					&:hover {
						scale: 1.08;
						path {
							fill: rgb(var(--brand-inner-color-rgb) / 0.9);
						}
					}
				}
			}
		}

		@media (min-width: 700px) {
			display: flex;
			flex-direction: row;
			column-gap: 40px;
			row-gap: 8px;

			.profile-title {
				margin-top: 20px;
				display: flex;
				flex-direction: column-reverse;
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
