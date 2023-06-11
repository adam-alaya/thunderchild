<template>
  <div class="card">
    <div class="columns">
      <label
        class="column is-pulled-left is-one-third"
        for="processing-date"
      >
        Processing Date
      </label>
      <input
        class="input is-one-third column"
        type="text"
        aria-labelledby="#processing-date"
        placeholder="20231201"
        v-model="processingDate"
      />
    </div>
    <div class="columns">
      <label for="ccn" class="column">CCN</label>
      <label for="amount" class="column">Amount</label>
      <label for="bpay-number" class="column">BPAY Receipt Number</label>
    </div>
    <p :key="row.id" v-for="row in rows" class="columns">
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#ccn"
        placeholder="CCN"
        v-model="row.ccn"
      />
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#amount"
        placeholder="Amount"
        v-model="row.amount"
      />
      <input
        class="input is-small is-pulled-right"
        type="text"
        aria-labelledby="#bpay-number"
        placeholder="BPAY Receipt Number"
        v-model="row.bpay"
      />
      <button class="button remove row-button" @click='() => deleteRow(row.id)'>
        Remove Row
      </button>
    </p>
      <button class="button add row-button" @click.stop='addNewRow'>
        Add Row
      </button>
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
      rowCount: 1,
      rows: [
        {
          id: 1,
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
        record += `${row.ccn}`.padStart(29, ' '); // crn
        record += 'B'; // Payment type
        record += `${row.amount}`.padStart(11, '0'); // Bill Amount
        record += 'IB'; // Type BPAY
        record += ' '.repeat(8); // TIDD receipt number
        record += ' '.repeat(16); // Voucher Trace Number
        record += `${row.bpay}`.padStart(21, ' '); // BPAY Reciept Number
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
      const blob = new Blob([this.formattedRows], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = `${this.processingDate} Westpac BPay Test File.txt`;
      link.href = window.URL.createObjectURL(blob);
      link.click();
    },
    addNewRow() {
      this.rowCount += 1;
      const newRow = {
        id: this.rowCount,
        date: '',
        ccn: null,
        amount: null,
        bpay: '',
      };
      this.rows.push(newRow);
    },
    deleteRow(rowId) {
      this.rows = this.rows.filter((item) => item.id !== rowId);
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
