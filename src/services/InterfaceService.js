import { defineStore } from 'pinia';

export const useInterfaceService = defineStore('interface', () => {
	const loading = ref(true);
	if (loading.value) {
		const body = document.body;
		body.classList.add('overflow-hidden');
	}

	watch(loading, (newValue) => {
		const body = document.body;
		if (newValue) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
	});

	const mainMenuOpen = ref(false);
	const menuClass = computed(() => (mainMenuOpen.value ? 'menu-open' : 'menu-close'));

	const toggleMainMenu = () => {
		mainMenuOpen.value = !mainMenuOpen.value;
	};

	const closeMenu = () => {
		mainMenuOpen.value = false;
	};

	watch(mainMenuOpen, (newValue) => {
		const body = document.body;
		if (newValue) {
			body.classList.add('overflow-hidden');
		} else {
			body.classList.remove('overflow-hidden');
		}
	});

	return {
		loading,
		mainMenuOpen,
		menuClass,
		toggleMainMenu,
		closeMenu,
	};
});
