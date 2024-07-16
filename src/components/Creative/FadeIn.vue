<template>
	<div ref="fadein" class="animate">
		<slot />
	</div>
</template>

<script setup>
	import { gsap } from 'gsap';

	const fadein = ref(null);
	let observer;

	onMounted(() => {
		observer = new IntersectionObserver(inViewport, {
			threshold: 0.18,
		});
		const ELs_inViewport = fadein.value;
		observer.observe(ELs_inViewport);
	});

	function inViewport(entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				gsap.to(entry.target, {
					opacity: 1,
					y: 0,
					duration: 0.7,
					ease: 'power3.out',

					filter: 'blur(0px)',
					onStart: () => {
						gsap.set(entry.target, { filter: 'blur(10px)' });
					},
				});
				observer.unobserve(entry.target);
			}
		});
	}

	onBeforeUnmount(() => {
		observer.disconnect();
	});
</script>

<style lang="scss" scoped>
	.animate {
		opacity: 0;
		position: relative;
		transform: translate3d(0, 75px, 0);
		filter: blur(10px);
	}
</style>
