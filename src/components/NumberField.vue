<template>
  <div class="control columns is-vcentered m-0">
    <span
      class="is-size-5 column mr-2 is-pulled-left is-four-fifths"
    >
        {{ label }}
    </span>
    <span
      class="input is-pulled-right is-one-fifth"
    >
        {{ value }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'InputField',
  props: {
    label: {
      type: String,
      default: 'Total',
    },
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.input {
  border: 0;
}
</style>
