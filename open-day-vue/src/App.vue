<template>
  <div id="app">
    <vue-navigation-bar :options="navbarOptions" />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        mobileBreakpoint: 768,
        brandImagePath: 'https://www.niser.ac.in',
        brandImage: require('@/assets/niser-logo-light.png'),
        brandImageAltText: 'NISER',
        collapseButtonOpenColor: '#fff',
        collapseButtonCloseColor: '#fff',
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [],
        menuOptionsRight: [
          {
            type: 'link',
            text: 'Home',
            path: '#/',
          },
          {
            type: 'link',
            text: 'Schedule',
            path: '#/schedule/',
          },
          {
            type: 'link',
            text: 'Contact',
            path: '#/contact/'
          },
          {
            type: 'link',
            text: 'Organisers',
            path: '#/team/'
          },
          {
            type: 'link',
            text: 'COVID-19',
            path: 'https://www.niser.ac.in/COVID/',
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
* {
  box-sizing: border-box;
}
html {
  overflow-x: hidden;
  padding: 0px;
  margin: 0px;
}
body {
  overflow-x: hidden;
  padding: 0px;
  margin: 0px;
  scroll-behavior: smooth;
  font-family: 'roboto';
}

footer {
  height: 30vh;
  background: $green;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
