<template>
	<module-partners>
		<SectionTitle class="black-text" text="Resources" />

		<div class="partner-grid" id="section-content">
			<Partner v-for="p in partners" :key="p.name" :p="p" />
		</div>
	</module-partners>
</template>

<script setup>
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	let observer;

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
		observer = new IntersectionObserver(inViewport, {
			threshold: 0.5,
		});

		const cards = document.querySelectorAll('.partner-grid > partner-card');
		cards.forEach((card) => {
			observer.observe(card);
		});

		function inViewport(entries) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = parseInt(entry.target.dataset.index);
					const xDirection = index % 2 === 0 ? '-100%' : '100%';

					gsap.fromTo(
						entry.target,
						{ opacity: 0, x: xDirection, filter: 'blur(10px)' },
						{
							opacity: 1,
							x: '0%',
							duration: 1,
							ease: 'power3.out',
							filter: 'blur(0px)',
							delay: 0.3 * index,
						},
					);

					observer.unobserve(entry.target);
				}
			});
		}

		onBeforeUnmount(() => {
			observer.disconnect();
		});
	});
</script>

<style lang="scss">
	module-partners {
		display: flex;
		flex-direction: column;
		gap: 40px;
		width: 100%;
		position: relative;

		div.partner-grid {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			column-gap: 7vmin;
			row-gap: 12vmin;
		}
	}
</style>
