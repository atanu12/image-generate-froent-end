import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";
// type Data = {
//   name: string
// }

const configur = new Configuration({
  apiKey: process?.env?.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configur);

export default async function generateaiimage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { imageType, size, no } = req?.body;  
  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";
  switch (method) {
    case 'POST':
      try {
        const response = await openai.createImage({
          prompt: imageType,
          n: +no,
          size: imageSize,
        });
        const image_Url = response.data.data;
        res.status(200).json({ success: true, imageUrl: image_Url });
      } catch (error) {
        // console.log(error,'error');
        
        res.status(400).json({ success: false, message: "No Data" });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "No Data" });
      break;
  }
}
