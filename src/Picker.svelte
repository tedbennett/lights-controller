<script>
  import Picker from "./PickerArrow.svelte";

  import { clickOutside } from "./clickOutside.js";
  import { colours } from "./colours.js";
  import { tick } from "svelte";
  import { v4 as uuid } from "uuid";
  let id = uuid();

  export let colour;
  export let index;
  export let changeColour;

  let top = true;
  let wrap = false;

  let showDropdown = false;

  let dropdownSize = 200;

  async function toggleDropdown(e) {
    wrap = window.innerWidth - dropdownSize - e.clientX <= 0;
    showDropdown = !showDropdown;
    await tick();
  }

  function clickOutsideDropdown() {
    showDropdown = false;
  }

  function changeValue(innerValue) {
    changeColour(index, innerValue);
    showDropdown = false;
  }
</script>

<Picker bind:colour {toggleDropdown} />
{#if showDropdown}
  <div
    class:top
    class:wrap
    bind:clientWidth={dropdownSize}
    class="values-dropdown"
    use:clickOutside
    on:click_outside={clickOutsideDropdown}
  >
    <div class="values-dropdown-grid">
      {#each colours as val, index}
        {#each val as innerValue, innerIndex}
          <button
            id="{id}-{index}-{innerIndex}"
            style="background: {innerValue};"
            on:click={() => changeValue(innerValue)}
            class="color-block"
          />
        {/each}
      {/each}
    </div>
  </div>
{/if}

<style>
  .color-block {
    border-radius: 0.2rem;
    width: 24px;
    height: 24px;
    line-height: 0;
    font-size: 0;
  }

  .values-dropdown {
    padding: 1rem;
    position: absolute;

    display: block;
    z-index: 1;
    top: 40px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
  }

  .values-dropdown-grid {
    grid-template-columns: repeat(7, 24px);
    grid-template-rows: 24px 24px;
    grid-gap: 10px;
    display: grid;
  }

  .values-dropdown.top {
    top: auto;
    margin-top: 10px;
  }

  .values-dropdown.wrap {
    right: 2%;
  }

  .values-dropdown button {
    border: none;
  }
</style>
