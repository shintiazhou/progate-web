<script>
  import Button from "../components/Button.svelte";
  import IoMdSearch from "svelte-icons/io/IoMdSearch.svelte";
  import gojek from "../lib/logos/gojek.png";
</script>

<div class="flex flex-col gap-4 my-4">
  <ul class="list-disc list-inside">
    <strong>1. This is how you use an icon</strong>
    <li>
      Open <a
        class="underline cursor-pointer"
        target="_blank"
        href="https://svelte-icons-explorer.vercel.app/">this link</a
      >
    </li>
    <li>Pick a category</li>
    <li>Click the icon you want</li>
    <li>Paste it inside the script tag</li>
  </ul>
  <div>
    <strong>2. This is how you navigate</strong><br />
    <a href="/about" class="underline">Go to about page</a>
  </div>
  <div>
    <strong>3. This is how you use an icon</strong><br />
    <div class="w-[20px] h-[20px]"><IoMdSearch /></div>
  </div>
  <div>
    <strong>4. This is how you use a reusable component</strong><br />
    <div class="flex gap-4">
      <Button color="primary">this primary is button</Button>
      <Button color="secondary">this secondary is button</Button>
      <Button>this is default button</Button>
    </div>
  </div>
  <div>
    <strong>3. This is how you display an image</strong><br />
    <img src={gojek} alt="gojek" class="w-[100px] h-[30px] object-contain" />
  </div>
</div>
