const express=require("express")
const ProductRoute=express.Router()
const {ProductModule}=require("../models/Product.model")

ProductRoute.get("/",async(req,res)=>{
    const {q}=req.query
    let data=await ProductModule.find({category:q})
    res.send(data)
})

ProductRoute.post("/add",async(req,res)=>{
    let selection1= [
        {
          image: "https://m.media-amazon.com/images/I/91YBoLo16ZL._AC_UL320_.jpg",
          Name: "Women's Crepe A-Line Maxi Dress (Smocked}",
          reviewNumber: "391",
          mrp: "₹2,330",
          price: "388",
          discount: "(83% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Relaxed"
            },
            {
              name: "Offshoulder dress with puffed sleeves, smocked bodice and ruffles wrap skirt"
            },
            {
              name: "Floral printed fabric"
            },
            {
              name: "Can be be styled both as a breezy casual outfit and a playful party outfit."
            },
            {
              name: "Garment is made with relaxed fit. Model Model is height 5'9 with bust 34 and is wearing size S."
            },
            {
              name: "Garment is made of crepe, which drapes well on all body types"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61IId18ZazL._AC_UL320_.jpg",
          Name: "Women's Pure Georgette sequence saree with unstiched blouse piece(Free size)",
          reviewNumber: "1,155",
          mrp: "₹3,999",
          price: "899",
          discount: "(78% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Saree Material: Georgette | Blouse Material: Banglory Silk"
            },
            {
              name: "Saree Length:-5.5 ,Blouse Length:-0.80. Blouse is attached with saree. No Seprate Blouse. Blouse to be cut from saree. Blouse is unstitched Fabric."
            },
            {
              name: "Saree Work : Full Sequence , Blouse Work : Plain"
            },
            {
              name: "Occasion : Party Wear , Wedding Wear , Use For All Festival Saree"
            },
            {
              name: "Work: Sequins work with border to border double run thread with stylish look."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61ARin+9vLL._AC_UL320_.jpg",
          Name: "Women's Sequence Work Georgette Saree With Blouse Piece (Kriti Sanon Sequence)",
          reviewNumber: "37",
          mrp: "₹2,999",
          price: "999",
          discount: "(67% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric : Georgette || Type : Sequenced Work With Lace Border"
            },
            {
              name: "Colour : : Black || Design : Sequence Work"
            },
            {
              name: "Saree Length : 5.5 Mtr + Blouse Length : 0.80 Mtr Rasal Net + 0.80 Mtr Raw Silk Black (Unstitched)"
            },
            {
              name: "Whole Saree is Sequence Worked and Exact As Shown In Image & This is Very Soft Fabric So Comfertable to wear"
            },
            {
              name: "This Saree is Suitable For Get Just Stylish Casual look in office or work, normal occasions, family get together, regular or daily Use or gifting to loved one"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/410Kw-Y21XL._AC_UL320_.jpg",
          Name: "Ready To Wear Sarees For Women With Unstitched Blouse.",
          reviewNumber: "18",
          mrp: "₹2,399",
          price: "899",
          discount: "(63% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Belt Is Not Included With Sari || This Is Pre Stitched Saree Ready To Wear || You Will Get Ready For Party In One Minute Saree For Women ||"
            },
            {
              name: "Saree Fabric -Chinon Polyester || Type- 1 Minute Saree Ready To Wear || Blouse -polyester"
            },
            {
              name: "Saari Length -5.5m Free Size || Blouse-0.80 Unhitch || Colour -pink Sarees For Women Latest Design"
            },
            {
              name: "This Pre Draped Saree Is Very Useful As Party Wear Saree . This Pink Saree Is Suitable For Girls"
            },
            {
              name: "Other Details : Soft Finished Comfortable To Wear And Easy To Take Fleets } {size-free Size} { Saree Is Not Transparent } Package Included: 1 Saree With 1 Blouse Piece"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/910G6lheEMS._AC_UL320_.jpg",
          Name: "Women's Kanchipuram Silk Woven Half and Half Sare With Blouse Piece",
          reviewNumber: "3,869",
          mrp: "₹2,159",
          price: "489",
          discount: "(77% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Saree details- Saree Color: Multicolor (Rama & Pink)| Material: Kanchipuram Silk | Length: 6 yards | Work Type: Zari Woven Work"
            },
            {
              name: "Blouse details- Color: Rama | Material: Silk Blend| Length- 0.8m | Work Type: Zari Woven"
            },
            {
              name: "Border & Pallu details- Border Color: Golden | Border Work Type: Woven design | Pallu Color: Pink & Golden| Pallu Work Type: Zari Woven"
            },
            {
              name: "Wash Care: Dry Clean Only"
            },
            {
              name: "Weave Type: Kanchipuram | Included components: Saree with Blouse Piece | Type : Half and Half Saree"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61O07oBRsJL._AC_UL320_.jpg",
          Name: "Women's Anarkali Maxi Gown",
          reviewNumber: "341",
          mrp: "₹2,999",
          price: "999",
          discount: "(67% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Style ; Anarkali Dress ; Long Gown"
            },
            {
              name: "Fabric :- Velvet , Work :- Embroidered, Dupatta :- Yes"
            },
            {
              name: "Gown :- Free Size"
            },
            {
              name: "Wash Care :- Dry Clean Or Normal Hand wash"
            },
            {
              name: "Disclaimer :- Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Bn8P11wwL._AC_UL320_.jpg",
          Name: "Women Kurta with Pant & Dupatta",
          reviewNumber: "682",
          mrp: "₹2,599",
          price: "759",
          discount: "(71% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Straight"
            },
            {
              name: "Kurta Set Fabric: Banarasi Silk"
            },
            {
              name: "Style: Straight || Length: Calf Length || Sleeves: 3/4"
            },
            {
              name: "This set includes: Kurta with Bottomwear & Dupatta"
            },
            {
              name: "Ocassion: Traditional wear, Casual Wear, party wear, evening wear"
            },
            {
              name: "Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61wlFY2BdJL._AC_UL320_.jpg",
          Name: "Women's Anarkali Long Gown With Dupatta",
          reviewNumber: "Another way to buy",
          mrp: "₹4,999",
          price: "1,235",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: Regular Hand And Machine Wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Gown Fabric :Pure Georgette ; Bottom : Santoon ; Inner : Santoon ; Duppta : Nazmeen"
            },
            {
              name: "Free Size (Length : 52 | Waist : 38 | Chest/Bust : 42) | Semi-stitched freesize | Flare : 2.5 Meters, Maximum Size Up To Xxl."
            },
            {
              name: "Gown Type : Anarkali gown , Ball Gown , Long Anarkali gown."
            },
            {
              name: "Care Instructions: Regular Hand & Mechine Wash is Recommended."
            },
            {
              name: "Gown Work: Embroidery With Coding Work,"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81fvcBZh6NL._AC_UL320_.jpg",
          Name: "Party Dresses for Women Choker Multicolor Bodycon Mini Wrap Dress",
          reviewNumber: "42",
          mrp: "₹1,999",
          price: "279",
          discount: "(86% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Wash Care : first wash is dry clean after that use machine wash or hand wash"
            },
            {
              name: "Fabric: Lycre || Pattern: Tie-Dye Printed || Style: A-Line"
            },
            {
              name: "Ocassion: Traditional wear,Casual Wear, Office Wear, Formal wear, Evening wear, Work Wear, Party Wear"
            },
            {
              name: "SATISFACTION GUARANTEED- Customer service is our number one priority. If you’re not satisfied with your purchase, we will be happy to process a 100% exchange or refund for you."
            },
            {
              name: "High Definition Print - Using the highest quality solvents and colors combines with fully automated machines, we ensure our t-shirt dresses have razor-sharp prints that highlight every single detail.; Closure Type: Elastic; Occasion Type: Casual; Sleeve Type: Half Sleeve"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/6142tbfHTDL._AC_UL320_.jpg",
          Name: "Women's Latest Black Sequence Embroidery Maxi Georgette Long Dress Gown for Women",
          reviewNumber: "49",
          mrp: "₹6,999",
          price: "935",
          discount: "(87% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Style : This Dress Is A Maxi Dress.; Pattern : the dress has sequence embroidery work and have length of around 54 To 55 Inch"
            },
            {
              name: "Occation : This Dress Is Suitable For Festive, Party, Wedding Etc."
            },
            {
              name: "S-36 , M-38, L-40 , Xl-42 ,Xxl-44 ,3Xl-46; Care Instructions: Dry Clean Only; Closure Type: Zipper; Care Instructions: Dry Clean Only"
            },
            {
              name: "Material Composition: Polyster Silk"
            },
            {
              name: "Sleeve Type: Cap Sleeve"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51llet9Ww4L._AC_UL320_.jpg",
          Name: "Women Casual Dress",
          reviewNumber: "2,131",
          mrp: "₹1,799",
          price: "542",
          discount: "(70% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "A-Line, Inseam length - 22 inch"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/41zEt6W-LLL._AC_UL320_.jpg",
          Name: "Women's Knitted Stretchable Bodycon Lycra Dress",
          reviewNumber: "319",
          mrp: "₹1,805",
          price: "349",
          discount: "(81% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric : Lycra || Color: Wine"
            },
            {
              name: "Dress Length :38Inch|| Bust Size :34Inch||Sleeve Length :15Inch || Dress Inner: N/A"
            },
            {
              name: "Pattern: Knitted"
            },
            {
              name: "Sleeve Type: Half Sleeve; Closure Type: Popper"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71m-a5IoDbL._AC_UL320_.jpg",
          Name: "Women's Lycra Saree With Blouse Piece",
          reviewNumber: "3,747",
          mrp: "₹2,399",
          price: "301",
          discount: "(87% off)",
          selection6: [
            {
              name: "Care Instructions: hand wash"
            },
            {
              name: "Occasions: this ruffle sarees for women is specially design for festive season of Indian women's wear"
            },
            {
              name: "Color: this teal green ruffle saree for women make you look awesome"
            },
            {
              name: "Fabric: this ruffle saree have soft finished lycra fabric easy and comfortable to wear"
            },
            {
              name: "Work type: this frill saree have plastic mirror work on shoulder lace"
            },
            {
              name: "Blouse: this saree have beautiful blouse piece. Includes: 1 saree and unstitched blouse. Saree length- 5.5 metre, blouse length- 0.8 metre"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61RADkpTHPL._AC_UL320_.jpg",
          Name: "Women's Cotton Blend Printed Anarkali Kurta (Votiki)",
          reviewNumber: "204",
          mrp: "₹2,599",
          price: "699",
          discount: "(73% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Kurta Fabric: Cotton Blend"
            },
            {
              name: "Style: Anarkali || Length: Calf Length || Sleeves: 3/4"
            },
            {
              name: "This set includes: Kurta || Pattern :- Printed."
            },
            {
              name: "Ocassion: Traditional wear, Casual Wear, party wear, evening wear,Please Click On Brand Name ANNI DESIGNER For More Products."
            },
            {
              name: "Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/710YR58lquS._AC_UL320_.jpg",
          Name: "Women's Silk Saree With Blouse Piece",
          reviewNumber: "240",
          mrp: "₹3,999",
          price: "809",
          discount: "(80% off)",
          selection6: [
            {
              name: "Care Instructions: hand wash"
            },
            {
              name: "Saree Details : Saree Color- Grey, Saree Material- Silk, Saree Length- 6.3 m, Saree Work Type- Sequins Embroidery Work"
            },
            {
              name: "Blouse Details: Blouse Color-Black, Blouse Material- Velvet, Blouse Length- 0.8 m, Blouse Work Type- Sequins Embroidered Work"
            },
            {
              name: "Border & Pallu Details: Border Color- Grey, Border Work Type- Sequins Embroidered Lace Work, Pallu Color- Purple, Pallu Work Type- Sequins Embroidery Work"
            },
            {
              name: "Occasions: Party, festive, wedding wear, traditional wear. Best gift for your loved ones."
            },
            {
              name: "Included Contents: Saree with Blouse Piece"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71WT18Au5ZL._AC_UL320_.jpg",
          Name: "Women's Faux Georgette Semi Stitched Top With Faux Georgette Jacket Solid Flared Top Dress Material (Gown)",
          reviewNumber: "108",
          mrp: "₹5,999",
          price: "1,650",
          discount: "(72% off)",
          selection6: [
            {
              name: "Top Fabric : Faux Georgette With Santoon Inner; Top : Semi Stitched"
            },
            {
              name: "Work : Solid , Type : Party Wear Gown; Color : Green"
            },
            {
              name: "Please Read The Products Description Below For Full Details Of The Product."
            },
            {
              name: "Item Length Description: Maxi; Sleeve Type: 3/4 Sleeve; Closure Type: Drawstring"
            },
            {
              name: "Age Range Description: Adult"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71Lqt9hrR-L._AC_UL320_.jpg",
          Name: "Women Georgette A-Line Dress(MCAW19D08-57-102_Blue & Black_S)",
          reviewNumber: "Another way to buy",
          mrp: "₹2,899",
          price: "1,217",
          discount: "(58% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Relaxed"
            },
            {
              name: "Fabric: Georgette; Sleeveless, Round Neck, Lace detail,Side zip and Back button closure, Woven"
            },
            {
              name: "The model is wearing size Small and her height is 5 ft 9 inches(175 cm)"
            },
            {
              name: "Length(inches): XS-55.25, S-56.25, M-57.25, L-58.25, XL-59.25"
            },
            {
              name: "Closure Type: Zipper"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61xrTERNdCL._AC_UL320_.jpg",
          Name: "Women's Synthetic Ready to Wear Saree With Blouse Piece",
          reviewNumber: "538",
          mrp: "₹2,999",
          price: "949",
          discount: "(68% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "This is Ready To Wear Stitched Draped 1 Minute Saree (Please Swipe images and check Product Video Before Buying)"
            },
            {
              name: "Fabric : Chinon || Type : Plain Padding"
            },
            {
              name: "Colour : Rani || Size : Free Size Adjustable"
            },
            {
              name: "Saree Length : 5.5 Mtr + Blouse Length : 0.80 Mtr (Unstitched)"
            },
            {
              name: "This Saree is Suitable For Get Just Stylish Casual look in office or work, normal occasions, family get together, regular or daily Use or gifting to loved one"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51yz-CmbcML._AC_UL320_.jpg",
          Name: "Women's Cotton Blend Straight Solid Kurta with Pant & Dupatta (Resoti)",
          reviewNumber: "658",
          mrp: "₹2,599",
          price: "659",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Kurta Set Fabric: Cotton Blend"
            },
            {
              name: "Style: Straight || Length: Calf Length || Sleeves: 3/4"
            },
            {
              name: "This set includes:: Kurta, Pant & Dupatta"
            },
            {
              name: "Ocassion: Traditional wear, Casual Wear, party wear, evening wear"
            },
            {
              name: "Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51Mf7N9KjHL._AC_UL320_.jpg",
          Name: "Women Dress",
          reviewNumber: "318",
          mrp: "₹1,497",
          price: "359",
          discount: "(76% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric : Lycra || Color : Black"
            },
            {
              name: "Bodykon Length : 49 Inch|| Bust Size : 34 Inch|| Sleeve Length : 12 Inch || Select required Bust Size from Filter Box S (34 Inch),M (36 Inch),L (38 Inch),XL (40 Inch)"
            },
            {
              name: "Work : Solid; Sleeve Type : Half Sleeve || Neck Style : Square Neck || Wash Care : Machine Wash"
            },
            {
              name: "Occasion: Evening,Party or Casual Wear"
            },
            {
              name: "Closure Type: Pull On"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81Iqp0TAC+L._AC_UL320_.jpg",
          Name: "Party Dresses for Women Choker Multicolor Bodycon Mini Wrap Dress",
          reviewNumber: "44",
          mrp: "₹1,999",
          price: "389",
          discount: "(81% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Wash Care : first wash is dry clean after that use machine wash or hand wash"
            },
            {
              name: "Fabric: Lycre || Pattern: Tie-Dye Printed || Style: A-Line"
            },
            {
              name: "Ocassion: Traditional wear,Casual Wear, Office Wear, Formal wear, Evening wear, Work Wear, Party Wear."
            },
            {
              name: "SATISFACTION GUARANTEED- Customer service is our number one priority. If you’re not satisfied with your purchase, we will be happy to process a 100% exchange or refund for you."
            },
            {
              name: "High Definition Print - Using the highest quality solvents and colors combines with fully automated machines, we ensure our t-shirt dresses have razor-sharp prints that highlight every single detail.; Closure Type: Elastic; Occasion Type: Casual; Sleeve Type: Half Sleeve."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51G9HRFhtrL._AC_UL320_.jpg",
          Name: "Women’s High-Low Knee Length Dress(Ruby-062-to-069)",
          reviewNumber: "309",
          mrp: "₹1,999",
          price: "444",
          discount: "(78% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Material:-100% Heavy Imported With fully Stretchable"
            },
            {
              name: "Stitch Type:- Stitched (No stitching required)"
            },
            {
              name: "Item Length: Knee-Long, Style Name: High-Low; Package Content: 1 Dress"
            },
            {
              name: "Wash Care : Machine wash warm wash with like colours only non-chlorine bleach when needed tumble dry low warm iron if needed."
            },
            {
              name: "Age Range Description: Adult; Occasion Type: Work; Sleeve Type: Short Sleeve"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71oBJuyL1tL._AC_UL320_.jpg",
          Name: "Women's Wine Halter Neck Sleeveless Solid Embellished Midi Dress",
          reviewNumber: "129",
          mrp: "₹3,495",
          price: "1,188",
          discount: "(66% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric: 100% Polyester | Wash Care: Hand Wash with Warm Water, wash dark colors separately, Do not Bleach, Dip Dry away from direct heat, Warm Iron Only"
            },
            {
              name: "Style: Embellished | Pattern: Solid | Fit: Slim Fit | Length: Midi | Neck: Halter Neck | Sleeves: Sleeveless"
            },
            {
              name: "Occasion: Casual wear, Daily wear, Party wear, Evening wear"
            },
            {
              name: "The model is 5'9 and she is wearing size S"
            },
            {
              name: "There might be slight color variation between the actual product and image shown on the screen due to photoshoot lighting."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/91ZfXXT0PqL._AC_UL320_.jpg",
          Name: "Women's Pure Georgette Saree with Unstitched Blouse Piece",
          reviewNumber: "243",
          mrp: "₹3,999",
          price: "999",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: hand wash"
            },
            {
              name: "★ Fabric :- This Saree have soft finished Pure Georgette Fabric easy and Comfortable to wear."
            },
            {
              name: "★ Color :- This Amazing Saree have Soft Finished Purple colour which make you look awsome and star of Party."
            },
            {
              name: "★ Occasions :- This Saree is Specially design for wedding, Party and Festive Season of indian women's wear."
            },
            {
              name: "★ Length :- Saree Length is 5.5 Meter and Blouse Length is is 0.80 Meter."
            },
            {
              name: "★ Package Included :- 1 Unstitched Saree with Blouse Piece"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71XAzGJXvkL._AC_UL320_.jpg",
          Name: "Women's Bandhani Printed & Embroidery Work In Lace Georgette Saree with Unstitched Blouse Piece",
          reviewNumber: "1,145",
          mrp: "₹4,900",
          price: "949",
          discount: "(81% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Saree Fabric : Georgette | Blouse Fabric : Bhagalpuri Silk"
            },
            {
              name: "Length :: Saree : 5.50Mtr | Blouse(Unstitch Fabric) : 0.80Mtr, Which Need To Be Stitched As Per Size And Fit"
            },
            {
              name: "Colour :: Saree : Mint Green | Blouse : Mint Green"
            },
            {
              name: "Work Type :: Saree : Bandhani Printed & Embroidery Work In Lace | Blouse : Dyed, Embroidery Work | Wash Care: dry & clean is Recommernded."
            },
            {
              name: "Package Content : 1 Saree With 1 Blouses Pice Included"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/616OC0ZWOhL._AC_UL320_.jpg",
          Name: "Women's Georgette Semi Stitched Anarkali Gown(SSEY-F1349_Red_Free Size)",
          reviewNumber: "199",
          mrp: "₹5,299",
          price: "1,690",
          discount: "(68% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Top Fabric : Georgette || Bottom Fabric : Silk || Duptta Fabric : Net|| Inner Fabric : Santoon"
            },
            {
              name: "Top Length : 56 ( Inch ) ||Top Width Size : 44 ( Inch ) || Bottom Length : 2.2 (MTR) || Duptta Length : 2.2 (MTR) || Inner Length : 2 (MTR)"
            },
            {
              name: "Top Work : Embroidered ||Bottom Work : Solid ( Plain ) || Duptta Work : Lace || Sleeve Style : Full Sleeve|| Neck Style : Round Neck"
            },
            {
              name: "Sleeve Type: Long Sleeve; Item Length Description: Ankle Length; Occasion Type: Ceremony"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71U0Wo-rizL._AC_UL320_.jpg",
          Name: "Dresses for Women (491-524)",
          reviewNumber: "3,490",
          mrp: "₹1,499",
          price: "449",
          discount: "(70% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "To choose the right size- please refer Slim Fit Dress size chart and how to measure image''"
            },
            {
              name: "Occasion: Casual || Party || Beach || Formal || Meeting || Office wear"
            },
            {
              name: "Sleeve Type : Half Sleeve"
            },
            {
              name: "95% Polyester 5% spendex"
            },
            {
              name: "Fabric : Polyester"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Z9og5gnkL._AC_UL320_.jpg",
          Name: "Women's Woven Georgette Saree With Blouse Piece (SSFB-SARI2845)",
          reviewNumber: "259",
          mrp: "₹3,999",
          price: "999",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Sari Fabric : Georgette || Blouse Fabric : Banglory Silk"
            },
            {
              name: "Sari Color : Light green || Blouse Color : Dark green"
            },
            {
              name: "Work :- Embroidery Sequence Work"
            },
            {
              name: "Wash Care: Dry clean for the first wash, there after hand wash"
            },
            {
              name: "We are providing a piece of 80 centimeter unstitched blouse at the end of the saree, You have to cut it from there and stitch it as per your fit and style."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71qut3JXCoL._AC_UL320_.jpg",
          Name: "Women's Rayon Full Sleeve A-Line Knee-Length Western Dresses for Women or Girls Western Dress",
          reviewNumber: "1,941",
          mrp: "₹2,299",
          price: "389",
          discount: "(83% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Loose"
            },
            {
              name: "Fabric : Rayon Dress For Women"
            },
            {
              name: "Color : Multi Dress For Women"
            },
            {
              name: "Sleeve Type : Fullsleeve Dress For Women"
            },
            {
              name: "Can be be styled both as a breezy casual outfit and a playful party outfit."
            },
            {
              name: "Wash Care : first wash is dry clean after that use machine wash or hand wash"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/41i20s8WZCL._AC_UL320_.jpg",
          Name: "Jai Style Kutis Women Solid Cotton Rayon Blend Straight Anarkali Dress with Dupatta for Party and Office Wear",
          reviewNumber: "5",
          mrp: "₹1,499",
          price: "699",
          discount: "(53% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fabric Type: rayon & cotton mix"
            },
            {
              name: "Length & Style: Calf Length; Straight Kurta, Neck Line: Keyhole Neck"
            },
            {
              name: "Size Chart: - M-40 | L-42 | XL-44 | XXL-46"
            },
            {
              name: "Style: Anarkali"
            },
            {
              name: "Sleeve type: Full Sleeve"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/712R-zZ9D3L._AC_UL320_.jpg",
          Name: "Batwing Gold Foil Party Top for Women's",
          reviewNumber: "61",
          mrp: "₹1,599",
          price: "421.",
          discount: "(74% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Regular Fit"
            },
            {
              name: "Premium Polyester Material with Golden Checks Foil Print."
            },
            {
              name: "Batwing Cap Sleeves with Notch V-Neck."
            },
            {
              name: "Gold Foil for Party wear Looks."
            },
            {
              name: "Front Yoke Line Pattern with Regular Length 24 inches longer."
            },
            {
              name: "Women's & Girl's Can Pair with Shorty, Capri, Jeans, Skirts."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/41fbLyS-h8L._AC_UL320_.jpg",
          Name: "Zoya Creation Hoop Skirt Slips Crinoline Petticoat Long Underskirt for Wedding Bridal Dress Ball Gown for Party and Ethnic Wear White for Women & Girls",
          reviewNumber: "18",
          mrp: "₹1,599",
          price: "950",
          discount: "(41% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "4 ring to 6 ring hoops Crinoline Petticoat has Single Layer,with 6 Strong Hoops,Which make your Ball Gown Wedding Dress more Fluffy and in Good Full Shape.You will be the most Dazzling person in the crowd, get the more Praise."
            },
            {
              name: "This Plus Size Hoop skirt Elastic Waist is Adjustable, its Stretch range is 29-39.4 inches(66-100cm),suitable for Any Size.The bottom of Hoop Skirt maximum circle diameter is approx 43.3 inches(110cm),hoop skirt floor length is approx 39 inches (100 ± 5cm),The Petticoat Hoop Skirt is Fluffy,and 6 Hoops can be adjustable about the length,easily walk and turn."
            },
            {
              name: "ADJUSTABLE PETTICOAT--The Petticoats Skirt has High Elastic Waist,with Drawstring.The Drawstring can be adjusted,suitable for any size.You can adjust the waistline according to your waist size.Perfect for Wedding Dress Ball Gown."
            },
            {
              name: "The Crinoline Hoop Petticoats Skirt are perfect for wedding/evening/Quinceanera/Princess dresses/Ball Gown Slips. It will make your wedding dress more puffy and charming. Most dresses need a petticoat underneath to keep its shape."
            },
            {
              name: "Please Hand Wash or Dry Clean your Hoop Petticoat,No Bleaching,No Wringing,because it may destroy the original shape of the Petticoat Skirt."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61DJyRZ2byL._AC_UL320_.jpg",
          Name: "Women's Rayon Flared Kurta And Palazzo With Dupatta Set",
          reviewNumber: "748",
          mrp: "₹5,099",
          price: "1,427",
          discount: "(72% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Kurta Fabric:- Rayon || Bottom Fabric:- Rayon || Dupatta Fabric : Rayon"
            },
            {
              name: "Kurta Sleeve & Neckline : 3/4 Sleeve & Mandarin Collar"
            },
            {
              name: "Kurta Pattern - Flared"
            },
            {
              name: "Contents = One Kurta, One Palazzo, One Dupatta *"
            },
            {
              name: "Please click on Brand Name KHUSHAL K For More Stylish and Unic Colours Products"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51F8qaDJTbL._AC_UL320_.jpg",
          Name: "Women's & Girls' Solid Fit and Flare Tank Dress",
          reviewNumber: "785",
          mrp: "₹1,999",
          price: "474",
          discount: "(76% off)",
          selection6: [
            {
              name: "Care Instructions: Machine Wash"
            },
            {
              name: "Fit Type: Slim"
            },
            {
              name: "Material: 95% Polyester 5% Polyester, Pattern: Solid"
            },
            {
              name: "Closure Type: Elastic; Sleeve Type: Sleeveless; Material Composition: 95% Polyester, 5% Spandex"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71H5s+Nn1KL._AC_UL320_.jpg",
          Name: "Women's Net Embroidered Semi-Stitched Lehenga Choli(Green-Rani_Green_Free Size)",
          reviewNumber: "761",
          mrp: "₹4,999",
          price: "919",
          discount: "(82% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric: Net"
            },
            {
              name: "Closure Type: Drawstring"
            },
            {
              name: "Sleeve Type: Full Sleeve"
            },
            {
              name: "Choli Fabric : Net Embroidery Chain Work With Diamond Work Choli Color : Sky Choli Work :Embroidery Zari Work Duptta : Net With Four Side Embroidery Chain Lace Border Work : Embroidery"
            },
            {
              name: "Lahenga Fabric : Net With Heavy Embroidery Chain Work With Diamond Work Lahenga Color : Green Lahenga Inner : SIlk, Lahenga Length :44 Lahenga Size :Up To 42"
            },
            {
              name: "Disclaimer :-Product color may slightly vary due to photographic lighting sources or your monitor settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/41JQsjyf8uL._AC_UL320_.jpg",
          Name: "Western Dresses for Women|Stylish Latest Dresses|Skirts|Kurti with Palazzo Set|Long Kurtis|Stylish Tops|Western Tops for Girls| Gown |Maxi Dress Crop top | Party Dress Red Dress",
          reviewNumber: "44",
          mrp: "₹1,899",
          price: "590",
          discount: "(69% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "A-line; full sleeve"
            },
            {
              name: "Dresses For Women One Piece for Women"
            },
            {
              name: "GG Fashion Girl's and womens Full Length Party Dress"
            },
            {
              name: "Actual colour of the product may marginally vary due to photographic lighting sources or your device settings"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/711iAeJg0AL._AC_UL320_.jpg",
          Name: "Women's Net Embroidered Semi Stitch Gown(SARA02_Sami Stitched) Peach",
          reviewNumber: "51",
          mrp: "₹1,999",
          price: "999",
          discount: "(50% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Maxi, Net, Embroidered, Party, Anarkali Gown; Length: Up To 56 , Size: Max Up To 44 (Up To Xl ); Type: Semi Stitched"
            },
            {
              name: "Fabric:- Butterfly Net; Inner: Silk; Dupatta: Net; Flare:- 3 Mtr; Care Instructions: Only Dry Clean, Do Not Bleach"
            },
            {
              name: "Top: Heavy Net Embroidery Work With Stone Work & Cording Work; Bottom:- Silk & Dupatta: Net With Embroidery Work"
            },
            {
              name: "Disclaimer: Product Color May Slightly Vary Due To Photographic Lighting Sources On Your Monitor/ Device Setting"
            },
            {
              name: "Age Range Description: Adult"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51AlaS-fz3L._AC_UL320_.jpg",
          Name: "PU Bow Applique Sandals in Purple Color (1158574)",
          mrp: "₹1,129",
          price: "1,010",
          discount: "(11% off)",
          selection6: [
            {
              name: "Sole: Rubber"
            },
            {
              name: "Closure: Buckle"
            },
            {
              name: "Shoe Width: Medium"
            },
            {
              name: "Material: 100% PU"
            },
            {
              name: "UK Size: 9.5 / Insole Length: 16.8 CM"
            },
            {
              name: "Styling Tip: Mix And Match These Cute footwear With Matching Casual Wear"
            },
            {
              name: "Note: Kindly Purchase Footwear Size 1/2 Cm More Than Your Kid'S Foot Size."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/91iHkRbk8vL._AC_UL320_.jpg",
          Name: "Silk Cotton Blend (Party wear Sarees for Women_Mustard)",
          mrp: "₹2,499",
          price: "329",
          discount: "(87% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Saree Fabric:-Cotton Silk,Blouse Fabric :-Cotton Silk"
            },
            {
              name: "Color : This Amazing Saree have Soft Finished Mustard colour which make you look awesome and star of Party."
            },
            {
              name: "Occasions :- This Saree is Specially design for wedding, Party and Festive Season of indian women's wear."
            },
            {
              name: "Length :- Saree Length is 5.5 Meter and Blouse Length is is 0.80 Meter."
            },
            {
              name: "Product color may slightly vary due to photographic lighting sources on your monitor settings or device setting and lighting used in mode."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/712BvZclUFL._AC_UL320_.jpg",
          Name: "Women's Lycra Malai Silk Embroidery Work Saree",
          reviewNumber: "1,039",
          mrp: "₹5,999",
          price: "1,498",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: hand wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Saree Length: 5.50 mtr || Blouse Length: 1 mtr || With Unstitched Blouse"
            },
            {
              name: "Saree Details: Color-gold.|| Material: Malai Silk"
            },
            {
              name: "Content : 1 Saree with 1 un-stitched Blouse Piece also || Blouse Fabric: Dupion Silk"
            },
            {
              name: "Occasions : Party > Festive > Wedding Wear > Traditional wear || Best gift for your Loved ones."
            },
            {
              name: "|| You will get full satisfaction with this brand || its a Very attractive Design ||"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71rYgo3q0sL._AC_UL320_.jpg",
          Name: "Women's Elegant Shiny Glitte Short Sleeve V Neck Ruched Bodycon Party Maxi Dress",
          reviewNumber: "108",
          mrp: "₹1,999",
          price: "369",
          discount: "(82% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Slim"
            },
            {
              name: "Fabric: sparkle 90% Polyester, 10% Spandex , Super soft and comfortable fabric inside"
            },
            {
              name: "Style: Elegant v neck, 3/4 Sleeves, rich bodycon dress that hide belly fat, slit in leg, maxi dress"
            },
            {
              name: "Fit Type: Slim Fit; Occasion: Casual || Party || Beach || Formal || Meeting || Office wear"
            },
            {
              name: "S-2XL. Please carefully check the sizing info to ensure your size prior to ordering"
            },
            {
              name: "Age Range Description: Adult; Closure Type: Pull On"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Hi7hpMK6S._AC_UL320_.jpg",
          Name: "Women's Codding Long Anarkali Dress Material Gown With Duppta(Free Size)",
          reviewNumber: "2,253",
          mrp: "₹3,499",
          price: "1,099",
          discount: "(69% off)",
          selection6: [
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Gown Fabric : Top:- Georgette || Inner:-Shantton || Duppta:-Georggette With Hevay Work.Which Will Provide Full Comfort Everywhere."
            },
            {
              name: "Gown Work: Codding || Type: Semi-Stiched(Free Size)||You Can Fit To Small To Xxl Size."
            },
            {
              name: "Suitable For Weddings And Special Occasion This Can Be Paired With Beautiful Earrings And Footwear To Enhance Your Appearance"
            },
            {
              name: "There Might Be Slight Colour Variation Due To Lightings And Flash While Photo Shoot; Closure Type: Popper; Sleeve Type: Long Sleeve"
            },
            {
              name: "Age Range Description: Adult"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71Nnzf73vXL._AC_UL320_.jpg",
          Name: "Shiv Textiles Women's Pure Georgette Saree With Blouse Piece",
          reviewNumber: "638",
          mrp: "₹1,499",
          price: "699",
          discount: "(53% off)",
          selection6: [
            {
              name: "Care Instructions: hand wash"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Saree Fabric: Georgette, Blouse Color: Pink, Saree Type: Crushed"
            },
            {
              name: "Saree Length:-5.6 Meter, Blouse Length:-0.80 Meter (Unstitched)"
            },
            {
              name: "Saree Wash Care :- Hand Wash, Dry the Saree under Shade."
            },
            {
              name: "Made of Finely Georgette Fabric Decorated with Intricate Design with Attractive Pallu and Blouse attached."
            },
            {
              name: "The Modern designs and color combination make it a worth having saree for your wardrobe."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61bGxcZM8YL._AC_UL320_.jpg",
          Name: "Men's Regular Fit Casual Shirt",
          reviewNumber: "5,873",
          mrp: "₹1,999",
          price: "499",
          discount: "(75% off)",
          selection6: [
            {
              name: "Care Instructions: Hand Wash Only"
            },
            {
              name: "Fit Type: Regular Fit"
            },
            {
              name: "Wash Care: Hand Wash Only"
            },
            {
              name: "Fabric Type: Cotton; Pattern Name: Solid"
            },
            {
              name: "Closure Type: Buttoned"
            },
            {
              name: "Sleeve Type: Long Sleeve; Collar Style: Round Collar"
            },
            {
              name: "Fit Type: Regular Fit"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51IAgWvFuGS._AC_UL320_.jpg",
          Name: "Women Rayon Casual Wear Western Maxi Dress Gown for Girl/Women/Ladies",
          reviewNumber: "1,056",
          mrp: "₹1,999",
          price: "419",
          discount: "(79% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Fabric: Slub Rayon || Pattern: Printed || Style: Anarkali"
            },
            {
              name: "Sleeves : Three-Quarter Sleeves || Sleeve Styling :Regular Sleeves || Neck : V-Neck"
            },
            {
              name: "There might be slight color variation between the actual product and image shown on the screen due to photoshoot lighting."
            },
            {
              name: "Ocassion: Traditional wear,Casual Wear, Office Wear, Formal wear, Evening wear, Work Wear, Party Wear"
            },
            {
              name: "SATISFACTION GUARANTEED- Customer service is our number one priority. If you’re not satisfied with your purchase, we will be happy to process a 100% exchange or refund for you."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71GxB8DJLyL._AC_UL320_.jpg",
          Name: "Women's Georgette Digital Floral Printed Gown Dress for Women (Gown Dress 35)",
          reviewNumber: "821",
          mrp: "₹3,499",
          price: "679",
          discount: "(81% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Dress Fabric : Georgette"
            },
            {
              name: "Style : Flare Straight || Length : Ankle Length"
            },
            {
              name: "Sleeves : Short Sleeves || Sleeve Styling : Butterfly Sleeves || Neck : Round Neck"
            },
            {
              name: "Ocassion: Casual || Party || Wedding || Festival || Formal"
            },
            {
              name: "Sleeves :- Short Sleeve || Neck :- Round Neck"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61DeRAjBAvL._AC_UL320_.jpg",
          Name: "Women's Fit and Flare Knee Length Gown with Dupatta (Navy_X-Large)",
          reviewNumber: "62",
          mrp: "₹2,999",
          price: "898",
          discount: "(70% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "Color Declaration : There might be slight variation in the actual colour of the product due to different screen resolutions; Care Instructions: Only Dry Clean"
            },
            {
              name: "Color Map: Blue; Closure Type: Drawstring; Occasion Type: Wedding; Sleeve Type: Short Sleeve"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51XWI+rIQvL._AC_UL320_.jpg",
          Name: "Women's Cotton Foil Printed Straight Kurta with Pant & Dupatta(NAVLIK-PINK-001)",
          reviewNumber: "3,091",
          mrp: "₹3,599",
          price: "659",
          discount: "(82% off)",
          selection6: [
            {
              name: "Care Instructions: Dry Clean Only"
            },
            {
              name: "Fit Type: Regular"
            },
            {
              name: "This three piece set includes kurta, Pant and dupatta."
            },
            {
              name: "Style: Straight || Length: Calf Length || Sleeves: 3/4"
            },
            {
              name: "Kurta , Pant And Dupatta Fabric : Pure Cotton"
            },
            {
              name: "Ocassion: Traditional wear, Casual Wear, party wear, evening wear"
            },
            {
              name: "Product Color May Slightly Vary Due To Photographic Lighting Sources Or Your Monitor Settings"
            }
          ]
        }
      ]
    for(let i=0;i<selection1.length;i++){
      selection1[i].category="Women Clothing"
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