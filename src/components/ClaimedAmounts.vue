<template>
  <div class="section">
    <h1 class="mb-1">Claimed Amounts</h1>
    <NumberField label="Care and Services Total" :value=expensesTotal />
    <NumberField label="LESS BDF" :value="totalLessBdfClaimedAmount" />
    <NumberField
      label="LESS Other Fees and Charges"
      :value=totalLessOtherFeesChargesClaimedAmount
    />
    <TotalField
      class="total-field"
      label="Invoice Amount"
      :value="totalLessOtherFeesChargesClaimedAmount"
    />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';
import TotalField from '@/components/TotalField.vue';

export default {
  name: 'Claimed-Amounts',
  components: {
    NumberField,
    TotalField,
  },
  props: {
    expensesTotal: {
      type: Number,
      default: null,
    },
    totalLessBdfClaimedAmount: {
      type: Number,
      default: null,
    },
    totalLessOtherFeesChargesClaimedAmount: {
      type: Number,
      default: null,
    },
  },
};
</script>
