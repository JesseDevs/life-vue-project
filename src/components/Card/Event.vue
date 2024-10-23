<template>
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
	xs event-card {
		display: flex;
		flex-direction: column;
		padding: 15px 10px;
		gap: 10px;
		height: 100%;

		align-items: center;
		background-color: rgb(var(--brand-color-rgb) / 0.5);
		position: relative;
		box-shadow: 0 5px 20px 0 rgba(var(--brand-color-rgb) / 0.2);
		border: 1px solid transparent;
		transition: background-color 0.3s ease-in-out;
	}
</style>
