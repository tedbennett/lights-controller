<script>
  import Pickers from "./Pickers.svelte";
  export let colours = [];
  export let changeColour;

  $: gradient =
    colours.length === 1
      ? colours[0]
      : `linear-gradient(to right, ${colours.join(",")})`;
</script>

<div class="container">
  <div class="colour-bar" style="--theme-color: {gradient}" />
  <div class="pickers">
    <Pickers {colours} {changeColour} />
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .pickers {
    grid-column: 1;
    grid-row: 2;
  }

  .colour-bar {
    /* width: 100%; */
    background: var(--theme-color);
    border-radius: 12px;
    height: 15px;
    /* margin: 1em; */
    margin-bottom: 1em;
    grid-column: 1;
    grid-row: 1;
  }
</style>
