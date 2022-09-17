<template>
  <div class="is-one-quarter column">
    <div class="is-size-4 mb-1">Closing Balances</div>
    <NumberField label="Home Care Account" :value="homeCareClosing" />
    <NumberField label="CR Unspent Funds" :value="crUnspentClosing" />
    <NumberField label="CW Unspent Funds" :value="cwUnspentClosing" />
    <NumberField label="Pre 1st July 2015 Unspent Funds" :value="pre2015UnspentClosing" />
    <NumberField label="Overspend" :value="overspendClosing" />
  </div>
</template>
<script>
import NumberField from '@/components/NumberField.vue';

export default {
// eslint-disable-next-line vue/multi-word-component-names
  name: 'Closing-Balances',
  components: {
    NumberField,
  },
  props: {
    homeCareClosing: {
      type: Number,
      default: null,
    },
    crUnspentClosing: {
      type: Number,
      default: null,
    },
    cwUnspentClosing: {
      type: Number,
      default: null,
    },
    pre2015UnspentClosing: {
      type: Number,
      default: null,
    },
    overspendClosing: {
      type: Number,
      default: null,
    },
  },
};
</script>
