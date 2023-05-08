<script>
  import Button from "../../components/Button.svelte";
  import { goto } from "$app/navigation";
  export let state = { email: "", password: "" };
  $: {
    state.disabled = state.email === "" || state.password === "";
  }
  export const handleSubmit = (e) => {
    e.preventDefault();

    window.localStorage.setItem("logged-in", true);
    goto("/creator");
  };
</script>

<div class="bg-primary fixed inset-0 z-10 w-full h-full flex">
  <img
    src="https://picsum.photos/id/48/700/700"
    alt="banner"
    class="hidden md:block object-cover w-1/2 lg:w-2/3 h-full object-center"
  />

  <form
    on:submit={handleSubmit}
    class="flex flex-col mx-auto gap-6 justify-center w-full max-w-[500px] px-10"
  >
    <img src="/Logo.png" alt="Logo" class="w-fit self-center" />
    <h1>Login</h1>
    <input
      type="text"
      name="email"
      placeholder="Email"
      bind:value={state.email}
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      bind:value={state.password}
    />
    <Button
      customClass="disabled:opacity-50"
      color="secondary"
      disabled={state.disabled}>Login</Button
    >
  </form>
</div>
