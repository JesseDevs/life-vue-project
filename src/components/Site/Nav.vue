<template>
	<header :class="` ${ui.menuClass} main-tool-bar site-header `">
		<inner-column class="has-big-width">
			<nav class="main-menu animate-drop-in small-width">
				<a href="/" class="shimmer">
					<!-- <SimpleLogo /> -->
					<div>
						<p>Donate</p>
					</div>
					<Heart class="heart flicker" />
				</a>
				<button
					class="hamburger-button icon-button"
					@click="ui.toggleMainMenu"
					aria-label="open-menu"
				>
					<div class="mbykw">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</button>
			</nav>

			<nav class="big-width">
				<a href="/" class="shimmer">
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
		</inner-column>
	</header>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	const activeTab = ref(null);

	onMounted(() => {
		const tl = gsap.timeline();
	});
</script>

<style lang="scss">
	@keyframes slideFromTop {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0);
		}
	}

	header {
		animation: slideFromTop 0.8s forwards;
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
			opacity: 1;
		}
		75% {
			opacity: 0.8;
		}
	}

	header {
		width: 100%;
		z-index: 9999;
		backdrop-filter: blur(7px);
		color: rgb(250 250 250);
		background-color: rgb(var(--background-rgb) / 0.25);

		inner-column {
			padding: 1rem 1.2rem;
			height: 100%;

			.main-menu {
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				> a {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 2px;
				}
			}

			.big-width {
				width: 100%;

				justify-content: center;
				align-items: center;

				ul {
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: flex-end;
					gap: 2.5vmin;
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
				overflow: hidden;
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
		}

		.hamburger-button {
			color: inherit;
			cursor: pointer;
			align-self: flex-start;
			user-select: none;
			background-color: transparent;
			border: none;
			margin: 0;
			padding: 0;
			width: 35px;
			height: 40px;
			position: relative;
			opacity: 1;

			margin-left: auto;

			div.mbykw {
				opacity: 0.9;
				justify-content: center;
				align-items: center;

				width: 45px;
				height: 40px;
				margin-left: 0px;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
				display: flex;
				position: relative;

				span:first-child {
					transform: translateY(-6px);
				}
				span:nth-child(3) {
					transform: translateY(6px);
				}
			}

			span {
				background-color: var(--light-gray);
				transform-origin: 50% center;
				opacity: 1;
				border-radius: var(--thin);
				width: 50%;
				height: 2px;
				transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
				position: absolute;
				top: 50%;
			}
		}
	}

	header.menu-open {
		div.mbykw {
			span {
				background-color: rgb(250 250 250);
			}
			span:first-child {
				transform: rotate(45deg);
			}
			span:nth-child(2) {
				opacity: 0;
			}
			span:nth-child(3) {
				transform: rotate(-45deg);
			}
		}
	}
	.small-width {
		display: flex;
	}

	.big-width {
		display: none;
	}

	@media (min-width: 700px) {
		inner-column.has-big-width {
			padding-top: 0;
			padding-bottom: 0;
		}
		.big-width {
			display: flex;
		}
		.small-width {
			display: none;
			opacity: 0;
			pointer-events: none;
		}
	}
</style>
