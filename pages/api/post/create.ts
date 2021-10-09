import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const cookie = req.headers.cookie;
    if (cookie == null) {
    }
    const { title, content, category, username } = req.body;
    return await axios
      .post(
        process.env.SERVER_URI + "/post/create",
        {
          title,
          content,
          category,
          username,
        },
        {
          headers: {
            cookie,
          },
        }
      )
      .then((v) => res.json({ result: true }))
      .catch((reason) => res.json({ result: false, reason }));
  }
};
