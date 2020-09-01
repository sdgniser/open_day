<template>
  <div id="app">
    <nav id="nav">
      <img src="./assets/niser-logo-light.png" class="logo">
      <ul class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/schedule">Schedule</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/covid">COVID-19</router-link>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  overflow-x: hidden;
  padding: 0px;
  margin: 0px;
}

$nav-bar-height: 60px;
#nav {
  height: $nav-bar-height;
  width: 100vw;
  text-align: right;
  background: #4e53a3;
  .nav-links {
    display: inline-block;
  }
  .logo {
    position: absolute;
    height: $nav-bar-height;
    align: left;
  }

  a {
    font-weight: bold;
    color: #ffffff;
    padding: 20px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #aaa;
    }
  }
}
</style>
