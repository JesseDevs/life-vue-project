<template>
	<module-naloxone>
		<SectionTitle text="What is Naloxone?" />

		<div id="section-content">
			<p>
				Naloxone, often known by its brand name Narcan, is an opioid antagonist.
				It attaches to opioid receptors and reverses and blocks the effects of
				other opioids. Administration allows Naloxone to safely and quickly
				reverse an opioid overdose.
			</p>
			<list-container>
				<ul>
					<p>Signs of an overdose:</p>

					<li>
						<p>
							Unconscious, not&nbsp;breathing, shallow&nbsp;breathing,
							faint&nbsp;heartbeat
						</p>
					</li>
					<li>
						<p>Gurgling sounds, loud snoring, vomiting</p>
					</li>

					<li>
						<p>Clammy or cold skin, pale skin, blue lips</p>
					</li>
					<li>
						<p>Cannot wake up or speak</p>
					</li>
					<li>
						<p>Small pupils</p>
					</li>
				</ul>

				<ol>
					<p>How to use naloxone:</p>

					<li>
						<p>Call 911</p>
					</li>
					<li>
						<p>
							Lay person on their back, remove the nasal spray from the box
							and peel back the tab to remove the nasal spray.
						</p>
					</li>

					<li>
						<p>
							Hold nasal spray with your thumb on the bottom of the plunger
							and your first and middle fingers on either side of the
							nozzle.
						</p>
					</li>
					<li>
						<p>
							Position the person with their head tilted back and provide
							support under their neck with your hand. Gently insert the tip
							of the nozzle into one nostril.
						</p>
					</li>
					<li>
						<p>
							Press the plunger firmly to give the dose of nasal spray. If
							the person does not respond within 2-3 minutes you may
							administer the second dose.
						</p>
					</li>
				</ol>
			</list-container>

			<section-footer>
				<p class="small-voice">
					Naloxone can <strong>ONLY</strong> reverse an opioid overdose.
					<br />There is <strong>NO EFFECT</strong> on someone who does
					<strong>NOT</strong> have opioids in the body. <br />For that reason,
					it is safe to use on anybody.
				</p>
			</section-footer>
		</div>
		<picture class="nar-container">
			<img src="/images/narcan.png" alt="Narcan" />
		</picture>
	</module-naloxone>
</template>
<script setup>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMounted(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: 'module-naloxone',
				start: 'top center',
				end: 'bottom center',
			},
		});

		tl.fromTo(
			'.nar-container',
			{
				opacity: 0,
				x: 100,
			},
			{
				x: 0,
				opacity: 1,
				duration: 1,
				ease: 'power3.inOut',
			},
			'<',
		);
	});
</script>
<style lang="scss">
	.nar-container {
		display: inline-block;
		aspect-ratio: 2/4;
		max-width: 65%;
		height: 50vh;
		position: absolute;
		right: -28vw;
		bottom: 350px;
		z-index: -1;
		opacity: 0.7;

		img {
			object-fit: contain;
			mask-image: radial-gradient(
				circle,
				rgb(255, 255, 255),
				rgba(255, 255, 255, 40%)
			);
		}

		@media (min-width: 900px) {
			max-width: 35%;
			top: -50px;
			right: 0;
		}
	}

	// @media (min-width: 900px) {
	// 	.nar-container {
	// 		right: -10vw;
	// 		bottom: 60px;
	// 	}
	// }

	module-naloxone {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		position: relative;
		justify-content: center;

		gap: 20px;

		list-container {
			display: flex;
			flex-direction: column;
			width: 100%;
			position: relative;

			@media (min-width: 1000px) {
				flex-direction: row;
				gap: 30px;
			}
		}

		div#section-content {
			display: flex;
			flex-direction: column;
			gap: 20px;
			width: 100%;

			ul {
				padding-top: 20px;
				> p {
					text-transform: uppercase;
					letter-spacing: 0.08em;
					font-weight: 500;
					padding-bottom: 5px;
				}
				li {
					list-style-type: disc;
					margin-left: 20px;
				}
			}

			ol {
				padding-top: 20px;
				> p {
					text-transform: uppercase;
					letter-spacing: 0.08em;
					font-weight: 500;
					padding-bottom: 5px;
				}
				li {
					list-style-type: number;
					margin-left: 20px;
				}
			}
		}

		section-footer {
			display: block;
			width: 100%;
			padding-top: 50px;
			p {
				// text-align: center;
				max-width: 67ch;
				margin: 0 auto;
				// padding: 0 30px;
			}

			@media (min-width: 600px) {
				p {
					text-align: center;
				}
			}
		}

		@media (min-width: 768px) {
			grid-template-columns: 15vw 1fr;
		}

		h2 {
			font-size: clamp(1.425rem, 0.1705rem + 3.5727vw, 2.8rem);

			padding-top: 10vh;
			margin: 0 auto;

			margin: 0 auto;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.08em;
		}

		.main-content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
		}

		.icon-container {
			svg {
				width: 100%;
			}
		}

		@media (min-width: 1000px) {
			section-footer {
				position: absolute;
				left: 0;
				bottom: 20px;
				width: fit-content;
				p {
					text-align: left;
					max-width: 47ch;
				}
			}
		}
	}
</style>
