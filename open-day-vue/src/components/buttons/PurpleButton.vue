<template>
  <a :href="link">
    {{ text }}
  </a>
</template>
<script lang="ts">
export default {
  name: "PurpleButton",
  props: {
    text: String,
    link: String,
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
a {
  line-height: 1.7;
  width: 250px;
  height: 30px;
  display: block;
  font-size: 19px;
  background-color: $purple;
  padding: 10px 13px;
  color: white;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    background-color: $dark-purple;
  }
}
</style>
