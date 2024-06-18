import { defineStore } from 'pinia';

export const useEventService = defineStore('e', () => {
	const events = ref([
		{
			id: 1,
			title: 'Santa Monica - Title',
			img: '/images/event.jpg',
			dateDay: '22',
			month: 'June',
			detail: 'Join us in Santa Monica, CA. Explore our Event on display and meet our team.',
			fullDate: '',
			timeSpan: ['June 22, 2024', 'June 24, 2024'],
			location: ['The Crypto Arena', '1111 S Figueroa St', 'Los Angeles', '90015'],
			link: '/',
			linkText: 'Link to Event',
		},
		{
			id: 1,
			title: '2nd event',
			img: '/images/event.jpg',
			dateDay: '22',
			month: 'June',
			detail: 'Join us in Santa Monica, CA. Explore our Event on display and meet our team.',
			fullDate: '',
			timeSpan: ['June 22, 2024', 'June 24, 2024'],
			location: ['The Crypto Arena', '1111 S Figueroa St', 'Los Angeles', '90015'],
			link: '/',
			linkText: 'Link to Event',
		},
	]);
	return { events };
});
