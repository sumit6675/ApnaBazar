const express=require("express")
const ProductRoute=express.Router()
const {ProductModule}=require("../models/Product.model")

ProductRoute.get("/",async(req,res)=>{
    let data=await ProductModule.find()
    res.send(data)
})

ProductRoute.post("/add",async(req,res)=>{
    let selection1= [
        {
          image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL320_.jpg",
          Name: "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
          reviewNumber: "109,042",
          mrp: "₹19,999",
          price: "18,999",
          discount: "(5% off)",
          selection6: [
            {
              name: "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471"
            },
            {
              name: "Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters"
            },
            {
              name: "Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Dark mode"
            },
            {
              name: "Operating System: Oxygen OS based on Android 12"
            },
            {
              name: "Processor: Qualcomm Snapdragon 695 5G"
            },
            {
              name: "Battery & Charging: 5000 mAh with 33W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UL320_.jpg",
          Name: "OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)",
          reviewNumber: "18,792",
          price: "28,999",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615"
            },
            {
              name: "Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters"
            },
            {
              name: "Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified"
            },
            {
              name: "Display Features: Ambient Display, AI colour enhancement and Dark mode"
            },
            {
              name: "Operating System: OxygenOS based on Android 12. Processor: Mediatek Dimensity 1300"
            },
            {
              name: "Battery & Charging: 4500 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor"
            },
            {
              name: "Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go"
            },
            {
              name: "Form Factor: Smartphone; Cellular Technology: 5g, 4g Lte"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹11,999",
          price: "8,499",
          discount: "(29% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UL320_.jpg",
          Name: "Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
          Name: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
          reviewNumber: "109,042",
          mrp: "₹19,999",
          price: "18,999",
          discount: "(5% off)",
          selection6: [
            {
              name: "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471"
            },
            {
              name: "Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters"
            },
            {
              name: "Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Dark mode"
            },
            {
              name: "Operating System: Oxygen OS based on Android 12"
            },
            {
              name: "Processor: Qualcomm Snapdragon 695 5G"
            },
            {
              name: "Battery & Charging: 5000 mAh with 33W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/814ePfNubRL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹11,999",
          price: "8,499",
          discount: "(29% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81BxHYjeA2L._AC_UL320_.jpg",
          Name: "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81UmTnrBDSL._AC_UL320_.jpg",
          Name: "Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71293gyogZL._AC_UL320_.jpg",
          Name: "Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81eM15lVcJL._AC_UL320_.jpg",
          Name: "Redmi 10 Power (Power Black, 8GB RAM, 128GB Storage)",
          reviewNumber: "763",
          mrp: "₹18,999",
          price: "11,999",
          discount: "(37% off)",
          selection6: [
            {
              name: "Processor: Snapdragon 680 6nm Octa-core processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Camera: 50 MP Primary Rear Camera with 2MP Portrait Lens| 5 MP Front camera"
            },
            {
              name: "Display: HD+ (720x1650) IPS LCD Display; 17.01 centimeters(6.7 inch); 20.6:9 aspect ratio"
            },
            {
              name: "Battery: 6000 mAh large battery with 18W fast charging support(10W in-box) and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 8GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71kVEmAMyEL._AC_UL320_.jpg",
          Name: "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
          Name: "Apple iPhone 13 (128GB) - Midnight",
          reviewNumber: "13,013",
          mrp: "₹69,900",
          price: "61,999",
          discount: "(11% off)",
          selection6: [
            {
              name: "15 cm (6.1-inch) Super Retina XDR display"
            },
            {
              name: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
            },
            {
              name: "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "A15 Bionic chip for lightning-fast performance"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹14,999",
          price: "10,999",
          discount: "(27% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹14,999",
          price: "10,999",
          discount: "(27% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UL320_.jpg",
          Name: "Xiaomi Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
          reviewNumber: "763",
          mrp: "₹18,999",
          price: "11,999",
          discount: "(37% off)",
          selection6: [
            {
              name: "Processor: Snapdragon 680 6nm Octa-core processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Camera: 50 MP Primary Rear Camera with 2MP Portrait Lens| 5 MP Front camera"
            },
            {
              name: "Display: HD+ (720x1650) IPS LCD Display; 17.01 centimeters(6.7 inch); 20.6:9 aspect ratio"
            },
            {
              name: "Battery: 6000 mAh large battery with 18W fast charging support(10W in-box) and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 8GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UL320_.jpg",
          Name: "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "33,437",
          mrp: "₹20,990",
          price: "15,490",
          discount: "(26% off)",
          selection6: [
            {
              name: "6.49 Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.Side Fingerprint Sensor"
            },
            {
              name: "Qualcomm Snapdragon 480 5G GPU 619 at 650 MHz Support 5G sim Powerful 2 GHz Octa-core processor, support LPDDR4X memory and latest UFS 2.1 gear 3 storage"
            },
            {
              name: "5000 mAh lithium polymer battery"
            },
            {
              name: "48MP Quad Camera 48MP Main + 2MP Macro + 2MP Depth Lens 8MP Front Camera"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM 128GB internal memory expandable up to 256GB Dual SIM nano+nano dual-standby 5G+5G. Color OS 11.1 based on Android v11.0 operating system"
            },
            {
              name: "Connector type: USB Type C"
            },
            {
              name: "Display type: LCD"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_UL320_.jpg",
          Name: "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
          reviewNumber: "11,521",
          mrp: "₹38,999",
          price: "32,999",
          discount: "(15% off)",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471"
            },
            {
              name: "Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode"
            },
            {
              name: "Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness"
            },
            {
              name: "Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max"
            },
            {
              name: "Battery & Charging: 5000 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor"
            },
            {
              name: "Special Features: Hyperboost gaming engine"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81xvGbBFNhL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Deep Ocean Blue, 8GB, 128GB Storage) | 6000mAh Battery | Upto 16GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹25,999",
          price: "20,499",
          discount: "(21% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹13,499",
          price: "9,499",
          discount: "(30% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UL320_.jpg",
          Name: "OnePlus Nord 2T 5G (Gray Shadow, 8GB RAM, 128GB Storage)",
          reviewNumber: "18,792",
          price: "28,999",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615"
            },
            {
              name: "Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters."
            },
            {
              name: "Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified"
            },
            {
              name: "Display Features: Ambient Display, AI colour enhancement and Dark mode"
            },
            {
              name: "Operating System: OxygenOS based on Android 12"
            },
            {
              name: "Processor: Mediatek Dimensity 1300"
            },
            {
              name: "Battery & Charging: 4500 mAh with 80W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UL320_.jpg",
          Name: "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
          reviewNumber: "11,521",
          mrp: "₹38,999",
          price: "32,999",
          discount: "(15% off)",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471"
            },
            {
              name: "Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode"
            },
            {
              name: "Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness"
            },
            {
              name: "Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max"
            },
            {
              name: "Battery & Charging: 5000 mAh with 80W SuperVOOC"
            },
            {
              name: "In-Display Fingerprint Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/8104evx11QL._AC_UL320_.jpg",
          Name: "Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "20",
          mrp: "₹21,999",
          price: "18,999",
          discount: "(14% off)",
          selection6: [
            {
              name: "Big 5000 mAh Battery with 33W SUPERVOOC Charging"
            },
            {
              name: "Super smooth experience with ColorOS 13 and 8GB RAM (+ RAM expansion up to 8GB) | 128GB ROM | Expandable Upto 1TB"
            },
            {
              name: "Crystal clear details with AI Camera setup 50MP + 2MP Rear Camera | 8MP Front Camera"
            },
            {
              name: "OPPO Glow Design with 6.56 inch (16.66cm) 90Hz Color-Rich Display and Large Screen to Body ratio of 89.8%"
            },
            {
              name: "Dual Ultra Linear Stereo Speakers with ROST and flagship hardware which produce an immersive sound effect"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71Ta0Hcl+PL._AC_UL320_.jpg",
          Name: "Redmi 10A Sport (Sea Blue, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster",
          reviewNumber: "1,108",
          mrp: "₹13,999",
          price: "9,999",
          discount: "(29% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:6GB RAM (expandable to 8GB with RAM Booster) | 128GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71WC+Qz1KgL._AC_UL320_.jpg",
          Name: "Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Space Black, 4GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹17,999",
          price: "12,999",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81xvGbBFNhL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Deep Ocean Blue, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹17,999",
          price: "12,999",
          discount: "(28% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 128GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/810KHyQ4WcL._AC_UL320_.jpg",
          Name: "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
          reviewNumber: "316,285",
          mrp: "₹7,999",
          price: "6,499",
          discount: "(19% off)",
          selection6: [
            {
              name: "Processor: MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed"
            },
            {
              name: "Camera: 13 MP Rear camera with AI portrait| 5 MP front camera"
            },
            {
              name: "Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio"
            },
            {
              name: "Battery: 5000 mAH large battery with 10W wired charger in-box"
            },
            {
              name: "Memory, Storage & SIM: 2GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot"
            },
            {
              name: "The Selfie camera allows easy and convenient access to your phone with AI face unlock"
            },
            {
              name: "Form factor:Bar,Operating system:MIUI 12"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/814ePfNubRL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹13,499",
          price: "9,499",
          discount: "(30% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage) | 6000mAh Battery | Upto 16GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹25,999",
          price: "20,499",
          discount: "(21% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81lnKynSaqL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Emerald Brown, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71t7mcs1VoL._AC_UL320_.jpg",
          Name: "Redmi 10A Sport (Slate Grey, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster",
          reviewNumber: "1,108",
          mrp: "₹13,999",
          price: "9,999",
          discount: "(29% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:6GB RAM (expandable to 8GB with RAM Booster) | 128GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71poFSdDs5S._AC_UL320_.jpg",
          Name: "OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "33,437",
          mrp: "₹20,990",
          price: "15,490",
          discount: "(26% off)",
          selection6: [
            {
              name: "6.49 Inch (16.5cm) FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.|Side Fingerprint Sensor. Bluetooth Audio Codec: SBC, AAC, APTX HD, LDAC"
            },
            {
              name: "Qualcomm Snapdragon 480 5G GPU 619 at 650 MHz Support 5G sim| Powerful 2 GHz Octa-core processor, support LPDDR4X memory and latest UFS 2.1 gear 3 storage"
            },
            {
              name: "5000 mAh lithium polymer battery"
            },
            {
              name: "48MP Quad Camera ( 48MP Main + 2MP Macro + 2MP Depth Lens) | 8MP Front Camera."
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (5G+5G).| Color OS 11.1 based on Android v11.0 operating system."
            },
            {
              name: "Connector type: USB Type C"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Horizon Blue, 6GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹18,999",
          price: "12,499",
          discount: "(34% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UL320_.jpg",
          Name: "Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "20",
          mrp: "₹21,999",
          price: "18,999",
          discount: "(14% off)",
          selection6: [
            {
              name: "Big 5000 mAh Battery with 33W SUPERVOOC Charging"
            },
            {
              name: "Super smooth experience with ColorOS 13 and 8GB RAM (+ RAM expansion up to 8GB) | 128GB ROM | Expandable Upto 1TB"
            },
            {
              name: "Crystal clear details with AI Camera setup 50MP + 2MP Rear Camera | 8MP Front Camera"
            },
            {
              name: "OPPO Glow Design with 6.56 inch (16.66cm) 90Hz Color-Rich Display and Large Screen to Body ratio of 89.8%"
            },
            {
              name: "Dual Ultra Linear Stereo Speakers with ROST and flagship hardware which produce an immersive sound effect"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71kVEmAMyEL._AC_UL320_.jpg",
          Name: "Redmi 10A (Slate Grey, 3GB RAM, 32GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹10,999",
          price: "7,499",
          discount: "(32% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:3GB RAM | 32GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Horizon Blue, 6GB RAM, 128GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹19,999",
          price: "14,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81Bc+XzxecL._AC_UL320_.jpg",
          Name: "Redmi 11 Prime 5G (Meadow Green, 4GB RAM 64GB ROM) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G",
          reviewNumber: "2,651",
          mrp: "₹15,999",
          price: "13,999",
          discount: "(13% off)",
          selection6: [
            {
              name: "Processor: MediaTek Dimensity 700 with 5G, 7nm Octa-core processor; Up to 2.2GHz"
            },
            {
              name: "Display: 90Hz FHD+(1080x2400) AdaptiveSync Display; 16.71centimeters; 20:9 aspect ratio"
            },
            {
              name: "Camera: 50MP AI Dual camera | 8MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (5G+5G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 18W fast charging support and 22.5W fast charger in-box with Type-C connectivity"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
          Name: "Apple iPhone 13 (128GB) - Blue",
          reviewNumber: "13,013",
          mrp: "₹69,900",
          price: "61,999",
          discount: "(11% off)",
          selection6: [
            {
              name: "15 cm (6.1-inch) Super Retina XDR display"
            },
            {
              name: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
            },
            {
              name: "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "A15 Bionic chip for lightning-fast performance"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UL320_.jpg",
          Name: "Redmi Note 11T 5G (Matte Black, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers|Get 2 Months of YouTube Premium Free!",
          reviewNumber: "32,684",
          mrp: "₹20,999",
          price: "16,999",
          discount: "(19% off)",
          selection6: [
            {
              name: "Processor: MediaTek Dimensity 810 Octa-core 5G processor based on 6nm process with HyperEngine 2.0 and clock speed up to 2.4GHz;"
            },
            {
              name: "Display: 6.6 inch FHD+ (2400x1080) Dot display with 90Hz high refresh rate and adaptive refresh rate technology; 240Hz touch sampling rate;"
            },
            {
              name: "Camera: 50MP High resolution primary camera f/1.8 with 8MP Ultra-wide sensor| 16 MP Front camera"
            },
            {
              name: "Battery: 5000mAh battery with 33W Pro fast charging support"
            },
            {
              name: "Memory, Storage : 6GB LPDDR4X RAM | 128GB UFS2.2 Internal storage"
            },
            {
              name: "Headphones jack:3.5mm,Display type:LCD,Operating system:MIUI 12.5 based on Android 11"
            },
            {
              name: "Get 2 months of YouTube Premium free!"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81OC0ojxH6L._AC_UL320_.jpg",
          Name: "Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)",
          reviewNumber: "56,762",
          mrp: "₹18,999",
          price: "15,499",
          discount: "(18% off)",
          selection6: [
            {
              name: "Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5"
            },
            {
              name: "Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera"
            },
            {
              name: "Monster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2 + MicroSD"
            },
            {
              name: "Android v12.0, One UI 4.1 operating system with MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz"
            },
            {
              name: "6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹19,999",
          price: "17,999",
          discount: "(10% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UL320_.jpg",
          Name: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "58,810",
          mrp: "₹15,990",
          price: "12,490",
          discount: "(22% off)",
          selection6: [
            {
              name: "12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera. OTG : Supported NFC : No"
            },
            {
              name: "16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)"
            },
            {
              name: "Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320"
            },
            {
              name: "4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours"
            },
            {
              name: "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81Jov18YvpL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M32 Prime Edition (Black, 6GB RAM, 128GB)",
          reviewNumber: "56,762",
          price: "15,499",
          selection6: [
            {
              name: "Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5"
            },
            {
              name: "Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera"
            },
            {
              name: "Monster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2 + MicroSD"
            },
            {
              name: "Android v12.0, One UI 4.1 operating system with MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz"
            },
            {
              name: "6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹21,999",
          price: "19,999",
          discount: "(9% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51RqXqfn1iL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹21,999",
          price: "19,999",
          discount: "(9% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71EjohFmm6L._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 5G (Midnight Blue, 4GB, 64GB Storage) | 5000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹16,999",
          price: "13,999",
          discount: "(18% off)",
          selection6: [
            {
              name: "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB|"
            },
            {
              name: "Superfast 5G with 11 5G Bands, Powerful MTK D700 Octa Core 2.2GH with Android 12,One UI Core 4"
            },
            {
              name: "50MP+2MP Dual camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) | 5MP (F2.0) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._AC_UL320_.jpg",
          Name: "OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)",
          reviewNumber: "109,042",
          mrp: "₹19,999",
          price: "18,999",
          discount: "(5% off)",
          selection6: [
            {
              name: "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471"
            },
            {
              name: "Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters"
            },
            {
              name: "Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Dark mode"
            },
            {
              name: "Operating System: Oxygen OS based on Android 12"
            },
            {
              name: "Processor: Qualcomm Snapdragon 695 5G"
            },
            {
              name: "Battery & Charging: 5000 mAh with 33W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61ahn9N38zL._AC_UL320_.jpg",
          Name: "OnePlus Nord 2T 5G (Jade Fog, 8GB RAM, 128GB Storage)",
          reviewNumber: "18,792",
          price: "28,999",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615"
            },
            {
              name: "Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters"
            },
            {
              name: "Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified"
            },
            {
              name: "Display Features: Ambient Display, AI colour enhancement and Dark mode"
            },
            {
              name: "Operating System: OxygenOS based on Android 12. Processor: Mediatek Dimensity 1300"
            },
            {
              name: "Battery & Charging: 4500 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor"
            },
            {
              name: "Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go"
            },
            {
              name: "Form Factor: Smartphone; Cellular Technology: 5g, 4g Lte"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹11,999",
          price: "8,499",
          discount: "(29% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81UT07JsBqL._AC_UL320_.jpg",
          Name: "Redmi A1 (Light Blue, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71V--WZVUIL._AC_UL320_.jpg",
          Name: "OnePlus Nord CE 2 Lite 5G (Black Dusk, 6GB RAM, 128GB Storage)",
          reviewNumber: "109,042",
          mrp: "₹19,999",
          price: "18,999",
          discount: "(5% off)",
          selection6: [
            {
              name: "Camera: 64MP Main Camera with EIS; 2MP Depth Lens and 2MP Macro Lens; Front (Selfie) Camera: 16MP Sony IMX471"
            },
            {
              name: "Camera Features: AI scene enhancement, Dual-View Video, HDR, Night Portrait, Panorama Mode, Retouch Filters, 1080p video at 30 fps, SLO-MO: 720p video at 120 fps, TIME-LAPSE: 1080p video at 30 fps, Video editor, Face unlock, Screen flash, HDR, NIGHT, PORTRAIT, TIME-LAPSE, Retouch, Filters"
            },
            {
              name: "Display: 6.59 Inches; 120 Hz Refresh Rate; Support sRGB, Display P3; Resolution: 2412 x 1080 pixels 402ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Dark mode"
            },
            {
              name: "Operating System: Oxygen OS based on Android 12"
            },
            {
              name: "Processor: Qualcomm Snapdragon 695 5G"
            },
            {
              name: "Battery & Charging: 5000 mAh with 33W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/814ePfNubRL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Light Green, 4GB RAM, 64GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹11,999",
          price: "8,499",
          discount: "(29% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81BxHYjeA2L._AC_UL320_.jpg",
          Name: "Redmi A1 (Black, 2GB RAM, 32GB Storage) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81UmTnrBDSL._AC_UL320_.jpg",
          Name: "Redmi A1 (Light Green, 2GB RAM 32GB ROM) | Segment Best AI Dual Cam | 5000mAh Battery | Leather Texture Design | Android 12",
          reviewNumber: "8,975",
          mrp: "₹8,999",
          price: "6,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 16.56cm HD+ Scratch resistant display"
            },
            {
              name: "Processor: MediaTek Helio A22 processor; up to 2.0GHz"
            },
            {
              name: "Camera: 8MP Dual camera | 5MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 2GB LPDDR4x RAM | 32GB storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W in-box charger"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71293gyogZL._AC_UL320_.jpg",
          Name: "Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81eM15lVcJL._AC_UL320_.jpg",
          Name: "Redmi 10 Power (Power Black, 8GB RAM, 128GB Storage)",
          reviewNumber: "763",
          mrp: "₹18,999",
          price: "11,999",
          discount: "(37% off)",
          selection6: [
            {
              name: "Processor: Snapdragon 680 6nm Octa-core processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Camera: 50 MP Primary Rear Camera with 2MP Portrait Lens| 5 MP Front camera"
            },
            {
              name: "Display: HD+ (720x1650) IPS LCD Display; 17.01 centimeters(6.7 inch); 20.6:9 aspect ratio"
            },
            {
              name: "Battery: 6000 mAh large battery with 18W fast charging support(10W in-box) and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 8GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71kVEmAMyEL._AC_UL320_.jpg",
          Name: "Redmi 10A (Slate Grey, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UL320_.jpg",
          Name: "Apple iPhone 13 (128GB) - Midnight",
          reviewNumber: "13,013",
          mrp: "₹79,900",
          price: "61,999",
          discount: "(22% off)",
          selection6: [
            {
              name: "15 cm (6.1-inch) Super Retina XDR display"
            },
            {
              name: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
            },
            {
              name: "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "A15 Bionic chip for lightning-fast performance"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Midnight Blue, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹14,999",
          price: "10,999",
          discount: "(27% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Mystique Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Aqua Green, 4GB, 64GB Storage) | 6000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹14,999",
          price: "10,999",
          discount: "(27% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 64GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81OZGH4fZiL._AC_UL320_.jpg",
          Name: "Xiaomi Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
          reviewNumber: "763",
          mrp: "₹18,999",
          price: "11,999",
          discount: "(37% off)",
          selection6: [
            {
              name: "Processor: Snapdragon 680 6nm Octa-core processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Camera: 50 MP Primary Rear Camera with 2MP Portrait Lens| 5 MP Front camera"
            },
            {
              name: "Display: HD+ (720x1650) IPS LCD Display; 17.01 centimeters(6.7 inch); 20.6:9 aspect ratio"
            },
            {
              name: "Battery: 6000 mAh large battery with 18W fast charging support(10W in-box) and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 8GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UL320_.jpg",
          Name: "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "33,437",
          mrp: "₹20,990",
          price: "15,490",
          discount: "(26% off)",
          selection6: [
            {
              name: "6.49 Inch 16.5cm FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.Side Fingerprint Sensor"
            },
            {
              name: "Qualcomm Snapdragon 480 5G GPU 619 at 650 MHz Support 5G sim Powerful 2 GHz Octa-core processor, support LPDDR4X memory and latest UFS 2.1 gear 3 storage"
            },
            {
              name: "5000 mAh lithium polymer battery"
            },
            {
              name: "48MP Quad Camera 48MP Main + 2MP Macro + 2MP Depth Lens 8MP Front Camera"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM 128GB internal memory expandable up to 256GB Dual SIM nano+nano dual-standby 5G+5G. Color OS 11.1 based on Android v11.0 operating system"
            },
            {
              name: "Connector type: USB Type C"
            },
            {
              name: "Display type: LCD"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/716uVx3Wr5L._AC_UL320_.jpg",
          Name: "OnePlus 10R 5G (Forest Green, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
          reviewNumber: "11,521",
          mrp: "₹38,999",
          price: "32,999",
          discount: "(15% off)",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471"
            },
            {
              name: "Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode"
            },
            {
              name: "Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness"
            },
            {
              name: "Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max"
            },
            {
              name: "Battery & Charging: 5000 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor"
            },
            {
              name: "Special Features: Hyperboost gaming engine"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81xvGbBFNhL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Deep Ocean Blue, 8GB, 128GB Storage) | 6000mAh Battery | Upto 16GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹25,999",
          price: "20,499",
          discount: "(21% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹13,499",
          price: "9,499",
          discount: "(30% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UL320_.jpg",
          Name: "OnePlus Nord 2T 5G (Gray Shadow, 8GB RAM, 128GB Storage)",
          reviewNumber: "18,792",
          price: "28,999",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and OIS, 8MP Ultrawide Camera with 120 degree FOV and 2MP mono lens with Dual LED Flash; 32MP Front (Selfie) Camera with Sony IMX615"
            },
            {
              name: "Camera Features: AI Scene Enhancement, AI Highlight Video, Slow-motion captures, Dual-view Video, HDR, Nightscape, Portrait mode, Pano, Retouching and exciting filters."
            },
            {
              name: "Display: 6.43 Inches; 90 Hz AMOLED Display with Corning Gorilla Glass 5; Resolution: 2400 X 1080 pixels; HDR 10+ Certified"
            },
            {
              name: "Display Features: Ambient Display, AI colour enhancement and Dark mode"
            },
            {
              name: "Operating System: OxygenOS based on Android 12"
            },
            {
              name: "Processor: Mediatek Dimensity 1300"
            },
            {
              name: "Battery & Charging: 4500 mAh with 80W SuperVOOC"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71BoiXkrEmL._AC_UL320_.jpg",
          Name: "OnePlus 10R 5G (Sierra Black, 8GB RAM, 128GB Storage, 80W SuperVOOC)",
          reviewNumber: "11,521",
          mrp: "₹38,999",
          price: "32,999",
          discount: "(15% off)",
          selection6: [
            {
              name: "Camera: 50MP Main Camera with Sony IMX766 and 2MP Macro Camera with Dual LED Flash; 16MP Front (Selfie) Camera with Sony IMX471"
            },
            {
              name: "Camera Features: Nightscape2.0, Super Macro, UltraShot HDR, Smart Scene Recognition, Portrait mode, Pro mode, Panorama, Tilt-shift mode, Focus Peaking, Filters, Video Nightscape, Video HDR, Video Portrait Timelapse, Hyperlapse Mode"
            },
            {
              name: "Display: 6.7 Inches; 120 Hz IRIS Display; Resolution: 2400 X 1080 pixels 394 ppi; Aspect Ratio: 20:9"
            },
            {
              name: "Display Features: Hyper Touch Mode, Reading Mode, Night Mode, Eye Comfort Mode, Auto brightness"
            },
            {
              name: "Operating System: OxygenOS based on Android 12, Processor: MTK D8100 Max"
            },
            {
              name: "Battery & Charging: 5000 mAh with 80W SuperVOOC"
            },
            {
              name: "In-Display Fingerprint Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/8104evx11QL._AC_UL320_.jpg",
          Name: "Oppo A78 5G (Glowing Blue, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "20",
          mrp: "₹21,999",
          price: "18,999",
          discount: "(14% off)",
          selection6: [
            {
              name: "Big 5000 mAh Battery with 33W SUPERVOOC Charging"
            },
            {
              name: "Super smooth experience with ColorOS 13 and 8GB RAM (+ RAM expansion up to 8GB) | 128GB ROM | Expandable Upto 1TB"
            },
            {
              name: "Crystal clear details with AI Camera setup 50MP + 2MP Rear Camera | 8MP Front Camera"
            },
            {
              name: "OPPO Glow Design with 6.56 inch (16.66cm) 90Hz Color-Rich Display and Large Screen to Body ratio of 89.8%"
            },
            {
              name: "Dual Ultra Linear Stereo Speakers with ROST and flagship hardware which produce an immersive sound effect"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71Ta0Hcl+PL._AC_UL320_.jpg",
          Name: "Redmi 10A Sport (Sea Blue, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster",
          reviewNumber: "1,108",
          mrp: "₹13,999",
          price: "9,999",
          discount: "(29% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:6GB RAM (expandable to 8GB with RAM Booster) | 128GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71WC+Qz1KgL._AC_UL320_.jpg",
          Name: "Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹11,999",
          price: "8,999",
          discount: "(25% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:4GB RAM | 64GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Space Black, 4GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹17,999",
          price: "12,999",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81xvGbBFNhL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Deep Ocean Blue, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹17,999",
          price: "12,999",
          discount: "(28% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 128GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 (Midnight Blue, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹17,999",
          price: "12,999",
          discount: "(28% off)",
          selection6: [
            {
              name: "6000mAh lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Upto 12GB RAM with RAM Plus | 128GB internal memory expandable up to 1TB| Dual Sim (Nano)"
            },
            {
              name: "50MP+5MP+2MP Triple camera setup- True 50MP (F1.8) main camera +5MP(F2.2)+ 2MP (F2.4) | 8MP (F2.2) front cam"
            },
            {
              name: "Android 12,One UI Core 4 with a powerful Octa Core Processor"
            },
            {
              name: "16.72 centimeters (6.6-inch) FHD+ LCD - infinity O Display, FHD+ resolution with 1080 x 2408 pixels resolution, 401 PPI with 16M color"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/810KHyQ4WcL._AC_UL320_.jpg",
          Name: "Redmi 9A Sport (Coral Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
          reviewNumber: "316,285",
          mrp: "₹7,999",
          price: "6,499",
          discount: "(19% off)",
          selection6: [
            {
              name: "Processor: MediaTek Helio G25 Octa-core; Up to 2.0GHz clock speed"
            },
            {
              name: "Camera: 13 MP Rear camera with AI portrait| 5 MP front camera"
            },
            {
              name: "Display: 16.58 centimeters (6.53-inch) HD+ display with 720x1600 pixels and 20:9 aspect ratio"
            },
            {
              name: "Battery: 5000 mAH large battery with 10W wired charger in-box"
            },
            {
              name: "Memory, Storage & SIM: 2GB RAM | 32GB storage | Dual SIM (nano+nano) + Dedicated SD card slot"
            },
            {
              name: "The Selfie camera allows easy and convenient access to your phone with AI face unlock"
            },
            {
              name: "Form factor:Bar,Operating system:MIUI 12"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/814ePfNubRL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M04 Light Green, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 | 5000 mAh Battery",
          reviewNumber: "649",
          mrp: "₹13,499",
          price: "9,499",
          discount: "(30% off)",
          selection6: [
            {
              name: "Powerful MediaTek Helio P35 Octa Core 2.3GHz with Android 12,One UI Core 4.1"
            },
            {
              name: "13MP+2MP Dual camera setup- True 13MP (F2.2) main camera + 2MP (F2.4) | 5MP (F2.2) front came"
            },
            {
              name: "16.55 centimeters (6.5-inch) LCD, HD+ resolution with 720 x 1600 pixels resolution, 269 PPI with 16M color"
            },
            {
              name: "5000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81I3w4J6yjL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Mystique Green, 8GB, 128GB Storage) | 6000mAh Battery | Upto 16GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹25,999",
          price: "20,499",
          discount: "(21% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 8GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            },
            {
              name: "Intelligent Voice Focus | Power Cool Technology | Auto Data Switching"
            },
            {
              name: "Connector type: 3.5mm jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81lnKynSaqL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M33 5G (Emerald Brown, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus | Travel Adapter to be Purchased Separately",
          reviewNumber: "23,280",
          mrp: "₹24,999",
          price: "18,999",
          discount: "(24% off)",
          selection6: [
            {
              name: "Exynos 1280 Octa Core 2.4GHz 5nm Processor with the 12 band support for a True 5G experience"
            },
            {
              name: "16.72 centimeters (6.6-inch) LCD Display, FHD+ resolution, 1080x2400 pixels protected by Gorilla Glass 5"
            },
            {
              name: "Versatile Quad camera setup-50MP (F1.8)+ 5MP (F2.2/UW- 123 FOV) + 2MP (F2.4/Depth) + 2MP (F2.4/Macro) QuadCamera| 8MP (F1.8) Front Camera"
            },
            {
              name: "Massive 6000 mAh Battery | Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2+ Micro SD"
            },
            {
              name: "Latest Android v12.0, One UI 4 operating system."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71t7mcs1VoL._AC_UL320_.jpg",
          Name: "Redmi 10A Sport (Slate Grey, 6GB RAM, 128GB Storage) | 2 Ghz Octa Cor Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 8GB RAM with RAM Booster",
          reviewNumber: "1,108",
          mrp: "₹13,999",
          price: "9,999",
          discount: "(29% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:6GB RAM (expandable to 8GB with RAM Booster) | 128GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71poFSdDs5S._AC_UL320_.jpg",
          Name: "OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "33,437",
          mrp: "₹20,990",
          price: "15,490",
          discount: "(26% off)",
          selection6: [
            {
              name: "6.49 Inch (16.5cm) FHD+ Punch-hole Display with 2400x1080 pixels. Larger screen to body ratio of 90.5%.|Side Fingerprint Sensor. Bluetooth Audio Codec: SBC, AAC, APTX HD, LDAC"
            },
            {
              name: "Qualcomm Snapdragon 480 5G GPU 619 at 650 MHz Support 5G sim| Powerful 2 GHz Octa-core processor, support LPDDR4X memory and latest UFS 2.1 gear 3 storage"
            },
            {
              name: "5000 mAh lithium polymer battery"
            },
            {
              name: "48MP Quad Camera ( 48MP Main + 2MP Macro + 2MP Depth Lens) | 8MP Front Camera."
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (5G+5G).| Color OS 11.1 based on Android v11.0 operating system."
            },
            {
              name: "Connector type: USB Type C"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Horizon Blue, 6GB RAM, 64GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹18,999",
          price: "12,499",
          discount: "(34% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81LrmorQeQL._AC_UL320_.jpg",
          Name: "Oppo A78 5G (Glowing Black, 8GB RAM, 128 Storage) | 5000 mAh Battery with 33W SUPERVOOC Charger| 50MP AI Camera | 90Hz Refresh Rate | with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "20",
          mrp: "₹21,999",
          price: "18,999",
          discount: "(14% off)",
          selection6: [
            {
              name: "Big 5000 mAh Battery with 33W SUPERVOOC Charging"
            },
            {
              name: "Super smooth experience with ColorOS 13 and 8GB RAM (+ RAM expansion up to 8GB) | 128GB ROM | Expandable Upto 1TB"
            },
            {
              name: "Crystal clear details with AI Camera setup 50MP + 2MP Rear Camera | 8MP Front Camera"
            },
            {
              name: "OPPO Glow Design with 6.56 inch (16.66cm) 90Hz Color-Rich Display and Large Screen to Body ratio of 89.8%"
            },
            {
              name: "Dual Ultra Linear Stereo Speakers with ROST and flagship hardware which produce an immersive sound effect"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71kVEmAMyEL._AC_UL320_.jpg",
          Name: "Redmi 10A (Slate Grey, 3GB RAM, 32GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster",
          reviewNumber: "13,808",
          mrp: "₹10,999",
          price: "7,499",
          discount: "(32% off)",
          selection6: [
            {
              name: "Camera: 13MP Rear Camera | 5MP Front Camera"
            },
            {
              name: "Display: HD+(1600x700) IPS LCD display; 15.58 centimeters (6.53 inch); 20:9 aspect ratio"
            },
            {
              name: "Processor: MediaTek Helio G25 Octa-core processor; Up to 2.0 GHz clock speed"
            },
            {
              name: "Battery: 5000 mAh large battery with 10W fast charger in-box and Micro USB connectivity"
            },
            {
              name: "Memory, Storage & SIM:3GB RAM | 32GB storage expandable upto 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby(4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_UL320_.jpg",
          Name: "Redmi Note 11 (Horizon Blue, 6GB RAM, 128GB Storage)|90Hz FHD+ AMOLED Display | Qualcomm® Snapdragon™ 680-6nm | 33W Charger Included",
          reviewNumber: "52,064",
          mrp: "₹19,999",
          price: "14,499",
          discount: "(28% off)",
          selection6: [
            {
              name: "Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio"
            },
            {
              name: "Camera: 50 MP Quad Rear camera with 8MP Ultra-wide, 2MP Macro and Portrait lens| 13 MP Front camera"
            },
            {
              name: "Battery: 5000 mAh large battery with 33W Pro fast charger in-box and Type-C connectivity"
            },
            {
              name: "Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (4G+4G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81Bc+XzxecL._AC_UL320_.jpg",
          Name: "Redmi 11 Prime 5G (Meadow Green, 4GB RAM 64GB ROM) | Prime Design | MTK Dimensity 700 | 50 MP Dual Cam | 5000mAh | 7 Band 5G",
          reviewNumber: "2,651",
          mrp: "₹15,999",
          price: "13,999",
          discount: "(13% off)",
          selection6: [
            {
              name: "Processor: MediaTek Dimensity 700 with 5G, 7nm Octa-core processor; Up to 2.2GHz"
            },
            {
              name: "Display: 90Hz FHD+(1080x2400) AdaptiveSync Display; 16.71centimeters; 20:9 aspect ratio"
            },
            {
              name: "Camera: 50MP AI Dual camera | 8MP Front camera"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 64GB UFS 2.2 storage expandable up to 512GB with dedicated SD card slot | Dual SIM (nano+nano) dual standby (5G+5G)"
            },
            {
              name: "Battery: 5000 mAh large battery with 18W fast charging support and 22.5W fast charger in-box with Type-C connectivity"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71xb2xkN5qL._AC_UL320_.jpg",
          Name: "Apple iPhone 13 (128GB) - Blue",
          reviewNumber: "13,013",
          mrp: "₹69,900",
          price: "61,999",
          discount: "(11% off)",
          selection6: [
            {
              name: "15 cm (6.1-inch) Super Retina XDR display"
            },
            {
              name: "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos"
            },
            {
              name: "Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording"
            },
            {
              name: "A15 Bionic chip for lightning-fast performance"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/7155Pasn1aL._AC_UL320_.jpg",
          Name: "Redmi Note 11T 5G (Matte Black, 6GB RAM, 128GB ROM)| Dimensity 810 5G | 33W Pro Fast Charging | Charger Included | Additional Exchange Offers|Get 2 Months of YouTube Premium Free!",
          reviewNumber: "32,684",
          mrp: "₹20,999",
          price: "16,999",
          discount: "(19% off)",
          selection6: [
            {
              name: "Processor: MediaTek Dimensity 810 Octa-core 5G processor based on 6nm process with HyperEngine 2.0 and clock speed up to 2.4GHz;"
            },
            {
              name: "Display: 6.6 inch FHD+ (2400x1080) Dot display with 90Hz high refresh rate and adaptive refresh rate technology; 240Hz touch sampling rate;"
            },
            {
              name: "Camera: 50MP High resolution primary camera f/1.8 with 8MP Ultra-wide sensor| 16 MP Front camera"
            },
            {
              name: "Battery: 5000mAh battery with 33W Pro fast charging support"
            },
            {
              name: "Memory, Storage : 6GB LPDDR4X RAM | 128GB UFS2.2 Internal storage"
            },
            {
              name: "Headphones jack:3.5mm,Display type:LCD,Operating system:MIUI 12.5 based on Android 11"
            },
            {
              name: "Get 2 months of YouTube Premium free!"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81OC0ojxH6L._AC_UL320_.jpg",
          Name: "Samsung Galaxy M32 Prime Edition (Light Blue, 6GB RAM, 128GB)",
          reviewNumber: "56,762",
          mrp: "₹18,999",
          price: "15,499",
          discount: "(18% off)",
          selection6: [
            {
              name: "Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5"
            },
            {
              name: "Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera"
            },
            {
              name: "Monster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2 + MicroSD"
            },
            {
              name: "Android v12.0, One UI 4.1 operating system with MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz"
            },
            {
              name: "6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹19,999",
          price: "17,999",
          discount: "(10% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 4GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UL320_.jpg",
          Name: "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
          reviewNumber: "58,811",
          mrp: "₹15,990",
          price: "12,490",
          discount: "(22% off)",
          selection6: [
            {
              name: "12+2+2MP triple rear camera (12MP main camera+2MP macro lens+2MP depth camera) with Portrait bokeh, macro lens, dazzle color mode, AI beautification | 8MP front camera. OTG : Supported NFC : No"
            },
            {
              name: "16.5 centimeters (6.5-inch) waterdrop multi touch screen with an 89% screen to body ratio | 1600 x 720 pixels resolution, 269 ppi pixel density"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 256GB | Dual SIM (nano+nano) dual-standby (4G+4G)"
            },
            {
              name: "Android Pie v9.0 based on ColorOS 6.1 operating system with 2.3GHz Mediatek 6765 octa core processor, IMG GE8320"
            },
            {
              name: "4230mAH lithium-polymer battery providing talk-time of 45 hours and standby time of 450 hours"
            },
            {
              name: "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
              name: "Box also includes: USB cable, Sim tray ejecter, pre-applied screen protector and protective case, booklet with warranty card and quick guide. The box does not include earphones"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81E8fhm0dcL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹21,999",
          price: "19,999",
          discount: "(9% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81Jov18YvpL._AC_UL320_.jpg",
          Name: "Samsung Galaxy M32 Prime Edition (Black, 6GB RAM, 128GB)",
          reviewNumber: "56,762",
          price: "15,499",
          selection6: [
            {
              name: "Segment Best 16.21 centimeters (6.4-inch) Super AMOLED - Infinity U-cut display, FHD+ resolution with 90Hz Refresh rate, 800 Nits High Brightness Mode, protected by Gorilla Glass 5"
            },
            {
              name: "Versatile 64MP+8MP+2MP+2MP Quad camera setup-64MP (F 1.8) main camera + 8MP (F2.2) Ultra wide camera+ 2MP (F2.4) depth camera + 2MP (2.4) Macro Camera| 20MP (F2.2) front camera"
            },
            {
              name: "Monster 6000 mAh Battery| Memory, Storage & SIM: 6GB RAM | 128GB internal memory expandable up to 1TB| SIM 1 + SIM 2 + MicroSD"
            },
            {
              name: "Android v12.0, One UI 4.1 operating system with MediaTek | Helio G80 Octa Core Processor 2GHz,1.8GHz"
            },
            {
              name: "6000mAH lithium-ion battery, 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/51RqXqfn1iL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹21,999",
          price: "19,999",
          discount: "(9% off)",
          selection6: [
            {
              name: "Display: Super AMOLED (1080x2400) Display with 120Hz Refresh rate; 1200nits peak brightness; 240Hz Touch sampling rate"
            },
            {
              name: "Processor: Snapdragon 4 Gen1 6nm Octa-core 5G processor for high performance and efficiency with Adreno 619 GPU; Up to 2.0GHz"
            },
            {
              name: "Camera: 48MP AI Triple camera setup with 8MP Ultra Wide sensor and 2MP Macro camera| 13MP Front camera"
            },
            {
              name: "Battery: 5000mAh large battery with 33W fast charger in-box and Type-C connectivity"
            },
            {
              name: "Memory, Storage & SIM: 6GB RAM | 128GB UFS 2.2 storage expandable up to 1TB | Dual SIM (nano+nano) Dual 5G (5G+5G)"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71EjohFmm6L._AC_UL320_.jpg",
          Name: "Samsung Galaxy M13 5G (Midnight Blue, 4GB, 64GB Storage) | 5000mAh Battery | Upto 8GB RAM with RAM Plus",
          reviewNumber: "20,577",
          mrp: "₹16,999",
          price: "13,999",
          discount: "(18% off)"
        },
        {
          image: "https://m.media-amazon.com/images/I/51RqXqfn1iL._AC_UL320_.jpg",
          Name: "Redmi Note 12 5G Matte Black 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
          reviewNumber: "431",
          mrp: "₹19,999",
          price: "17,999",
          discount: "(10% off)"
        }
      ]
    for(let i=0;i<selection1.length;i++){
      selection1[i].category="Phone"
      selection1[i].rating=((Math.random() * (5 - 3) ) + 3).toPrecision(1)
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