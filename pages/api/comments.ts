// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { commentInterface } from "../../src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<commentInterface>
) {
  const id = parseInt(req.query[`postId`] as string);
  if (isNaN(id)) {
    res.status(404);
  } else {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    res.status(200).json(data?.data);
  }
  return;
}
