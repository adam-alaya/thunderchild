<template>
  <div class="home columns">
    <!--    <div class="mt-0 columns">-->
    <!--      <OptionButtons @optSelection="optSelectionChange" class="is-pulled-right"/>-->
    <!--    </div>-->
    <div class="column is-one-fifth">
      <OptionsBox
      @download="downloadPaymentFile"
      @optSelector="optSelectionChange"
      />
    </div>
    <div class="column is-four-fifths">
      <div class="columns">
        <div class="column is-one-third section">
          <h1 class="mb-1">Opening Balances</h1>
          <NumberInputField
            @input="(ev)=> this.commonwealthBalance = parseFloat(ev.target.value)"
            label="Commonwealth Balance"
            :value="commonwealthBalance"
          />
          <NumberInputField
            @input="(ev)=> this.careRecipientBalance = parseFloat(ev.target.value)"
            label="Care Recipient Balance"
            :value="careRecipientBalance"
          />
          <NumberInputField
            @input="(ev)=> this.pre2015Balance = parseFloat(ev.target.value)"
            label="Pre 2015"
            :value="pre2015Balance"
          />
          <NumberInputField
            label="Home Care Account Balance"
            :value="hcaBalance"
            @input="(ev)=> this.hcaBalance = parseFloat(ev.target.value)"
          />
          <TotalField
            class="total-field"
            label="Opening Balances Total"
            :value="openingBalancesTotal"
          />

        </div>
        <div class="column is-one-third section">
          <h1>Package Incomes</h1>
          <NumberInputField
            label="Subsidy"
            :value="subsidyIncome"
            @input="(ev)=> this.subsidyIncome = parseFloat(ev.target.value)"
          />
          <NumberInputField
            label="Supplements"
            :value="supplementIncome"
            @input="(ev)=> this.supplementIncome = parseFloat(ev.target.value)"
          />
          <NumberInputField
            label="BDF"
            :value="bdfIncome"
            @input="(ev)=> this.bdfIncome = parseFloat(ev.target.value)"
          />
          <NumberInputField
            label="ITF"
            :value="itfIncome"
            @input="(ev)=> this.itfIncome = parseFloat(ev.target.value)"
          />
          <NumberInputField
            label="Other Fees and Charges"
            :value="feeChargesIncome"
            @input="(ev)=> this.feeChargesIncome = parseFloat(ev.target.value)"
          />
          <TotalField
            class="total-field"
            label="Package Income Total"
            :value="packageIncomeTotal"
          />
        </div>
        <div class="column is-one-third section">
          <h1 class="mb-1">Expenses</h1>
          <NumberInputField
            label="Care and Services Total"
            :value="careServicesTotal"
            @input="(ev)=> this.careServicesTotal = parseFloat(ev.target.value)"
          />
          <TotalField class="total-field" label="Expenses Total" :value="expensesTotal"/>

        </div>
      </div>
      <div class="columns">
        <ClaimedAmounts
          class="column is-one-third"
          :expenses-total="expensesTotal"
          :total-less-other-fees-charges-claimed-amount="totalLessOtherFeesChargesClaimedAmount"
          :total-less-bdf-claimed-amount="totalLessBdfClaimedAmount"
        />
        <Shortfall
          class="column is-one-third"
          :adjusted-price="adjustedPrice"
          :client-option="optSelection"
          :total-less-other-fees-charges-claimed-amount="totalLessOtherFeesChargesClaimedAmount"
          :invoice-less-itf="invoiceLessItf"
        />
        <Payment
          class="column is-one-third"
          :invoice-less-itf="invoiceLessItf"
          :max-gov-contribution="maxGovContribution"
          :payment-determination="paymentDetermination"
        />
      </div>
      <div class="columns column">
        <Reconciliation
          class="column is-one-third"
          :payment-determination="paymentDetermination"
          :expenses-total="expensesTotal"
          :total-less-cr-unspent="totalLessCrUnspent"
          :total-less-cw-unspent="totalLessCwUnspent"
          :total-less-pre2015="totalLessPre2015"
        />
        <ClosingBalances
          class="column is-one-third"
          :cr-unspent-closing="crUnspentClosing"
          :cw-unspent-closing="cwUnspentClosing"
          :home-care-closing="homeCareClosing"
          :overspend-closing="overspendClosing"
          :pre2015-unspent-closing="pre2015UnspentClosing"
          :total-closing="totalClosing"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OptionsBox from '@/components/OptionsBox.vue';
