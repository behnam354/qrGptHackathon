import { getEnv, ENV_KEY } from '@/utils/env';
import Replicate from 'replicate';
import { QrCodeControlNetRequest, QrCodeControlNetResponse } from './types';

export class ReplicateClient {
  replicate: Replicate;

  constructor(apiKey: string) {
    this.replicate = new Replicate({
      auth: apiKey,
    });
  }

  /**
   * Generate a QR code.
   */
  generateQrCode = async (
    request: QrCodeControlNetRequest,
  ): Promise<string> => {
    const prediction = await this.replicate.deployments.predictions.create(
      "behnam354",
      "qr-code-hackathon",
      {
        input: {
          url: request.url,
          qr_code_content: request.url,
          prompt: request.prompt,
          qr_conditioning_scale: request.qr_conditioning_scale,
          num_inference_steps: request.num_inference_steps,
          guidance_scale: request.guidance_scale,
          negative_prompt: request.negative_prompt,
        },
      },
    );

    // Wait for the prediction to complete
    const finalPrediction = await this.replicate.wait(prediction);
    
    if (!finalPrediction.output) {
      throw new Error('Failed to generate QR code');
    }

    return (finalPrediction.output as QrCodeControlNetResponse)[0];
  };
}

const apiKey = getEnv(ENV_KEY.REPLICATE_API_KEY);
if (!apiKey) {
  throw new Error('REPLICATE_API_KEY is not set');
}
export const replicateClient = new ReplicateClient(apiKey);
