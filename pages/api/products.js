import ConnectDatabase from "../../library/database/connection";
import Products from "../../models/ProductSchema";

export default async function handler(req, res, next) {
  ConnectDatabase().catch((error) =>
    res.json({ error: "Connection Failed..!" })
  );

  if (req.method === "GET") {
    res.json({ message: "hello" });
  }

  if (req.method === "POST") {
    const { title, description, image, price, onSale } = req.body;

    if (!req.body) {
      return res.status(404).json({ message: "Data Not Found" });
    }

    //checkduplicate
    const checkDuplicate = await Products.findOne({ title });

    if (checkDuplicate) {
      return res.status(422).json({ message: "Product Already Exist..!" });
    }

    Products.create(
      { title, description, image, price, onSale },
      function (err, data) {
        if (err) return res.status(404).json({ message: err.message });
        res.status(201).json({ status: true, data: data });
      }
    );
  }
}
