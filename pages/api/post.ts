import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { postInterface } from "../../src/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<postInterface>
) {
  const postId = parseInt(req.query[`postId`] as string);
  if (isNaN(postId)) {
    res.status(404);
  } else {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    res.status(200).json(data?.data);
  }
}
