<script>
  export let color = "";
  export let customClass = "";
  let bgColorClass = "";

  const styles = {
    primary: "bg-primary text-dark",
    secondary: "bg-secondary text-white ",
  };
  bgColorClass = styles[color] || "bg-gray-200 text-dark";
</script>

<button
  class={`transition-all hover:scale-105 px-4 py-2 rounded ${bgColorClass} ${customClass}`}
  {...$$props}
>
  <slot />
</button>
