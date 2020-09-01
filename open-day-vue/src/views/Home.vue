<template>
  <div class="home">
    <section id="home">
      <div class="overlay">
        <img src="../assets/microscopes.jpg" class="background" />
      </div>
      <div class="hero">
        <div class="center">
          <h1>
            OPEN
            <br />
            DAY
            <br />
            2020
          </h1>
          <PurpleButton text="Learn more" link="#about"/>
        </div>
      </div>
    </section>
    <SectionAbout />
    <SectionGallery />
  </div>
</template>

<script>
import PurpleButton from '@/components/buttons/PurpleButton.vue';
import SectionAbout from '@/components/SectionAbout.vue';
import SectionGallery from '@/components/SectionGallery.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    PurpleButton,
    SectionAbout,
    SectionGallery,
  },
};
</script>
<style lang="scss">
#home {
  .overlay {
    z-index: -1;
    position: absolute;
    background: #000000;
    height: $section-height;
    .background {
      object-fit: cover;
      width: 100vw;
      height: 100%;
      filter: blur(10px);
      opacity: 0.5;
    }
  }
  .hero {
    z-index: 1;
    height: $section-height;
    width: 100vw;
    display: flex;
    .center {
      margin: auto;
      text-align: center;
      h1 {
        margin: auto;
        font-size: 72px;
        line-height: 1;
        letter-spacing: 0.042em;
        color: white;
        padding-bottom: 20px;
      }
    }
  }
}
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
