<template>
  <div class="home">
    <OptionButtons @OptSelection="OptSelectionChange" class="is-pulled-left"/>
    <div class="columns mt-0">
      <div class="column is-one-third is-vcentered">
        <label
          for="datepicker"
          class="is-half is-size-5 is-pulled-left is-vcentered"
        >
          Claim Date
        </label>
        <datepicker
          name="datepicker"
          class="is-pulled-left is-half"
          :config="{ dateFormat: 'd-m-Y', static: true }"></datepicker>
      </div>
      <div class="column is-one-third">
        <InputField
          label="Client Name"
          wide-input
          is-text
          placeholder="Jessie James"
          :value="clientName"
          @input="(ev)=> this.clientName = ev.target.value"
        />
      </div>
      <div class="column is-one-third">
        <NumberInputField
          label="Client ID"
          wide-input
          @input="(ev)=> this.clientId = parseFloat(ev.target.value)"
          placeholder="123456789"
          :value="clientId"
        />
      </div>
    </div>
    <div class="columns mt-3">
      <div class="column is-one-quarter">
        <div class="is-size-3 mb-1">Opening Balances</div>
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
      </div>
      <div class="column is-one-quarter">
        <div class="is-size-3 mb-1">Package Incomes</div>
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
      </div>
      <div class="column is-one-quarter">
        <div class="is-size-3 mb-1">Expenses</div>
        <NumberInputField
          label="Care and Services Total"
          :value="careServicesTotal"
          @input="(ev)=> this.careServicesTotal = parseFloat(ev.target.value)"
        />
      </div>
      <div class="is-one-quarter column">
        <div class="is-size-3 mb-1">Claimed Amounts</div>
        <NumberField label="Care and Services Total" :value=expensesTotal />
        <NumberField label="LESS BDF" :value=totalLessBdfClaimedAmount />
        <NumberField
          label="LESS Other Fees and Charges"
          :value=totalLessOtherFeesChargesClaimedAmount
        />
      </div>
      </div>
    <div class="columns">
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Opening Balances Total"
          :value="openingBalancesTotal"
        />
      </div>
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Package Income Total"
          :value="packageIncomeTotal"
        />
      </div>
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Expenses Total"
          :value="expensesTotal"
        />
      </div>
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Invoice Amount"
          :value="totalLessOtherFeesChargesClaimedAmount"
        />
      </div>
    </div>
    <div class="columns mt-5">
      <div class="is-one-quarter column">
        <div class="is-size-3 mb-1">Shortfall</div>
        <NumberField label="Invoice Amount" :value="totalLessOtherFeesChargesClaimedAmount" />
        <NumberField label="LESS ITF" :value="invoiceLessItf" />
      </div>
      <div class="is-one-quarter column">
        <div class="is-size-3 mb-1">Payment</div>
        <NumberField label="Maximum Government Contribution" :value="maxGovContribution" />
        <NumberField label="Shortfall" :value="invoiceLessItf" />
        <NumberField label="Payment Determination to Provider" :value="paymentDetermination" />
      </div>
      <div class="is-one-quarter column">
        <div class="is-size-3 mb-1">Reconciliation</div>
        <NumberField label="Total AR" :value="expensesTotal" />
        <NumberField label="Payment Determination" :value="paymentDetermination" />
        <NumberField label="Deduct CR Unspent" :value="totalLessCrUnspent" />
        <NumberField label="Deduct CW Unspent" :value="totalLessCwUnspent" />
        <NumberField label="Deduct Pre 2015 Unspent" :value="totalLessPre2015" />
      </div>
      <div class="is-one-quarter column">
        <div class="is-size-3 mb-1">Closing Balances</div>
        <NumberField label="Home Care Account" :value="homeCareClosing" />
        <NumberField label="CR Unspent Funds" :value="crUnspentClosing" />
        <NumberField label="CW Unspend Funds" :value="cwUnspentClosing" />
        <NumberField label="Pre 1st July 2015 Unspent Funds" :value="pre2015UnspentClosing" />
        <NumberField label="Overspend" :value="overspendClosing" />
      </div>
    </div>
    <div class="columns mt-5">
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Shortfall"
          :value="invoiceLessItf"
        />
      </div>
      <div class="is-one-quarter column">
        <TotalField
          class="column"
          label="Payment Determination"
          :value="paymentDetermination"
        />
      </div>
      <div class="is-one-quarter column">
        <TotalField label="Balance Owing" :value="totalOwing" />
      </div>
      <div class="is-one-quarter column">
        <TotalField label="Total Unspent Funds" :value="totalClosing" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import OptionButtons from '@/components/OptButtons.vue';
import InputField from '@/components/InputField.vue';
import NumberInputField from '@/components/NumberInputField.vue';
import NumberField from '@/components/NumberField.vue';
import TotalField from '@/components/TotalField.vue';
import { SELECTIONS } from '@/components/constants';
import Datepicker from 'vue-bulma-datepicker';

export default {
  name: 'HomeView',
  components: {
    OptionButtons,
    InputField,
    NumberInputField,
    TotalField,
    NumberField,
    Datepicker,
  },
  data() {
    return {
      SELECTIONS,
      OptSelection: SELECTIONS.OPT_OUT,
      clientName: '',
      clientId: null,
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
    OptSelectionChange(option) {
      this.OptSelection = option;
    },
  },
  computed: {
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
      const totalLessFees = (this.totalLessBdfClaimedAmount - this.feeChargesIncome) || 0;
      return totalLessFees < 0 ? 0 : totalLessFees;
    },
    invoiceLessItf() {
      const totalLessItf = this.totalLessOtherFeesChargesClaimedAmount - this.itfIncome;
      return totalLessItf < 0 ? 0 : totalLessItf;
    },
    maxGovContribution() {
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
      return Math.min(commonwealthOpening, this.totalLessCrUnspent);
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
      debugger;
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
<style>
.home {
  padding-left: 5%;
  padding-right: 5%;
}
</style>
