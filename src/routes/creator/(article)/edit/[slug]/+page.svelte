<script>
  import Button from "../../../../../components/Button.svelte";
</script>

<div class="px-10 bg-white flex flex-col gap-6">
  <section class="flex justify-between w-full gap-10">
    <p>Draft / How to build a simple react weather app</p>

    <div class="flex gap-4">
      <Button>Preview</Button>
      <Button color="secondary">Publish</Button>
    </div>
  </section>
  <img
    src="https://picsum.photos/id/1/500/300"
    alt="woman in tech"
    class="w-fit"
  />
  <div>
    <input class="text-3xl font-bold" type="text" value="Article Title..." />
    <textarea
      class="text-justify w-full h-full appearance-none outline-none border-none"
      type="text"
      rows={20}
      value="Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.

      Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.

      Type “/” for commands...
      "
    />
  </div>
</div>
