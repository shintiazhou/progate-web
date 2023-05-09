<script>
  export const features = [
    {
      title: "Comprehensive Resources",
      desc: "Progate's Programming Knowledge Platform offers a comprehensive range of articles, tutorials, and resources related to programming and technology, all in one place for learners who prefer reading.",
    },
    {
      title: "Convenient Learning for Readers",
      desc: "Our reading-based Programming Knowledge Platform allows learners to conveniently access and learn programming and technology concepts, without having to watch videos.",
    },
    {
      title: "Expertly Curated Reading Materials",
      desc: "Trust in the quality and relevance of our reading-based content, which is carefully curated by our team of experts to ensure learners receive the most up-to-date and relevant information.",
    },
  ];
</script>

<section class="px-4 md:px-10 my-[200px] mb-10 mx-auto max-w-[900px] text-left">
  <p data-aos="fade-right">Features</p>
  <h1 data-aos="fade-right" data-aos-delay={100}>Why we stand out</h1>
  <div class="flex flex-col lg:grid grid-cols-3 mx-auto gap-4 my-6">
    {#each features as feature, index}
      <div
        class="bg-primary p-4 rounded-xl"
        data-aos="fade-up"
        data-aos-delay={index * 200}
      >
        <p class="font-bold text-lg h-[60px]">{feature.title}</p>
        <p>{feature.desc}</p>
      </div>
    {/each}
  </div>
</section>
