<template>
	<a :href="event.link" class="next-event">
		<h3>NEXT EVENT</h3>
		<main-content>
			<div class="date-indicator">
				<p class="day">{{ event.dateDay }}</p>
				<p class="month">{{ event.month }}</p>
			</div>
			<text-content class="small-voice">
				<h2>{{ event.title }}</h2>
				<location-block>
					<Location class="location" />
					<div>
						<p
							class="small-voice"
							v-for="(item, index) in event.location"
							:key="index"
						>
							{{ item }}
						</p>
					</div>
				</location-block>
			</text-content>
		</main-content>
	</a>
</template>

<script setup>
	import { useEventService } from '~/services/EventsService';
	const e = useEventService();

	const es = computed(() => e.events);
	const event = computed(() => es.value[0]);
</script>

<style lang="scss" scoped>
	.next-event {
		display: none;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 20;

		// display: flex;
		flex-direction: column;
		width: 30%;
		pointer-events: all;

		align-items: flex-start;
		justify-content: flex-start;
		// border: 1px solid var(--brand-color);

		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(17px);

		overflow: hidden;
		box-shadow: 0px 0px 20px 20px rgb(var(--brand-color-rgb) / 0.2);
		transition: box-shadow 0.3s ease, background-color 0.3s ease;

		&:hover {
			box-shadow: 0px 8px 15px 10px rgb(var(--brand-color-rgb) / 0.5);
			background: rgba(255, 255, 255, 0.1);
		}

		@media (min-width: 1020px) {
			display: flex;
		}

		> h3 {
			width: 100%;
			text-align: center;
			background-color: rgb(var(--brand-color-rgb) / 0.6);
			font-weight: 600;
			letter-spacing: 0.05em;
		}

		main-content {
			display: flex;
			flex-direction: row;
			width: 100%;
			position: relative;
			align-items: flex-start;
			justify-content: flex-start;
			gap: 0.3em;
			padding: 0.5em;
		}

		text-content {
			display: flex;
			flex-direction: column;
			width: 100%;
			align-items: flex-start;
			justify-content: center;
			h2 {
				font-weight: 500;
			}
		}

		location-block {
			display: flex;
			align-items: flex-start;
			width: 100%;
			svg {
				fill: var(--brand-color);
				path {
					fill: var(--brand-color);
				}
			}

			div {
				padding-top: 0.2em;
				width: 100%;
				display: flex;
				flex-direction: column;
			}
		}

		.date-indicator {
			padding: 5px 10px;
			background-color: var(--brand-two-color);
			// color: var(--brand-two-inner-color);
			text-align: center;
			font-weight: 600;
			p {
				line-height: 1;
			}

			.day {
				font-size: 1.5em;
			}

			.month {
				font-size: 0.7em;
				text-transform: uppercase;
			}
		}
	}
</style>
