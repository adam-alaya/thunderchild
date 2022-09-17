<template>
  <div class="control columns is-vcentered horizontal-rule m-0 pt-0 pb-0">
    <span
      class="is-size-6 column mr-2 is-pulled-left is-four-fifths"
    >
        {{ label }}
    </span>
    <span
      class="input is-small is-pulled-right is-one-fifth"
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
.horizontal-rule {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.input {
  border: 0;
}
</style>
