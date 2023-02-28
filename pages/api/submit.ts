// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

type Data = {
  url: string;
};

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const form = formidable({ multiples: true });
    form.parse(req, (err, fields, files : any) => {
      if (err) {
        console.log(err);
        return;
      }

      cloudinary.uploader
        .upload(files.image.filepath)
        .then((result) => {
          return res.status(200).json({ url: result.secure_url });
        });

    });
  }
}
