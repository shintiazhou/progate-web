<script>
  import "../app.css";
  import AOS from "aos";
  import "aos/dist/aos.css";

  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
  });
</script>

<div class="app pt-12">
  <slot />
</div>
