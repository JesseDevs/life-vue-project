<template>
	<module-mission>
		<SectionTitle text="Our Mission" />
		<p>
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
		</p>
		<p>You too can make a difference.</p>
		<a href="/">Donate button</a>

		<Lives />
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
	}
</style>
