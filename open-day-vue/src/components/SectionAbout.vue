<template>
  <section id="about">
    <div class="header">
      <h2>About</h2>
    </div>
    <div class="about">
      <div class="split-2">
        <div class="left flex">
          <img src="../assets/Poster_2020.png" />
        </div>
        <div class="right flex">
          <div class="center">
            <p class="about-text">
              The Open day is an event conducted by the National Institute of
              Science Education and Research(NISER) on an annual basis. With the
              single minded goal of enlightening young minds to a life in
              science, it hosts a plethora of activities and talks that are as
              interesting as they are informative. However, the year 2020 calls
              for a different approach, as the pandemic has raised confusion and
              uncertainties among all the students. While it is impossible to
              conduct the Open day as is customary, we welcome you to the first
              NISER Virtual Open Day, 2020. While carrying forward the essence
              of the Open day, we look forward to accommodate all the new
              challenges that have come along with the new modus operandi.
            </p>
            <BlueButton text="Schedule" link="/schedule" link_type="out" />
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
  },
};
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
    @media (min-width: $bp-md) {
      height: $section-height;
    }
  }
  img {
    margin: auto;
    height: 70%;
  }
  .about-text {
    text-align: center;
    font-size: 19px;
    @media (min-width: $bp-md) {
      /* text-align: right; */
    }
    width: 70%;
    margin: auto;
    padding: 70px 0px;
  }
  .center {
    margin: auto;
    text-align: -moz-center;
  }
}
</style>
