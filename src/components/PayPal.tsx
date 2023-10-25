"use client";

import {
  PayPalScriptProvider,
  PayPalButtons,
  type ReactPayPalScriptOptions,
} from "@paypal/react-paypal-js";
import { Text } from "@chakra-ui/react";

import { env } from "@/env.mjs";

const payPalOptions: ReactPayPalScriptOptions = {
  clientId: env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    ? env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
    : "",
  currency: "USD",
  intent: "capture",
};

export const PayPalButton = () => {
  return payPalOptions.clientId !== "" ? (
    <PayPalScriptProvider options={payPalOptions}>
      <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  ) : (
    <Text as="b" fontSize="25px" color="tomato">
      400: No PayPal client ID
    </Text>
  );
};
