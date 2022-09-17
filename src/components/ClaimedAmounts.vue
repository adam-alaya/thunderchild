<template>
  <div class="is-one-quarter column">
    <div class="is-size-4 mb-1">Claimed Amounts</div>
    <NumberField label="Care and Services Total" :value=expensesTotal />
    <NumberField label="LESS BDF" :value="totalLessBdfClaimedAmount" />
    <NumberField
      label="LESS Other Fees and Charges"
      :value=totalLessOtherFeesChargesClaimedAmount
    />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';

export default {
  name: 'Claimed-Amounts',
  components: {
    NumberField,
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
