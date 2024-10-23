<template>
	<module-events>
		<SectionTitle text="Upcoming Events" />
		<div class="events-container" id="section-content">
			<div class="event-card">
				<picture class="flyer">
					<img
						src="/public/images/event/punk-park.jpg"
						alt="punk-park event flyer"
					/>
				</picture>

				<div>
					<header-content>
						<h2 class="step-1">PUNK IN THE PARK</h2>
						<p class="details">
							A day of music and craft beer tasting, featuring 8 awesome
							bands spanning the punk rock genre.
						</p>
					</header-content>
					<text-content>
						<p>Saturday, November 16th 2024</p>
						<p>Thrive Park @ Snapdragon Stadium</p>
						<p>San Diego, CA</p>
					</text-content>

					<a href="https://www.punkinthepark.com/" class="detail-link">
						Check It Out
					</a>
				</div>
				<!-- <p v-if="events.length > 0">Come join the community!</p>
			<p v-else>Currently we are not attending any events.</p>
			<div v-if="events.length > 0" class="calendar">
				<Event v-for="event in events" :key="event.id" :event="event" />
			</div>

			<div v-else class="calendar no-events">
				<p>No Upcoming Events.</p>
			</div>

			<div class="calendar no-events">
				<p>No Upcoming Events.</p>
			</div> -->
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
		display: grid;
		grid-template-rows: auto 1fr;

		gap: 30px;
		width: 100%;
		position: relative;

		.events-container {
			width: 100%;
			display: block;
			height: 100%;
			background-color: rgb(76, 47, 79);
			border-radius: 15px;
			overflow: hidden;
			padding: 10px;

			.event-card {
				border-radius: 10px;
				overflow: hidden;

				display: flex;
				flex-direction: column;
				gap: 10px;
				padding-bottom: 10px;
				align-items: center;

				div {
					display: flex;
					flex-direction: column;
					width: 100%;
					justify-content: center;
					align-items: center;
					gap: 25px;

					.detail-link {
						background-color: rgb(0, 0, 0);
						color: white;
						padding: 10px 25px;
						border-radius: 8px;
						text-decoration: none;
						font-weight: 600;
						transition: background-color 0.3s ease-in-out;

						&:hover {
							background-color: rgba(0, 0, 0, 0.516);
						}
					}
				}

				.flyer {
					max-width: 450px;
					overflow: hidden;
					border-radius: 10px;
				}

				header-content {
					align-items: center;
					display: flex;
					flex-direction: column;
					width: 100%;
					gap: 10px;

					h2 {
						text-align: center;
						font-weight: 500;
						max-width: fit-content;
						border-bottom: 2px solid white;
					}

					p.details {
						max-width: 85%;
						text-align: center;
						font-size: 90%;
					}
				}

				text-content {
					font-weight: 400;
					display: flex;
					flex-direction: column;
					max-width: 85%;
					text-align: center;
				}
			}
		}

		@media (min-width: 600px) {
			.events-container {
				.event-card {
					flex-direction: row;
					padding: 0%;
					gap: 15px;
					// padding: 10px;
				}
			}
		}
	}
</style>