import NumberInputField from '@/components/NumberInputField.vue';
import TotalField from '@/components/TotalField.vue';
import { SELECTIONS } from '@/components/constants';

import '@vuepic/vue-datepicker/dist/main.css';
import Shortfall from '@/components/Shortfall.vue';
import Payment from '@/components/Payment.vue';
import Reconciliation from '@/components/Reconcilliation.vue';
import ClosingBalances from '@/components/ClosingBalances.vue';
import ClaimedAmounts from '@/components/ClaimedAmounts.vue';
import baseFile from '@/components/paymentfile';

export default {
  name: 'HomeView',
  components: {
    ClaimedAmounts,
    ClosingBalances,
    Reconciliation,
    OptionsBox,
    NumberInputField,
    TotalField,
    Shortfall,
    Payment,
  },
  data() {
    return {
      SELECTIONS,
      optSelection: SELECTIONS.OPT_OUT,
      // Opening Balances
      commonwealthBalance: null,
      careRecipientBalance: null,
      pre2015Balance: null,
      hcaBalance: null,
      // Package Income
      subsidyIncome: null,
      supplementIncome: null,
      bdfIncome: null,
      itfIncome: null,
      feeChargesIncome: null,
      careServicesTotal: null,
    };
  },
  methods: {
    optSelectionChange(option) {
      this.optSelection = option;
    },
    downloadPaymentFile(downloadData) {
      debugger;
      const [year, month] = downloadData.claimDate ? downloadData.claimDate.split('-') : ['', ''];
      const monthYear = `${month}${year}`;
      const client = downloadData.clientName ?? '';
      const data = {
        hca: this.homeCareClosing,
        claimEntitlement: this.paymentDetermination,
        previousHca: this.hcaBalance,
        maxContribution: this.maxGovContribution,
        invoiceAmount: this.totalLessOtherFeesChargesClaimedAmount,
        cwUnspent: this.cwUnspentClosing,
        itfReduction: this.itfIncome,
        paymentDetermination: this.paymentDetermination,
        changeInHca: this.homeCareClosing - this.hcaBalance,
        shortfall: this.invoiceLessItf,
      };
      const file = baseFile(client, downloadData.clientId, monthYear, data);
      const blob = new Blob([file], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = `${client} ${downloadData.claimDate} Payment File.xml`;
      link.href = window.URL.createObjectURL(blob);
      link.click();
    },
  },
  computed: {
    adjustedPrice() {
      const commonwealthBalance = this.commonwealthBalance || 0;
      return this.totalLessBdfClaimedAmount < commonwealthBalance ? 0
        : this.totalLessBdfClaimedAmount - commonwealthBalance;
    },
    openingBalancesTotal() {
      return (
        (this.commonwealthBalance || 0)
        + (this.careRecipientBalance || 0)
        + (this.pre2015Balance || 0)
        + (this.hcaBalance || 0)
      );
    },
    packageIncomeTotal() {
      return (
        (this.subsidyIncome || 0)
        + (this.supplementIncome || 0)
        + (this.bdfIncome || 0)
        + (this.itfIncome || 0)
        + (this.feeChargesIncome || 0)
      );
    },
    expensesTotal() {
      return this.careServicesTotal || 0;
    },
    totalLessBdfClaimedAmount() {
      const careLessbdf = (this.careServicesTotal - this.bdfIncome) || 0;
      return careLessbdf < 0 ? 0 : careLessbdf;
    },
    totalLessOtherFeesChargesClaimedAmount() {
      if (this.optSelection === SELECTIONS.OPT_IN) {
        return this.adjustedPrice - (this.feeChargesIncome || 0);
      }

      const totalLessFees = (this.totalLessBdfClaimedAmount - this.feeChargesIncome) || 0;
      return totalLessFees < 0 ? 0 : totalLessFees;
    },
    invoiceLessItf() {
      const totalLessItf = this.totalLessOtherFeesChargesClaimedAmount - (this.itfIncome || 0);
      return totalLessItf < 0 ? 0 : totalLessItf;
    },
    maxGovContribution() {
      if (this.optSelection === SELECTIONS.OPT_IN) {
        return this.subsidyIncome + this.supplementIncome;
      }
      return (
        (this.hcaBalance || 0)
        + (this.subsidyIncome || 0)
        + (this.supplementIncome || 0)
      );
    },
    paymentDetermination() {
      return Math.min(this.invoiceLessItf, this.maxGovContribution);
    },
    totalLessCrUnspent() {
      const b5 = (this.careRecipientBalance || 0)
        + (this.bdfIncome || 0)
        + (this.itfIncome || 0)
        + (this.feeChargesIncome || 0);
      const f4 = this.expensesTotal - this.paymentDetermination;
      return Math.min(b5, f4);
    },
    totalLessCwUnspent() {
      const commonwealthOpening = this.commonwealthBalance || 0;
      const adjustedValue = this.totalLessCrUnspent < commonwealthOpening ? 0
        : this.totalLessCrUnspent - commonwealthOpening;
      const adjustedCwUnspent = this.optSelection === SELECTIONS.OPT_IN
        ? adjustedValue : this.totalLessCrUnspent;

      return Math.min(commonwealthOpening, adjustedCwUnspent);
    },
    totalLessPre2015() {
      const tot = (
        this.expensesTotal
        - this.paymentDetermination
        - this.totalLessCrUnspent
        - this.totalLessCwUnspent
      );
      const pre2015 = this.pre2015Balance || 0;
      return Math.min(pre2015, tot);
    },
    totalOwing() {
      return (
        this.expensesTotal
        - this.paymentDetermination
        - this.totalLessCrUnspent
        - this.totalLessCwUnspent
        - this.totalLessPre2015
      );
    },
    homeCareClosing() {
      return (
        (this.hcaBalance || 0)
        + (this.subsidyIncome || 0)
        + (this.supplementIncome || 0)
        - this.paymentDetermination
      );
    },
    crUnspentClosing() {
      return (
        (this.careRecipientBalance || 0)
        + (this.bdfIncome || 0)
        + (this.itfIncome || 0)
        + (this.feeChargesIncome || 0)
        - this.totalLessCrUnspent
      );
    },
    cwUnspentClosing() {
      return (this.commonwealthBalance || 0) - this.totalLessCwUnspent;
    },
    pre2015UnspentClosing() {
      return (this.pre2015Balance || 0) - this.totalLessPre2015;
    },
    overspendClosing() {
      return 0 - this.totalOwing;
    },
    totalClosing() {
      return (
        this.homeCareClosing
        + this.crUnspentClosing
        + this.cwUnspentClosing
        + this.pre2015UnspentClosing
        + this.overspendClosing
      );
    },
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@1,600&display=swap');
// For Testing
@mixin random-bgr() {
  background: rgb(random(255), random(255), random(255));
}

//.column {
//  @for $i from 0 to 6 {
//    &:nth-child(#{$i}) {
//      @include random-bgr();
//    }
//  }
//}

#app {
  height: 100vh;
  background-color: #D9D9D9;
}

header {
  background-color: #fff;
  width: 100vw;
  padding: 20px !important;
}

.home {
  padding: 0 5%;
  background-color: #D9D9D9;
  padding-top: 20px !important;
}

.column {
  padding-top: 0;
  padding-bottom: 0;
}

label.column {
  padding: 0.4em;
}

.columns:not(:last-child) {
  margin-bottom: 0;
}

.section {
  background-color: #fff;
  border-radius: 8px;
  margin: 10px 10px;
  padding: 0 !important;
  height: 300px;
  box-shadow: 2px 2px 12px 2px rgb(30 30 30 / 0.2);
  position: relative;
  &.options {
    height: 550px;
  }
  * {
    text-align: left;
  }

  h1 {
    padding: 10px !important;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    font-family: 'Fira Sans', sans-serif;
  }

  .total-field {
    padding: 1px !important;
    background-color: #D9D9D9;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-radius: 0 0 8px 8px;
  }

  .number-field {
    padding: 3px 10px !important;

    input {
      border: none;
    }
  }
}
</style>
