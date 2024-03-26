const baseFile = (clientName, clientId, monthYear, data) => (
  `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<paymentStmtResponse>
  <homeCarePaymentStmtHeader>
    <claimMonth>${monthYear}</claimMonth>
    <agedCareServiceNumber/>
    <agedCareServiceName/>
    <agedCareProviderNumber/>
    <agedCareProviderName/>
    <medicareABN/>
    <providerABN/>
  </homeCarePaymentStmtHeader>
  <careRecipientPaymentList>
    <careRecipientPayment>
      <careRecipientDetails>
        <careRecipientID>${clientId}</careRecipientID>
        <careRecipientSurname/>
        <careRecipientGivenName/>
        <entryDate/>
        <departureDate/>
        <assignedLevelOfCare/>
        <L1LeaveDaysLeft/>
        <L3LeaveDaysLeft/>
        <L4LeaveDaysLeft/>
      </careRecipientDetails>
    </careRecipientPayment>
  </careRecipientPaymentList>
  <IPApaymentdetails>
    <careRecipientPayment>
      <careRecipientID>${clientId}</careRecipientID>
      <careRecipientSurname/>
      <careRecipientGivenName>${clientName}</careRecipientGivenName>
      <totalAmountDue>${data.claimPrice || 0}</totalAmountDue>
      <homeCareAccountBalance>${data.hca || 0}</homeCareAccountBalance>
      <payment>
        <entitlementType>Current</entitlementType>
        <entitlementMonth>${monthYear}</entitlementMonth>
        <claimEntitlement>${data.claimEntitlement}</claimEntitlement>
        <previousHomeCareAccountBalance>${data.previousHca || 0}</previousHomeCareAccountBalance>
        <maximumContribution>${data.maxContribution || 0}</maximumContribution>
        <invoiceAmount>${data.invoiceAmount || 0}</invoiceAmount>
        <cwuaunspentAmount>${data.cwUnspent || 0}</cwuaunspentAmount>
        <itfReductionAmount>${data.itfReduction || 0}</itfReductionAmount>
        <shortfallAmount>${data.shortfall || 0}</shortfallAmount>
        <paymentDetermination>${data.paymentDetermination}</paymentDetermination>
        <changeInHomeCareAccount>${data.claimPrice || 0}</changeInHomeCareAccount>
      </payment>
    </careRecipientPayment>
  </IPApaymentdetails>
  <paymentSummary />
  <providerComments/>
</paymentStmtResponse>
`);

export default baseFile;
