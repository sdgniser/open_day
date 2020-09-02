<template>
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
          <div class="center">
          <p class="about-text">Monocle ipsum dolor sit amet finest joy alluring Porter, Baggu exclusive cutting-edge Toto Boeing 787 discerning Tsutaya pintxos Helsinki Marylebone Gaggenau. Perfect lovely Melbourne izakaya destination pintxos extraordinary. Conversation Lufthansa pintxos liveable concierge exclusive. Sleepy bureaux carefully curated conversation perfect iconic boutique Singapore first-class Ginza.</p>
          <BlueButton text="Schedule" link="/schedule" link_type="out"/>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import BlueButton from '@/components/buttons/BlueButton.vue';

  export default {
    name: 'SectionAbout',
    data() {
      return {};
    },
    components: {
      BlueButton,
    }
  }
</script>
<style scoped lang="scss">
#about {
  .header {
    background: $blue;
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
    padding-bottom: 70px;
  }
  .center {
    margin: auto;
    text-align: -moz-center;
  }
}
</style>
