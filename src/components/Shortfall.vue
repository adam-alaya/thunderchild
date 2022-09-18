<template>
  <div class="is-one-quarter column">
    <div class="mb-5" v-if="clientOption === SELECTIONS.OPT_IN">
      <div class="is-size-4 mb-1">Adjusted Price</div>
      <NumberField label="Invoice Amount" :value="totalLessOtherFeesChargesClaimedAmount" />
      <NumberField label="LESS CW Unspent Funds" :value="adjustedPrice" />
      <TotalField label="Adjusted Price" :value="adjustedPrice"  />
    </div>
    <div>
      <div class="is-size-4 mb-1">Shortfall</div>
      <NumberField
        :label="clientOption === SELECTIONS.OPT_OUT ? 'Invoice Amount' : 'Adjusted Price'"
        :value="totalLessOtherFeesChargesClaimedAmount"
      />
      <NumberField label="LESS ITF" :value="invoiceLessItf" />
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
