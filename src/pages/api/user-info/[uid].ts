import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { uid } = req.query;
  const cookies = req.cookies;
  //   res.status(200).json({ name: `Jimmy Choi ${uid}` });
  //   res
  //     .status(200)
  //     .json({ name: `Jimmy Choi ${uid} ${JSON.stringify(cookies)}` });

  //   res.status(400).json({ error: "error" });
  res.redirect("/api/user");
};

export default handler;
