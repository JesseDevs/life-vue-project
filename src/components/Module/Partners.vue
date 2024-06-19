<template>
	<module-partners>
		<SectionTitle class="black-text" text="Resources" />

		<div class="partner-grid" id="section-content">
			<Partner class="partner-card" v-for="p in partners" :key="p.name" :p="p" />
		</div>
	</module-partners>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	const partners = ref([
		{
			link: 'https://www.tacoinc.org/',
			name: 'TACO: Team Awareness Combatting Overdose',
			context:
				'TACO Inc. is a 100% volunteer non-profit created by students FOR students to combat accidental overdose deaths among young adults through data-backed education & accessible harm reduction supplies. Navigate to our <a href="www.tacoinc.org" target="blank" >website</a>, <a href="https://www.instagram.com/tacoinc_/" target="blank" >Instagram</a>, and <a href="https://www.tiktok.com/@tacoinc?lang=en" target="blank" >TikTok</a> for accessible, non-judgemental knowledge on different drugs, drug combinations, and harm reduction resources to help YOU make your own informed decisions.',
			logo: '/partners/taco.png',
		},
		{
			link: 'https://www.ocmecca.org/',
			name: 'MECCA: Multi-Ethnic Collaborative of COmmunity Agencies',
			context:
				'MECCA Services specialize in accessing and serving underserved or hard-to-reach individuals and communities and, as a collaborative, MECCA relies on the credibility and strength of its member agencies who have been serving communities across the county for decades. The power of the collaborative is evidenced by the ability to reach underserved populations on a scale that has never been done before.',
			logo: '/partners/mecca.png',
		},
		{
			link: 'https://endoverdose.net/',
			name: 'End Overdose',
			context:
				'End Overdose is a non-profit organization based in Los Angeles, California working to end drug-related overdose deaths through education, medical intervention, and public awareness.',
			logo: '/partners/end.png',
		},
		{
			link: 'https://thepurposeofrecovery.org/index.html',
			name: 'The Purpose of Recovery',
			context:
				'The Purpose of Recovery (TPOR) is a community-based recovery organization that provides peer recovery coaching, family recovery coaching, group support, sober social events, and is the regional producer of the annual Recovery Rally in Orange County, CA. The Purpose of Recovery currently serves adolescents, transitional-age youth, adults, and family members impacted by substance use. All services are offered in English and Spanish.',
			logo: '/partners/TPR.png',
		},
		{
			link: 'https://www.clarematrix.org/',
			name: 'Clare Matrix',
			context:
				'Clare Matrix saves lives by providing compassionate, evidence-based treatment for those who struggle with drugs, alcohol and related behavioral health challenges. We strive to enhance the field of treatment worldwide through education, research and training. They also have a youth drop in center to look into opioid and stimulant use, the spike in fentanyl-related overdoses and death among teens, harm reduction, and overdose prevention.',
			logo: '/partners/matrix.png',
		},
	]);

	onMounted(() => {
		const cards = gsap.utils.toArray('.partner-card');

		gsap.to(cards, {
			xPercent: -100 * (cards.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: 'module-partners',
				pin: true,
				scrub: 1,
				snap: {
					snapTo: 1 / (cards.length - 1),
					directional: false,
					duration: { min: 0.15, max: 0.75 },
					delay: 0.04,
					ease: 'power1.inOut',
				},
				start: 'top top',
				end: () =>
					'+=' + (document.querySelector('module-partners').offsetWidth + 100),
			},
		});
	});
</script>

<style lang="scss">
	module-partners {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 500%;

		padding-top: 30px;
		min-height: 80vh;

		position: relative;

		div.partner-grid {
			display: flex;
			height: 100%;
			flex-wrap: nowrap;

			scroll-snap-type: y mandatory;

			partner-card {
				scroll-snap-align: start;
			}
		}
	}
</style>
