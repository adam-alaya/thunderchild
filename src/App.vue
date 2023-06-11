<template>
<!--  <nav>-->
<!--    <router-link to="/">Home</router-link>-->
<!--  </nav>-->
  <header>
    <div class="logo">
      <span class="logo-left">Thunder</span><span class="logo-right">Child</span>
    </div>
    <div @keydown="toggleDropdown" @click="toggleDropdown" class="app-list">
      <div class="dropdown" :class="{ 'is-active': dropdownActive }">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
            <span>Apps</span>
            <span class="icon is-small"> v </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="/" class="dropdown-item">HCP Payment File</a>
            <a href="#/bpay" class="dropdown-item">Westpac BPay File</a>
          </div>
        </div>
      </div>
    </div>
  </header>

  <router-view class="mb-0" />
</template>
<script>
export default {
  name: 'InputField',
  data() {
    return {
      dropdownActive: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownActive = !this.dropdownActive;
    },
  },
};
</script>
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
  display: inline-block;
  font-family: 'Fira Sans', sans-serif;
  font-size: 2em;
  .logo-left {
    color: $theme-purple;
  }
  .logo-right {
    color: $theme-green;
  }
}
.app-list {
  margin-left: auto;
  margin-right: 100px;
  float: right;
  vertical-align: center;
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
