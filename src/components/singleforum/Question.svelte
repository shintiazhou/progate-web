<script>
  import Button from "../Button.svelte";
  import IoIosChatbubbles from "svelte-icons/io/IoIosChatbubbles.svelte";
</script>

<section class="bg-indigo-50 mb-9 p-4 rounded-md">
  <h1 class="mb-4 text-[#254C60]">
    How Can I Vertically center a div element for all browser using CSS?
  </h1>
  <p class="text-[#254C60]">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate
    facere nobis tempore aspernatur delectus veritatis. Velit, veritatis. Dolore
    laborum at voluptatibus veritatis nam. Maiores fugiat placeat obcaecati unde
    quo.
  </p>

  <div class="flex justify-between mt-9">
    <div class="tag flex gap-2">
      <Button>HTML</Button>
      <Button>CSS</Button>
      <Button>Styling</Button>
    </div>
    <Button
      color="primary"
      customClass="answer-btn inline-flex gap-2 items-center"
    >
      <div class="w-6 h-6"><IoIosChatbubbles /></div>
      <span>Add Answer</span>
    </Button>
  </div>
</section>
