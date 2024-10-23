<template>
	<section class="GeneralContainer">
		<inner-column>
			<slot />
		</inner-column>
	</section>
</template>

<script setup>
	import { onMounted, nextTick } from 'vue';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
</script>

<style lang="scss">
	@media (min-width: 800px) {
		section.landing inner-column {
			padding-top: 3rem;
		}
	}

	section {
		display: flex;
		flex-direction: column;
		inner-column {
			flex-grow: 1;
			height: 100%;
		}
	}
</style>
