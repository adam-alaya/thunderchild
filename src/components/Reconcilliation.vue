<template>
  <div class="section">
    <h1 class="mb-1">Reconciliation</h1>
    <NumberField label="Total AR" :value="expensesTotal" />
    <NumberField label="Payment Determination" :value="paymentDetermination" />
    <NumberField label="Deduct CR Unspent" :value="totalLessCrUnspent" />
    <NumberField label="Deduct CW Unspent" :value="totalLessCwUnspent" />
    <NumberField label="Deduct Pre 2015 Unspent" :value="totalLessPre2015" />
    <TotalField class="total-field" label="Balance Owing" :value="totalOwing" />

  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';
import TotalField from '@/components/TotalField.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reconciliation',
  components: {
    NumberField,
    TotalField,
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
