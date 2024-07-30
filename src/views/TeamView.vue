<template>
	<GeneralContainer class="min-space">
		<module-team>
			<SectionTitle text="Meet The Team" />
			<div class="card-grid" id="section-content">
				<Profile v-for="profile in team" :key="profile.name" :profile="profile" />
			</div>
			<a class="general-btn" :href="mailToHref" target="_blank"
				>Volunteer<Arrow class="arrow"
			/></a>
		</module-team>
	</GeneralContainer>
</template>
<script setup>
	import { useInterfaceService } from '~/services/InterfaceService';

	const ui = useInterfaceService();
	const team = ref([]);

	const email = ref('contact@lifeoftheparty.org');

	const mailToHref = computed(() => {
		return `mailto:${email.value}?subject=Volunteer%20Opportunities%20-%20Life%20of%20The%20Party&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20volunteering%20for%20your%20organization.%20Please%20provide%20more%20information%20on%20how%20I%20can%20help.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]`;
	});

	onMounted(() => {
		team.value = [
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
			{
				imgsrc: '/images/profile/regina.webp',
				name: 'Regina Rezex',
				role: [
					'Board Member',
					'Assistant Dean of Development & External Relations at USC Iovine and Young Academy',
				],
				text: [
					'Regina is a mission-driven and collaborative fundraising executive at the University of Southern California. With a proven track record in building programs and securing major gifts, she excels in patient and academic fundraising, community relations, program development, parent and alumni engagement, volunteer and board management, communications, strategic planning, and business operations. Previously, as a key development leader at the Keck School of Medicine of USC, Regina led fundraising initiatives supporting crucial medical research and advancements. Now, as the Assistant Dean of Development & External Relations at the USC Iovine & Young Academy, she leverages her extensive experience to enhance the Academy’s industry outreach and development efforts.',
					'Regina also brings her nonprofit experience to Life of the Party. As an active board member, she is dedicated to developing a strategic plan to broaden the organization’s community outreach by promoting Narcan use, educating about overdose risks, and collaborating with local organizations on effective prevention strategies. Her efforts aim to reduce overdose incidents and save lives through education and advocacy.',
				],
			},
			{
				imgsrc: '/images/profile/conrad.webp',
				name: 'Conrad Jackson',
				role: ['Board Member'],
				text: [
					'Conrad Jackson has been a dedicated professional in emergency medical services (EMS) since 2012, starting his career as a firefighter and becoming a licensed  paramedic in 2016. As the Senior Supervising Paramedic for a nonprofit ambulance company in Mendocino County, he oversees a team of paramedics to ensure the highest standard of care. His extensive experience in firefighting and paramedicine, combined with his role as a preceptor mentoring new paramedics, makes him a crucial asset to his organization and community.',
					'Conrad is passionate about addressing the current opioid crisis. His work in the field constantly reinforces the importance of Naloxone, his top choice in emergency overdose situations. He is a vocal advocate for its widespread availability and regularly conducts workshops and training sessions to educate both professionals and the public on its use and significance. Outside of his professional life, he actively volunteers for local events and initiatives, demonstrating his commitment to public health and safety.',
				],
			},
		];
		ui.loading = false;
	});
</script>

<style lang="scss">
	.min-space {
		min-height: 500px;
	}
	/* @media (min-width: 1024px) {
		.about {
			min-height: 100vh;
			display: flex;
			align-items: center;
		}
	} */
</style>
