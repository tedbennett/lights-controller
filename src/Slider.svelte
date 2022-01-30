<script>
  export let speed;
  export let onSpeedChange;
</script>

<h3>Speed</h3>
<input
  type="range"
  class="slider"
  value={speed}
  on:input={(e) => onSpeedChange(e.target.value)}
/>

<style>
  .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 75%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    align-self: center;
    border-radius: 10px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #3f3f3f;
    cursor: pointer;
    border: none;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #3f3f3f;
    cursor: pointer;
    border: none;
  }
</style>
