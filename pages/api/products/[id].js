import ConnectDatabase from "../../../library/database/connection";
import Products from "../../../models/ProductSchema";

export default async function handler(req, res) {
  ConnectDatabase().catch((error) =>
    res.json({ error: "Connection Failed..!" })
  );

  if (req.method === "GET") {
    const { id } = req.query;

    //check product in database
    const product = await Products.findOne({ _id: id });

    if (!product) {
      res.status(404).json({ message: "No Product found" });
    }

    res.status(201).json({
      message: "data found",
      data: product,
    });
  }

  if (req.method === "DELETE") {
    const { id } = req.query;

    //check product in database
    const product = await Products.deleteOne({ _id: id });

    if (!product) {
      res.status(404).json({ message: "No Product found" });
    }

    res.status(201).json({
      message: "data now deleted",
    });
  }

  if (req.method === "PUT") {
    const { id } = req.query;
    const { title, description, image, price, onSale } = req.body;

    const newData = {
      title,
      description,
      image,
      price,
      onSale,
    };
    //find and update item
    const updatedItem = await Products.findOneAndUpdate({ _id: id }, newData, {
      returnDocument: "after",
    });

    res.status(201).json({
      message: "Item Updated",
      data: updatedItem,
    });
  }
}
