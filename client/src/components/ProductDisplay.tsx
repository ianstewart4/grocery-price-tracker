import * as React from "react";

function ProductDisplay({ props }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mx-8 my-2">
      <figure className="w-1/6">
        <img src={props.imageURL} alt="product image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {`${props.brandName} ${props.itemName}`} ({props.packageSizeText})
        </h2>
        <p>
          Regular Price: ${props.price} (${props.unitPrice.toFixed(2)}/
          {props.compQty}
          {props.packageUnits})
        </p>
        {props.salePrice && (
          <div>
            <p>
              Sale Price: ${props.salePrice} (${props.saleUnitPrice.toFixed(2)}/
              {props.compQty}
              {props.packageUnits})
            </p>
            <p>Ends {props.saleEndDate.slice(0, 10)}</p>
          </div>
        )}
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To List</button>
        </div>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Create Alert</button>
        </div> */}
        <div className="card-actions justify-end">
          <button
            onClick={() => window.open(props.link, "_blank")}
            className="btn btn-primary"
          >
            Go to item
          </button>
        </div>
      </div>
    </div>
  );
}
// "_id":"643875c155dd510398a2bdc1",
// "productID":"21353457_EA",
// "brandName":"Liberte",
// "itemName":"Greek 5% M.F Plain Yogourt",
// "price":6.99,
// "unitPrice":1.0753846153846154,
// "saleUnitPrice":0.8415384615384615,
// "compQty":100,
// "packageUnits":"g",
// "packageSizeText":"650 g",
// "packageSizeNum":650,
// "date":"2023-04-13T21:36:01.238Z",
// "imageURL":"https://assets.shop.loblaws.ca/products/21353457/b3/en/front/21353457_front_a06_@2.png",
// "link":"https://www.realcanadiansuperstore.ca/greek-5-m-f-plain-yogourt/p/21353457_EA",
// "uom":"EA",
// "onSale":true,
// "saleType":"LIMIT",
// "saleText":"$5.47 LIMIT 4",
// "saleEndDate":"2023-04-19T00:00:00.000Z",
// "salePrice":5.47,
// "saleValue":1.5200000000000005,
// "multiQty":null,
// "limitQty":4,
// "createdAt":"2023-04-13T21:36:01.246Z",
// "updatedAt":"2023-04-13T21:36:01.246Z",
// "__v":0

export default ProductDisplay;
