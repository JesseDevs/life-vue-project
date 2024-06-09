import { defineStore } from 'pinia';
import { useHead } from '@vueuse/head';

export const useInterfaceService = defineStore('interface', () => {
	const mainMenuOpen = ref(false);
	const menuClass = computed(() => (mainMenuOpen.value ? 'menu-open' : 'menu-close'));

	const toggleMainMenu = () => {
		mainMenuOpen.value = !mainMenuOpen.value;
	};

	const closeMenu = () => {
		mainMenuOpen.value = false;
	};

	// useHead({
	// 	bodyAttrs: {
	// 		class: computed(() => {
	// 			if (mainMenuOpen.value) return 'overflow';

	// 			return '';
	// 		}),
	// 	},
	// });

	// const goBack = () => {
	// 	router.go(-1);
	// };

	return {
		mainMenuOpen,
		menuClass,
		toggleMainMenu,
		closeMenu,
		// goBack,
	};
});
