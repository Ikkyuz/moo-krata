import QRCode from 'qrcode';

export async function generateQRCode(url: string): Promise<string> {
  try {
    return await QRCode.toDataURL(url);
  } catch (err) {
    throw new Error('Failed to generate QR Code');
  }
}