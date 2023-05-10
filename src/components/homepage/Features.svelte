<script>
  import { features } from "../../constants/homepage";
</script>

<section class="px-4 md:px-10 my-[200px] mb-10 mx-auto max-w-[900px] text-left">
  <p data-aos="fade-right">{features.title}</p>
  <h1 data-aos="fade-right" data-aos-delay={100}>{features.subtitle}</h1>
  <div class="flex flex-col lg:grid grid-cols-3 mx-auto gap-4 my-6">
    {#each features.features as feature, index}
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
