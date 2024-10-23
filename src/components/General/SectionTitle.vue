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
	div#seciton-heading {
		width: 100%;
		display: block;
	}
	h3 {
		color: inherit;

		font-weight: 800;

		font-optical-sizing: auto;
		position: relative;
		letter-spacing: 0.08em;
	}
</style>
