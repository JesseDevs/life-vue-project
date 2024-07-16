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
				<li class="list-header">
					<p>Signs of an overdose:</p>
				</li>
				<li>
					<p>Unconscious, not breathing, shallow breathing, faint heartbeat</p>
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
				<p>
					Naloxone can ONLY reverse an opioid overdose. There is NO EFFECT on
					someone who does NOT have opioids in the body. For that reason, it is
					safe to use on anybody.
				</p>
			</section-footer>
		</div>
	</module-naloxone>
</template>

<script setup>
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);
</script>

<style lang="scss">
	module-naloxone {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		justify-content: center;
		position: relative;
		gap: 20px;

		section-footer {
			display: block;
			width: 100%;
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
