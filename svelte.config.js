import adapter from "@sveltejs/adapter-vercel"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"

/** @type {import("@sveltejs/kit").Config} */
export default {
    extensions: EXTENSIONS,
    kit: {
        adapter: adapter(),
    },
    preprocess: [
        mdxPreprocess({
            elements: ["pre"],
        }),
        vitePreprocess(),
    ],
}
