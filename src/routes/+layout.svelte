<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
</script>

<div class="app">
  <Header/>
  <main class="bg-light">
    <slot />
  </main>
  <Footer/>
</div>
