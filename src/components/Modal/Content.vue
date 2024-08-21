<template>
	<modal-content :class="{ 'modal-open': modal }">
		<Space class="always-dark" />
		<nav ref="nav">
			<ul class="modal-btns">
				<li>
					<span class="step-3"> 01 </span>
					<a class="step-3" @click="ui.closeMenu" href="/">Home </a>
				</li>
				<li>
					<span class="step-3"> 02 </span>
					<a class="step-3" @click="ui.closeMenu" href="#mission">Mission </a>
				</li>

				<li>
					<span class="step-3"> 03 </span>
					<a class="step-3" href="#team" @click="ui.closeMenu"> Our Team </a>
				</li>
				<li>
					<span class="step-3"> 04 </span>
					<a class="step-3" @click="ui.closeMenu" href="#events">Events </a>
				</li>
				<li>
					<span class="step-3"> 05 </span>
					<a class="step-3" @click="ui.closeMenu" href="#gallery">Gallery </a>
				</li>
				<li>
					<span class="step-3"> 06 </span>
					<a class="step-3" @click="ui.closeMenu" href="#resources"
						>Resources
					</a>
				</li>

				<li>
					<span class="step-3"> 07 </span>
					<a class="step-3" :href="mailToHref" @click="ui.closeMenu">
						Volunteer<PathArrow
					/></a>
				</li>

				<li>
					<span class="step-3"> 08 </span>
					<a class="step-3" @click="ui.closeMenu" href="#contact">Contact </a>
				</li>
			</ul>
		</nav>
	</modal-content>
</template>

<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';
	import { gsap } from 'gsap';

	const ui = useInterfaceService();
	const nav = ref(null);
	const modal = ref(null);
	const animationFinished = ref(false);
	const totalButtons = ref(null);
	const animatedButtonsCount = ref(0);

	function completeAnimation() {
		animationFinished.value = true;
		console.log('done');
	}

	function animateButtons() {
		const buttons = nav.value.querySelectorAll('.modal-btns > li');

		totalButtons.value = buttons.length;
		gsap.from(buttons, {
			x: '-20%',
			opacity: 0,
			duration: 0.5,
			stagger: 0.1,
		});

		modal.value = true;
		completeAnimation();
	}

	const email = ref('contact@lifeoftheparty.org');

	const mailToHref = computed(() => {
		return `mailto:${email.value}?subject=Volunteer%20Opportunities%20-%20Life%20of%20The%20Party&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20volunteering%20for%20your%20organization.%20Please%20provide%20more%20information%20on%20how%20I%20can%20help.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]`;
	});

	watch(
		() => ui.mainMenuOpen,
		(newValue) => {
			if (newValue) {
				if (!animationFinished.value) {
					setTimeout(() => {
						animateButtons();
					}, 250);
				}
			}
		},
	);
</script>

<style lang="scss">
	.always-dark {
		background-color: rgb(11, 6, 11) !important;
	}
	modal-content {
		touch-action: manipulation;
		background-color: rgb(11, 6, 11);
		color: rgb(250 250 250);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 100%;
		// max-width: 360px;
		height: 100%;

		overflow: hidden;

		box-shadow: 0 2px 5px rgb(78 171 232 / 0.3);

		transition: left 0.5s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.5s ease;

		position: absolute;
		left: -100%;
		bottom: 0;
		right: 0;
		top: 0;

		nav {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			display: flex;
			overflow-x: hidden;
			overflow-y: auto;

			.btn-container {
				margin: 0 auto;
				margin-bottom: 50px;
				display: flex;
				justify-content: center;
				align-items: center;
				width: 80%;
			}
		}
	}

	.modal-btns {
		display: flex;
		flex-direction: column;
		padding-left: 1rem;
		padding-top: 40px;

		li {
			opacity: 0;
			pointer-events: none;
		}
		li {
			position: relative;
			display: flex;
			.button-container {
				margin: 0 auto;
				position: relative;
			}
			a {
				display: flex;
				align-items: center;
				gap: 5px;
				padding: 10px;
				padding-left: 50px;
				line-height: 1.2;
				font-weight: 700;
				text-transform: uppercase;
				transition: rotate 0.3s ease-in-out;
				width: 100%;

				&:hover {
					svg {
						transform: translate(2px, -2px);
					}
				}

				svg {
					height: 0.56em;
					width: 0.56em;
				}
			}
			span {
				display: flex;
				flex-direction: column;
				align-items: center;
				align-items: center;
				position: absolute;
				scale: 0.4;
				width: 50px;
				height: 50px;
				font-weight: 200;
				bottom: 5px;
				left: 0;
				letter-spacing: 0.1em;
				transition: scale 0.4s ease-in-out;
			}

			&:after {
				content: '';
				width: 100%;
				height: 1px;
				background-color: var(--brand-two-color);
				position: absolute;
				left: 10px;
				bottom: 10px;
				z-index: 0;
				transition: left 0.3s ease-in-out, rotate 0.3s ease-in-out;
			}

			&:before {
				content: '';
				width: 100%;
				height: 1px;
				background-color: rgb(11, 6, 11);
				position: absolute;
				left: 40px;
				bottom: 10px;
				z-index: 1;
				transition: width 0.3s ease-in-out, rotate 0.3s ease-in-out;
			}

			&:hover {
				// a {
				// 	rotate: -1deg;
				// }
				span {
					scale: 0.5;
				}
				&:before {
					width: 0;
				}
				// &:after {
				// 	rotate: -1deg;
				// }
			}
		}
	}

	glass-container.menu-open {
		modal-content {
			transition: left 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
			left: 0;
		}
	}

	modal-content.modal-open .modal-btns li {
		opacity: 1;
		pointer-events: all;
	}
</style>
