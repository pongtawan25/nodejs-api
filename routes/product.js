var express = require('express');
var router = express.Router();

const productList = [
  {
    id: 1,
    name: "Pepsi"
  },
  {
    id: 2,
    name: "Coke"
  },
]

router.get('/', function (req, res, next) {
  res.json({
    data: productList
  })
});

router.get('/:id', function (req, res, next) {
  const product = productList.find((item) => item.id == req.params.id)
  if (!product) {
    res.status(404).json({
      message: "Product not found"
    })
  }
  res.json({
    data: product
  })
});

router.post('/', function (req, res, next) {
  productList.push({
    id: req.body.id,
    name: req.body.name
  })
  res.status(201).json({
    message: "Save Successful",
    data: productList
  })
});

router.put('/:id', function (req, res, next) {
  const product = productList.find((item) => item.id == req.params.id)
  if (!product) {
    res.status(404).json({
      message: "Product not found"
    })
  } else {
    product.name = req.body.name;
    res.json({
      message: "Update product successful",
      data: product
    })
  }
});

router.delete('/:id', function (req, res, next) {
  res.status(201).json({
    data: productList.filter(function (item) {
      return item.id != req.params.id;
    })
  });
});

module.exports = router;
