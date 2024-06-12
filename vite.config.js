import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => tag.includes('-'),
				},
			},
		}),
		Components({
			dirs: ['src/components', 'src/components/Creative'],
			extensions: ['vue'],
			deep: true,
			dts: 'src/components.d.ts',
		}),
		AutoImport({
			imports: ['vue', 'vue-router'],
			dts: 'src/auto-imports.d.ts',
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'~': fileURLToPath(new URL('./src', import.meta.url)), // Add this line
		},
	},
});
