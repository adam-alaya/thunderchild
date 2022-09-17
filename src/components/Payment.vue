<template>
  <div class="is-one-quarter column">
    <div class="is-size-4 mb-1">Payment</div>
    <NumberField label="Max Govt Contribution" :value="maxGovContribution" />
    <NumberField label="Shortfall" :value="invoiceLessItf" />
    <NumberField label="Payment Determination to Provider" :value="paymentDetermination" />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Payment',
  components: {
    NumberField,
  },
  props: {
    maxGovContribution: {
      type: Number,
      default: null,
    },
    invoiceLessItf: {
      type: Number,
      default: null,
    },
    paymentDetermination: {
      type: Number,
      default: null,
    },
  },
};
</script>
