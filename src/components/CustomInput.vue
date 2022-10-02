<template>
  <div class="control is-vcentered">
      <input
        v-if="!isDate"
        name="input"
        id="input"
        :type="isText ? 'text' : 'number'"
        @input="$emit('input', $event.target.value)"
        :value="value"
        required
      >
      <input
        v-else
        name="input"
        id="input"
        type="text"
        @input="$emit('input', $event.target.value)"
        :value="value"
        required
        onfocus="this.type='month'"
      >
      <label for="input">{{ label }}</label>
      <span class="line"></span>
  </div>
</template>

<script>

export default {
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      required: true,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    isDate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
input[type="date"]:not(.has-value):before{
  content: '';
}
.control {
  width: 80%;
  position: relative;
  margin: 5px;
  overflow: hidden;
  padding-top: 15px;
}
.control input {
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  z-index: 5;
  background: none;
}
.control input:focus ~ label, input:valid ~ label  {
  top: 0px;
  transform: scale(0.94) translateX(-2px);
  color: #333;
}
.control .line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3px;
  background: #31BFA0;
  left: -999px;
  transition: .25s;
  opacity: 0;
  z-index: 6;
}
.control input:focus ~ .line {
  left: 0;
  opacity: 1;
}
.control label {
  position: absolute;
  left: 10px;
  top: 45%;
  transition: ease-out .15s;
  color: #999;
}
</style>
