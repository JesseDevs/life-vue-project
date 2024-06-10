<template>
	<header :class="` ${ui.menuClass} main-tool-bar site-header `">
		<inner-column>
			<nav class="main-menu animate-drop-in">
				<SimpleLogo />
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
		</inner-column>
	</header>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { useInterfaceService } from '~/services/InterfaceService';
	const ui = useInterfaceService();

	onMounted(() => {
		const tl = gsap.timeline();

		tl.to(
			'.hamburger-button',
			{
				opacity: 1,
				x: 0,
			},
			'<',
		);
	});
</script>

<style lang="scss">
	header {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		z-index: 9999;
		backdrop-filter: blur(7px);
		color: rgb(250 250 250);
		background-color: rgb(var(--background-rgb) / 0.25);

		inner-column {
			padding: 1rem 1.2rem;
			height: 100%;

			.main-menu {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
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
			opacity: 0;
			transform: translateX(40px);
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
</style>
