<template>
  <div class="card">
    <div class="columns">
      <label for="ccn" class="column">CCN</label>
      <label for="amount" class="column">Amount</label>
    </div>
    <p v-bind:key="index" v-for="(row, index) in rows" class="columns">
      <input
        class="input is-small is-pulled-right"
        type="text"
        id="ccn"
        name="ccn"
        aria-labelledby="#ccn"
        placeholder="CCN"
        :value="row.ccn"
      />
      <input
        class="input is-small is-pulled-right"
        type="text"
        id="amount"
        name="amount"
        aria-labelledby="#amount"
        placeholder="Amount"
        :value="row.amount"
      />
      <button class="button remove row-button" @click='deleteRow'>
        Remove Row
      </button>
      <button class="button add row-button" @click='addNewRow'>
        Add Row
      </button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'WestpackBpay',
  data() {
    return {
      rows: [{ ccn: 123, name: 'Adam' }, { ccn: 346, name: 'Austing' }],
    };
  },
  methods: {
    addNewRow() {
      const newRow = { ccn: 678, name: 'new row' };
      this.rows = { ...this.rows, newRow };
    },
    deleteRow() {
      if (this.rows.lenth <= 1) {
        return;
      }
      this.rows.pop();
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 40px 40px;
  padding: 30px;
}
.row-button {
  &.add {
    background-color: #31BFA0;
    &:hover {
      background-color: #37c0a3;
      border:2px solid #31BFA0;
    }
  }
  &.remove {
    background-color: #dc146c;
    &:hover {
      background-color: #dc146c;
      border:2px solid #dc146c;
    }
  }
  font-family: 'Fira Sans', sans-serif;
  border-radius: 8px 8px 8px 8px;
  transition: all ease-in-out 0.2s;
  box-shadow: 1px 1px 12px 2px rgba(0,0,0,0.2);
  &:hover {
    transition: all ease-in-out 0.2s;
    box-shadow: 2px 2px 10px 3px rgba(0,0,0,0.3);
    font-size: 1.1em;
  }
}

</style>
