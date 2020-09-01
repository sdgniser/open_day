<template>
  <a>
    {{ text }}
  </a>
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
<style scoped lang="scss">
a {
  line-height: 1.7;
  width: 250px;
  height: 30px;
  display: block;
  font-size: 19px;
  background-color: $blue;
  padding: 10px 13px;
  color: black;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s ease-in;
  &:hover {
    background-color: $dark-blue;
  }
}
</style>
