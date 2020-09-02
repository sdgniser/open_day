<template>
  <div>
    <button v-if="link_type === 'in'" v-scroll-to="link">
      {{ text }}
    </button>
    <router-link v-else-if="link_type === 'out'" :to="link">
      {{ text }}
    </router-link>
    <a v-else :href="link">
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
button,
a {
  @include button;
  background-color: $purple;
  color: white;
  &:hover {
    background-color: $dark-purple;
  }
}
</style>
