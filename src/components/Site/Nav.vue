<template>
	<header :class="` ${ui.menuClass} main-tool-bar site-header `">
		<inner-column class="has-big-width">
			<nav class="main-menu animate-drop-in small-width">
				<a
					href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
					target="_blank"
					class="donate-btn"
				>
					<p>Donate</p>
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
				<a
					href="https://www.zeffy.com/en-US/donation-form/9dd05842-7a29-4423-9102-3060efb0e3fa"
					target="_blank"
					class="donate-btn"
				>
					<p>Donate</p>

					<Heart class="heart flicker" />
				</a>
				<ul>
					<li>
						<a href="/">Home </a>
					</li>
					<li>
						<a href="/#mission">Mission </a>
					</li>

					<li>
						<a href="#team">Team </a>
					</li>
					<li>
						<a href="/#events">Events </a>
					</li>

					<li>
						<a href="/#resources">Resources </a>
					</li>
					<li>
						<a :href="mailToHref" target="_blank">Volunteer <PathArrow /></a>
					</li>
					<li>
						<a href="/#contact">Contact </a>
					</li>
				</ul>
			</nav>
		</inner-column>
	</header>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	const email = ref('contact@lifeoftheparty.org');

	const mailToHref = computed(() => {
		return `mailto:${email.value}?subject=Volunteer%20Opportunities%20-%20Life%20of%20The%20Party&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20volunteering%20for%20your%20organization.%20Please%20provide%20more%20information%20on%20how%20I%20can%20help.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]`;
	});
</script>

<style lang="scss">
	@keyframes slideFromTop {
		0% {
			opacity: 0;
			transform: translateY(-100%);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.flicker {
		animation: flicker 2s infinite;
	}

	@keyframes flicker {
		0%,
		100% {
			opacity: 0.55;
		}
		50%,
		60% {
			scale: 1.1;
			opacity: 1;
		}
		75% {
			opacity: 0.8;
		}
	}

	header {
		animation: slideFromTop 0.8s forwards;
		width: 100%;
		z-index: 9999;

		position: sticky;
		top: 0;

		backdrop-filter: blur(15px);
		color: rgb(250 250 250);
		mask-image: linear-gradient(to bottom, black, black);
		background-color: rgb(var(--background-rgb) / 0.7);

		inner-column {
			padding: 0.3rem 1.05rem;
			height: 100%;

			@media (min-width: 1000px) {
				padding: 0.8rem 2.2rem;
			}

			.main-menu {
				flex-direction: row-reverse;
				align-items: center;
				justify-content: space-between;
			}

			.big-width {
				width: 100%;

				height: 50px;
				justify-content: center;
				align-items: center;
				flex-direction: row-reverse;

				ul {
					display: flex;

					width: 100%;
					align-items: center;
					justify-content: flex-start;
					gap: 1.2vmin;
					position: relative;
					flex: 1;

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

						a {
							display: flex;
							align-items: center;
							justify-content: center;
							padding: 1rem 5px;
							gap: 4px;
							svg {
								opacity: 1;
								scale: 1.5;
							}
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
					}
				}
			}
			.donate-btn {
				position: relative;
				overflow: hidden;
				font-weight: 500;
				color: var(--brand-two-color);
				letter-spacing: 0.1em;
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 2px;

				p {
					text-transform: uppercase;
					font-size: calc(var(--step-0) * 1.25);
					&::selection {
						background-color: var(--brand-two-color); /* Yellow */
						color: white; /* Dark gray */
					}
				}

				.heart {
					width: 2.3em;
					height: 1.7em;
					path {
						fill: var(--brand-two-color);
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

			// margin-left: auto;

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

	@media (min-width: 900px) {
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
