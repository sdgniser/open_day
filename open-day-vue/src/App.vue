<template>
  <div id="app">
    <nav id="nav">
      <img src="./assets/niser-logo-light.png" class="logo" />
      <ul class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/schedule">Schedule</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/team">Organisers</router-link>
        <a href="/covid">COVID-19</a>
      </ul>
    </nav>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <footer></footer>
  </div>
</template>

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

#nav {
  height: $nav-bar-height;
  width: 100vw;
  background: #4e53a3;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  align-items: center;
  .nav-links {
    margin-top: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    margin-right: 20px;
  }
  .logo {
    margin: 0;
    margin-left: 30px;
    position: absolute;
    text-decoration: none;
    height: $nav-bar-height;
  }

  a {
    font-weight: bold;
    color: #ffffff;
    margin: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #aaa;
    }
  }
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
