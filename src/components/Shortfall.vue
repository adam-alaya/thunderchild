<template>
  <div class="section">
    <div class="mb-5" v-if="clientOption === SELECTIONS.OPT_IN">
      <h1 class="mb-1">Adjusted Price</h1>
      <NumberField label="Invoice Amount" :value="totalLessOtherFeesChargesClaimedAmount" />
      <NumberField label="LESS CW Unspent Funds" :value="adjustedPrice" />
      <TotalField class="total-field" label="Adjusted Price" :value="adjustedPrice"  />
    </div>
    <div>
      <h1 class="mb-1">Shortfall</h1>
      <NumberField
        :label="clientOption === SELECTIONS.OPT_OUT ? 'Invoice Amount' : 'Adjusted Price'"
        :value="totalLessOtherFeesChargesClaimedAmount"
      />
      <NumberField label="LESS ITF" :value="invoiceLessItf" />
      <TotalField
        label="Shortfall"
        :value="invoiceLessItf"
        class="total-field"
      />
    </div>
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';
import TotalField from '@/components/TotalField.vue';
import { SELECTIONS } from '@/components/constants';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Shortfall',
  components: {
    TotalField,
    NumberField,
  },
  props: {
    clientOption: {
      type: String,
      default: SELECTIONS.OPT_OUT,
    },
    adjustedPrice: {
      type: Number,
      default: 0,
    },
    totalLessOtherFeesChargesClaimedAmount: {
      type: Number,
      default: null,
    },
    invoiceLessItf: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      SELECTIONS,
    };
  },
};
</script>
