<template>
	<event-card>
		<picture>
			<img :src="event.img" alt="Event-title" />
			<div class="date-indicator">
				<p class="day domine">{{ event.dateDay }}</p>
				<p class="month domine">{{ event.month }}</p>
			</div>
		</picture>
		<text-content>
			<h2 class="step-1 domine">{{ event.title }}</h2>
			<p class="small-voice">
				{{ event.detail }}
			</p>
			<div class="line"></div>
		</text-content>
		<text-content>
			<h3 class="step-0 uppercase">Time</h3>
			<div class="date-block small-voice">
				<p>{{ event.timeSpan[0] }}</p>
				<p>-</p>
				<p>{{ event.timeSpan[1] }}</p>
			</div>
			<div class="location-block small-voice">
				<p v-for="(item, index) in event.location" :key="index">{{ item }}</p>
			</div>
		</text-content>
		<a class="shimmer" :href="event.link" target="blank">{{ event.linkText }}</a>
	</event-card>
</template>

<script setup>
	const props = defineProps({
		event: {
			type: Object,
			required: true,
		},
	});
</script>

<style lang="scss" scoped>
	@keyframes shimmer {
		0% {
			background-position: -100%;
		}
		100% {
			background-position: 100%;
		}
	}
	event-card {
		display: flex;
		flex-direction: column;
		padding: 8px;
		gap: 10px;

		background-color: rgb(var(--brand-color-rgb) / 0.3);
		position: relative;
		box-shadow: 0 5px 20px 0 rgba(var(--brand-color-rgb) / 0.2);
		img {
			transition: transform 0.3s ease-in-out;
		}
		&:hover {
			img {
				transform: scale(1.1);
			}
		}
		.shimmer {
			display: inline-block;
			position: relative;
			color: rgb(var(--white-rgb) / 0.8);
			font-weight: bold;
			text-align: center;
			padding: 8px;
			text-decoration: none;
			background: linear-gradient(
				90deg,
				rgba(255, 255, 255, 0.5) 25%,
				rgba(255, 255, 255, 0.9) 50%,
				rgba(255, 255, 255, 0.5) 75%
			);
			background-size: 200% auto;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			animation: shimmer 1.5s infinite;
		}
		picture {
			overflow: hidden;
			max-width: 400px;

			.date-indicator {
				position: absolute;
				top: 0;
				right: 0;
				padding: 5px 10px;
				background-color: var(--brand-two-color);
				// color: var(--brand-two-inner-color);
				text-align: center;
				font-weight: 600;
				p {
					line-height: 1;
				}

				.day {
					font-size: 2em;
				}

				.month {
					font-size: 1em;
				}
			}
		}

		text-content {
			gap: 8px;
			h2 {
				font-weight: 600;
			}
			div.line {
				height: 1px;
				width: 100%;
				background-color: var(--brand-color);
			}

			.uppercase {
				text-transform: uppercase;
			}

			div.date-block {
				display: flex;
				gap: 8px;
				max-width: fit-content;
				p {
					font-size: inherit;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					min-width: fit-content;
					flex: 1;
				}
			}

			div.location-block {
				display: flex;
				flex-direction: column;
				gap: 2px;

				max-width: fit-content;
				p {
					font-size: inherit;
				}
			}
		}
	}
</style>
