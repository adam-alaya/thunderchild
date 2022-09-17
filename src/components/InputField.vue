<template>
  <div class="control columns is-vcentered">
    <label
      for="input"
      class="is-size-5 column is-pulled-left"
      :class="{'is-four-fifths': !wideInput, 'is-half': wideInput}">
        {{ label }}
    </label>
    <input
      class="input is-pulled-right"
      :class="{'is-four-fifths': !wideInput, 'is-half': wideInput}"
      :type="isText ? 'text' : 'number'"
      :placeholder="placeholder"
      id="input"
      name="input"
      @input="$emit('input', $event.target.value)"
      :value="value"
    >
  </div>
</template>

<script>

export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
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
  data() {
    return {
      inputValue: null,
    };
  },
  methods: {},
  watch: {
    selection() {
      this.$emit('OptSelection', this.selection);
    },
    inputValue() {
      this.$emit('input', this.inputValue());
    },
  },
};
</script>
