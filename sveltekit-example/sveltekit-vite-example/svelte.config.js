import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
        "postcss": true
    })],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			resolve: {
				alias: {
					$components: resolve('src/app/components'),
					$utils: resolve('src/app/_utils'),
					$css: resolve('src/routes/main.css'),
					$layouts: resolve('src/app/_layouts'),
				},
				build: {
					sourceMap: false,
				}
			}
		}),
	}
};

export default config;
// Workaround until SvelteKit uses Vite 2.3.8 (and it's confirmed to fix the Tailwind JIT problem)
const mode = process.env.NODE_ENV;
const dev = mode === "development";
process.env.TAILWIND_MODE = dev ? "watch" : "build";
