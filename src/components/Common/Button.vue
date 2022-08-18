<template>
  <div>
    <button type="button"
            class="btn btn-primary"
            @click="onClicked()">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: '',
    },
    onClicked: {
      type: Function,
      default: () => {
        // default
      },
    },
  },
  setup () {
    return {};
  },
  methods: {
    Clicked () {
      this.onClicked();
    },
  },
});
</script>

<style scoped>

</style>