<template>
  <div class="is-one-quarter column">
    <div class="is-size-4 mb-1">Reconciliation</div>
    <NumberField label="Total AR" :value="expensesTotal" />
    <NumberField label="Payment Determination" :value="paymentDetermination" />
    <NumberField label="Deduct CR Unspent" :value="totalLessCrUnspent" />
    <NumberField label="Deduct CW Unspent" :value="totalLessCwUnspent" />
    <NumberField label="Deduct Pre 2015 Unspent" :value="totalLessPre2015" />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reconciliation',
  components: {
    NumberField,
  },
  props: {
    totalLessPre2015: {
      type: Number,
      default: null,
    },
    totalLessCwUnspent: {
      type: Number,
      default: null,
    },
    expensesTotal: {
      type: Number,
      default: null,
    },
    totalLessCrUnspent: {
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
