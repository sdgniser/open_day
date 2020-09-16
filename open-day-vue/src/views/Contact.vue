<template>
  <section id="contact">
    <figure class="background-container">
      <img src="../assets/contact.jpg" class="background" />
    </figure>
    <div class="article">
      <h1>Contact</h1>
      <p>
        <b>Dr. Debasmita Pankaj Alone</b
        ><br />9937191241<br />debasmita@niser.ac.in
      </p>
      <p><b>Akshay Priyadarshani</b><br />7788992679<br />akshay.priyadarshani@niser.ac.in</p>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  name: 'Contact',
};
</script>
<style scoped lang="scss">
section {
  height: $section-height;
  @media (max-width: $bp-lg) {
    height: $section-height * 0.7;
  }
}
.background-container {
  padding: 0px;
  margin: 0px;
  height: $section-height;
  @media (max-width: $bp-lg) {
    height: $section-height * 0.7;
  }
  z-index: -2;
  position: absolute;
  .background {
    object-fit: cover;
    width: 100vw;
  }
}
.article {
  h1 {
    font-size: 26px;
  }
  padding: 10vh 0vw 0vh 60vw;
  @media (max-width: $bp-lg) {
    padding: 20vh 0vw 0vh 30vw;
  }
}
</style>
