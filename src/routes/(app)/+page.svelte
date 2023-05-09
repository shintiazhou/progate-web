<script>
  import Features from "../../components/homepage/Features.svelte";
  import Hero from "../../components/homepage/Hero.svelte";
  import Info from "../../components/homepage/Info.svelte";
  import Subscribe from "../../components/homepage/Subscribe.svelte";
  import Testimony from "../../components/homepage/Testimony.svelte";
  import Images from "../../lib/logos/Images.svelte";
</script>

<svelte:head>
  <title>Homepage | Progate</title>
  <meta
    name="description"
    content="Progate is an online learning platform that offers various courses on programming, web development, and more."
  />
</svelte:head>

<div class="overflow-hidden">
  <Hero />
  <section class="container mx-auto py-[100px]">
    <h1 data-aos="fade-up" class="text-center text-secondary font-semibold">
      Collaborating with top-tier companies
    </h1>
    <Images />
  </section>
  <Info />
  <Features />
  <Testimony />
  <Subscribe />
</div>
