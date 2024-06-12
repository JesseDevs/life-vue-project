<template>
	<module-events>
		<SectionTitle text="Upcoming Events" />
		<div v-if="events.length > 0" class="events-container">
			<p>You can find <span class="brand">The Party</span> at these events.</p>
			<div class="calendar">
				<Event v-for="event in events" :key="event.id" :event="event" />
			</div>
		</div>

		<div v-else class="events-container">
			<p>Currently we are not attending any events.</p>
			<div class="calendar no-events">
				<p>No Upcoming Events.</p>
			</div>
		</div>
	</module-events>
</template>

<script setup>
	const events = ref([
		{
			id: 1,
			title: 'Santa Monica - Title',
			img: '/images/event.jpg',
			dateDay: '22',
			month: 'June',
			detail: 'Join us in Santa Monica, CA. Explore our Event on display and meet our team.',
			fullDate: '',
			timeSpan: ['June 22, 2024', 'June 24, 2024'],
			location: ['The Crypto Arena', '1111 S Figueroa St', 'Los Angeles', '90015'],
			link: '/',
			linkText: 'Link to Event',
		},
		{
			id: 1,
			title: '2nd event',
			img: '/images/event.jpg',
			dateDay: '22',
			month: 'June',
			detail: 'Join us in Santa Monica, CA. Explore our Event on display and meet our team.',
			fullDate: '',
			timeSpan: ['June 22, 2024', 'June 24, 2024'],
			location: ['The Crypto Arena', '1111 S Figueroa St', 'Los Angeles', '90015'],
			link: '/',
			linkText: 'Link to Event',
		},
	]);
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
			column-gap: 15px;
			row-gap: 25px;
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
