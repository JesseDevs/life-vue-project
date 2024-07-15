<template>
	<module-mission>
		<SectionTitle text="Our Mission" />

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
	}
</style>
