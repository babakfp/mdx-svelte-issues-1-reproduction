<script lang="ts" context="module">
    import pre from "$lib/markdown/elements/pre.svelte"

    export const mdxElements = { pre }
</script>

<script lang="ts">
    import "mdx-svelte/unified/remark-github-alerts/github-base.css"
    import "mdx-svelte/unified/remark-github-alerts/github-colors-dark-media.css"
    import { setContext } from "svelte"

    setContext("mdxElements", mdxElements)
</script>

<slot />
