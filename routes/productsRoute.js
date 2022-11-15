const express = require("express");
const { Products } = require("../models/products");
const router = express.Router();
const uuid = require("uuid");

router.post("/", async (req, res) => {
  const { name, description, image, price, userid } = req.body;
  console.log("bodyyyyy", req.body);
  try {
    const id = uuid.v4();
    const newproduct = new Products({
      name,
      description,
      image: image,
      price,
      id:id,
    });
   
    const response = await newproduct.save();
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  const { name, description, image, price } = req.body;
  console.log(req.body);
  try {
   
        let itemId = req.params.id;
        Products.findByIdAndUpdate(
          { _id: itemId },
          {
            name: name,
            description: description,
            image: image,
            price: price,
          },
          { new: true },
          (error, data) => {
            if (error) {
              res.send(error);
            } else {
              console.log(data);
              res.send(data);
            }
          }
        );

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { name, description, image, price } = req.body;
  console.log(req.body);

  let itemId = req.params.id;
  Products.deleteOne(
    { _id: itemId },

    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        console.log(data);
        res.send(itemId);
      }
    }
  );
});

router.get("/", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
