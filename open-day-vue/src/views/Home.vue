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
          <PurpleButton text="Learn more" />
        </div>
      </div>
    </section>
    <section id="about">
      <div class="header">
        <h2>About</h2>
      </div>
    </section>
  </div>
</template>

<script>
import PurpleButton from "@/components/buttons/PurpleButton.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    PurpleButton
  }
};
</script>
<style lang="scss">
#home {
  $main_section_height: 90vh;
  .overlay {
    z-index: -1;
    position: absolute;
    background: #000000;
    height: $main_section_height;
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
    height: $main_section_height;
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
#about {
  .header {
    background: #1DB5E4;
    width: 100vw;
    height: 80px;
    display: flex;
    h2 {
      margin: auto;
      padding: 0px;
    }
  }
}
</style>
