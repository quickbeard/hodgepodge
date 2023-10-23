"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const payPalOptions = {
  clientId:
    "AUGJzcaSSyEX2SjL_IG1eObYJm-uJ9FhOt-Gz5xBBKXp-YS-23crCsikUm2GFF8_vsxmqqk0MKcHXdb1",
  currency: "USD",
  intent: "capture",
};

export const PayPalButton = () => {
  return (
    <PayPalScriptProvider options={payPalOptions}>
      <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  );
};
