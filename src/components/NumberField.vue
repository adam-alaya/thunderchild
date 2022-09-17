<template>
  <div class="control columns is-vcentered m-0 p-0">
    <span
      class="is-size-6 column mr-2 is-pulled-left is-four-fifths p-0"
    >
        {{ label }}
    </span>
    <span
      class="input is-pulled-right is-one-fifth is-size-6 is-small p-0 m-0 "
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
