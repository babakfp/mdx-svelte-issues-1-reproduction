<script lang="ts" context="module">
    import pre from "$lib/markdown/elements/pre.svelte"

    export const mdxElements = { pre }
</script>

<script lang="ts">
    import { setContext } from "svelte"

    setContext("mdxElements", mdxElements)
</script>

<slot />
