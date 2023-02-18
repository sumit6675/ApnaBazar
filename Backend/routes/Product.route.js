const express = require("express");
const ProductRoute = express.Router();
const { ProductModule } = require("../models/Product.model");

ProductRoute.get("/", async (req, res) => {
  let data = await ProductModule.find({}).sort({ discount: "asc" });
  res.send(data);
});

ProductRoute.get("/phone", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, sort } = req.query;
  try {
    if (brand === "Redmi") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Redmi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "OnePlus") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +a.discount - +b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +b.discount - +a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*OnePlus.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Samsung") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +a.discount - +b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +b.discount - +a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Samsung.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Xiaomi") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +a.discount - +b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +b.discount - +a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Xiaomi.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "IPhone") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +a.discount - +b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +b.discount - +a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*IPhone.*/i },
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "All") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +a.discount - +b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => +b.discount - +a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          category: "Phone",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

ProductRoute.get("/phone/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ProductModule.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

ProductRoute.get("/laptop", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, sort } = req.query;
  try {
    if (brand === "Dell") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dell.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "MacBook") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*MacBook.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "HP") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*HP.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "ASUS") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*ASUS.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Lenovo") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Lenovo.*/i },
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "All") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          category: "Laptop",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

ProductRoute.get("/laptop/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ProductModule.findById(id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

ProductRoute.get("/women", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, sort } = req.query;
  try {
    if (brand === "saree") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*saree.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Dress") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Dress.*/i },
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "All") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          category: "Women Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    }
  } catch (e) {}
});
ProductRoute.get("/women/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ProductModule.findById(id);
    res.send(data);
  } catch (e) {}
});
ProductRoute.get("/men", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, sort } = req.query;
  try {
    if (brand === "Jacket") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Puma") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Puma.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "High Neck Jacket") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*High Neck Jacket.*/i },
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "All") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          category: "Men Clothing",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    }
  } catch (e) {}
});
ProductRoute.get("/men/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ProductModule.findById(id);
    res.send(data);
  } catch (e) {}
});

ProductRoute.get("/home", async (req, res) => {
  const { page = 1, limit = 16 } = req.query;
  const { brand, sort } = req.query;
  try {
    if (brand === "Masala") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Masala.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);

        res.send(data);
      }
    } else if (brand === "Roll") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*Roll.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "Ready To Eat") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          Name: { $regex: /.*285g.*/i },
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        res.send(data);
      }
    } else if (brand === "All") {
      if (sort === "RatingLowToHigh") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.rating - b.rating);
        res.send(data);
      } else if (sort === "RatingHighToLow") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.rating - a.rating);
        res.send(data);
      } else if (sort === "PriceLowToHigh") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(a.price.replace(/,/g, "")) -
            parseInt(b.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "PriceHighToLow") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort(
          (a, b) =>
            parseInt(b.price.replace(/,/g, "")) -
            parseInt(a.price.replace(/,/g, ""))
        );
        res.send(data);
      } else if (sort === "DiscountLowToHigh") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => a.discount - b.discount);
        res.send(data);
      } else if (sort === "DiscountHighToLow") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        data = data.sort((a, b) => b.discount - a.discount);
        res.send(data);
      } else if (sort === "default") {
        let data = await ProductModule.find({
          category: "Home Appliances",
        })
          .limit(limit * 1)
          .skip((page - 1) * limit);

        res.send(data);
      }
    }
  } catch (e) {}
});
ProductRoute.get("/home/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let data = await ProductModule.findById(id);
    res.send(data);
  } catch (e) {}
});

ProductRoute.get("/admin/phone", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { name } = req.query;
  try {
    if (name) {
      let data = await ProductModule.find({
        category: "Phone",
      });
      let filteredData = data.filter((i) => {
        return i.Name.toLowerCase().includes(name.toLowerCase());
      });
      res.send(filteredData);
    } else {
      let data = await ProductModule.find({
        category: "Phone",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});
ProductRoute.get("/admin/Laptop", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { name } = req.query;
  try {
    if (name) {
      let data = await ProductModule.find({
        category: "Laptop",
      });
      let filteredData = data.filter((i) => {
        return i.Name.toLowerCase().includes(name.toLowerCase());
      });
      res.send(filteredData);
    } else {
      let data = await ProductModule.find({
        category: "Laptop",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});
ProductRoute.get("/admin/WomenClothing", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { name } = req.query;
  try {
    if (name) {
      let data = await ProductModule.find({
        category: "Women Clothing",
      });
      let filteredData = data.filter((i) => {
        return i.Name.toLowerCase().includes(name.toLowerCase());
      });
      res.send(filteredData);
    } else {
      let data = await ProductModule.find({
        category: "Women Clothing",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});
ProductRoute.get("/admin/menClothing", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { name } = req.query;
  try {
    if (name) {
      let data = await ProductModule.find({
        category: "Men Clothing",
      });
      let filteredData = data.filter((i) => {
        return i.Name.toLowerCase().includes(name.toLowerCase());
      });
      res.send(filteredData);
    } else {
      let data = await ProductModule.find({
        category: "Men Clothing",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});
ProductRoute.get("/admin/HomeAppliances", async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { name } = req.query;
  try {
    if (name) {
      let data = await ProductModule.find({
        category: "Home Appliances",
      });
      let filteredData = data.filter((i) => {
        return i.Name.toLowerCase().includes(name.toLowerCase());
      });
      res.send(filteredData);
    } else {
      let data = await ProductModule.find({
        category: "Home Appliances",
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.send(data);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      message: "Something went wrong",
    });
  }
});

ProductRoute.delete("/admin/Laptop/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModule.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});
ProductRoute.delete("/admin/phone/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModule.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});
ProductRoute.delete("/admin/menClothing/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModule.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});
ProductRoute.delete("/admin/WomenClothing/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModule.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});
ProductRoute.delete("/admin/HomeAppliances/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModule.findByIdAndDelete({ _id: id });
    res.send("deleted");
  } catch {
    res.send("err");
  }
});

ProductRoute.post("/admin/Laptop/add", async (req, res) => {
  const payload = req.body;
  try {
    const NewPhone = new ProductModule(payload);
    await NewPhone.save();
    res.send("New Phone successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});
ProductRoute.post("/admin/phone/add", async (req, res) => {
  const payload = req.body;
  try {
    const NewPhone = new ProductModule(payload);
    await NewPhone.save();
    res.send("New Phone successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});
ProductRoute.post("/admin/menClothing/add", async (req, res) => {
  const payload = req.body;
  try {
    const NewPhone = new ProductModule(payload);
    await NewPhone.save();
    res.send("New Phone successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});
ProductRoute.post("/admin/WomenClothing/add", async (req, res) => {
  const payload = req.body;
  try {
    const NewPhone = new ProductModule(payload);
    await NewPhone.save();
    res.send("New Phone successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});
ProductRoute.post("/admin/HomeAppliances/add", async (req, res) => {
  const payload = req.body;
  try {
    const NewPhone = new ProductModule(payload);
    await NewPhone.save();
    res.send("New Phone successfully Added");
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

ProductRoute.patch("/userUpdateAvailableQty/:id", async (req, res) => {
  const id = req.params.id;
  let data = await ProductModule.findById(id);
  try{
    await ProductModule.findByIdAndUpdate(
      id,
      { TotalQtyAvailable: `${data.TotalQtyAvailable-1}`}
    );
    res.send("qty updated")
  }catch(err){
    res.send(err)
  }
});


module.exports = {
  ProductRoute,
};
