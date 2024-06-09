<template>
	<div></div>
</template>

<script setup></script>

<style lang="scss" scoped>
	div {
		background: radial-gradient(
			circle,
			rgba(var(--brand-color-rgb) / 0.5),
			var(--brand-color) 70%
		);
		filter: blur(85px);
		width: 220px;
		height: 220px;
		position: absolute;
		right: -40px;
		bottom: 400px;
		border-radius: 9999px;
		opacity: 0.35;
		z-index: 2;
		pointer-events: none;
	}
</style>
