<template>
	<nav class="big-nav">
		<a href="/">
			<!-- <SimpleLogo /> -->

			<p>Donate</p>

			<Heart class="heart flicker" />
		</a>
		<ul>
			<li :class="{ active: activeTab === 'mission' }">
				<a href="#mission">Mission </a>
			</li>
			<li :class="{ active: activeTab === 'gallery' }">
				<a href="#gallery">Gallery </a>
			</li>
			<li :class="{ active: activeTab === 'team' }">
				<a href="#team">Our Team </a>
			</li>

			<li :class="{ active: activeTab === 'events' }">
				<a href="#events">Events </a>
			</li>
			<li :class="{ active: activeTab === 'contact' }">
				<a href="#contact">Contact </a>
			</li>
		</ul>
	</nav>
</template>

<script setup>
	// const activeTab = ref(null);

	// let observer;

	// onMounted(() => {
	// 	const sections = document.querySelectorAll('section');
	// 	const sectionIds = Array.from(sections).map((section) => section.id);

	// 	observer = new IntersectionObserver(
	// 		(entries) => {
	// 			entries.forEach((entry) => {
	// 				if (entry.isIntersecting) {
	// 					const id = entry.target.id;
	// 					if (id === 'partners') {
	// 						// Don't change activeTab for partners section
	// 						const index = sectionIds.indexOf(id);
	// 						if (index > 0) {
	// 							activeTab.value = sectionIds[index - 1];
	// 						}
	// 					} else {
	// 						activeTab.value = id;
	// 					}
	// 				}
	// 			});
	// 		},
	// 		{ threshold: 0.3 },
	// 	);

	// 	sections.forEach((section) => {
	// 		observer.observe(section);
	// 	});
	// });

	// onUnmounted(() => {
	// 	if (observer) {
	// 		observer.disconnect();
	// 	}
	// });
</script>

<style lang="scss" scoped>
	.big-nav {
		padding: 0px 1.2rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;

		ul {
			display: flex;
			width: 100%;
			align-items: center;
			justify-content: flex-end;
			gap: 4vmin;
			position: relative;

			::before {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 0;
				height: 2px;
				background-color: var(--brand-two-color);
				transition: width 0.3s, left 0.3s;
			}

			li {
				opacity: 0.7;
				transition: opacity 0.3s ease-in-out, font-weight 0.3s ease-in-out;
				position: relative;
				scale: 0.9;
				&:hover {
					opacity: 1;
				}
				&.active {
					opacity: 1;
					&::before {
						content: '';
						position: absolute;
						bottom: -1px;
						left: 0;
						width: 100%;
						height: 3px;
						background-color: var(--brand-color);
					}
				}
				a {
					padding: 1rem 5px;
					display: block;
				}
			}
		}
	}
	.donate-button {
		position: relative;

		overflow: hidden; /* Ensure the shimmer doesn't overflow the button */
	}

	.shimmer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2px;
		position: relative;
		color: rgb(var(--white-rgb) / 0.8);
		font-weight: bold;
		text-align: center;
		padding: 8px;
		text-decoration: none;
		background: linear-gradient(
			100deg,
			rgb(var(--brand-two-inner-color-rgb) / 0.5) 25%,
			rgb(var(--brand-two-color-rgb) / 0.9) 50%,
			rgb(var(--white-rgb) / 0.8) 85%
		);
		background-size: 200% auto;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shimmer 1.5s infinite;

		.heart {
			width: 2.5em;
			height: 2.2em;
		}

		&:hover {
			animation: pause;
			color: var(--brand-two-color);
			-webkit-text-fill-color: var(--brand-two-color);

			.heart {
				animation: pause;
			}
		}
	}

	@keyframes shimmer {
		0% {
			background-position: -100%;
		}
		100% {
			background-position: 100%;
		}
	}

	.flicker {
		animation: flicker 1.75s infinite;
	}

	@keyframes flicker {
		0%,
		100% {
			opacity: 0.55;
		}
		50% {
			scale: 1.1;
			opacity: 1;
		}
		75% {
			opacity: 0.8;
		}
	}
</style>
