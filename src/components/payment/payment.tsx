import { useState } from "react";
import "./Payment.css";
import usePayment from "@/hooks/usePayment";

const Payment = () => {
  const { createPayment, startPay } = usePayment();

  const [loading, setLoading] = useState(false);
  const handlePay = async () => {
    setLoading(true);
    try {
      const { prepay_id, sign, signType, result, orderInfo } =
        await createPayment("1");

      console.log("Prepay ID:", prepay_id);

      const payload: StartPay = {
        prepayId: prepay_id!,
        orderInfo: orderInfo,
        sign: sign!,
        signType: signType!,
        disableNewCheckout: "true",
        tradeType: "MINIAPP",
      };

      setLoading(false);

      if (result === "SUCCESS") {
        startPay(payload, () => {
          window.ma
            .showToast({
              title: "Payment Success",
              icon: "success",
            })
            .then(() => {
              console.log("Payment Success");
            });
        });
      } else {
        alert("Payment Failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="payment-container">
      <span className="payment-title">XIOSTORE</span>
      <button className="payment-button" onClick={() => handlePay()}>
        {loading ? "Loading..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default Payment;
