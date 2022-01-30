<script>
  export let toggleDropdown;
  export let colour;
</script>

<div>
  <div
    class="picker"
    style="--theme-color: {colour}"
    on:click={toggleDropdown}
  />
</div>

<style>
  .picker {
    position: relative;
    background-color: var(--theme-color);
    text-align: left;
  }
  .picker:before,
  .picker:after {
    content: "";
    position: absolute;
    background-color: inherit;
  }
  .picker,
  .picker:before,
  .picker:after {
    width: 1em;
    height: 1em;
    border-top-right-radius: 30%;
  }

  .picker {
    transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
  }
  .picker:before {
    transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707)
      translate(0, -50%);
  }
  .picker:after {
    transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
  }
</style>
