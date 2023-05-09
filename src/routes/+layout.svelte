<script>
  import "../app.css";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    AOS.init({ duration: 1000, once: true, mirror: false });
  });
</script>

<div class="app">
  <Header />
  <main class="bg-light pt-12">
    <slot />
  </main>
  <Footer />
</div>
