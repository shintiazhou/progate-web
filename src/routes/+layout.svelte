<script>
  import "../app.css";
  import AOS from "aos";
  import "aos/dist/aos.css";

  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
  });
</script>

<div>
  <main class="bg-light pt-12">
    <slot />
  </main>
</div>
