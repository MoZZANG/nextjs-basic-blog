import { NextApiRequest, NextApiResponse } from "next";
import { userDetail } from "constants/uesrDetail";
type Data = {
  name: string;
  age: number;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json(userDetail);
};

export default handler;
