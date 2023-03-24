export type CheckoutEventContent = {
  amount: number;
  barcode: string;
  cashierId: string;
  cashRegisterId?: string;
  discount: number;
  invoiceType: string;
  invoiceId: string;
  paymentMethod: string;
  price: number;
  productColorCode: string;
  productId: string;
  productName: string;
  productType?: string;
  productSecondaryType?: string;
  sellerId: string;
  sellingPrice: number;
  anomalies?: {
    anomalous?: boolean;
    ObjectRecognition?: {
      anomalous?: boolean;
      referenceId?: string;
      sensorId?: string;
      assetId?: string;
      datasetId?: string;
    };
  };
};
