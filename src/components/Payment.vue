<template>
  <div class="section">
    <h1 class="mb-1">Payment</h1>
    <NumberField label="Max Govt Contribution" :value="maxGovContribution" />
    <NumberField label="Shortfall" :value="invoiceLessItf" />
    <NumberField label="Payment Determination to Provider" :value="paymentDetermination" />
    <TotalField
      class="total-field"
      label="Payment Determination"
      :value="paymentDetermination"
    />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';
import TotalField from '@/components/TotalField.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Payment',
  components: {
    NumberField,
    TotalField,
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
