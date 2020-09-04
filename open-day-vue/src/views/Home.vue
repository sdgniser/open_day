<template>
  <div class="home">
    <SectionHero />
    <SectionAbout />
    <SectionGallery />
    <SectionFeedback />
  </div>
</template>

<script>
import SectionHero from '@/components/SectionHero.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionGallery from '@/components/SectionGallery.vue';
import SectionFeedback from '@/components/SectionFeedback.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    SectionHero,
    SectionAbout,
    SectionGallery,
    SectionFeedback,
  },
};
</script>
<style lang="scss">
.split-2 {
  width: 100%;
  height: 100%;
  .left {
    margin: auto;
    width: 50%;
    height: 100%;
  @media(max-width: $bp-md) {
    width: 70%;
    height: unset;
    padding: 30px 0px 0px 0px;
  }
  }
  .right {
    margin: auto;
    width: 50%;
    height: 100%;
  @media(max-width: $bp-md) {
    width: 100%;
    height: unset;
    padding: 0px 0px 30px 0px;
  }
  }
  @media(min-width: $bp-md) {
    display: flex;
  }
}
.flex {
  display: flex;
}
</style>
