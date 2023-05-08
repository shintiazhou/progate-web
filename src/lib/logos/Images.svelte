<script>
  import bakti from "./bakti.png";
  import binus from "./binus.png";
  import cfds from "./cfds.png";
  import cicil from "./cicil.png";
  import gajahMada from "./gajah-mada.png";
  import gojek from "./gojek.png";

  export const images = [bakti, binus, cfds, cicil, gajahMada, gojek];
</script>

<div class=" gap-2 mt-10 overflow-x-scroll w-full px-10 scrollbar">
  <div class="flex items-center justify-center">
    {#each images as image, index}
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
