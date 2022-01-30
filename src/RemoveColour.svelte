<script>
  export let onPopColour;
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<!-- <div class="button_plus"><span class="plus">&#43;</span></div> -->
<i class="fa fa-minus-square" style="font-size:36px;" on:click={onPopColour} />

<style>
  .fa-minus-square:hover:before,
  .fa-minus-square:hover:after {
    color: #dfdfdf;
    transition: 0.2s;
  }

  .fa-minus-square:hover {
    color: rgb(0, 0, 0);
    transition: 0.2s;
  }

  @media (prefers-color-scheme: dark) {
    .fa-minus-square {
      color: white;
    }

    .fa-minus-square:hover:before,
    .fa-minus-square:hover:after {
      color: white;
    }

    .fa-minus-square:hover {
      color: white;
    }
  }
</style>
