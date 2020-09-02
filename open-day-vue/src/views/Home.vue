<template>
  <div class="home">
    <SectionHero />
    <SectionAbout />
    <SectionGallery />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionGallery from '@/components/SectionGallery.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionGallery,
  },
};
</script>
<style lang="scss">
.split-2 {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    margin: auto;
    width: 50%;
    height: 100%;
  }
  .right {
    margin: auto;
    width: 50%;
    height: 100%;
  }
}
.flex {
  display: flex;
}
</style>
