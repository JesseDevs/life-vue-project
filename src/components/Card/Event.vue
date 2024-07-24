<template>
	<a :href="event.link" target="blank">
		<event-card>
			<picture>
				<img :src="event.img" alt="Event-title" />
				<div class="date-indicator">
					<p class="day">{{ event.dateDay }}</p>
					<p class="month">{{ event.month }}</p>
				</div>
			</picture>
			<text-content>
				<h2 class="step-1">{{ event.title }}</h2>
				<p class="small-voice">
					{{ event.detail }}
				</p>
			</text-content>
			<div class="line"></div>
			<text-content>
				<div class="date-block small-voice">
					<p>{{ event.timeSpan[0] }}</p>
					<p>-</p>
					<p>{{ event.timeSpan[1] }}</p>
				</div>
				<div class="location-block small-voice">
					<p v-for="(item, index) in event.location" :key="index">{{ item }}</p>
				</div>
			</text-content>
		</event-card>
	</a>
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
	a {
		height: 100%;
		display: block;
	}
	event-card {
		display: flex;
		flex-direction: column;
		padding: 15px 10px;
		gap: 10px;
		height: 100%;

		align-items: center;
		background-color: rgb(var(--brand-color-rgb) / 0.4);
		position: relative;
		box-shadow: 0 5px 20px 0 rgba(var(--brand-color-rgb) / 0.2);
		transition: background-color 0.3s ease-in-out;
		img {
			transition: transform 0.3s ease-in-out;
		}
		&:hover {
			img {
				transform: scale(1.1);
			}
			background-color: rgb(var(--brand-color-rgb) / 0.2);
		}

		picture {
			overflow: hidden;
			max-width: 350px;
			height: fit-content;

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

		div.line {
			height: 1px;
			width: 100%;
			background-color: var(--brand-color);
		}

		text-content:first-of-type {
			flex-grow: 1;
		}
		text-content {
			gap: 8px;
			justify-content: space-between;
			// flex-grow: 1;

			h2 {
				letter-spacing: 0.05em;
				text-transform: uppercase;
				font-weight: 500;
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
