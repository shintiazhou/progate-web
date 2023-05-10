<script>
  import { hero } from "../../constants/homepage";
  import heroImg from "../../lib/homepage/hero.png";
  import Button from "../Button.svelte";
</script>

<section
  class="transition-all background mx-auto bg-cover h-screen max-h-[800px] text-light py-10 px-4 md:px-10 lg:flex items-center lg:gap-10 overflow-hidden"
>
  <div
    class="flex flex-col items-center md:items-start text-center md:text-left gap-3 w-full lg:w-1/2"
  >
    <h1
      data-aos="fade-right"
      class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl"
    >
      Master <span class="text-[#FD8B19]">{"{Programming}"}</span>
      at Your Own Pace with Progate's Knowledge Platform
    </h1>
    <p class="md:text-lg" data-aos="fade-right" data-aos-delay="100">
      {hero.subtitle}
    </p>
    <Button
      data-aos="fade-right"
      data-aos-delay="200"
      color="primary"
      customClass="font-bold uppercase rounded-full w-fit mt-2"
    >
      {hero.buttonText}</Button
    >
  </div>
  <img
    data-aos-delay="500"
    data-aos="fade-left"
    src={heroImg}
    alt="Progate experience"
    class="mx-auto mt-14 md:mt-0 object-contain w-full max-w-[800px] md:max-w-[700px] lg:max-w-[500px] xl:max-w-[700px]"
  />
</section>

<style>
  .background {
    background-image: url("../../lib/bg.jpg");
  }
</style>
