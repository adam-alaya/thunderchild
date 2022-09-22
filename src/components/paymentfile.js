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
      <totalAmountDue>10.00</totalAmountDue>
      <homeCareAccountBalance>${data.hca}</homeCareAccountBalance>
      <payment>
        <entitlementType>Current</entitlementType>
        <entitlementMonth>${monthYear}</entitlementMonth>
        <claimEntitlement>${data.claimEntitlement}</claimEntitlement>
        <previousHomeCareAccountBalance>${data.previousHca}</previousHomeCareAccountBalance>
        <maximumContribution>${data.maxContribution}</maximumContribution>
        <invoiceAmount>${data.invoiceAmount}</invoiceAmount>
        <cwuaunspentAmount>${data.cwUnspent}</cwuaunspentAmount>
        <itfReductionAmount>${data.itfReduction}</itfReductionAmount>
        <shortfallAmount>${data.shortfall}</shortfallAmount>
        <paymentDetermination>${data.paymentDetermination}</paymentDetermination>
        <changeInHomeCareAccount>${data.changeInHca}</changeInHomeCareAccount>
      </payment>
    </careRecipientPayment>
  </IPApaymentdetails>
  <paymentSummary />
  <providerComments/>
</paymentStmtResponse>
`);

export default baseFile;
