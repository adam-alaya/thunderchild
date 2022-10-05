<template>
  <div class="control is-vcentered">
    <span
      class="column is-pulled-left is-three-quarters"
    >
        {{ label }}
    </span>
    <span
      class="is-pulled-right is-one-quarter pt-3 pr-5"
    >
        {{ value }}
    </span>
  </div>
</template>

<script>

export default {
  name: 'TotalField',
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
