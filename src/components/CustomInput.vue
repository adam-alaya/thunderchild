<template>
  <div class="control is-vcentered">
      <input
        v-if="!isDate && !isTextarea"
        :name="inputId"
        :id="inputId"
        :type="isText ? 'text' : 'number'"
        @input="$emit('input', $event.target.value)"
        :value="value"
        required
      >
      <div class="text m-0" v-else-if="isTextarea">
        <textarea
          :id="inputId"
          :name="inputId"
          rows="10"
          cols="30"
          @input="$emit('input', $event.target.value)"
          :value="value"
          required
        />
        <label :for="inputId">{{ label }}</label>
      </div>
      <input
        v-else
        :name="inputId"
        :id="inputId"
        type="text"
        @input="$emit('input', $event.target.value)"
        :value="value"
        required
        onfocus="this.type='month'"
      >
      <label v-if="!isTextarea" :for="inputId">{{ label }}</label>

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
    isTextarea: {
      type: Boolean,
      default: false,
    },
    inputId: {
      type: String,
      default: 'input',
    },
    isDate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
input[type="date"]:not(.has-value):before{
  content: '';
}

.text {
  margin: 10px;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 15px;
  textarea {
    width: 100% !important;
    padding: 10px;
    border: none;
    outline: none;
    border: 1px solid #999;
    box-sizing: border-box;
    font-size: 16px;
    position: relative;
    z-index: 5;
    background: none;
  }

  label {
    position: absolute;
    top: 20px;
    left: 10px;
    color: #999;
    opacity: 1;
    transition: .15s;
  }
  textarea:focus ~ label, textarea:valid ~ label {
    opacity: 0;
  }
}

.control {
  width: 80%;
  position: relative;
  margin: 5px;
  overflow: hidden;
  padding-top: 15px;

  input {
    width: 90%;
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

  input:focus ~ label, input:valid ~ label {
    top: 0px;
    transform: scale(0.94) translateX(-2px);
    color: #333;
  }

  .line {
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

  input:focus ~ .line {
    left: 0;
    opacity: 1;
  }

  label {
    position: absolute;
    left: 10px;
    top: 45%;
    transition: ease-out .15s;
    color: #999;
  }
}
</style>
