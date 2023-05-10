<script>
  import Button from "../Button.svelte";
  import PicDefault from "../../lib/Default-welcomer.png";
</script>

<section>
  <h1 class="counter text-[#254C60]">1 answers</h1>
  <article class="p-4 my-6">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      voluptatem rerum error ad blanditiis, facere minus maiores optio at quos
      libero fuga esse corrupti autem impedit numquam beatae, nisi aliquam!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam optio
      animi numquam consequatur iste vitae esse, ab architecto voluptas,
      voluptates natus id quia suscipit necessitatibus voluptatem eos est quidem
      vero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
      ipsam aspernatur vel tempora? Deserunt, soluta fugiat autem doloremque
      repellendus deleniti incidunt perspiciatis impedit officiis vero nesciunt
      cumque dolorum laudantium quas.
    </p>

    <div class="flex items-center justify-between mt-6">
      <div class="user flex gap-4 items-center">
        <div class="w-[50px] h-[50px] bg-gray-100 rounded-full overflow-hidden">
          <img class="w-full h-full" src={PicDefault} alt="" />
        </div>
        <div>
          <h3>ibu sud</h3>
          <p>09 Mei 2023</p>
        </div>
      </div>

      <div class="reaction-btn flex gap-4">
        <Button color="primary"><span class="text-lg">🔥</span> 1</Button>
        <Button color="primary"><span class="text-lg">👍</span> 2</Button>
      </div>
    </div>
  </article>
</section>
