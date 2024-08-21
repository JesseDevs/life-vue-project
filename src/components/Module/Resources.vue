<template>
	<module-partners>
		<SectionTitle class="black-text" text="Community Partners" />

		<Swiper
			:slidesPerView="1"
			:spaceBetween="20"
			:keyboard="{
				enabled: true,
			}"
			:pagination="{
				clickable: true,
			}"
			:navigation="true"
			:modules="modules"
			class="mySwiper"
			id="section-content"
		>
			<SwiperSlide v-for="partner in partners" :key="partner.name">
				<Partner class="partner-card" :p="partner" />
			</SwiperSlide>
		</Swiper>
	</module-partners>
</template>

<script setup>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import { Keyboard, Pagination, Navigation } from 'swiper/modules';
	const modules = [Keyboard, Pagination, Navigation];

	const partners = ref([
		{
			link: 'https://www.tacoinc.org/',
			name: 'TACO: Team Awareness Combatting Overdose',
			context:
				'TACO Inc. is a 100% volunteer non-profit created by students FOR students to combat accidental overdose deaths among young adults through data-backed education & accessible harm reduction supplies. Navigate to our <a href="https://www.tacoinc.org/" target="blank" >website</a>, <a href="https://www.instagram.com/tacoinc_/" target="blank" >Instagram</a>, and <a href="https://www.tiktok.com/@tacoinc?lang=en" target="blank" >TikTok</a> for accessible, non-judgemental knowledge on different drugs, drug combinations, and harm reduction resources to help YOU make your own informed decisions.',
			logo: '/partners/taco.png',
		},
		{
			link: 'https://www.ocmecca.org/',
			name: 'MECCA: Multi-Ethnic Collaborative of Community Agencies',
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

		{
			link: 'https://www.impacthouse.com/',
			name: 'IMPACT',
			context:
				'Impact Drug & Alcohol Treatment Center has been offering no nonsense addiction treatment for men and women for the last 54 years.  Our goal is to redirect clients from a dysfunctional lifestyle to becoming productive and responsible members of the community.',
			logo: '/partners/impact.png',
		},

		{
			link: 'https://didihirsch.org/',
			name: 'Didi Hirsch',
			context:
				'Didi Hirsch is a leading provider of mental health, substance use and crisis care services and is home to the nation’s first and largest Suicide Prevention Center. ',
			logo: '/partners/didi.png',
		},
	]);
</script>

<style lang="scss">
	:root {
		--swiper-theme-color: rgb(var(--brand-color-rgb));
		--swiper-pagination-color: rgb(var(--brand-color-rgb));
		--swiper-wrapper-transition-timing-function: ease-in-out;
		--swiper-pagination-bullet-inactive-color: white;
		--swiper-navigation-sides-offset: -2vw;
		--swiper-navigation-size: 30px;
	}

	@media (min-width: 768px) {
		:root {
			--swiper-navigation-sides-offset: -2vw;
		}
	}

	.swiper-button-next,
	.swiper-rtl .swiper-button-prev {
		right: var(--swiper-navigation-sides-offset, -13px);
		left: auto;
	}
	.swiper {
		padding-top: 35px;
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	.swiper-wrapper {
		align-items: center;
	}

	.swiper-slide {
		/* Center slide text vertically */
		display: flex;
		justify-content: center;
		align-items: center;
		height: auto;
	}

	.swiper-horizontal > .swiper-pagination-bullets,
	.swiper-pagination-bullets.swiper-pagination-horizontal {
		top: 0;
		bottom: auto;
	}

	.swiper-pagination-bullet {
		opacity: 0.8 !important;
	}

	.swiper-button-prev {
		height: 40px;
		width: 40px;

		background-color: var(--gray); /* Circle background */
		border-radius: 50%;

		left: -20px !important;
		&:after {
			content: none;
		}

		&:before {
			content: ''; /* Create the arrow with pseudo-element */
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z'/%3E%3C/svg%3E") !important;
			background-repeat: no-repeat;
			background-position: center;
			background-size: 90% auto;
			height: 100%; /* Same as the container height */
			width: 100%; /* Same as the container width */
			z-index: 2; /* Keep the arrow above the circle */
		}
	}

	.swiper-button-next {
		height: 40px;
		width: 40px;

		background-color: var(--gray); /* Circle background */
		border-radius: 50%;

		right: -20px !important;
		&:after {
			content: none;
		}

		&:before {
			content: ''; /* Create the arrow with pseudo-element */
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z'/%3E%3C/svg%3E") !important;
			background-repeat: no-repeat;
			background-position: center;
			background-size: 90% auto;
			height: 100%; /* Same as the container height */
			width: 100%; /* Same as the container width */
			z-index: 2; /* Keep the arrow above the circle */
		}
	}

	module-partners {
		display: flex;
		flex-direction: column;
		gap: 20px;
		width: 100%;

		padding-top: 30px;
		min-height: 80vh;

		position: relative;

		// div.partner-grid {
		// 	display: flex;
		// 	height: 100%;
		// 	flex-wrap: nowrap;

		// 	scroll-snap-type: y mandatory;

		// 	partner-card {
		// 		scroll-snap-align: start;
		// 	}
		// }
	}

	@media (min-width: 768px) {
	}
</style>
