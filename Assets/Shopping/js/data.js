const products = [
    {
      id: "blacktees",
      name: "Shining Bright T-shirt - Black",
      oldPrice: 350000,
      newPrice: 199000,
      discount: 43,
      tag1: "Low Stock",
      tag2: "T-shirt",
      images: [
        "Assets/assetcategories/categories1.png",
      ],
      sizes: [
        { size: "S", price: 199000, stock: 0 },
        { size: "M", price: 199000, stock: 0 },
        { size: "L", price: 199000, stock: 0 },
        { size: "XL", price: 199000, stock: 0 },
        { size: "XXL", price: 199000, stock: 4 }  // ready
      ]
    },
  
    {
      id: "workjacket",
      name: "Work Jacket",
      oldPrice: 299000,
      newPrice: 219000,
      discount: 27,
      tag1: "Best Seller",
      tag2: "Jacket",
      images: [
        "Assets/assetcategories/categories2.png"
      ],
      sizes: [
        { size: "S", price: 219000, stock: 0 },
        { size: "M", price: 219000, stock: 2 },
        { size: "L", price: 219000, stock: 0 },
        { size: "XL", price: 219000, stock: 1 },
        { size: "XXL", price: 219000, stock: 0 }
      ]
    },
    {
      id: "blushirt",
      name: "Shining Bright Shirt - Blue",
      oldPrice: 400000,
      newPrice: 150000,
      discount: 43,
      tag1: "Low Stock",
      tag2: "Shirt",
      images: [
        "Assets/assetcategories/categories3.png"
      ],
      sizes: [
        { size: "S", price: 150000, stock: 0 },
        { size: "M", price: 150000, stock: 0 },
        { size: "L", price: 150000, stock: 4 },
        { size: "XL", price: 150000, stock: 10 },
        { size: "XXL", price: 150000, stock: 2 }
      ]
    },
    {
        id: "bluehoodie",
        name: "Shining Bright Hoodie - Blue",
        oldPrice: 450000,
        newPrice: 299000,
        discount: 34,
        tag1: "New Arrival",
        tag2: "Hoodie",
        images: [
          "Assets/assetcategories/categories4.png"
        ],
        sizes: [
          { size: "S",  price: 299000, stock: 3 },
          { size: "M",  price: 299000, stock: 5 },
          { size: "L",  price: 299000, stock: 2 },
          { size: "XL", price: 299000, stock: 0 },
          { size: "XXL",price: 299000, stock: 0 }
        ]
      },
      
      {
        id: "bluejeans",
        name: "Shining Bright Jeans - Blue",
        oldPrice: 380000,
        newPrice: 259000,
        discount: 32,
        tag1: "Best Seller",
        tag2: "Jeans",
        images: [
          "Assets/assetcategories/categories5.png"
        ],
        sizes: [
          { size: "28", price: 259000, stock: 4 },
          { size: "30", price: 259000, stock: 7 },
          { size: "32", price: 259000, stock: 1 },
          { size: "34", price: 259000, stock: 0 },
          { size: "36", price: 259000, stock: 0 }
        ]
      },
      
      {
        id: "shortpants",
        name: "Shining Bright Short Pants",
        oldPrice: 250000,
        newPrice: 149000,
        discount: 40,
        tag1: "Hot Item",
        tag2: "Shorts",
        images: [
          "Assets/assetcategories/categories6.png"
        ],
        sizes: [
          { size: "S",  price: 149000, stock: 6 },
          { size: "M",  price: 149000, stock: 5 },
          { size: "L",  price: 149000, stock: 0 },
          { size: "XL", price: 149000, stock: 2 },
          { size: "XXL",price: 149000, stock: 0 }
        ]
      },

      {
        id: "WorkCrewneck",
        name: "Shining Bright Work Crewneck - Black",
        oldPrice: 350000,
        newPrice: 199000,
        discount: 43,
        tag1: "Best Seller",
        tag2: "Crewneck",
        images: [
          "Assets/assetcategories/categories7.png"
        ],
        sizes: [
          { size: "S", price: 199000, stock: 5 },
          { size: "M", price: 199000, stock: 3 },
          { size: "L", price: 199000, stock: 0 },
          { size: "XL", price: 199000, stock: 0 },
          { size: "XXL", price: 199000, stock: 2 }
        ]
      },

      {
        id: "VibrantCrewneck",
        name: "Shining Bright Vibrant Crewneck - Black",
        oldPrice: 350000,
        newPrice: 145000,
        discount: 58,
        tag1: "Best Seller",
        tag2: "Crewneck",
        images: [
          "Assets/assetcategories/categories8.png"
        ],
        sizes: [
          { size: "S", price: 145000, stock: 0 },
          { size: "M", price: 145000, stock: 3 },
          { size: "L", price: 145000, stock: 0},
          { size: "XL", price: 145000, stock: 9},
          { size: "XXL", price: 145000, stock: 7}
        ]
      },

      {
        id: "DomesticCrewneck",
        name: "Shining Bright Domestic Crewneck - Black",
        oldPrice: 350000,
        newPrice: 199000,
        discount: 43,
        tag1: "New Arrival",
        tag2: "Crewneck",
        images: [
          "Assets/assetcategories/categories9.png"
        ],
        sizes: [
          { size: "S", prince: 199000, stock: 10 },
          { size: "M", prince: 199000, stock: 8 },
          { size: "L", prince: 199000, stock: 9 },
          { size: "XL", prince: 199000, stock: 20 },
          { size: "XXL", prince: 199000, stock: 10 }
        ]
      },

      {
        id: "NewColorHoodie",
        name: "Shining Bright New Color Hoodie - Black",
        oldPrice: 400000,
        newPrice: 175000,
        discount: 56,
        tag1: "New Arrival",
        tag2: "Hoodie",
        images: [
          "Assets/assetcategories/categories10.png"
        ],
        sizes : [
          { size: "S", prince: 175000, stock: 8 },
          { size: "M", prince: 175000, stock: 7 },
          { size: "L", prince: 175000, stock: 9 },
          { size: "XL", prince: 175000, stock: 12 },
          { size: "XXL", prince: 175000, stock: 16 }
        ]
      },

      {
        id: "FlusLogoHoodie",
        name : "Shining Bright Flus Logo Hoodie - Black",
        oldPrice: 400000,
        newPrice: 175000,
        discount: 56,
        tag1: "New Arrival",
        tag2: "Hoodie",
        images: [
          "Assets/assetcategories/categories11.png"
        ],
        sizes: [
          { size: "S", prince: 175000, stock: 7 },
          { size: "M", prince: 175000, stock: 9 },
          { size: "L", prince: 175000, stock:  6 },
          { size: "XL", prince: 175000, stock: 10 },
          { size: "XXL", prince: 175000, stock: 9 }
        ]
      },

      {
        id: "HarringtonJacket",
        name: "Shining Bright Harrington Jacket - Black",
        oldPrice: 450000,
        newPrice: 399000,
        discount: 11,
        tag1: "Low Stock",
        tag2: "Jacket",
        images: [
          "Assets/assetcategories/categories12.png"
        ],
        sizes: [
          { size: "S", prince: 399000, stock: 0 },
          { size: "M", prince: 399000, stock: 4 },
          { size: "L", prince: 399000, stock: 0 },
          { size: "XL", prince: 399000, stock: 6 },
          { size: "XXL", prince: 399000, stock: 7 }
        ]
      },

      {
        id: "SBCOWorkJacket",
        name: "Shining Bright SBCO Work Jacket - Black",
        oldPrice: 450000,
        newPrice: 178900,
        discount: 60,
        tag1: "Low Stock",
        tag2: "Jacket",
        images: [
          "Assets/assetcategories/categories13.png"
        ],
        sizes: [
          { size: "S", prince: 178900, stock: 4 },
          { size: "M", prince: 178900, stock: 0 },
          { size: "L", prince: 178900, stock: 7 },
          { size: "XL", prince: 178900, stock: 0 },
          { size: "XXL", prince: 178900, stock: 3 }
        ]
      },

      {
        id: "JeansLongPantsDenim",
        name: "Shining Bright Jeans Long Pants Denim - Washed Black",
        oldPrice: 550000,
        newPrice: 190000,
        discount: 65,
        tag1: "Best Seller",
        tag2: "Jeans",
        images: [
          "Assets/assetcategories/categories14.png"
        ],
        sizes: [
          { size: "S", prince: 190000, stock: 7 },
          { size: "M", prince: 190000, stock: 0 },
          { size: "L", prince: 190000, stock: 5 },
          { size: "XL", prince: 190000, stock: 9 },
          { size: "XXL", prince: 190000, stock: 3 }
        ]
      }, 

      {
        id: "JeansLongPantsDenim",
        name: "Shining Bright Jeans Long Pants Denim - Black",
        oldPrice: 550000,
        newPrice: 190000,
        discount: 65,
        tag1: "Best Seller",
        tag2: "Jeans",
        images: [
          "Assets/assetcategories/categories15.png"
        ],
        sizes: [
          { size: "S", prince: 190000, stock: 7 },
          { size: "M", prince: 190000, stock: 0 },
          { size: "L", prince: 190000, stock: 5 },
          { size: "XL", prince: 190000, stock: 9 },
          { size: "XXL", prince: 190000, stock: 3 }
        ]
      },

      {
        id: "PlaidCollarShirt",
        name : "Shining Bright Plaid Collar Shirt - Blue",
        oldPrice: 400000,
        newPrice: 157000,
        discount: 60,
        tag1: "Low Stock",
        tag2: "Shirt",
        images: [
          "Assets/assetcategories/categories16.png"
        ],
        sizes: [
          { size: "S", prince: 157000, stock: 4 },
          { size: "M", prince: 157000, stock: 0 },
          { size: "L", prince: 157000, stock: 9 },
          { size: "XL", prince: 157000, stock: 0 },
          { size: "XXL", prince: 157000, stock: 5 }
        ]
      },

      {
        id: "PlaidCollarShirt",
        name : "Shining Bright Plaid Collar Shirt - Black",
        oldPrice: 400000,
        newPrice: 157000,
        discount: 60,
        tag1: "Low Stock",
        tag2: "Shirt",
        images: [
          "Assets/assetcategories/categories17.png"
        ],
        sizes: [
          { size: "S", prince: 157000, stock: 4 },
          { size: "M", prince: 157000, stock: 0 },
          { size: "L", prince: 157000, stock: 9 },
          { size: "XL", prince: 157000, stock: 0 },
          { size: "XXL", prince: 157000, stock: 5 }
        ]
      },

      {
        id: "PoplinCollarShirt",
        name: "Shining Bright Poplin Collar Shirt - Navy",
        oldPrice: 400000,
        newPrice: 136000,
        discount: 66,
        tag1: "Best Seller",
        tag2: "Shirt",
        images: [
          "Assets/assetcategories/categories18.png"
        ],
        sizes: [
          { size: "S", prince: 136000, stock: 6 },
          { size: "M", prince: 136000, stock: 8 },
          { size: "L", prince: 136000, stock: 0 },
          { size: "XL", prince: 136000, stock: 0 },
          { size: "XXL", prince: 136000, stock: 10 }
        ]
      },

      {
        id: "ChinosShortPants",
        name: "Shining Bright Chinos Short Pants",
        oldPrice: 200000,
        newPrice: 94000,
        discount: 53,
        tag1: "New Arrival",
        tag2: "Short",
        images: [
          "Assets/assetcategories/categories19.png"
        ],
        sizes: [
          { size: "S", prince: 94000, stock: 8 },
          { size: "M", prince: 94000, stock: 4 },
          { size: "L", prince: 94000, stock: 0 },
          { size: "XL", prince: 94000, stock: 7 },
          { size: "XXL", prince: 94000, stock: 3 }
        ]
      },

      {
        id: "KiluaTshirt",
        name: "Shining Bright Kilua Tshirt - Black",
        oldPrice: 200000,
        newPrice: 90000,
        discount: 55,
        tag1: "Best Seller",
        tag2: "Tshirt",
        images: [
          "Assets/assetcategories/categories20.png"
        ],
        sizes: [
          { size: "S", prince: 90000, stock: 0 },
          { size: "M", prince: 90000, stock: 6 },
          { size: "L", prince: 90000, stock: 3 },
          { size: "XL", prince: 90000, stock: 0 },
          { size: "XXL", prince: 90000, stock: 9 }
        ]
      },

      {
        id: "KurapikaTshirt",
        name: "Shining Bright Kurapika Tshirt - Black",
        oldPrice: 200000,
        newPrice: 90000,
        discount: 55,
        tag1: "Best Seller",
        tag2: "Tshirt",
        images: [
          "Assets/assetcategories/categories21.png"
        ],
        sizes: [
          { size: "S", prince: 90000, stock: 0 },
          { size: "M", prince: 90000, stock: 6 },
          { size: "L", prince: 90000, stock: 3 },
          { size: "XL", prince: 90000, stock: 0 },
          { size: "XXL", prince: 90000, stock: 9 }
        ]
      }
  ];
  