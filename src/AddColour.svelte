<script>
  export let onAddColour;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<!-- <div class="button_plus"><span class="plus">&#43;</span></div> -->
<i class="fa fa-plus-square" style="font-size:36px;" on:click={onAddColour} />

<style>
  .fa-plus-square:hover:before,
  .fa-plus-square:hover:after {
    color: #dfdfdf;
    transition: 0.2s;
  }

  .fa-plus-square:hover {
    color: rgb(0, 0, 0);
    transition: 0.2s;
  }

  @media (prefers-color-scheme: dark) {
    .fa-plus-square {
      color: white;
    }

    .fa-plus-square:hover:before,
    .fa-plus-square:hover:after {
      color: white;
    }

    .fa-plus-square:hover {
      color: white;
    }
  }
</style>
