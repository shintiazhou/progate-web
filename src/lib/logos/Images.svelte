<script>
  import { collabolatorImages } from "../../constants/collabolator";
</script>

<div class=" gap-2 mt-10 overflow-x-scroll w-full px-10 scrollbar">
  <div class="flex items-center justify-center">
    {#each collabolatorImages as image, index}
      <img
        data-aos-delay={index * 100}
        data-aos="fade-up"
        class="mx-4 object-contain h-[40px] w-[100px]"
        src={image}
        alt={"Gallery Image" + index}
      />
    {/each}
  </div>
</div>
