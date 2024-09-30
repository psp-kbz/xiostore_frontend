import { PaymentResponse } from "@/interfaces/payment";
import api from "@/services/axiosInstance";

const usePayment = () => {
  const createPayment = async (amount: string): Promise<PaymentResponse> => {
    try {
      const response = await api.post("/payment/create-order", {
        total_amount: amount,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const startPay = (payload: StartPay, cb?: () => void) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.ma.callNativeAPI("startPay", payload, (res: any) => {
      console.log(res);
      if (res.resultCode === 1) {
        console.info("start pay success");
        cb?.();
      }
    });
  };

  return {
    createPayment,
    startPay,
  };
};

export default usePayment;
