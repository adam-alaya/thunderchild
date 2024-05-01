<template>
  <div class="columns">
    <div class="column is-one-third section big-section">
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
      <NumberInputField
        label="Home Care Account Balance before"
        :value="claimData.previousHca"
        @input="(ev)=> this.claimData.previousHca = parseFloat(ev.target.value)"
      />
      <NumberInputField
        label="Home Care Account Balance after"
        :value="claimData.hca"
        @input="(ev)=> this.claimData.hca = parseFloat(ev.target.value)"
      />
      <NumberInputField
        label="ITF Reduction Amount"
        :value="claimData.itfReduction"
        @input="(ev)=> this.claimData.itfReduction = parseFloat(ev.target.value)"
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
        previousHca: null,
        hca: null,
        itfReduction: null,
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
