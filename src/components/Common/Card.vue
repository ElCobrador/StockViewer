<template>
  <div class="card-container">
    <div class="card">
      <img src="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
           alt="placeholder image"
           class="card-image">
      <div class="card-body">
        <h5 class="card-title">
          Card title
        </h5>
        <p card-text>
          some text contained within the card
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    return {};
  },
});
</script>

<style scoped>
.card-image {
    max-width: 250px;
    background-color: gray;
}
.card-container {
    max-width: 250px;
}
.card-body {
    text-align: left;
}
</style>