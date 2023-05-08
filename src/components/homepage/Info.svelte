<script>
  import image1 from "../../lib/homepage/image-1.png";
  import image2 from "../../lib/homepage/image-2.png";
</script>

<section class="flex flex-col md:grid grid-cols-2">
  <img
    data-aos="fade-right"
    class="w-full object-cover"
    src={image1}
    alt="Simplify Your Learning"
  />
  <div
    class="flex flex-col justify-center p-10"
    data-aos="fade-left"
    data-aos-delay="500"
  >
    <strong class="text-lg md:text-2xl">Simplify Your Learning</strong>
    <p class="md:text-xl">
      Discover the benefits of using Progate's comprehensive online learning
      platform for programming and web development.
    </p>
  </div>
</section>
<section class="flex flex-col-reverse md:grid grid-cols-2">
  <div class="flex flex-col justify-center p-10" data-aos="fade-right">
    <strong class="text-lg md:text-2xl">Unlock Your Potential</strong>
    <p class="md:text-xl">
      Elevate your programming skills and advance your career with Progate's
      diverse learning options, quality content, and supportive community.
    </p>
  </div>
  <img
    data-aos-delay="500"
    data-aos="fade-left"
    class="w-full object-cover"
    src={image2}
    alt="Simplify Your Learning"
  />
</section>
