<script>
  import ColourBar from "./ColourBar.svelte";
  import AddColour from "./AddColour.svelte";
  import RemoveColour from "./RemoveColour.svelte";
  import { randomColour } from "./colours.js";
  import Slider from "./Slider.svelte";

  let colours = [randomColour()];
  let speed = 0;

  const PI_URL = "http://192.168.0.241";

  const pushConfig = async () => {
    const body = {
      colors: colours,
      delay: speed / 10,
    };
    await fetch(PI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const changeColour = async (index, colour) => {
    colours[index] = colour;
    await pushConfig();
  };

  const onAddColour = async () => {
    colours = [...colours, randomColour()];
    await pushConfig();
  };

  const onPopColour = async () => {
    colours = [...colours.slice(0, colours.length - 1)];
    await pushConfig();
  };

  const onSpeedChange = async (newSpeed) => {
    speed = newSpeed;
    await pushConfig();
  };
</script>

<main>
  <h1 class="add-colour">Lights</h1>
  <div class="colour-bar">
    <ColourBar {colours} {changeColour} />
  </div>
  <div class="add-colour">
    <AddColour {onAddColour} />
    {#if colours.length > 1}
      <RemoveColour {onPopColour} />
    {/if}
  </div>

  <Slider {speed} {onSpeedChange} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .colour-bar {
    width: 100%;
  }

  .add-colour {
    margin-top: 40px;
  }

  h1 {
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (prefers-color-scheme: dark) {
    main {
      background-color: #333333;
    }

    h1 {
      color: white;
    }
  }
</style>
