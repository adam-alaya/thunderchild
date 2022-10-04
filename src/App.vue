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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
footer {
  background-color: #2c3e50;
}
.logo {
  font-family: 'Fira Sans', sans-serif;
  font-size: 2em;
  .logo-left {
    color: #483D8B;
  }
  .logo-right {
    color: #31BFA0;
  }
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
