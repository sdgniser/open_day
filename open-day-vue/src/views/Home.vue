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
    <section id="about">
      <div class="header">
        <h2>About</h2>
      </div>
      <div class="about">
        <div class="split-2">
          <div class="left flex">
            <img src="../assets/Poster_2020.png">
          </div>
          <div class="right flex">
            <p class="about-text">Monocle ipsum dolor sit amet finest joy alluring Porter, Baggu exclusive cutting-edge Toto Boeing 787 discerning Tsutaya pintxos Helsinki Marylebone Gaggenau. Perfect lovely Melbourne izakaya destination pintxos extraordinary. Conversation Lufthansa pintxos liveable concierge exclusive. Sleepy bureaux carefully curated conversation perfect iconic boutique Singapore first-class Ginza.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PurpleButton from '@/components/buttons/PurpleButton.vue';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    PurpleButton,
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
#about {
  .header {
    background: #1db5e4;
    width: 100vw;
    height: $header-height;
    display: flex;
    h2 {
      margin: auto;
      padding: 0px;
    }
  }
  .about {
    height: $section-height;
  }
  img {
    margin: auto;
    height: 70%;
  }
  .about-text {
    text-align: right;
    width: 70%;
    margin: auto;
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
