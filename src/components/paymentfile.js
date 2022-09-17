const baseFile = (clientName, clientId, claimDate) => {
  const monthYear = claimDate;
  return `
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
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
      <careRecipientGivenName/>
      <totalAmountDue>10.00</totalAmountDue>
      <homeCareAccountBalance>0.00</homeCareAccountBalance>
      <payment>
        <entitlementType>Current</entitlementType>
        <entitlementMonth>${monthYear}</entitlementMonth>
        <claimEntitlement>990.00</claimEntitlement>
        <previousHomeCareAccountBalance>0.00</previousHomeCareAccountBalance>
        <maximumContribution>2000.00</maximumContribution>
        <invoiceAmount>3000.00</invoiceAmount>
        <cwuaunspentAmount>100.00</cwuaunspentAmount>
        <itfReductionAmount>200.00</itfReductionAmount>
        <shortfallAmount>300.00</shortfallAmount>
        <paymentDetermination>0.00</paymentDetermination>
        <changeInHomeCareAccount>0.00</changeInHomeCareAccount>
      </payment>
    </careRecipientPayment>
  </IPApaymentdetails>
  <paymentSummary>
      <entitlementMonth>092020</entitlementMonth>
      <paymentAndAdjustments>
        <entitlementAdjustmentList>
          <entitlementAdjustment>
            <type>CC</type>
            <month>012017</month>
            <amount>264.48</amount>
          </entitlementAdjustment>
        </entitlementAdjustmentList>
        <entitlementPaymentList>
          <entitlementPayment>
            <type>CC</type>
            <month>022017</month>
            <amount>881.60</amount>
          </entitlementPayment>
        </entitlementPaymentList>
        <entitlementTotal>
          <backPaymentRecoveries>264.48 </backPaymentRecoveries>
          <advanceAmountRecovered>0.00</advanceAmountRecovered>
          <otherAdjustmentAmount>0.00</otherAdjustmentAmount>
          <totalPayment>1146.08 </totalPayment>
          <outstandingAdjustmentsCarriedForward>0.00</outstandingAdjustmentsCarriedForward>
        </entitlementTotal>
      </paymentAndAdjustments>
  </paymentSummary>
  <providerComments/>
</paymentStmtResponse>
`;
};

export default baseFile;
