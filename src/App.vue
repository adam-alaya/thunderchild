<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link>-->
<!--  </nav>-->
  <header>
    <div class="logo">
      <span class="logo-left">Thunder</span><span class="logo-right">Child</span>
    </div>
  </header>

  <router-view class="mb-0" />
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,600&display=swap');

$theme-green: #31BFA0;
$theme-purple: #483D8B;
$highlight-grey: #D9D9D9;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
footer {
  background-color: #2c3e50;
}
body {
  line-height: 1.2em !important;
}
input {
  padding: 3px !important;
}
.logo {
  font-family: 'Fira Sans', sans-serif;
  font-size: 2em;
  .logo-left {
    color: $theme-purple;
  }
  .logo-right {
    color: $theme-green;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $theme-green;
    }
  }
}
</style>
