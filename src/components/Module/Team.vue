<template>
	<module-team>
		<SectionTitle text="Our Team" />
		<div class="card-grid" id="section-content">
			<Profile v-for="profile in profiles" :key="profile.name" :profile="profile" />
		</div>
		<a class="general-btn" href="/team">Meet the team <Arrow class="arrow" /></a>
	</module-team>
</template>

<script setup>
	const profiles = ref([
		{
			imgsrc: '/images/profile/megan.webp',
			name: 'Megan Holiday',
			role: ['Founder'],
			text: [
				'Megan Holiday co-founded Life Of The Party with her friend Jed Rhein in 2023. Having experienced the firsthand loss of loved ones due to overdose, Megan is extremely passionate about harm reduction education. Sober since 2016, she is dedicated to combating the fentanyl crisis.',
				'Megan is an avid music lover and an on-air personality at the World Famous KROQ in Los Angeles, Live 105 in San Francisco, and Alt947 in Sacramento. Life Of The Party combines her passions by providing naloxone and harm reduction education at live music events and other large social gatherings. Megan believes that overdose is preventable and that there is a judgment-free way to help.',
			],
		},
		{
			imgsrc: '/images/profile/jed.webp',
			name: 'Jed Rhein',
			role: ['Founder'],
			text: [
				'Jed Rhein, a Los Angeles native, began his acting career at four years old. After twenty-six successful years, he transitioned to producing at thirty. Alongside his career success, he faced addiction, leading to a profound spiritual transformation. Sober since his thirties, Jed found his true purpose in helping others recover from alcohol and drug abuse. Unfortunately, overdose is a frequent and tragic part of this journey.',
				'While recovery isn‘t necessary for everyone using drugs, no one is safe from fentanyl-laced substances, particularly experimenting youth. The fentanyl crisis has drastically escalated overdose rates, causing widespread horror. Jed founded Life of the Party to leverage harm reduction tools and prevent senseless deaths.',
			],
		},
	]);
</script>

<style lang="scss">
	module-team {
		display: flex;
		flex-direction: column;
		gap: 30px;
		width: 100%;
		position: relative;
		div.card-grid {
			display: flex;
			width: 100%;
			position: relative;
			flex-direction: column;
			gap: clamp(90px, 12vh, 1500px);
		}

		.general-btn {
			margin-top: 50px;

			@media (max-width: 500px) {
				padding-left: 30px;
				padding-right: 30px;
			}
		}
	}
</style>
