<template>
	<module-events>
		<SectionTitle text="Upcoming Events" />
		<div class="events-container" id="section-content">
			<p v-if="events.length > 0">Come join the community!</p>
			<p v-else>Currently we are not attending any events.</p>
			<!-- <div v-if="events.length > 0" class="calendar">
				<Event v-for="event in events" :key="event.id" :event="event" />
			</div> -->
			<!-- <div v-else class="calendar no-events">
				<p>No Upcoming Events.</p>
			</div> -->

			<div class="calendar no-events">
				<p>No Upcoming Events.</p>
			</div>
		</div>
	</module-events>
</template>

<script setup>
	import { useEventService } from '~/services/EventsService';
	const e = useEventService();

	const events = computed(() => e.events);
</script>

<style lang="scss" scoped>
	module-events {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		position: relative;

		.brand {
			color: var(--brand-two-color);
			border-bottom: 1px solid var(--brand-two-color);
		}

		.calendar {
			width: 100%;
			padding: 20px 12px;
			display: grid;
			column-gap: 30px;
			row-gap: 60px;
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
			place-items: center;
			min-height: 350px;
			background: rgba(255, 255, 255, 0.12);

			backdrop-filter: blur(5px);

			// border-radius: 10px;
			// border: 1px solid rgba(255, 255, 255, 0.18);
			// overflow: hidden;

			@media (min-width: 620px) {
				grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
			}

			&.no-events {
				grid-template-columns: 1fr;
			}
		}

		div.events-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}
	}
</style>
