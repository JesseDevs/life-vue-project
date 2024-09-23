import { defineStore } from 'pinia';

export const useEventService = defineStore('e', () => {
	const events = ref([
		{
			id: 1,
			title: 'Alive Together - United Preventing Suicide',
			img: '/event/alive.png',
			dateDay: '29',
			month: 'Sept.',
			detail: 'Join us for a 5K fun walk/run to raise awareness, build community, and benefit the Didi Hirsch Suicide Prevention Center.',
			fullDate: '',
			timeSpan: ['8:00 am', 'September 29, 2024'],
			location: ['UCLA Campus', 'Wilson Plaza'],
			link: 'https://didihirsch.akaraisin.com/ui/at24',
			linkText: 'https://didihirsch.akaraisin.com/ui/at24',
		},
	]);
	return { events };
});
