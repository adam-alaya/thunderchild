<template>
  <div class="columns">
    <div class="column is-one-third section">
      <h1 class="mb-1">Payment Details</h1>
      <NumberInputField
        @input="(ev)=> this.claimData.claimPrice = parseFloat(ev.target.value)"
        label="Claim Price"
        :value="claimData.claimPrice"
      />
      <NumberInputField
        @input="(ev)=> this.claimData.claimTotal = parseFloat(ev.target.value)"
        label="Claim Total"
        :value="claimData.claimTotal"
      />
      <NumberInputField
        @input="(ev)=> this.claimData.claimEntitlement = parseFloat(ev.target.value)"
        label="Claim Entitlement"
        :value="claimData.claimEntitlement"
      />
      <NumberInputField
        label="Payment Determination"
        :value="claimData.paymentDetermination"
        @input="(ev)=> this.claimData.paymentDetermination = parseFloat(ev.target.value)"
      />

    </div>
  </div>
</template>
<script>
import NumberInputField from '@/components/NumberInputField.vue';
import baseFile from '@/components/paymentfile';

export default {
  name: 'SimpleView',
  components: {
    NumberInputField,
  },
  props: {},
  data() {
    return {
      claimData: {
        claimPrice: null,
        claimTotal: null,
        paymentDetermination: null,
        claimEntitlement: null,
      },
    };
  },
  methods: {
    downloadPaymentFile(downloadData) {
      const [year, month] = downloadData.claimDate ? downloadData.claimDate.split('-') : ['', ''];
      const monthYear = `${month}${year}`;
      const client = downloadData.clientName ?? '';
      const data = {
        ...downloadData,
        ...this.claimData,
        // hca: this.homeCareClosing,
        // claimEntitlement: this.paymentDetermination,
        // previousHca: this.hcaBalance,
        // maxContribution: this.maxGovContribution,
        // invoiceAmount: this.totalLessOtherFeesChargesClaimedAmount,
        // cwUnspent: this.cwUnspentClosing,
        // itfReduction: this.itfIncome,
        // paymentDetermination: this.paymentDetermination,
        // changeInHca: this.homeCareClosing - this.hcaBalance,
        // shortfall: this.invoiceLessItf,
      };
      const file = baseFile(client, downloadData.clientId, monthYear, data);
      const blob = new Blob([file], { type: 'text/plain' });
      const link = document.createElement('a');
      link.download = `${client} ${downloadData.claimDate} Payment File.xml`;
      link.href = window.URL.createObjectURL(blob);
      link.click();
    },
  },
};
</script>
