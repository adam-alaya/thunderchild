<template>
  <div class="is-one-quarter column">
    <div class="is-size-4 mb-1">Shortfall</div>
    <NumberField label="Invoice Amount" :value="totalLessOtherFeesChargesClaimedAmount" />
    <NumberField label="LESS ITF" :value="invoiceLessItf" />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Shortfall',
  components: {
    NumberField,
  },
  props: {
    totalLessOtherFeesChargesClaimedAmount: {
      type: Number,
      default: null,
    },
    invoiceLessItf: {
      type: Number,
      default: null,
    },
  },
};
</script>
