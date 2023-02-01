const express=require("express")
const ProductRoute=express.Router()
const {ProductModule}=require("../models/Product.model")

ProductRoute.get("/",async(req,res)=>{
    const {q}=req.query
    let data=await ProductModule.find({category:q})
    res.send(data)
})

ProductRoute.post("/add",async(req,res)=>{
    let  selection1= [
        {
          image: "https://m.media-amazon.com/images/I/51TBDBLpnnL._AC_UL320_.jpg",
          Name: "Mens Jackets",
          mrp: "₹2,999",
          price: "1,439",
          discount: "(52% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 27.5 x 27.5 x 4 cm; 600 Grams\nDate First Available \u200f : \u200e 20 October 2022\nManufacturer \u200f : \u200e ABFRL\nASIN \u200f : \u200e B0BJVPLWRP\nItem model number \u200f : \u200e PCJKSBOFK53280\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e ABFRL, Aditya Birla Fashion and Retail Ltd,7th Floor, Skyline Icon Business Park, 86-92, Off A.K. Road, Marol Village, Andheri (East), Mumbai, Maharashtra 400059\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 27.5 x 27.5 x 4 Centimeters\nGeneric Name \u200f : \u200e Jackets\nBest Sellers Rank: #76,254 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#917 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/61nxroFTF8L._AC_UL320_.jpg",
          Name: "Mens Jackets",
          mrp: "₹2,499",
          price: "1,199",
          discount: "(52% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 27.5 x 27.5 x 4 cm; 600 Grams\nDate First Available \u200f : \u200e 20 October 2022\nManufacturer \u200f : \u200e ABFRL\nASIN \u200f : \u200e B0BJVRJYFH\nItem model number \u200f : \u200e PCJKSGLPZ80950\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e ABFRL, Aditya Birla Fashion and Retail Ltd,7th Floor, Skyline Icon Business Park, 86-92, Off A.K. Road, Marol Village, Andheri (East), Mumbai, Maharashtra 400059\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 27.5 x 27.5 x 4 Centimeters\nGeneric Name \u200f : \u200e Jackets\nBest Sellers Rank: #48,763 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#576 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/81fNSZ6IbOL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          reviewNumber: "1",
          mrp: "₹3,799",
          price: "2,289",
          discount: "(40% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHWWWPT5\nItem model number \u200f : \u200e 67524425\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #90,195 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#1,083 in Men's Jackets\nCustomer Reviews:\n5.0 out of 5 stars\n1 rating"
        },
        {
          image: "https://m.media-amazon.com/images/I/71VeuIuo3DL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          reviewNumber: "2",
          mrp: "₹3,799",
          price: "1,696",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHWXK75H\nItem model number \u200f : \u200e 67524416\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #173,214 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,178 in Men's Jackets\nCustomer Reviews:\n3.5 out of 5 stars\n2 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71vkyIbup5L._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹3,799",
          price: "1,696",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHWXGBY4\nItem model number \u200f : \u200e 67533001\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #73,222 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#882 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/81x074HSo-L._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹4,499",
          price: "2,008",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHWYY8QF\nItem model number \u200f : \u200e 67530307\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #331,065 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#4,073 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71KBn65yCQL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹4,499",
          price: "2,008",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHWX4DZZ\nItem model number \u200f : \u200e 67530011\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #215,297 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,720 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71zDDAztirL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹4,499",
          price: "2,008",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 11 October 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0BHX65GQ4\nItem model number \u200f : \u200e 67485162\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #72,018 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#869 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71KgHH-jPHL._AC_UL320_.jpg",
          Name: "Mens AS_High Neck Jacket_4799",
          mrp: "₹4,799",
          price: "2,149",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 55.9 x 45.7 x 12.7 cm; 400 Grams\nDate First Available \u200f : \u200e 6 October 2022\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd.\nASIN \u200f : \u200e B0BHJ55V3Y\nItem model number \u200f : \u200e ASAEOJK4826\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd., Venture Trading Pvt. Ltd. 144/1b, Sri Sai Anusuya Nilaya, Near Kaveri Water Tank, A Narayanapura, BENGALURU Bangalore KA 560016 IN\nPacker \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nImporter \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 55.9 x 45.7 x 12.7 Centimeters\nGeneric Name \u200f : \u200e High Neck Jacket\nBest Sellers Rank: #191,750 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,402 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71e5hCt1ZDL._AC_UL320_.jpg",
          Name: "Men Jacket",
          reviewNumber: "1",
          mrp: "₹3,999",
          price: "1,789",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 55.9 x 45.7 x 12.7 cm; 400 Grams\nDate First Available \u200f : \u200e 6 October 2022\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd.\nASIN \u200f : \u200e B0BHJ8V5JV\nItem model number \u200f : \u200e ASAEOJK4819\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd., Venture Trading Pvt. Ltd. 144/1b, Sri Sai Anusuya Nilaya, Near Kaveri Water Tank, A Narayanapura, BENGALURU Bangalore KA 560016 IN\nPacker \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nImporter \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 55.9 x 45.7 x 12.7 Centimeters\nGeneric Name \u200f : \u200e Quilted Jacket\nBest Sellers Rank: #125,026 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#1,554 in Men's Jackets\nCustomer Reviews:\n5.0 out of 5 stars\n1 rating"
        },
        {
          image: "https://m.media-amazon.com/images/I/71oWAYLC0yL._AC_UL320_.jpg",
          Name: "Men AS_High Neck Jacket_5499",
          reviewNumber: "1",
          mrp: "₹5,499",
          price: "2,459",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 55.9 x 45.7 x 12.7 cm; 400 Grams\nDate First Available \u200f : \u200e 6 October 2022\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd.\nASIN \u200f : \u200e B0BHJ9H9MX\nItem model number \u200f : \u200e ASAEOJK4814\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd., Venture Trading Pvt. Ltd. 144/1b, Sri Sai Anusuya Nilaya, Near Kaveri Water Tank, A Narayanapura, BENGALURU Bangalore KA 560016 IN\nPacker \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nImporter \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 55.9 x 45.7 x 12.7 Centimeters\nGeneric Name \u200f : \u200e High Neck Jacket\nBest Sellers Rank: #62,303 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#721 in Men's Jackets\nCustomer Reviews:\n5.0 out of 5 stars\n1 rating"
        },
        {
          image: "https://m.media-amazon.com/images/I/71Hk3+Z3beL._AC_UL320_.jpg",
          Name: "Mens AS_Quilted Jacket_3999",
          mrp: "₹3,999",
          price: "1,789",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 55.9 x 45.7 x 12.7 cm; 400 Grams\nDate First Available \u200f : \u200e 6 October 2022\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd.\nASIN \u200f : \u200e B0BHJ8QCXL\nItem model number \u200f : \u200e ASAEOJK4818\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Ventura Trading Pvt Ltd., Venture Trading Pvt. Ltd. 144/1b, Sri Sai Anusuya Nilaya, Near Kaveri Water Tank, A Narayanapura, BENGALURU Bangalore KA 560016 IN\nPacker \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nImporter \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 55.9 x 45.7 x 12.7 Centimeters\nGeneric Name \u200f : \u200e Quilted Jacket\nBest Sellers Rank: #213,134 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,691 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/81PJIxcrYML._AC_UL320_.jpg",
          Name: "Men's Quilted Jacket",
          reviewNumber: "3",
          mrp: "₹3,999",
          price: "1,259",
          discount: "(69% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 5 x 10 cm; 50 Grams\nDate First Available \u200f : \u200e 28 April 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B09Z36KNKJ\nItem model number \u200f : \u200e AW22-SY-LW-JK-06\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110177\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110177\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 5 x 10 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #11,336 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#162 in Men's Jackets\nCustomer Reviews:\n4.6 out of 5 stars\n3 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61IQm14e-xL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          reviewNumber: "1",
          mrp: "₹2,999",
          price: "1,439",
          discount: "(52% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 27.5 x 27.5 x 4 cm; 600 Grams\nDate First Available \u200f : \u200e 16 August 2022\nManufacturer \u200f : \u200e ABFRL\nASIN \u200f : \u200e B0B9SLBPYV\nItem model number \u200f : \u200e PCJKSBOF386277\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e ABFRL, Aditya Birla Fashion and Retail Ltd,7th Floor, Skyline Icon Business Park, 86-92, Off A.K. Road, Marol Village, Andheri (East), Mumbai, Maharashtra 400059\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 27.5 x 27.5 x 4 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #58,755 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#681 in Men's Jackets\nCustomer Reviews:\n5.0 out of 5 stars\n1 rating"
        },
        {
          image: "https://m.media-amazon.com/images/I/61FK0-+FKIL._AC_UL320_.jpg",
          Name: "Men's Solid Padded Jacket",
          reviewNumber: "8",
          mrp: "₹7,299",
          price: "1,459",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 23 August 2022\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B0BBLYYBCM\nItem model number \u200f : \u200e RFJ0196\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #7,465 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#112 in Men's Jackets\nCustomer Reviews:\n3.6 out of 5 stars\n8 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71Jg1PvPymL._AC_UL320_.jpg",
          Name: "Men's Regular Jacket (ASAEOSS3990_Olive_M)",
          mrp: "₹2,299",
          price: "987",
          discount: "(57% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 25 x 20 x 4.5 cm; 500 Grams\nDate First Available \u200f : \u200e 19 September 2022\nManufacturer \u200f : \u200e G S Settia and bros Pvt Ltd\nASIN \u200f : \u200e B0BFRKPY5B\nItem model number \u200f : \u200e ASAEOSS3990\nCountry of Origin \u200f : \u200e India\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e G S Settia and bros Pvt Ltd, ARVIND LIFESTYLE BRANDS LIMITED, DU PARC TRINITY, 8TH FLOOR, 17, MG ROAD BANGALORE 560001\nPacker \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nImporter \u200f : \u200e Arvind Fashions Ltd, Duparc Trinity Bengaluru 560001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 25 x 20 x 4.5 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e sweat shirt\nBest Sellers Rank: #208,564 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,623 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71yfmUYf-EL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹5,499",
          price: "3,299",
          discount: "(40% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 10 August 2022\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B0B97P27HV\nItem model number \u200f : \u200e 52212801\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Viet Duc International Investment Company Ltd 2 Hamlet, Xuan Tam Commune, Xuan Loc District 76620 Dong Nai\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #544,768 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#6,261 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/71tFaEprprL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          reviewNumber: "2",
          mrp: "₹2,999",
          price: "869",
          discount: "(71% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 5 x 10 cm; 50 Grams\nDate First Available \u200f : \u200e 28 April 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B09Z37LXX5\nItem model number \u200f : \u200e AZ-TR-AW02\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110289\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110289\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 5 x 10 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #43,676 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#521 in Men's Jackets\nCustomer Reviews:\n3.0 out of 5 stars\n2 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61GxKGb+PeL._AC_UL320_.jpg",
          Name: "Men Jacket",
          reviewNumber: "9",
          mrp: "₹8,599",
          price: "1,719",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 23 August 2022\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B0BBLV7WDQ\nItem model number \u200f : \u200e RFJ0187\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #2,787 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#45 in Men's Jackets\nCustomer Reviews:\n4.1 out of 5 stars\n9 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71X4hVqxjNL._AC_UL320_.jpg",
          Name: "Men's Quilted Jacket",
          reviewNumber: "1",
          mrp: "₹4,999",
          price: "1,179",
          discount: "(76% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 5 x 5 x 5 cm; 50 Grams\nDate First Available \u200f : \u200e 13 June 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B0B3XB5RP2\nItem model number \u200f : \u200e AW20-QB-SY-01\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Amazon Brand - Symbol, INDRA HOSIERY MILLS,PLOT NO. 31,32,33,34,35,36, BEHIND NAGESH BUILDING,SHARMAN ENCLAVE, NEAR JALANDHAR BYE PASS, LUDHIANA, PUNJAB-141007\nPacker \u200f : \u200e INDRA HOSIERY MILLS,PLOT NO. 31,32,33,34,35,36, BEHIND NAGESH BUILDING,SHARMAN ENCLAVE, NEAR JALANDHAR BYE PASS, LUDHIANA, PUNJAB-141029\nImporter \u200f : \u200e INDRA HOSIERY MILLS,PLOT NO. 31,32,33,34,35,36, BEHIND NAGESH BUILDING,SHARMAN ENCLAVE, NEAR JALANDHAR BYE PASS, LUDHIANA, PUNJAB-141029\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 50 x 50 x 50 Millimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #166,467 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,092 in Men's Jackets\nCustomer Reviews:\n5.0 out of 5 stars\n1 rating"
        },
        {
          image: "https://m.media-amazon.com/images/I/71S8+V5JEQL._AC_UL320_.jpg",
          Name: "Men's Windcheater",
          reviewNumber: "1,532",
          mrp: "₹2,999",
          price: "1,019",
          discount: "(66% off)",
          selection2: "Product details\nDate First Available \u200f : \u200e 22 November 2021\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B08DG9K6K6\nItem model number \u200f : \u200e AW20-LW-SY-02\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nGeneric Name \u200f : \u200e Windbreaker Jacket\nBest Sellers Rank: #7,415 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#110 in Men's Jackets\nCustomer Reviews:\n3.9 out of 5 stars\n1,532 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61HVNfXCpUL._AC_UL320_.jpg",
          Name: "Men's Full Sleeve Regular Fit Nylon Casual Jacket",
          reviewNumber: "13",
          mrp: "₹3,999",
          price: "799",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 25 x 18 x 3 cm; 270 Grams\nDate First Available \u200f : \u200e 25 September 2021\nManufacturer \u200f : \u200e Maruti Enterprises\nASIN \u200f : \u200e B09H4RKWCQ\nItem part number \u200f : \u200e 6-BM-JKT-FS-20522-1\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Maruti Enterprises, Maruti Enterprises SRS-167,National Market,Peeragarhi,New Delhi-110087\nPacker \u200f : \u200e Maruti Enterprises SRS-167,National Market,Peeragarhi,New Delhi-110087\nItem Weight \u200f : \u200e 270 g\nItem Dimensions LxWxH \u200f : \u200e 25 x 18 x 3 Centimeters\nBest Sellers Rank: #194,714 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,446 in Men's Jackets\nCustomer Reviews:\n4.0 out of 5 stars\n13 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61dGo-UEt7L._AC_UL320_.jpg",
          Name: "Men's Solid Regular Jacket",
          reviewNumber: "2,905",
          mrp: "₹3,999",
          price: "799",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 25 x 22 x 3 cm; 350 Grams\nDate First Available \u200f : \u200e 21 November 2022\nManufacturer \u200f : \u200e Maruti Enterprises\nASIN \u200f : \u200e B0BN21BJDY\nItem part number \u200f : \u200e A-BM-JKT-FS-19972-YELLOW-36\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Maruti Enterprises, SRS-167, National Market, Peeragarhi,New Delhi 98101-18100, For Any Query Please Contact us :- mybenmartincare@gmail.com\nPacker \u200f : \u200e Maruti Enterprises SRS-167, National Market, Peeragarhi,New Delhi 98101-18100, For Any Query Please Contact us :- mybenmartincare@gmail.com\nItem Weight \u200f : \u200e 350 g\nItem Dimensions LxWxH \u200f : \u200e 25 x 22 x 3 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nBest Sellers Rank: #1,934 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#32 in Men's Jackets\nCustomer Reviews:\n3.6 out of 5 stars\n2,905 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61XH6uYloUL._AC_UL320_.jpg",
          Name: "Women’s Casual Cotton Zipper Sweatshirt Relaxed Fit for Everyday Wear | Full Sleeve | Latest Stylish Jacket Crafted with Comfort Fit and High Performance for Regular Wear",
          reviewNumber: "1",
          mrp: "₹1,699",
          price: "799",
          discount: "(53% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 26 x 23 x 1 cm; 300 Grams\nDate First Available \u200f : \u200e 10 September 2022\nManufacturer \u200f : \u200e Campussutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B0BDVJLQ3Y\nItem part number \u200f : \u200e WIN22_ZHHH_W_PLN_GRBL_S\nDepartment \u200f : \u200e Women\nManufacturer \u200f : \u200e Campussutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022, Campussutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nPacker \u200f : \u200e Campussutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nItem Weight \u200f : \u200e 300 g\nGeneric Name \u200f : \u200e Sweatshirt\nBest Sellers Rank: #454,282 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#2,307 in Women's Sweatshirts\nCustomer Reviews:\n1.0 out of 5 stars\n1 rating|"
        },
        {
          image: "https://m.media-amazon.com/images/I/610ysTt7-3L._AC_UL320_.jpg",
          Name: "Men’s Cotton Jacket Regular Fit For Casual Wear | Full Sleeve |Cotton Jacket Crafted With Comfort Fit",
          reviewNumber: "26",
          mrp: "₹2,399",
          price: "790",
          discount: "(67% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 27 x 26 x 1 cm; 300 Grams\nDate First Available \u200f : \u200e 8 September 2022\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B0BDLL6JD2\nItem part number \u200f : \u200e AW22_CSM-AW-HD4036_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022, Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nPacker \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nItem Weight \u200f : \u200e 300 g\nBest Sellers Rank: #9,675 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#146 in Men's Jackets\nCustomer Reviews:\n3.7 out of 5 stars\n26 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61kx+zxo2VL._AC_UL320_.jpg",
          Name: "Men's Black Regular Fit Activewear Jacket For Winter Wear | Dri-Fit Standing Collar Full Sleeve Zipper Casual Sports Man Western Stylish Men",
          reviewNumber: "9",
          mrp: "₹2,499",
          price: "704",
          discount: "(72% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 27 x 26 x 1 cm; 300 Grams\nDate First Available \u200f : \u200e 8 September 2022\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B0BDLTKFNC\nItem part number \u200f : \u200e AW22_JRHJK_M_PLN_BL_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022, Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nPacker \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nItem Weight \u200f : \u200e 300 g\nBest Sellers Rank: #19,887 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#260 in Men's Jackets\nCustomer Reviews:\n3.5 out of 5 stars\n9 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61IkU6TzWZL._AC_UL320_.jpg",
          Name: "Men’s Varsity Jacket Regular Fit For Casual Wear | Low-Cut Standing Collar | Full Sleeve | Latest Stylish Varsity Jacket Crafted With Comfort Fit And High Performance For Everyday Wear",
          reviewNumber: "4",
          mrp: "₹1,999",
          price: "713",
          discount: "(64% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 27 x 26 x 1 cm; 300 Grams\nDate First Available \u200f : \u200e 8 September 2022\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B0BDLH8XQV\nItem part number \u200f : \u200e AW22_HVAR_M_PLN_BLGR_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022, Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nPacker \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nItem Weight \u200f : \u200e 300 g\nBest Sellers Rank: #32,680 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#392 in Men's Jackets\nCustomer Reviews:\n4.7 out of 5 stars\n4 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71ylqjAWYvL._AC_UL320_.jpg",
          Name: "Men’s Cotton Denim Jacket Regular Fit For Casual Wear | Full Sleeve | Button Closure | Latest Stylish Wear Denim Jacket Crafted With Comfort Fit For Everyday Wear",
          reviewNumber: "24",
          mrp: "₹2,599",
          price: "939",
          discount: "(64% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 27 x 26 x 1 cm; 300 Grams\nDate First Available \u200f : \u200e 8 September 2022\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B0BDLKYTDZ\nItem part number \u200f : \u200e AW22_JKDENIM_M_PLN_YEBL_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022, Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nPacker \u200f : \u200e Campus Sutra Retail private limited,2nd floor, 117/A,5th main road,yeshwanthpur,Bengaluru 560022\nItem Weight \u200f : \u200e 300 g\nBest Sellers Rank: #11,774 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#165 in Men's Jackets\nCustomer Reviews:\n3.3 out of 5 stars\n24 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61Dzm1VHR+L._AC_UL320_.jpg",
          Name: "Men Jacket",
          reviewNumber: "56",
          mrp: "₹7,299",
          price: "1,459",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 23 August 2022\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B0BBLXWP47\nItem model number \u200f : \u200e RFJ0264\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #1,279 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#17 in Men's Jackets\nCustomer Reviews:\n3.8 out of 5 stars\n56 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61oEx2EEkML._AC_UL320_.jpg",
          Name: "Men's Solid Padded Jacket",
          reviewNumber: "16",
          mrp: "₹6,499",
          price: "1,299",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 23 August 2022\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B0BBLTTPNV\nItem model number \u200f : \u200e RFJ0157\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #2,768 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#44 in Men's Jackets\nCustomer Reviews:\n3.3 out of 5 stars\n16 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71vBuUDMu9L._AC_UL320_.jpg",
          Name: "Men's Quilted",
          reviewNumber: "2,296",
          mrp: "₹2,999",
          price: "869",
          discount: "(71% off)",
          selection2: "Product details\nDate First Available \u200f : \u200e 28 October 2020\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B08DGDMCSX\nItem model number \u200f : \u200e AZ-TR-AW01_Camel_M\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nGeneric Name \u200f : \u200e Quilted Sleeveless Bomber Jacket\nBest Sellers Rank: #1,942 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#33 in Men's Jackets\nCustomer Reviews:\n3.9 out of 5 stars\n2,296 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71B+qTda1uL._AC_UL320_.jpg",
          Name: "Men Windbreaker Jacket",
          reviewNumber: "905",
          mrp: "₹2,599",
          price: "729",
          discount: "(72% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 5 x 10 cm; 50 Grams\nDate First Available \u200f : \u200e 28 April 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B09Z367TD4\nItem model number \u200f : \u200e AW20-LW-SY-01\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 5 x 10 Centimeters\nGeneric Name \u200f : \u200e Windbreaker Jacket\nBest Sellers Rank: #6,498 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#94 in Men's Jackets\nCustomer Reviews:\n3.8 out of 5 stars\n905 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/81YCRMt6zVL._AC_UL320_.jpg",
          Name: "Men's Quilted Jacket",
          reviewNumber: "244",
          mrp: "₹3,999",
          price: "1,219",
          discount: "(70% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 1.3 x 1.3 x 1.3 cm; 500 Grams\nDate First Available \u200f : \u200e 25 May 2021\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B095SWGZWD\nItem model number \u200f : \u200e AW21-SY-QWH-153\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110044\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 13 x 13 x 13 Millimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #61,629 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#712 in Men's Jackets\nCustomer Reviews:\n4.0 out of 5 stars\n244 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71ALjjRlI3L._AC_UL320_.jpg",
          Name: "Men's Quilted Jacket",
          reviewNumber: "5",
          mrp: "₹3,699",
          price: "1,139",
          discount: "(69% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 5 x 10 cm; 50 Grams\nDate First Available \u200f : \u200e 28 April 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B09Z37TC7J\nItem model number \u200f : \u200e AW20-QB-SY-01\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110094\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110094\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 5 x 10 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #15,102 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#205 in Men's Jackets\nCustomer Reviews:\n4.4 out of 5 stars\n5 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71blLS+dA0L._AC_UL320_.jpg",
          Name: "Mens Jacket",
          reviewNumber: "558",
          mrp: "₹3,999",
          price: "1,319",
          discount: "(67% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 5 x 10 cm; 50 Grams\nDate First Available \u200f : \u200e 28 April 2022\nManufacturer \u200f : \u200e Amazon Brand - Symbol\nASIN \u200f : \u200e B09Z36PB1K\nItem model number \u200f : \u200e AW20-QH-SY-06\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Amazon Brand - Symbol, CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110100\nPacker \u200f : \u200e CLOUDTAIL INDIA PRIVATE LIMITED, Ground Floor, Rear Portion, H-9, Block B-1, Mohan Cooperative Industrial Area, Mathura Road, New Delhi-110100\nItem Weight \u200f : \u200e 50 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 5 x 10 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #5,522 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#82 in Men's Jackets\nCustomer Reviews:\n4.0 out of 5 stars\n558 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71IZedh4FmL._AC_UL320_.jpg",
          Name: "Men Solid Stylish Casual Hooded Sports Jacket(AZ22_JRHNZP_M_PLN_BL)",
          reviewNumber: "97",
          mrp: "₹2,499",
          price: "845",
          discount: "(66% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 30 x 22 x 3.5 cm; 450 Grams\nDate First Available \u200f : \u200e 28 February 2022\nManufacturer \u200f : \u200e Campussutra Retail private limited,2nd floor, 117/A,5th main road,Yeshwanthpur,Bengaluru 560022\nASIN \u200f : \u200e B09TL2TKZP\nItem part number \u200f : \u200e AZ22_JRHNZP_M_PLN_BL_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Campussutra Retail private limited,2nd floor, 117/A,5th main road,Yeshwanthpur,Bengaluru 560022, Campussutra Retail private limited,2nd floor, 117/A,5th main road,Yeshwanthpur,Bengaluru 560023\nItem Weight \u200f : \u200e 450 g\nNet Quantity \u200f : \u200e 1.00 count\nBest Sellers Rank: #9,204 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#140 in Men's Jackets\nCustomer Reviews:\n4.2 out of 5 stars\n97 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/81868XHl5UL._AC_UL320_.jpg",
          Name: "Mens Jacket",
          mrp: "₹3,999",
          price: "1,785",
          discount: "(55% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 20 x 25 x 9 cm; 600 Grams\nDate First Available \u200f : \u200e 21 October 2021\nManufacturer \u200f : \u200e Puma\nASIN \u200f : \u200e B09JZMT1VM\nItem model number \u200f : \u200e 84777407\nDepartment \u200f : \u200e Mens\nManufacturer \u200f : \u200e Puma, Triangle Apparels 6 No. 25/26, Industrial Suburb Yeshwanthpur 560022 Bangalore\nPacker \u200f : \u200e Puma Sports India Pvt Ltd\nImporter \u200f : \u200e Puma Sports India Pvt Ltd\nItem Weight \u200f : \u200e 600 g\nItem Dimensions LxWxH \u200f : \u200e 20 x 25 x 9 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #401,480 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#4,835 in Men's Jackets"
        },
        {
          image: "https://m.media-amazon.com/images/I/6139uQVX0vL._AC_UL320_.jpg",
          Name: "Red Colorblock Regular Fit Jacket",
          reviewNumber: "14",
          mrp: "₹5,699",
          price: "2,849",
          discount: "(50% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 12 x 6 x 4 cm; 400 Grams\nDate First Available \u200f : \u200e 8 December 2021\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nASIN \u200f : \u200e B09N8WJFHZ\nItem model number \u200f : \u200e LMJK000032_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058, #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nPacker \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nImporter \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 12 x 6 x 4 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #102,666 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#873 in Women's Jackets\nCustomer Reviews:\n4.1 out of 5 stars\n14 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/81LwUDDNiFL._AC_UL320_.jpg",
          Name: "Men's Jacket",
          reviewNumber: "30",
          mrp: "₹5,999",
          price: "2,099",
          discount: "(65% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 6 x 4 cm; 400 Grams\nDate First Available \u200f : \u200e 7 September 2021\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nASIN \u200f : \u200e B09FLS26NZ\nItem model number \u200f : \u200e LMJK000038_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058, #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nPacker \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nImporter \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 6 x 4 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #57,013 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#660 in Men's Jackets\nCustomer Reviews:\n3.5 out of 5 stars\n30 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/813RblUzmnL._AC_UL320_.jpg",
          Name: "Men's Jacket",
          reviewNumber: "22",
          mrp: "₹5,999",
          price: "2,099",
          discount: "(65% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 6 x 4 cm; 400 Grams\nDate First Available \u200f : \u200e 7 September 2021\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nASIN \u200f : \u200e B09FLQKCCB\nItem model number \u200f : \u200e LMJK000037_M\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058, #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nPacker \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nImporter \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 6 x 4 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #18,593 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#237 in Men's Jackets\nCustomer Reviews:\n3.4 out of 5 stars\n22 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71JXs4uHNhL._AC_UL320_.jpg",
          Name: "Men's Trench Coat",
          reviewNumber: "7",
          mrp: "₹5,499",
          price: "3,059",
          discount: "(44% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 35.6 x 21.6 x 7.6 cm; 400 Grams\nDate First Available \u200f : \u200e 3 August 2021\nManufacturer \u200f : \u200e GLOBAL FASHION UK LTD ROOM 1305A SINO CTR 582-592 NATHAN ROAD KOWLOON 94089\nASIN \u200f : \u200e B09BRGZK29\nItem model number \u200f : \u200e USJCKS0030\nDepartment \u200f : \u200e mens\nManufacturer \u200f : \u200e GLOBAL FASHION UK LTD ROOM 1305A SINO CTR 582-592 NATHAN ROAD KOWLOON 94089, GLOBAL FASHION UK LTD ROOM 1305A SINO CTR 582-592 NATHAN ROAD KOWLOON 94089\nPacker \u200f : \u200e GLOBAL FASHION UK LTD ROOM 1305A SINO CTR 582-592 NATHAN ROAD KOWLOON 94089\nImporter \u200f : \u200e Arvind Fashions Limited, Du Parc Trinity, M.G. Road, Bangalore, Karnataka, India, 560001\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 35.6 x 21.6 x 7.6 Centimeters\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #222,247 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#233 in Men's Coats\nCustomer Reviews:\n4.2 out of 5 stars\n7 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/61kngipQa9L._AC_UL320_.jpg",
          Name: "Men Brown Suede Windcheater Outdoor Bomber Jacket",
          reviewNumber: "24",
          mrp: "₹3,499",
          price: "1,127",
          discount: "(68% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 22 x 30 x 3.5 cm; 300 Grams\nDate First Available \u200f : \u200e 16 October 2021\nASIN \u200f : \u200e B09JLZY7XY\nItem part number \u200f : \u200e AZ_WIN21CS_CSMAWJK060TN_S\nDepartment \u200f : \u200e Men\nItem Weight \u200f : \u200e 300 g\nItem Dimensions LxWxH \u200f : \u200e 22 x 30 x 3.5 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nBest Sellers Rank: #4,461 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#64 in Men's Jackets\nCustomer Reviews:\n3.1 out of 5 stars\n24 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/51XK1GAQYsL._AC_UL320_.jpg",
          Name: "Men Solid Full Sleeve Black Stylish Sports Jacket",
          reviewNumber: "32",
          mrp: "₹2,499",
          price: "704",
          discount: "(72% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 22 x 30 x 3.5 cm; 300 Grams\nDate First Available \u200f : \u200e 16 October 2021\nASIN \u200f : \u200e B09JLYG6T5\nItem part number \u200f : \u200e AZ_WIN21CS_JRHJK_M_PLN_BL_S\nDepartment \u200f : \u200e Men\nItem Weight \u200f : \u200e 300 g\nItem Dimensions LxWxH \u200f : \u200e 22 x 30 x 3.5 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nBest Sellers Rank: #25,970 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#326 in Men's Jackets\nCustomer Reviews:\n3.5 out of 5 stars\n32 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/614WYWanM+L._AC_UL320_.jpg",
          Name: "Men Blue Colourblocked Windcheater Padded Hooded Jacket",
          reviewNumber: "25",
          mrp: "₹3,499",
          price: "986",
          discount: "(72% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 22 x 30 x 3.5 cm; 300 Grams\nDate First Available \u200f : \u200e 16 October 2021\nASIN \u200f : \u200e B09JLWT1NY\nItem part number \u200f : \u200e AZ_WIN21CS_CSM-AW-JK0527_S\nDepartment \u200f : \u200e Men\nItem Weight \u200f : \u200e 300 g\nItem Dimensions LxWxH \u200f : \u200e 22 x 30 x 3.5 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nBest Sellers Rank: #70,816 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#847 in Men's Jackets\nCustomer Reviews:\n3.7 out of 5 stars\n25 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71XqvM6gCLL._AC_UL320_.jpg",
          Name: "Grey Solid Regular Fit Jacket",
          reviewNumber: "6",
          mrp: "₹5,399",
          price: "2,699",
          discount: "(50% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 10 x 6 x 4 cm; 400 Grams\nDate First Available \u200f : \u200e 7 September 2021\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nASIN \u200f : \u200e B09FLSJNTH\nItem model number \u200f : \u200e LMJK000023_S\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058, #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nPacker \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nImporter \u200f : \u200e #101/1A, Thigalarapalya T Juction, Karivobanahalli Village, Near Peenya 2 Stage, Bangalore - 560058\nItem Weight \u200f : \u200e 400 g\nItem Dimensions LxWxH \u200f : \u200e 10 x 6 x 4 Centimeters\nNet Quantity \u200f : \u200e 1.00 count\nGeneric Name \u200f : \u200e Jacket\nBest Sellers Rank: #258,306 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#3,240 in Men's Jackets\nCustomer Reviews:\n3.4 out of 5 stars\n6 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71dYBGHaRJL._AC_UL320_.jpg",
          Name: "Men's Jacket",
          reviewNumber: "66",
          mrp: "₹5,799",
          price: "1,159",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 6 July 2021\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B098QT8ZXD\nItem model number \u200f : \u200e RFJ0174\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Padded Jacket\nBest Sellers Rank: #51,427 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#599 in Men's Jackets\nCustomer Reviews:\n3.7 out of 5 stars\n66 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/71EcRKfbOrL._AC_UL320_.jpg",
          Name: "Men's Casual Jacket",
          reviewNumber: "43",
          mrp: "₹5,799",
          price: "1,159",
          discount: "(80% off)",
          selection2: "Product details\nProduct Dimensions \u200f : \u200e 32 x 28 x 7 cm; 500 Grams\nDate First Available \u200f : \u200e 6 July 2021\nManufacturer \u200f : \u200e Red Tape\nASIN \u200f : \u200e B098QWQSGB\nItem model number \u200f : \u200e RFJ0147\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Red Tape, Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nPacker \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nImporter \u200f : \u200e Importer:-MIRZA INTERNATIONAL LTD., 14/6, CIVIL LINES, KANPUR-208001\nItem Weight \u200f : \u200e 500 g\nItem Dimensions LxWxH \u200f : \u200e 32 x 28 x 7 Centimeters\nGeneric Name \u200f : \u200e Padded Jacket\nBest Sellers Rank: #31,773 in Clothing & Accessories (See Top 100 in Clothing & Accessories)\n#382 in Men's Jackets\nCustomer Reviews:\n3.8 out of 5 stars\n43 ratings"
        },
        {
          image: "https://m.media-amazon.com/images/I/81pHtCmxKtL._AC_UL320_.jpg",
          Name: "Men Jacket",
          mrp: "₹7,499",
          price: "3,029",
          discount: "(60% off)",
          selection2: "Product details\nPackage Dimensions \u200f : \u200e 49.79 x 39.7 x 18.3 cm; 870 Grams\nDate First Available \u200f : \u200e 5 September 2019\nManufacturer \u200f : \u200e Park Avenue\nASIN \u200f : \u200e B07XG8YYLB\nItem model number \u200f : \u200e PMJP02355-B7_Dark Blue_104\nDepartment \u200f : \u200e Men\nManufacturer \u200f : \u200e Park Avenue\nItem Weight \u200f : \u200e 870 g\nGeneric Name \u200f : \u200e Jacket"
        }
      ]
    for(let i=0;i<selection1.length;i++){
      selection1[i].category="Men Clothing"
      selection1[i].rating=((Math.random() * (5 - 3) ) + 2).toPrecision(2)
    }
   await ProductModule.insertMany([
        ...selection1
    ]).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
})

module.exports={
    ProductRoute
}