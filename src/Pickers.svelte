<script>
  import Picker from "./Picker.svelte";
  export let colours = [];
  export let changeColour;
</script>

<div class="container">
  {#each colours as colour, index}
  <div class="child">
    <Picker {colour} {changeColour} {index} />
  </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }

  .child:only-child {
    margin: auto;
  }

</style>
