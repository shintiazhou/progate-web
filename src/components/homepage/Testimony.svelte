<script>
  let activeIndex = 0;
  const testimonials = [
    {
      username: "JohnDoe",
      job: "Software Engineer",
      avatar: "https://picsum.photos/id/12/60/60",
      description:
        "Progate's programming knowledge platform helped me expand my knowledge of web development and learn new programming languages. The articles and tutorials were easy to understand and the resources were comprehensive. Highly recommended for anyone looking to improve their programming skills!",
    },
    {
      username: "JaneSmith",
      job: "Web Developer",
      avatar: "https://picsum.photos/id/75/60/60",
      description:
        "I love Progate's programming knowledge platform! As someone who prefers reading over watching videos, this platform is perfect for me. The articles and tutorials cover a wide range of programming topics and are very informative. I've learned so much from this platform and highly recommend it to others.",
    },
    {
      username: "DavidWilliams",
      job: "Data Scientist",
      avatar: "https://picsum.photos/id/33/60/60",
      description:
        "Progate's programming knowledge platform is a fantastic resource for anyone looking to improve their programming skills. The articles are very well-written and cover a wide range of topics, from programming fundamentals to more advanced topics like machine learning and data analysis. Highly recommend!",
    },
    {
      username: "EmilyJohnson",
      job: "UI/UX Designer",
      avatar: "https://picsum.photos/id/23/60/60",
      description:
        "I really enjoyed using Progate's programming knowledge platform. The articles and tutorials were well-structured and easy to follow, and I found the resources to be very helpful. As a designer, I was able to learn more about front-end development and improve my coding skills. Would definitely recommend this platform!",
    },
    {
      username: "MichaelBrown",
      job: "Full Stack Developer",
      avatar: "https://picsum.photos/id/5/60/60",
      description:
        "Progate's programming knowledge platform is a great resource for developers of all skill levels. Whether you're just starting out or looking to improve your skills, the articles and tutorials cover everything from the basics to advanced topics. I've learned a lot from this platform and would highly recommend it to others.",
    },
  ];

  export function handleSetIndex(index) {
    activeIndex = index;
  }
</script>

<section
  class="mx-auto text-center my-[200px] transition-all max-w-[600px] px-4 md:px-10"
>
  <h1 data-aos="fade-up">Why people love Progate</h1>
  <div
    data-aos="fade-up"
    data-aos-delay={200}
    class="flex gap-2 justify-center w-full my-10"
  >
    {#each testimonials as testi, index}
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
    <p>{testimonials[activeIndex].description}</p>
    <br />
    <strong>{testimonials[activeIndex].username}</strong><br />
    <small>{testimonials[activeIndex].job}</small>
  </div>
</section>
