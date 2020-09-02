<template>
  <div>
    <button v-if="link_type === 'in'" v-scroll-to="link" class="button">
      {{ text }}
    </button>
    <router-link v-else-if="link_type === 'out'" :to="link" class="button">
      {{ text }}
    </router-link>
    <a v-else :href="link" class="button">
      {{ text }}
    </a>
  </div>
</template>
<script lang="ts">
export default {
  name: 'PurpleButton',
  props: {
    text: String,
    link: String,
    link_type: {
      default: "",
      type: String,
    }
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.button {
  @include button;
  background-color: $blue;
  color: black;
  &:hover {
    background-color: $dark-blue;
  }
}
</style>
