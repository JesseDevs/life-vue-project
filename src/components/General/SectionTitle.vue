<template>
	<div id="section-heading">
		<h3 class="step-3 stroke">
			{{ text }}
		</h3>
	</div>
</template>

<script setup>
	const props = defineProps({
		text: String,
	});
</script>

<style lang="scss" scoped>
	div#section-heading {
		opacity: 0;
		z-index: 1;
	}
	h3 {
		color: inherit;

		font-weight: 800;

		font-optical-sizing: auto;
		position: relative;
		letter-spacing: 0.08em;
	}
</style>
