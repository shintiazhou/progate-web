<script>
  import CardBasic from "../../../components/card/CardBasic.svelte";
  import CardProgatePlus from "../../../components/card/CardProgatePlus.svelte";
  import CardProgateForWriters from "../../../components/card/CardProgateForWriters.svelte";
</script>

<svelte:head>
  <title>Pricing Plan | Progate</title>
  <meta
    name="description"
    content="Progate is an online learning platform that offers various courses on programming, web development, and more."
  />
</svelte:head>

<main class="background item-center py-9 min-h-screen bg-cover">
  <section class="text-light container mx-auto max-w-[95%] lg:max-w-[900px]">
    <h3 class="text-center text-regular">Pricing Plan</h3>
    <h1 class="text-center text-regular">Elevate Your Learning Experience</h1>
    <div class="flex flex-col lg:grid grid-cols-3 mx-auto gap-8 my-9">
      <CardBasic />
      <CardProgatePlus />
      <CardProgateForWriters />
    </div>
  </section>
</main>

<style>
  .background {
    background-image: url("../../lib/bg.jpg");
  }
</style>
