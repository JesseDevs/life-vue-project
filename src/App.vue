<script setup>
	import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="app-container">
		<Container />

		<Space />
		<Nav class="smallnav" />
		<BigNav class="bignav" />

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
			section {
				overflow: hidden;
			}
		}
	}

	.bignav {
		display: none;
	}

	@media (min-width: 700px) {
		.bignav {
			display: block;
		}
		.smallnav {
			display: none;
			opacity: 0;
			pointer-events: none;
		}
	}

	@media (min-width: 850px) {
	}
</style>
