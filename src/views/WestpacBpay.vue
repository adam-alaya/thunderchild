<template>
  <div>
    <p v-bind:key="row" v-for="row in rows">
     Westpack!

      {{row}}
      <button v-key="row" class="button download-button">
        Download
    </button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'WestpackBpay',
  data() {
    return {
      rows: [1, 23, 3],
    };
  },
};
</script>
<style lang="scss" scoped>
$accentcolor: #fff;
$lightcolor: #fff;
$darkcolor: #444;

.options {
  position: relative;
}

.download-button {
  font-family: 'Fira Sans', sans-serif;;
  background-color: #31BFA0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 8px 8px;
  transition: all ease-in-out 0.2s;
  box-shadow: 1px 1px 12px 2px rgba(0,0,0,0.2);
  &:hover {
    transition: all ease-in-out 0.2s;
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.3);
    background-color: #37c0a3;
    border:2px solid #31BFA0;
    font-size: 1.1em;
  }
}

</style>
