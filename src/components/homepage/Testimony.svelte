<script>
  import { testimonials } from "../../constants/homepage";

  let activeIndex = 0;

  function handleSetIndex(index) {
    activeIndex = index;
  }
  const items = testimonials.items;
</script>

<section
  class="mx-auto text-center my-[200px] transition-all max-w-[600px] px-4 md:px-10"
>
  <h1 data-aos="fade-up">{testimonials.title}</h1>
  <div
    data-aos="fade-up"
    data-aos-delay={200}
    class="flex gap-2 justify-center w-full my-10"
  >
    {#each items as testi, index}
      <button on:click={() => handleSetIndex(index)}>
        <img
          class={`rounded-full cursor-pointer ${
            activeIndex === index ? "opacity-100 shadow-lg" : "opacity-20"
          }`}
          src={testi.avatar}
          alt={testi.username}
        />
      </button>
    {/each}
  </div>
  <div data-aos="fade-up" data-aos-delay={400}>
    <p>{items[activeIndex].description}</p>
    <br />
    <strong>{items[activeIndex].username}</strong><br />
    <small>{items[activeIndex].job}</small>
  </div>
</section>
