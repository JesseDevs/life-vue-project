<script setup>
	import { RouterLink, RouterView } from 'vue-router';
	import { inject } from '@vercel/analytics';

	inject();
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
			// overflow: hidden;

			section {
				scroll-margin: 3.5rem;
			}
		}

		section:not(.partners):not(.info) {
			overflow: hidden;
		}

		section.landing {
			overflow: visible;
		}
	}

	@media (min-width: 850px) {
	}
</style>
