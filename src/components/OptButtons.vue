<template>
  <button
    :class="{active: selection===SELECTIONS.OPT_IN}"
    @click="setOptIn"
    class="button">
      Opt In
  </button>
  <button
    :class="{active: selection===SELECTIONS.OPT_OUT}"
    @click="setOptOut"
    class="button">
      Opt Out
  </button>
</template>

<script>
import { SELECTIONS } from '@/components/constants';

export default {
  name: 'OptionButtons',
  props: {},
  data() {
    return {
      SELECTIONS,
      selection: SELECTIONS.OPT_OUT,
    };
  },
  methods: {
    setOptIn() {
      this.selection = SELECTIONS.OPT_IN;
    },
    setOptOut() {
      this.selection = SELECTIONS.OPT_OUT;
    },
  },
  watch: {
    selection() {
      this.$emit('OptSelection', this.selection);
    },
  },
};
</script>
<style scoped>
.active {
  background-color: hsl(204, 86%, 53%);
  color: hsl(0, 0%, 96%);
}
</style>
