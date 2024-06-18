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

		div.title {
			display: flex;
			flex-direction: column;

			gap: 15px;
			h4 {
				font-weight: 400;
				font-style: italic;
				// border-bottom: 2px solid rgb(78 171 232 / 0.7);
				// padding-bottom: 5px;
			}
			p {
				font-weight: 300;
			}
		}
		picture {
			aspect-ratio: 16 / 9;

			max-height: 120px;
			width: 100%;

			overflow: hidden;
			padding: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: white;

			img {
				object-fit: contain;
			}
		}

		text-content {
			display: flex;
			position: relative;
			flex-direction: column;
			gap: 15px;
			padding-left: 10px;
			padding-top: 20px;
			align-self: flex-start;
			flex-grow: 1;
			border-left: 2px solid rgb(75 121 162);

			&:before {
				content: '';
				position: absolute;
				background-color: rgb(75 121 162);
				height: 2px;
				bottom: -2px;
				left: -2px;
				width: 20%;
			}

			p a {
				display: inline-block;
			}

			a {
				transition: 0.3s;
			}

			@media (hover: hover) {
				a:hover {
					background-color: var(--brand-color);
					color: white;
				}
			}
		}

		text-content + a {
			transition: 0.3s;
			padding: 10px 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 4px;
			background-color: rgb(75 121 162);
			font-weight: 600;
			position: relative;

			&:before {
				content: '';
				position: absolute;
				background-color: rgb(75 121 162);
				height: 2px;
				top: 0;
				left: -100%;
				width: 100%;
			}

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
