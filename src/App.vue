<script setup>
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="app-container">
		<Container />

		<Nav />

		<RouterView />

		<Footer id="footer" />
	</div>
</template>

<style lang="scss">
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			min-height: 100vh;
			overflow: hidden;
			section:not(.partners) {
				overflow: hidden;
				scroll-margin: 10px;
			}
		}
	}

	@media (min-width: 850px) {
	}
</style>
