// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  console.log(index);
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  if (isNaN(index)) {
    console.log("index");
    res.status(301).json(data?.data);
    return;
  } else {
    res.status(301).json(data?.data.slice(index, index + 10));
  }
}
