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
</script>

<style lang="scss">
	.nar-container {
		display: inline-block;
		aspect-ratio: 2/4;
		max-width: 40vw;
		height: 40vh;
		position: absolute;
		right: -24vw;
		bottom: 30px;
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
	}

	@media (min-width: 900px) {
		.nar-container {
			right: -10vw;
			bottom: 60px;
		}
	}

	module-naloxone {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		position: relative;
		justify-content: center;

		gap: 20px;

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
				}
				li {
					list-style-type: disc;
					margin-left: 20px;
				}
			}
		}

		section-footer {
			display: block;
			width: 100%;
			padding-top: 50px;
			p {
				text-align: center;
				max-width: 67ch;
				margin: 0 auto;
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
	}
</style>
