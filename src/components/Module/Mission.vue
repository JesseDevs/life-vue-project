<template>
	<module-mission>
		<SectionTitle text="Our Mission" />
		<!-- <p>
			Our mission is to minimize the devastating impact of opioid overdoses, protect
			vulnerable individuals, and create a supportive non-judgmental network that
			embraces harm reduction principles.
		</p>
		<p>
			Whether it’s at music festivals, extreme sporting events or community events
			we hope to empower individuals with the tools and information needed to
			recognize the signs of an overdose and administer immediate assistance through
			the use of naloxone.
		</p>
		<p>
			In normalizing the use of naloxone we believe a substantial impact will be
			made in saving lives. Together, we can create fun social environments where
			lives are valued, health is prioritized, and communities are united in their
			commitment to saving lives.
		</p> -->

		<div id="section-content">
			<p>
				Our mission is to reduce opioid overdoses, protect vulnerable individuals,
				and build a supportive network embracing harm reduction principles.
			</p>
			<p>
				At events like music festivals and community gatherings, we aim to empower
				people with the knowledge and tools to recognize overdoses and administer
				naloxone.
			</p>
			<p>
				By normalizing naloxone use, we believe we can save lives. Together, we
				can create environments where lives are valued, health is prioritized, and
				communities unite to save lives.
			</p>
			<p>You too can make a difference.</p>
			<a class="donate" href="/">Donate Now</a>
		</div>

		<Savelivesnow />
		<DotGridLeft />
	</module-mission>
</template>

<script setup></script>

<style lang="scss">
	module-mission {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		justify-content: center;
		position: relative;
		gap: 20px;

		h3 {
			color: inherit;
			font-weight: 700;
			font-family: 'League Spartan', sans-serif;
			font-optical-sizing: auto;
			position: relative;
			// &:after {
			// 	position: absolute;
			// 	height: 2px;
			// 	width: 100%;
			// 	background-color: var(--brand-color);
			// 	bottom: 0px;
			// 	left: 0;
			// 	content: '';
			// }
		}

		div#section-content {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			width: 100%;
			justify-content: center;
			position: relative;
			gap: 20px;
		}

		a.donate {
			background-color: rgb(75 121 162);
			color: white;

			font-weight: 600;
			outline: none;
			appearance: none;
			border: none;

			padding: 12px 50px;
			z-index: 2;
			position: relative;
			cursor: pointer;
			transition: box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out;

			letter-spacing: 0.8px;

			&:hover {
				background-color: rgb(var(--brand-color-rgb) / 0.5);
				box-shadow: 0 0 5px rgba(var(--brand-color-rgb) / 0.5),
					0 10px 20px rgba(var(--brand-color-rgb) / 0.5),
					0 0 20px rgba(var(--brand-color-rgb) / 0.5),
					0 0 100px rgba(var(--brand-color-rgb) / 0.5);
			}
		}
	}
</style>
