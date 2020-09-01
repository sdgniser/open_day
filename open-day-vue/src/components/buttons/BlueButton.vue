<template>
  <button>
    {{ text }}
  </button>
</template>
<script lang="ts">
export default {
  name: "PurpleButton",
  props: {
    text: String
  },
  data() {
    return {};
  }
};
</script>
<style scope lang="scss">
button {
  font-size: 19px;
  background-color: $blue;
  padding: 10px 13px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    background-color: $dark-blue;
  }
}
</style>
