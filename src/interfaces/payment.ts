export interface PaymentResponse {
  result: "SUCCESS" | "FAIL";
  prepay_id: string;
  orderInfo: string;
  sign: string;
  signType: string;
}
