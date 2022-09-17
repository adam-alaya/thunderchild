<template>
  <div class="control columns is-vcentered p-0 m-0">
    <label
      for="input"
      class="is-size-6 column is-pulled-left"
      :class="{'is-four-fifths': !wideInput, 'is-half': wideInput}">
        {{ label }}
    </label>
    <input
      class="input is-small is-pulled-right p-1 m-0"
      :class="{'is-four-fifths': !wideInput, 'is-half': wideInput}"
      type="number"
      :placeholder="placeholder"
      id="input"
      name="input"
      @input="$emit('update:value', $event.target.value)"
      :value="value"
    >
  </div>
</template>

<script>

export default {
  name: 'NumberInputField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    isText: {
      type: Boolean,
      default: false,
    },
    wideInput: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped>
.active {
  background-color: hsl(204, 86%, 53%);
  color: hsl(0, 0%, 96%);
}
</style>
