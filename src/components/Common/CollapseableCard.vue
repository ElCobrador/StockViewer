<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between">
      <h5 class="m-0 p-0">
        <slot name="header" />
      </h5>
      <h5 class="m-0 p-0">
        <button class="btn collapse-button"
                type="button"
                @click="ToggleCollapse">
          collapse
        </button>
      </h5>
    </div>

    <div class="collapse" :class="{'show' : IsOpened }">
      <div class="card-body">
        <slot />
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
  data () {
    return {
      IsOpened: false,
    };
  },
  methods: {
    ToggleCollapse () {
      this.IsOpened = !this.IsOpened;
    },
  },
});
</script>

<style scoped>

</style>