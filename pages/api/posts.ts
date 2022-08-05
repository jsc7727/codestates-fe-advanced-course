import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const index = parseInt(req.query[`index`] as string);
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  if (isNaN(index)) {
    res.status(200).json(data?.data);
  } else {
    res.status(200).json(data?.data.slice(index, index + 10));
  }
  return;
}
