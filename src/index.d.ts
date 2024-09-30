interface StartPay {
  prepayId: string;
  orderInfo: string;
  sign: string;
  signType: string;
  disableNewCheckout: string;
  tradeType: string;
}

interface StartPayResponse {
  token: string;
  tradeType: string;
  lang: "en" | "my" | "zh";
  prepayId: string;
  resultCode: number;
}

interface StartPayError {
  code: string;
  msg: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GeneralParams {
  // Other parameters can be added here as needed for other API calls
}

// Update the Window interface
interface Window {
  ma: {
    callNativeAPI: <T extends NativeAPI>(
      apiName: T,
      params: T extends "startPay" ? StartPay : GeneralParams,
      callback: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response: T extends "startPay" ? StartPayResponse : any
      ) => void,
      errorCallback?: (error: StartPayError) => void
    ) => void;
    showToast: (options: { title: string; icon: string }) => Promise<void>;
  };
}

type NativeAPI =
  | "chooseImage"
  | "getLocalImgData"
  | "getLocation"
  | "previewImage"
  | "openDocument"
  | "getStorage"
  | "setStorage"
  | "removeStorage"
  | "clearStorage"
  | "getNetworkType"
  | "scanCode"
  | "getStatusBarHeight"
  | "capsuleStyle"
  | "hideLoading"
  | "showLoading"
  | "showToast"
  | "getsmallappinfo"
  | "gotoBrowser"
  | "saveFileToPhone"
  | "saveImage"
  | "saveBase64Image"
  | "chooseContact"
  | "isOnline"
  | "request"
  | "uploadFile"
  | "downloadFile"
  | "reportEvent"
  | "reportPerformance"
  | "reportLog"
  | "submitReport"
  | "playVoice"
  | "playAudio"
  | "getBackgroundFetchData"
  | "getLaunchOptionsSync"
  | "getSystemInfoSync"
  | "navigateToMiniProgram"
  | "exitMiniProgram"
  | "stopVoice"
  | "getOpenUserInfo"
  | "getAuthCode"
  | "openBluetoothAdapter"
  | "closeBluetoothAdapter"
  | "startBluetoothDevicesDiscovery"
  | "stopBluetoothDevicesDiscovery"
  | "createBLEConnection"
  | "closeBLEConnection"
  | "getBLEDeviceServices"
  | "getBLEDeviceCharacteristics"
  | "readBLECharacteristicValue"
  | "writeBLECharacteristicValue"
  | "ON_BT_DEVICE_FOUND"
  | "offBluetoothDeviceFound"
  | "tradePay"
  | "startPay";
