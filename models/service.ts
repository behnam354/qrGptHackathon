export interface QrGenerateRequest {
  /**
   * URL that the QR code will point to.
   */
  url: string;

  /**
   * Accompanying text prompt that will decide the style or theme of the code.
   */
  prompt: string;
}

export interface QrGenerateResponse {
  /**
   * URL of the QR code image that was generated by the model.
   */
  image_url: string;

  /**
   * Response latency in milliseconds.
   */
  model_latency_ms: number;
}