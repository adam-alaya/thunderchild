<template>
  <div class="card">
    <div class="columns">
      <label for="processing-date" class="column">Processing Date</label>
      <label for="ccn" class="column">CCN</label>
      <label for="amount" class="column">Amount</label>
      <label for="bpay-number" class="column">BPAY Receipt Number</label>
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#processing-date"
        placeholder="20231201"
        :value="processingDate"
      />
    </div>
    <p v-bind:key="index" v-for="(row, index) in rows" class="columns">
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#ccn"
        placeholder="CCN"
        :value="row.ccn"
      />
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#amount"
        placeholder="Amount"
        :value="row.amount"
      />
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#bpay-number"
        placeholder="BPAY Receipt Number"
        :value="row.bpay"
      />
      <button class="button remove row-button" @click='deleteRow'>
        Remove Row
      </button>
      <button class="button add row-button" @click='addNewRow'>
        Add Row
      </button>
    </p>
      <button class="button add row-button" @click='downloadFile'>
        Download File
      </button>
  </div>
</template>
<script>
export default {
  name: 'WestpackBpay',
  data() {
    return {
      processingDate: '',
      rows: [
        {
          date: '',
          ccn: null,
          amount: null,
          bpay: '',
        },
      ],
    };
  },
  computed: {
    formattedRows() {
      let header = '0'; // record number
      header += '12345'; // RECall number
      header += 'THISISATESTFILE             '; // Biller Name
      header += '2'; // Entry state
      header += '123456'; // BSB
      header += '123456'; // Acc Number
      header += '00000'; // Unit charge
      header += this.processingDate; // Processing Date
      header += ' '.repeat(140); // Filler
      header += ' '.repeat(200); // Filler

      let footer = '9'; // record type
      footer += '0'.repeat(9); // No of Credit Transactions
      footer += '0'.repeat(9); // No of reversal transactions
      footer += '0'.repeat(15); // total bill amount credited
      footer += '0'.repeat(15); // total bill amount reversed
      footer += '0'.repeat(15); // concession amount credited
      footer += '0'.repeat(15); // concession amount reversed
      footer += '0'.repeat(15); // total commision amount charged
      footer += '0'.repeat(15); // total commision amount reimbursed
      footer += ' '.repeat(91); // filler
      footer += ' '.repeat(200); // filler

      const payments = [];
      this.rows.forEach((row) => {
        let record = '1'; // record type
        record += `${row.crn}`.padStart(29, ' '); // crn
        record += 'B'; // Payment type
        record += `${row.amount}`.padStart(11, '0'); // Bill Amount
        record += 'IB'; // Type BPAY
        record += ' '.repeat(8); // TIDD receipt number
        record += ' '.repeat(16); // Voucher Trace Number
        record += row.bpay; // BPAY Reciept Number
        record += '9301'; // Transaction Type
        record += '000'; // Transcaction Sequence Number
        record += ' '.repeat(16); // Debit Information
        record += ' '.repeat(68); // Debit Count
        record += ' '.repeat(20); // Filler
        record += ' '.repeat(400); // Filler
        payments.push(record);
      });

      return `${header}\n${payments.join('\n')}\n${footer}`;
    },
  },
  methods: {
    downloadFile() {
      console.log(this.formattedRows);
    },
    addNewRow() {
      const newRow = {
        date: '',
        ccn: null,
        amount: null,
        bpay: '',
      };
      this.rows.push(newRow);
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
