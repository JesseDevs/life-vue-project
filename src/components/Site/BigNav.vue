<template>
	<big-nav>
		<inner-column>
			<!-- <div class="shape1"></div>
				<div class="shape2"></div> -->

			<nav>
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
		</inner-column>
	</big-nav>
</template>

<script setup>
	const activeTab = ref(null);

	let observer;

	onMounted(() => {
		const sections = document.querySelectorAll('section');
		const sectionIds = Array.from(sections).map((section) => section.id);

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.id;
						if (id === 'partners') {
							// Don't change activeTab for partners section
							const index = sectionIds.indexOf(id);
							if (index > 0) {
								activeTab.value = sectionIds[index - 1];
							}
						} else {
							activeTab.value = id;
						}
					}
				});
			},
			{ threshold: 0.3 },
		);

		sections.forEach((section) => {
			observer.observe(section);
		});
	});

	onUnmounted(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<style lang="scss" scoped>
	big-nav {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 9999;
		background-color: var(--background);
		background-color: rgb(var(--background-rgb) / 0.1);
		backdrop-filter: blur(10px);

		inner-column {
			padding: 0;
			height: 100%;
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		nav {
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
			// z-index: 9999;
			// background-color: var(--background);
			// min-width: 650px;
			// background-color: rgb(var(--brand-color-rgb) / 0.1);

			// box-shadow: 0 25px 23px rgb(var(--brand-color-rgb) / 0.15);
			// border: 1.5px solid rgba(255, 255, 255, 0.06);
			// border-radius: 25px;
			// display: flex;
			// padding: 10px 15px;
			// overflow: hidden;
			// z-index: 2;

			// 	justify-content: space-evenly;
			// 	li {
			// 		a {
			// 			font-family: 'Poppins', sans-serif;
			// 			font-weight: 400;
			// 		}
			// 	}
			// }
		}

		// .shape1,
		// .shape2 {
		// 	height: 100px;
		// 	width: 100px;
		// 	position: absolute;
		// 	border-radius: 50%;
		// 	z-index: -1;
		// }

		// .shape1 {
		// 	background: linear-gradient(
		// 		135deg,
		// 		rgb(var(--brand-two-color-rgb)),
		// 		rgb(var(--brand-two-color-rgb) / 0.5)
		// 	);

		// 	top: -70px;
		// 	right: -45px;
		// }
		// .shape2 {
		// 	background: linear-gradient(
		// 		135deg,
		// 		rgb(var(--brand-two-color-rgb)),
		// 		rgb(var(--brand-two-color-rgb) / 0.5)
		// 	);

		// 	top: 30px;
		// 	left: -35px;
		// }
	}
</style>
