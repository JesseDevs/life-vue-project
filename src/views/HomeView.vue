<script setup></script>

<template>
	<main>
		<FadeIn>
			<GeneralContainer class="landing" id="landing">
				<Landing />
			</GeneralContainer>
		</FadeIn>
		<div class="dot-create">
			<inner-column>
				<DotGridRight />
			</inner-column>
		</div>
		<GeneralContainer class="mission" id="mission">
			<FadeIn>
				<Mission />
			</FadeIn>
		</GeneralContainer>

		<GeneralContainer class="gallery" id="gallery">
			<Gallery />
		</GeneralContainer>

		<GeneralContainer class="team" id="team">
			<FadeIn>
				<Team />
			</FadeIn>
		</GeneralContainer>

		<GeneralContainer class="partners" id="partners">
			<Partners />
		</GeneralContainer>

		<FadeIn>
			<GeneralContainer class="events" id="events">
				<Events />
			</GeneralContainer>
		</FadeIn>
		<FadeIn>
			<GeneralContainer class="contact" id="contact">
				<Contact />
			</GeneralContainer>
		</FadeIn>
	</main>
</template>

<style lang="scss" scoped>
	.dot-create {
		z-index: -99;
		inner-column {
			padding-top: 0;
			padding-bottom: 0%;
			max-width: 700px;
		}
	}
</style>
