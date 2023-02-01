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
          image: "https://m.media-amazon.com/images/I/61v5hS-1kcL._AC_UL320_.jpg",
          Name: "Dell New G15 5520 Gaming Laptop,Intel i5-12500H,16GB,512GB SSD,Win 11,NVIDIA RTX 3050 (4GB GDDR6),15.6\"(39.62Cms) FHD WVA AG 120Hz 250 nits,Backlit KB Orange,Dark Shadow Grey,2.81Kgs(D560822WIN9B)",
          reviewNumber: "10",
          mrp: "₹1,12,802",
          price: "84,990",
          discount: "(25% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel Core i5-12500H (18MB Cache, up to 4.5 GHz, 12 cores)"
            },
            {
              name: "RAM & Storage: 16GB, 2x8GB, DDR5, 4800MHz & 512GB M.2 PCIe Solid State Drive ]"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 (90 W)"
            },
            {
              name: "Display & Keyboard: 15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display & keyboard for US English(Orange backlit)"
            },
            {
              name: "Software: Windows 11 & Microsoft Office Home and Student 2021 & 3-Cell Battery, 56WHr (Integrated)"
            },
            {
              name: "Ports: (1) HDMI 2.1, (3) USB 3.2 Gen 1 Type-A, (1) USB-C Display Port Alt-Mode, Headphone/Mic, (1) RJ45"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UL320_.jpg",
          Name: "Apple 2021 MacBook Pro (14-inch/35.97 cm, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Grey",
          reviewNumber: "16",
          mrp: "₹2,39,900",
          price: "2,13,894",
          discount: "(11% off)",
          selection6: [
            {
              name: "Apple M1 Pro or M1 Max chip for a massive leap in CPU, GPU and machine learning performance"
            },
            {
              name: "Up to 10-core CPU delivers up to 3.7x faster performance to fly through pro workflows quicker than ever"
            },
            {
              name: "Up to 32-core GPU with up to 13x faster performance for graphics-intensive apps and games"
            },
            {
              name: "16-core Neural Engine for up to 11x faster machine learning performance"
            },
            {
              name: "Longer battery life, up to 17 hours"
            },
            {
              name: "Up to 64GB of unified memory so everything you do is fast and fluid"
            },
            {
              name: "Up to 8TB of super-fast SSD storage launches apps and opens files in an instant"
            },
            {
              name: "Stunning 35.97 cm (14-inch) Liquid Retina XDR display with extreme dynamic range and contrast ratio"
            },
            {
              name: "FaceTime HD camera with advanced image signal processor for, sharper video calls"
            },
            {
              name: "Six-speaker sound system with force-cancelling woofers."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/818J2BnorkL._AC_UL320_.jpg",
          Name: "HP Envy 11th Gen Intel Evo Core i7 14 inch(35.6 cm) WUXGA Anti-Glare Display 2-in-1 Laptop(16GB RAM/1TB SSD/GTX 1650 4GB Graphics/400 nits/Win 11/MS Office/FPR/B&O/Alexa Built-in/1.59 Kg), 14-eb0021TX",
          reviewNumber: "12",
          mrp: "₹1,41,804",
          price: "1,37,500",
          discount: "(3% off)",
          selection6: [
            {
              name: "Do Check Partner offer section for Exciting offers from HP."
            },
            {
              name: "Free upgrade to Windows 11 when available* Disclaimer-*The Windows 11 upgrade will be delivered late 2021 into 2022. Timing varies by device. Certain features require specific hardware."
            },
            {
              name: "Processor: 11th Gen Intel Core i7-1165G7 (up to 4.7 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 4 cores, 8 threads)"
            },
            {
              name: "Memory & Storage: 16 GB LPDDR4x-3733 MHz RAM | Storage: 1TB PCIe NVMe TLC M.2 SSD"
            },
            {
              name: "Display: 35.6 cm (14\") diagonal, WUXGA (1920 x 1200), IPS, micro-edge, anti-glare, 400 nits, 100% sRGB, Delta E<2 color calibration, 100% factory calibration"
            },
            {
              name: "Graphics & Networking: NVIDIA GeForce GTX 1650 Ti with Max-Q design (4 GB GDDR6 dedicated) | Intel Wi-Fi CERTIFIED 6 AX201 (2x2) and Bluetooth 5 combo (Supporting Gigabit data rate), MU-MIMO supported, Miracast Compatible"
            },
            {
              name: "Why HP? What is good for the planet, is good for technology and good for us. Technology must be mindful of the environment and HP believes in sustainability."
            },
            {
              name: "In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/610sreKWXlL._AC_UL320_.jpg",
          Name: "Dell New G15-5515 Gaming Laptop, AMD Ryzen7-5800H, Windows 11+Mso'21, 16Gb Gddr4, 512Gb Ssd, Nvidia RTX 3060 (6Gb Gddr6), 15.6 Inches Fhd Ag 300 Nits 165Hz, Backlit Kb Orange (D560730Win9W) 2.57Kgs",
          reviewNumber: "9",
          mrp: "₹1,51,940",
          price: "1,09,100",
          discount: "(28% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 7 5800H 8-core/16-thread Mobile Processor"
            },
            {
              name: "RAM & Storage: 16GB, 2x8GB, DDR4, 3200MHz & 512GB M.2 PCIe NVMe Solid State Drive"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3060 6GB GDDR6 (125 W)"
            },
            {
              name: "Display & Keyboard: 15.6 inch FHD (1920 x 1080) 165Hz WVA Anti- Glare LED Backlit Narrow Border Display & [GG068TW]Orange Backlit"
            },
            {
              name: "Software: Windows 11 & Microsoft Office Home and Student 2021 & 6-Cell 86WHr Integrated"
            },
            {
              name: "Ports: (1) HDMI 2.1, (2) SuperSpeed USB 2.0 Gen 1 Type-A including (1) with PowerShare, (1) SuperSpeed USB 3.2, (1) USB-C Data/Display Port Alt-Mode, Headphone/Mic, (1) RJ45"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61sN5rcVspL._AC_UL320_.jpg",
          Name: "ASUS TUF Dash F15 (2022), 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i5-12450H 12th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/512GB SSD/Windows 11/Office 2021/Black/2 kg), FX517ZC-HN036WS",
          reviewNumber: "41",
          mrp: "₹1,01,990",
          price: "75,990",
          discount: "(25% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i5-12450H, 2 GHz Base Speed (12MB Cache, up to 4.4 GHz Max Turbo Speed, 8 cores (4 P-cores and 4 E-cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFX517ZC-HN036WSand one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 8GB SO-DIMM DDR5 4800MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh rate, vIPS-level Anti-Glare Plane, Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM MUX Switch with 1550MHz* at 75W (1500MHz Boost Clock+50MHz OC, 60W+15W Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity | McAfee (1 Year)"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard Single Light"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 2x USB 3.2 Gen 1 Type-A"
            },
            {
              name: "Other: 720P HD camera | Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.1 | 2-speaker system | Built-in Microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81h346HzqML._AC_UL320_.jpg",
          Name: "HP Pavilion 14 12th Gen Intel Core i7 16GB SDRAM/1TB SSD 14 inch(35.6cm) FHD,IPS,Micro-Edge Display/Intel Iris Xe Graphics/B&O/Win 11/Alexa Built-in/Backlit KB/FPR/MSO 2021/Natural Silver,14-dv2015TU",
          reviewNumber: "46",
          mrp: "₹1,02,473",
          price: "87,028",
          discount: "(15% off)",
          selection6: [
            {
              name: "Do Check Partner offer section for Exciting offers from HP;Processor:Intel Core i7-1255U (up to 4.7 GHz with Intel Turbo Boost Technology(2g),12 MB L3 cache, 10 cores, 12 threads)| Memory & Storage: 16 GB DDR4-3200 SDRAM (2 x 8 GB)| Storage: 1 TB PCIe NVMe M.2 SSD"
            },
            {
              name: "Display & Graphics: 35.6 cm (14\") diagonal, FHD, IPS, micro-edge, BrightView, 250 nits, 157 ppi | Graphics: Intel UHD Graphics;Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2021|McAfee LiveSafe (30 days free trial as default)| Pre-installed Alexa built-in- Your life simplified with Alexa. Just ask Alexa to check your calendar, create to-do lists, shopping lists, play music, set reminders, get latest news and control smart home."
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 10Gbps signaling rate (USB Power Delivery, DisplayPort 1.4, HP Sleep and Charge), 2 SuperSpeed USB Type-A 5Gbps signaling rate,1 Headphone/microphone Combo,1 AC Smart pin, 1 HDMI 2.1;Features: Camera: HP Wide Vision 720p HD camera with temporal noise reduction and integrated dual array digital microphones| Audio: Audio by B&O, Dual Speakers| Keyboard: Full-size backlit natural silver keyboard , HP Imagepad with multi-touch gesture support| Battery: 3-cell, 43 Wh Li-ion, Support battery fast charge| Networking: MediaTek Wi-Fi CERTIFIED 6 MT7921 (2x2) and Bluetooth 5.2 combo, MU-MIMO supported| Fingerprint Reader"
            },
            {
              name: "Why HP? What is good for the planet, is good for technology and good for us. Technology must be mindful of the environment and HP believes in sustainability.; In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            },
            {
              name: "Form Factor: Laptop; Human Interface Input: Microphonekeyboard; Display Resolution Maximum: 1920 X 1080; Software Included: Microsoft Office 365; Resolution: 1280 X 720; Hard Disk Interface: Usbusb C"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/91zVSkGGZbS._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming A15, 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 7 4800H, 4GB NVIDIA GeForce RTX 3050, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Black/2.3 Kg), FA506ICB-HN005W",
          reviewNumber: "76",
          mrp: "₹92,990",
          price: "80,990",
          discount: "(13% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 7 4800H Mobile Processor (8-core/16-thread, 12MB Cache, 4.2 GHz max boost)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFA506ICB-HN005Wand one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 8GB SO-DIMM DDR4 3200MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh rate, vIPS-level Anti-Glare Plane, Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM with up to 1600Mhz at 60W ( 75W with Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: 1-month trial for new Microsoft 365 customers"
            },
            {
              name: "Design: 2.28 ~ 2.45 cm Thin | Honeycomb Grip base & Hexagon reinforcements chassis Design | 2.3 kg weight | 90WHrs, 4-cell Lithium Polymer Battery | Up to 14.7 hours battery life; Note: Battery life depends on conditions of usage"
            },
            {
              name: "I/O Port: 1x HDMI 2.0b, 1x RJ45 LAN port, 1x USB 3.2 Gen 1 Type-C support DisplayPort / G-SYNC, 3x USB 3.2 Gen 1 Type-A, 1x 3.5mm Combo Audio Jack | Other: Backlit RGB Keyboard | Wi-Fi 6(802.11ax)+Bluetooth 5.2 (Dual band) 2*2 | 720P HD webcam | 2x 2W Speaker | Built-in array microphone | DTS Audio Technology | Wi-Fi 6 (802.11ax) 2*2 | Bluetooth 5.2"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Er61SxBhL._AC_UL320_.jpg",
          Name: "Lenovo Legion 5 Intel Core i7 11th Gen 15.6\" (39.62cm) FHD IPS Gaming Laptop (16GB/512GB SSD/4GB NVIDIA RTX 3050/120Hz/Windows 11/Office 2021/Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JK00GCIN",
          reviewNumber: "1",
          mrp: "₹1,53,490",
          price: "1,17,990",
          discount: "(23% off)",
          selection6: [
            {
              name: "Processor: Intel Core i7-11800H | Speed: 2.3 GHz (Base) - 4.6 GHz (Max) | 8 Cores | 16 Threads | 24MB Cache"
            },
            {
              name: "Display: 15.6\" FHD (1920x1080) Dolby Vision | IPS | 120 Hz Refresh Rate | 250Nits Brightness Anti-glare | 45% NTSC || Memory: 16GB RAM DDR4-3200 | Upgradable Up to 32GB || Storage: 512GB SSD || Connectivity : Wifi 6 11ax (2x2) | BT 5.1"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 Dedicated Graphics with max TGP 95W | Boost Clock 1500/1740MHz | Free-Sync and G-Sync || Cooling: Legion Coldfront 3.0 with Quad Channel Exhaust System with Copper Fins"
            },
            {
              name: "AI Engine : Upto 15% more FPS and Best performance with Auto Detect Mode (Top 16 AAA Titles) and Auto Optimisation Mode | Q Control 4.0 to select between Quiet (Blue), Intelligent (White) and Performance (Red) Modes"
            },
            {
              name: "OS and Pre-Installed Softare: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription*"
            },
            {
              name: "Audio: 2 x 2W HD Stereo Speakers | Nahimic Audio with Surround Sound, Sound Tracker, Night Mode, Sound Sharing and Content Profiles || Camera: HD 720p | E-camera Shutter | Physical kill switch for 100% privacy protection | Integrated Dual Array Mic"
            },
            {
              name: "Keyboard: White Backlit Legion TrueStrike Keyboard with 100% Anti-Ghosting, Anti-Abrasion and Soft-Landing switches | 1.5 mm Key Travel | Large Arrow Keys | Large one piece Track Pad"
            },
            {
              name: "Battery Life: 60Wh | upto 7 Hrs | Charge up to 50% in 30min || Ports: 4x USB-A 3.2 Gen 1 (1 Always On) | 1x Thunderbolt 4/USB4 40Gbps (Data transfer, Power Delivery & DisplayPort 1.4) | 1x combo jack 3.5mm | 1x HDMI 2.1 | 1x Ethernet (RJ-45)"
            },
            {
              name: "Warranty: This genuine Lenovo laptop comes with 1 Year onsite manufacturer warranty + 1 Year Accidental Damage Protection + 1 Year Legion Ultimate Support, ; Display Resolution Maximum: 1920 X 1080; Wireless Communication Technology: Wi-Fi; Resolution: 1080p; Software Included: Windows 11 Home 64, English"
            },
            {
              name: "*Active subscription needed;continues until cancelled-game catalog varies. Needs Windows11 & app to play PC games; see-xbox.com/pcgamesplan. Discounts exclude titles within 30 days of launch; based on Microsoft Store price. See xbox.com/game-pass."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61OY-hqgYOL._AC_UL320_.jpg",
          Name: "Samsung Galaxy Book2 Pro Intel 12th Gen i7 EvoTM 33.78cm (13.3\") AMOLED Thin & Light Laptop (16 GB/512 GB SSD/Windows 11/MS Office/Backlit KB/Fingerprint Sensor/Silver/0.87Kg), NP930XED-KB2IN",
          reviewNumber: "28",
          mrp: "₹1,39,990",
          price: "1,09,990",
          discount: "(21% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
            },
            {
              name: "Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Quick Search, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch"
            },
            {
              name: "Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics | Design: Aluminum body with 11.2mm thinness and 0.87kg"
            },
            {
              name: "Ports: 1 HDMI, 1 Thunderbolt 4, 1 USB Type-C, 1 USB3.2, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive | Battery = 63 Wh, 65 W USB Type-C Adapter"
            },
            {
              name: "Camera: 1080p FHD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit) | FingerPrint Reader, Ambient Light Sensor, Accelerometer Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61lqAB8G4rL._AC_UL320_.jpg",
          Name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3\") Touchscreen 2-in-1 AMOLED Thin & Light Laptop (16 GB/512 GB SSD/Windows 11/MS Office/with S Pen/Silver/1.04Kg), NP930QED-KB2IN",
          reviewNumber: "55",
          mrp: "₹1,45,990",
          price: "1,13,990",
          discount: "(22% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
            },
            {
              name: "Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch"
            },
            {
              name: "Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics | Design: Aluminum body with 11.5mm thinness and 1.04kg"
            },
            {
              name: "Ports: 1 Thunderbolt 4, 2 USB Type-C, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive |Battery = 63 Wh, 65 W USB Type-C Adapter"
            },
            {
              name: "Camera: 1080p FHD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit), S Pen In box | FingerPrint Reader, Ambient Light Sensor, Accelerometer Sensor, Gyro Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71Ncb6z2gfL._AC_UL320_.jpg",
          Name: "MSI Gaming Crosshair 15, Intel 12th Gen. i7-12700H, 40CM QHD 165Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia RTX 3060 6GB GDDR6/ Black/2.3Kg), B12UEZ-677IN",
          reviewNumber: "88",
          mrp: "₹1,56,990",
          price: "1,11,000",
          discount: "(29% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel Core i7-12700H Up To 4.70 GHz;Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: Nvidia GeForce Experience Nahimic 3 MSI Center Gaming Mode MSI App player | In the box: Laptop, Adapter"
            },
            {
              name: "Display: 40CM QHD (2560*1440), 165Hz DCI-P3 100% IPS Level Panel;Memory & Storage: 8GBx2 DDR4 3200MHz RAM, expandable to 64 GB | Storage:1TB NVMe PCIe Gen4x4 SSD"
            },
            {
              name: "Dedicated Graphics: NVIDIA GeForce RTX 3060 GDDR6 6GB;\"Thin and light High Performance design | Laptop weight: 2.3 kg "
            },
            {
              name: "Keyboard: Spectrum Backlight Keyboard;Camera: HD type (30fps@720p) | Microphone: Built-in microphone; \"1x Type-C USB3.2 Gen1 2x Type-A USB3.2 Gen1 1x Type-A USB2.0 1x RJ45 1x (4K @ 60Hz) HDMI"
            },
            {
              name: "Resolution: 1280 X 7202560 X 1440; Human Interface Input: Microphonekeyboard"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/614sjOjYnIL._AC_UL320_.jpg",
          Name: "Samsung Galaxy Book2 360 Intel 12th Gen i7 EvoTM 33.78cm (13.3\") AMOLED 2 in 1 Touch Screen Laptop (16 GB/512 GB SSD/Windows 11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.16Kg), NP730QED-KA1IN",
          reviewNumber: "47",
          mrp: "₹1,28,990",
          price: "1,05,990",
          discount: "(18% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel EVOTM Core i7-1255U Processor(1.7 GHz up to 4.7 GHz, 12 MB L3 Cache) | Memory: 16 GB LPDDR4x Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
            },
            {
              name: "Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Quick Search, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch"
            },
            {
              name: "Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics | Design: Aluminum body with 12.9mm thinness and 1.6kg"
            },
            {
              name: "Ports: 1 HDMI, 1 Thunderbolt 4, 1 USB Type-C, 1 USB3.2, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive | Battery = 61.1 Wh, 65 W USB Type-C Adapter"
            },
            {
              name: "Camera: 720p HD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit) | FingerPrint Reader, Accelerometer Sensor, Gyro Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71KVSMG5g7L._AC_UL320_.jpg",
          Name: "ASUS Vivobook S15 OLED 2022, 15.6\" 39.62 cms FHD OLED, Intel Core Evo i7-12700H 12th Gen, Thin and Light Laptop (16GB/512GB SSD/Iris Xe Graphics/Windows 11/Office 2021/Black/1.8 kg) K3502ZA-L702WS",
          reviewNumber: "9",
          mrp: "₹1,16,990",
          price: "84,700",
          discount: "(28% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel EVO Core i7-12700H, 2.3 GHz Base Speed, 24MB Cache, Up to 4.7 GHz Max Turbo Speed, 14 Cores (6P+8E), 20 Threads"
            },
            {
              name: "Memory: 16GB (8GB onboard + 8GB SO-DIMM) DDR4 3200MHz with | Storage: 512GB M.2 NVMe PCIe 4.0 SSD"
            },
            {
              name: "Display: 15.6-inch (39.62 cms), FHD (1920 x 1080) OLED 16:9 aspect ratio, 0.2ms response time, 600nits peak brightness, Anti-glare display, 100% DCI-P3 color gamut, Screen-to-body ratio: 84％, VESA CERTIFIED Display HDR True Black 600, PANTONE Validated."
            },
            {
              name: "Graphics: Integrated Intel Iris Xe Graphics"
            },
            {
              name: "Operating System: Pre-loaded Windows 11 Home with lifetime validity | Software Included: Pre-Installed Office Home and Student 2021 | 1-Year McAfee Anti-Virus"
            },
            {
              name: "Design & Battery: 1.89 cm Thin | Metallic Lid | Thin and Light Laptop | Laptop weight: 1.8 kg | 70WHrs, 3-cell Li-ion battery | Up to 10 hours battery life ;Note: Battery life depends on conditions of usage"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard | 1.4mm Key Travel"
            },
            {
              name: "I/O Port: 1x USB 2.0 Type-A, 1x USB 3.2 Gen 1 Type-A, 2x Thunderbolt 4 supports display / power delivery, 1x HDMI 2.0b, 1x 3.5mm Combo Audio Jack"
            },
            {
              name: "Other: Fingerprint sensor integrated with Power Key | 720p HD camera with privacy shutter| Built-in speaker | Built-in array microphone | Wi-Fi 6E(802.11ax) 2*2 + Bluetooth 5.2 | MIL-STD 810H Military-Grade Durability"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61sN5rcVspL._AC_UL320_.jpg",
          Name: "ASUS TUF Dash F15 (2022), 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i7-12650H 12th Gen, RTX 3050 4GB Graphics, Gaming Laptop (16GB/512GB SSD/Windows 11/Office 2021/Black/2 kg), FX517ZC-HN107WS",
          reviewNumber: "67",
          mrp: "₹1,34,990",
          price: "95,990",
          discount: "(29% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i7-12650H, 2.3 GHz Base Speed (24MB Cache, up to 4.7 GHz Max Turbo Speed, 10 cores (6 P-cores and 4 E-cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFX517ZC-HN107WSand one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh rate, vIPS-level Anti-Glare Plane, Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM MUX Switch with 1550MHz* at 75W (1500MHz Boost Clock+50MHz OC, 60W+15W Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity | McAfee (1 Year)"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard Single Light"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 2x USB 3.2 Gen 1 Type-A"
            },
            {
              name: "Other: 720P HD camera | Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.1 | 2-speaker system | Built-in Microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81yb3aWShRL._AC_UL320_.jpg",
          Name: "MSI Gaming Sword 15, Intel 12th Gen. i5-12500H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia RTX 3050 4GB GDDR6/ Black/2.6Kg), A12UC-467IN",
          reviewNumber: "74",
          mrp: "₹1,06,990",
          price: "89,944",
          discount: "(16% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel Core i5-12500H Up To 4.50 GHz"
            },
            {
              name: "Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: Nvidia GeForce Experience Nahimic 3 MSI Center Gaming Mode MSI App player | In the box: Laptop, Adapter"
            },
            {
              name: "Display: 40CM FHD (1920*1080), 144Hz 45%NTSC IPS-Level Panel"
            },
            {
              name: "Memory & Storage: 8GBx2 DDR4 3200MHz RAM, expandable to 64 GB | Storage:1TB NVMe PCIe Gen4x4 SSD"
            },
            {
              name: "Dedicated Graphics: NVIDIA GeForce RTX 3050 GDDR6 4GB"
            },
            {
              name: "\"Ultra Thin and light High Performance design | Laptop weight: 2.3 kg "
            },
            {
              name: "Keyboard: Backlight Keyboard (Single-Color, Blue)"
            },
            {
              name: "Camera: HD type (30fps@720p) | Microphone: Built-in microphone"
            },
            {
              name: "\"1x Type-C USB3.2 Gen1 2x Type-A USB3.2 Gen1 1x Type-A USB2.0 1x RJ45 1x (4K @ 60Hz) HDMI"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71NxKpg1NIL._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming F15 (2022), 15.6\" (39.62 cms) FHD 144Hz, Intel Core i7-12700H 12th Gen, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/512GB SSD/90WHrs Battery/Windows 11/Gray/2.2 kg), FX577ZE-HN056W",
          reviewNumber: "32",
          mrp: "₹1,44,990",
          price: "98,400",
          discount: "(32% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i7-12700H Processor 2.3 GHz (24M Cache, up to 4.7 GHz, 14 cores: 6 P-cores and 8 E-cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new FX577ZE-HN056W and one month of Game Pass-including EA Play"
            },
            {
              name: "With new games added. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800 MHz Support Up to 32GB 2x SO-DIMM slots with | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 2x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6 inch (39.62 cms) FHD (1920 x 1080) 16:9 250nits, 144Hz Refresh Rate, vIPS-level Anti-glare display, Contrast Ratio: 1000:1 with Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 Ti 4GB GDDR6 VRAM MUX Switch Optimus with 1745MHz* at 95W (1695MHz Boost Clock 50MHz OC, 80W 15W Dynamic Boost)"
            },
            {
              name: "Operating System: Windows 11 Homewith Lifetime Validity | Software Included: | McAfee (1 Year)"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard 1-Zone RGB"
            },
            {
              name: "Design: 2.24 ~ 2.49 cm Thin | 90WHrs, 4S1P, 4-cell Li-ion | Up to 14.7 hours battery life; Note: Battery life depends on conditions of usage"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / G-SYNC, 2x USB 3.2 Gen 1 Type-A | 1x HDMI 2.1 TMDS | 1x 3.5mm Combo Audio Jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61sN5rcVspL._AC_UL320_.jpg",
          Name: "ASUS TUF Dash F15 (2022), 15.6-inch (39.62 cms) WQHD 165Hz/3ms, Intel Core i7-12650H 12th Gen, RTX 3070 8GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11/Office 2021/Black/2 kg), FX517ZR-HQ030WS",
          reviewNumber: "13",
          mrp: "₹1,88,990",
          price: "1,49,990",
          discount: "(21% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i7-12650H Processor 2.3 GHz (24MB Cache, up to 4.7 GHz, 10 cores: 6 P-cores and 4 E-cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new FX517ZR-HQ030WS and one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 32GB (8GB SO-DIMM *2) DDR5 4800MHz with | Storage: 1TB PCIe 3.0 NVMe M.2 SSD with additional empty 1x M.2 Slot for storage upgrade"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3070 GPU GDDR6 8GB VRAM with MUX Switch + Optimus, 1340MHz* at 105W (1290MHz Boost Clock+50MHz OC, 80W+25W Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student 2021 with Lifetime Validity | McAfee (1 Year*)"
            },
            {
              name: "Keyboard: Single Light Backlit Chiclet Keyboard"
            },
            {
              name: "I/O Port: 1x 3.5mm Combo Audio Jack, 1x HDMI 2.0b, 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 2x USB 3.2 Gen 1 Type-A"
            },
            {
              name: "Other: 720P HD camera | Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.1 (*BT version may change with OS upgrades.) | Built-in array microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/91zVSkGGZbS._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming A15, 15.6-inch (39.62 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 4GB Graphics, Gaming Laptop (16GB/512GB SSD/90WHrs Battery/Windows 11/Office 2021/Black/2.3 kg), FA506ICB-HN075WS",
          reviewNumber: "6",
          mrp: "₹98,990",
          price: "77,990",
          discount: "(21% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 7 4800H Mobile Processor (8-core/16-thread, 12MB Cache, 4.2 GHz max boost)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFA506ICB-HN005Wand one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB SO-DIMM DDR4 3200MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh rate, vIPS-level Anti-Glare Plane, Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM with up to 1600Mhz at 60W ( 75W with Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity"
            },
            {
              name: "Design: 2.28 ~ 2.45 cm | 2.30 Kg weight| 90WHrs, 4S1P, 4-cell Li-ion;"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard 1-Zone RGB"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 3x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 1 Type-C support DisplayPort | Other: Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.1 720P HD camera AI noise-canceling technology, DTS software"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Er61SxBhL._AC_UL320_.jpg",
          Name: "Lenovo Legion 5 AMD Ryzen 7 5800H 15.6\" (39.62cm) WQHD IPS Gaming Laptop (16GB/1TB SSD/6GB NVIDIA RTX 3060/165Hz/Windows 11/Office 2021/RGB Backlit/3months Game Pass/Phantom Blue/2.4Kg), 82JU00SYIN",
          reviewNumber: "205",
          mrp: "₹1,86,090",
          price: "1,29,994",
          discount: "(30% off)",
          selection6: [
            {
              name: "Processor: 5th Gen AMD Ryzen 7 - 5800H | Speed: 3.2 GHz (Base) - 4.4 GHz (Max) | 8 Cores | 16 Threads | 4MB L2 / 16MB L3 Cache"
            },
            {
              name: "Display: 15.6\" WQHD (2560x1440) Dolby Vision | IPS Technology | 165 Hz Refresh Rate | 300Nits Brightness | 100% sRGB || Memory: 16GB RAM DDR4-3200, Upgradable Up to 32GB || Storage: 1TB SSD SSD || Connectivity : Wifi 6 11ax (2x2)Bluetooth 5.1"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3060 6GB GDDR6 Dedicated Graphics with max TGP 130W | Boost Clock 1425/1702MHz | Free-Sync and G-Sync || Cooling: Legion Coldfront 3.0 with Quad Channel Exhaust System with Copper Fins"
            },
            {
              name: "AI Engine : Upto 15% more FPS and Best performance with Auto Detect Mode (Top 16 AAA Titles) and Auto Optimisation Mode | Q Control 4.0 to select between Quiet (Blue), Intelligent (White) and Performance (Red) Modes"
            },
            {
              name: "OS and Pre-Installed Softare: Pre-Loaded Windows 11 Home with Lifetime Validity | MS Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription* || Battery Life: 80Wh | upto 8 Hours | Rapid Charge Pro (Up to 60% in 30 Minutes)"
            },
            {
              name: "Audio: 2x2W HD Stereo Speakers| Nahimic Audio with Surround Sound, Sound Tracker, Night Mode, Sound Sharing & Content Profiles || Camera: HD 720p | E-camera Shutter :Physical kill switch for 100% privacy protection| Integrated Dual Array Microphone"
            },
            {
              name: "Keyboard: Full-size 4-Zone RGB LED Backlit Legion TrueStrike Keyboard with 100% Anti-Ghosting, Anti-Abrasion and Soft-Landing switches | 1.5 mm Key Travel | Large Arrow Keys | Large one piece Track Pad"
            },
            {
              name: "Ports: Placed at rear end of Laptop for clean game and work station | 4x USB-A 3.2 Gen 1 (1 Always On) | 2x USB-C 3.2 Gen 1 (DisplayPort 1.4, 1x Power delivery), Headphone/Mic combo jack (3.5mm) | 1x HDMI 2.1 | 1x Ethernet (RJ-45)"
            },
            {
              name: "Warranty: This genuine Lenovo laptop comes with 1 Year onsite manufacturer warranty + 1 Year Accidental Damage Protection + 1 Year Lenovo Ultimate Support"
            },
            {
              name: "*Active subscription needed;continues until cancelled-game catalog varies. Needs Windows11 & app to play PC games; xbox website>pcgamesplan. Discounts exclude titles within 30 days of launch; based on Microsoft Store price. See xbox website>GamesPass"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81t2f-NtkeL._AC_UL320_.jpg",
          Name: "HP Victus Gaming Latest AMD Ryzen 7-5800H 16.1 inch(40.9 cm) FHD Gaming Laptop (16GB RAM/ 512GB SSD/4Gb RTX 3050 Graphics/ Flicker Free/144Hz Display/B&O/Backlit Kb/Win 11/MSO/Xbox Pass) 16-e0351ax",
          reviewNumber: "250",
          mrp: "₹1,00,581",
          price: "87,490",
          discount: "(13% off)",
          selection6: [
            {
              name: "Crafted for Gaming: Built with the powerful 5th Gen AMD Ryzen 7 5800H, The HP Victus Gaming Laptop comes with 16 GB DDR4-3200 MHz RAM, upgradable upto 32 GB DDR4-3200 SDRAM (2 x 16 GB) and 512 GB PCIe NVMe TLC M.2 SSD storage."
            },
            {
              name: "Next-Gen Graphics – Experience incredible visuals to elevate all of your gameplay with NVIDIA GeForce RTX 3050 graphics Laptop (4 GB GDDR6 dedicated)."
            },
            {
              name: "Immersive Display– Enjoy vibrant, crystal-clear images with 16.1” diagonal FHD IPS micro-edge display with anti-glare technology and a 100% colour gamut. It also comes with Low Blue Light, 300 nits."
            },
            {
              name: "Windows 11 Home – From a rejuvenated Start menu to new ways to connect, the Windows 11 OS is the place to think, express, and create in a natural way."
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate(DisplayPort 1.4, HP Sleep and Charge), 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 RJ-45, 1 headphone/microphone combo, 1 AC smart pin, 1 HDMI 2.1"
            },
            {
              name: "Always Charged: Experience a support battery fast charge, 4-cell, 70 Wh Li-ion polymer battery that supports fast-charging and keeps you going, non-stop."
            },
            {
              name: "Keyboard & Pointing Device: Elevate your games with a full-sized, ultraviolet backlit keyboard and a HP Imagepad with multi-touch gesture support and Precision Touchpad Support."
            },
            {
              name: "Connect effortlessly: Enjoy ultra-fast gigabit data rate with a Wi-Fi 6 (2x2) and Bluetooth 5.2 combo"
            },
            {
              name: "Optimised for Play – Game or stream longer without slow-down, thanks to the updated thermal design—perfect for keeping your device cooled even when your gameplay heats up."
            },
            {
              name: "Sustainable Design – Built with the environment in mind, this laptop gaming computer is designed using sustainable materials, shipped in recycled packaging, and is Energy Star certified and EPEAT Silver registered."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/818vGJO+jeL._AC_UL320_.jpg",
          Name: "HP Victus Gaming Latest AMD Ryzen 7 5800H Processor 16.1-inch(40.9 cm) FHD Gaming Laptop (16GB RAM/512GB SSD/144 Hz/300 nits/GeForce RTX 3060 6GB Graphics/Backlit KB/Win 11/MSO/Xbox Pass),16-e0361ax",
          reviewNumber: "23",
          mrp: "₹1,20,465",
          price: "1,04,490",
          discount: "(13% off)",
          selection6: [
            {
              name: "Crafted for Gaming: Built with the powerful 5th Gen AMD Ryzen 7 5800H, The HP Victus Gaming Laptop comes with 16 GB DDR4-3200 MHz RAM, upgradable upto 32 GB DDR4-3200 SDRAM (2 x 16 GB) and 512 GB PCIe NVMe TLC M.2 SSD storage."
            },
            {
              name: "Next-Gen Graphics – Experience incredible visuals to elevate all of your gameplay with NVIDIA GeForce RTX 3060 graphics Laptop GPU (6 GB GDDR6 dedicated)."
            },
            {
              name: "Immersive Display– Enjoy vibrant, crystal-clear images with 16.1” diagonal FHD IPS micro-edge display with anti-glare technology and a 144Hz refresh rate. It also comes with Low Blue Light, 300 nits."
            },
            {
              name: "Windows 11 Home – From a rejuvenated Start menu to new ways to connect, the Windows 11 OS is the place to think, express, and create in a natural way"
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate(DisplayPort 1.4, HP Sleep and Charge), 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 RJ-45, 1 headphone/microphone combo, 1 AC smart pin, 1 HDMI 2.1"
            },
            {
              name: "Always Charged: Experience a support battery fast charge, 4-cell, 70 Wh Li-ion polymer battery that supports fast-charging and keeps you going, non-stop."
            },
            {
              name: "Keyboard & Pointing Device: Elevate your games with a full-sized, ultraviolet backlit keyboard and a HP Imagepad with multi-touch gesture support and Precision Touchpad Support."
            },
            {
              name: "Connect effortlessly: Enjoy ultra-fast gigabit data rate with a Wi-Fi 6 (2x2) and Bluetooth 5.2 combo"
            },
            {
              name: "Optimised for Play – Game or stream longer without slow-down, thanks to the updated thermal design—perfect for keeping your device cooled even when your gameplay heats up."
            },
            {
              name: "Sustainable Design – Built with the environment in mind, this laptop gaming computer is designed using sustainable materials, shipped in recycled packaging, and is Energy Star certified and EPEAT Silver registered."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61voBxm1e0L._AC_UL320_.jpg",
          Name: "Microsoft Surface Pro8-13/13cm Touch Screen - i5/8GB RAM /256 GB SSD SC English Window 11 Graphite, WiFi 6 for Ultra-Fast Bandwidth, Bluetooth (Black , Medium, 8PQ-00029)",
          reviewNumber: "26",
          mrp: "₹1,24,999",
          price: "1,00,829",
          discount: "(19% off)",
          selection6: [
            {
              name: "The power of a laptop with the flexibility of a tablet, and every angle in between, with 13\" touchscreen, iconic built-in Kickstand, and detachable Keyboard."
            },
            {
              name: "Windows 11 brings your closer to what you love - Family, friends, obsessions, music, creations. It is the one place for it all. With a fresh new feel and tools that make it easier to be efficient, it has what you need for whatever’s next"
            },
            {
              name: "The first Surface Pro built on the Intel Evo platform. Do it all with the Intel Evo platform — performance, graphics, and battery life in a thin and light PC."
            },
            {
              name: "Two USB-C and Thunderbolt 4 ports, Wi-Fi 6 for ultra-fast bandwidth, and a dedicated charging port, long battery life with Fast Charging.; Our most advanced display in a Pro. Now with up to 120Hz refresh rate for an even smoother pen experience and more responsive touch."
            },
            {
              name: "Graphics Description: Integrated; Human Interface Input: Touch Screenkeyboard; Display Type: Oled; Processor Description: Intel Core I5-1135g7; Cellular Technology: 4g"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61sN5rcVspL._AC_UL320_.jpg",
          Name: "ASUS TUF Dash F15 (2022), 15.6-inch (39.62 cms) FHD 144Hz, Intel Core i7-12650H 12th Gen, RTX 3060 6GB Graphics, Gaming Laptop (16GB/512GB SSD/Windows 11/Office 2021/Black/2 kg), FX517ZM-HN041WS",
          reviewNumber: "18",
          mrp: "₹1,52,990",
          price: "1,26,990",
          discount: "(17% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i7-12650H, 2.3 GHz Base Speed (24MB Cache, up to 4.7 GHz Max Turbo Speed, 10 cores (6 P-cores and 4 E-cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your newFX517ZM-HN041WSand one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz Support Up to 32GB 2x SO-DIMM slots | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 1x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh rate, vIPS-level Anti-Glare Plane, Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3060 6GB GDDR6 VRAM MUX Switch with 1452MHz* at 105W (1402MHz Boost Clock+50MHz OC, 80W+25W Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity | McAfee (1 Year)"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard Single Light"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 2x USB 3.2 Gen 1 Type-A"
            },
            {
              name: "Other: 720P HD camera | Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.1 | 2-speaker system | Built-in Microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/818-CTHDgQL._AC_UL320_.jpg",
          Name: "ASUS ZenBook Duo 14 (2021) Dual Screen Laptop, 14-inch (35.56 cm) FHD, Intel Core i5-1135G7 11th Gen, (8GB/512GB SSD/Windows 11/Office 2021/Iris Xe Graphics/Blue/1.62 Kg), UX482EA-KA501WS",
          reviewNumber: "1",
          mrp: "₹1,22,990",
          price: "74,990",
          discount: "(39% off)",
          selection6: [
            {
              name: "Processor: 11th Gen Intel Core i5-1135G7, 2.4 GHz Base speed (8MB Cache, up to 4.2 GHz Max Turbo Speed, 4 cores)"
            },
            {
              name: "Memory: 8GB LPDDR4X onboard with | Storage: 512GB M.2 NVMe PCIe 3.0 SSD"
            },
            {
              name: "Display: 14.0-inch (35.56 cm) FHD (1920 x 1080) 16:9 aspect ratio LED Backlit 400nits, IPS-level Panel, 100% sRGB color gamut, PANTONE Validated, Anti-glare display, 93 % Screen-to-body ratio"
            },
            {
              name: "Graphics: Integrated Intel Iris Xe Graphics"
            },
            {
              name: "Operating System: Windows 11 Home | Software: Office Home and Student 2021 included"
            },
            {
              name: "Design: 1.69 ~ 1.73 cm Thin | Metallic Chassis | Thin & Light | 1.62 kg weight | 70WHrs Battery Capacity | Up to 8 hours Battery life, Note: Battery life depends on conditions of usage"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard | 1.4mm key travel"
            },
            {
              name: "I/O Port: 1x USB 3.2 Gen 1 Type-A, 2x Thunderbolt 4 supports display / power delivery, 1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, Micro SD card reader"
            },
            {
              name: "Other: HD camera with IR function to support Windows Hello | Wi-Fi 6(802.11ax) (Dual band) 2*2 + Bluetooth 5.0 | | Built-in speaker | Built-in array microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61K9AyvhgmL._AC_UL320_.jpg",
          Name: "Dell Gaming G15 5525, AMD R5-6600H, 8GB, 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6\" (39.62Cms) FHD WVA AG 120Hz 250 nits, Win 11 + MSO'21, Phantom Grey with speckles, 2.51Kgs (D560817WIN9B)",
          reviewNumber: "9",
          mrp: "₹1,06,355",
          price: "79,108",
          discount: "(26% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen5 6600H 6-Cores Processor (19M Cache, up to 4.5 GHz)"
            },
            {
              name: "RAM & Storage: 8GB, 1xRAM & Storage: 8GB, DDR5, 4800MHz & 512GB M.2 PCIe Solid State Drive"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 (90 W)"
            },
            {
              name: "Display & Keyboard: 15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display & Orange backlit Keyboard"
            },
            {
              name: "Software: Windows 11 & Microsoft Office Home and Student 2021 & 3-Cell Battery, 56WHr (Integrated)"
            },
            {
              name: "Ports: (1) HDMI 2.1, (3) SuperSpeed USB 3.2 Gen 1 Type-A, (1) USB Type C Gen 3.2 Display Port Alt-Mode, Headphone/Mic, (1) RJ45"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71NxKpg1NIL._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming F15 (2022), 15.6\"(39.62 cms) FHD 144Hz, Intel Core i7-12700H 12th Gen, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/512GB SSD/90WHrs Battery/Windows 11/Gray/2.2 Kg), FX507ZE-HN038W",
          reviewNumber: "62",
          mrp: "₹1,44,990",
          price: "98,000",
          discount: "(32% off)",
          selection6: [
            {
              name: "Processor: 12th Gen Intel Core i7-12700H, 14 cores (6 P-cores and 8 E-cores), 2.3 GHz Base Speed, Up to 4.7 GHz Max Turbo Speed, 24MB Cache"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new FX507ZM-HF068WS and one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz, Support Up to 32GB | Storage: 512GB SSD M.2 NVMe PCIe 3.0"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 Ti GDDR6 4GB VRAM, 1745MHz* at 95W (1695MHz Boost Clock+50MHz OC, 80W+15W Dynamic Boost)"
            },
            {
              name: "Display: 15.6-inch, FHD (1920 x 1080) 16:9, anti-glare display, sRGB: 62.50%, Adobe: 47.34%, Refresh Rate: 144Hz, IPS-level, Adaptive-Sync"
            },
            {
              name: "Operating System: Pre-loaded Windows 11 Home with lifetime validity | Software Included: McAfee Anti-Virus (1 Years Validity)"
            },
            {
              name: "Keyboard: RGB Backlit Chiclet Keyboard"
            },
            {
              name: "I/O Port: 1x 3.5mm Combo Audio Jack, 1x RJ45 LAN port, 1x Thunderbolt 4 support DisplayPort, 1x USB 3.2 Gen 2 Type-C support DisplayPort / G-SYNC, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 2.0b"
            },
            {
              name: "Other: Wi-Fi 6 (802.11ax) 2*2 + Bluetooth 5.2 | Built-in array microphone | 720P HD camera"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61f30Ey1UeL._AC_UL320_.jpg",
          Name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i5 EvoTM 33.78 cm (13.3\") Touchscreen 2-in-1 AMOLED Thin & Light Laptop (16 GB/512 GB SSD/Windows 11/MS Office/with S Pen/Silver/1.04Kg), NP930QED-KB3IN",
          reviewNumber: "55",
          mrp: "₹1,39,990",
          price: "1,10,990",
          discount: "(21% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel EVOTM Core i5-1240P processor (1.7 GHz up to 4.4 GHz 12 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
            },
            {
              name: "Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch"
            },
            {
              name: "Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics | Design: Aluminum body with 11.5mm thinness and 1.04kg"
            },
            {
              name: "Ports: 1 Thunderbolt 4, 2 USB Type-C, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive | Battery= 63 Wh, 65 W USB Type-C Adapter"
            },
            {
              name: "Camera: 1080p FHD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit), S Pen In box | FingerPrint Reader, Ambient Light Sensor, Accelerometer Sensor, Gyro Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/91zVSkGGZbS._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming F15, 15.6\"(39.62 cms) FHD 144Hz, Intel Core i5-11400H 11th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/512GB SSD/90WHrs Battery/Windows 11/Office 2021/Black/2.3 kg) FX506HC-HN089WS",
          reviewNumber: "54",
          mrp: "₹89,990",
          price: "78,990",
          discount: "(12% off)",
          selection6: [
            {
              name: "Processor: Intel Core i5-11400H Processor 2.7 GHz (12M Cache, up to 4.5 GHz, 6 Cores)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new FX506HC-HN089WS and one month of Game Pass-including EA Play"
            },
            {
              name: "With new games added. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 8GB (8GB DDR4 SO-DIMM) DDR4 3200 MHz Support Up to 32GB 2x SO-DIMM slots with | Storage: 512GB PCIe 3.0 NVMe M.2 SSD with additional 2x M.2 Slot for SSD Storage expansion"
            },
            {
              name: "Display: 15.6 inch (39.62 cms) FHD (1920 x 1080) 16:9 250nits, 144Hz Refresh Rate, vIPS-level Anti-glare display, Contrast Ratio: 1000:1 with Adaptive-Sync"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM with Up to 1600MHz at 60W (75W with Dynamic Boost)"
            },
            {
              name: "Operating System: Windows 11 Homewith Lifetime Validity | Software Included: Pre-installed Office Home and Student with Lifetime Validity"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard 1-Zone RGB"
            },
            {
              name: "Design: 2.28 ~ 2.45 cm Thin | 90WHrs, 4S1P, 4-cell Li-ion | Up to 14.7 hours battery life; Note: Battery life depends on conditions of usage"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 3x USB 3.2 Gen 1 Type-A, 1x Thunderbolt 4 support DisplayPort | 1x HDMI 2.1 TMDS | 1x 3.5mm Combo Audio Jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61brE9c2DCL._AC_UL320_.jpg",
          Name: "Microsoft Laptop 4 - 13.5\" inches Screen, Ryzen AMD 5, Windows 11 Home/8GB RAM/256 GB SSD/ Platinum - (5PB-00049)",
          reviewNumber: "3",
          mrp: "₹1,11,999",
          price: "85,022",
          discount: "(24% off)",
          selection6: [
            {
              name: "Windows 11 Hopme Ready"
            },
            {
              name: "Processor: AMD Ryzen 5 4680U Processor"
            },
            {
              name: "Operating system: Windows 11 Home , Microsoft 365 Family 30-day trial | In the box: Surface Laptop 4, Power Supply, Quick Start Guide, Safety and warranty documents"
            },
            {
              name: "Display: 13.5 inch 2256 x 1504 PixelSense display | Touchscreen enabled | Surface Pen enabled"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61xtEhKa4xL._AC_UL320_.jpg",
          Name: "HP Victus 11th Gen Intel Core i7-11800H 16.1\" FHD Gaming Laptop (16GB RAM/512GB SSD/144 Hz/300 nits/7 ms Response time/GeForce RTX 3060 6GB Graphics/Backlit KB/Win11/MSO) 16-d0361TX Performance Blue",
          reviewNumber: "19",
          mrp: "₹1,25,143",
          price: "1,07,028",
          discount: "(14% off)",
          selection6: [
            {
              name: "Processor: Intel Core i7-11800H (up to 4.6 GHz with Intel Turbo Boost Technology(2g) , 24 MB L3 cache, 8 cores, 16 threads)| Memory & Storage: 16 GB DDR4-3200 SDRAM (2 x 8 GB), Upto 32 GB DDR4-3200 MHz RAM (2 x 16 GB) | Storage: 512 GB PCIe 4x4 NVMe TLC M.2 SSD, Bandwidth up to 8GB/s;Display & Graphics: 40.9 cm (16.1\") diagonal, FHD,144 Hz, 7 ms response time, 300 nits, 137 ppi| Graphics: NVIDIA GeForce RTX 3060 Laptop GPU (6 GB GDDR6 dedicated)"
            },
            {
              name: "Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2019|McAfee LiveSafe (30 days free trial as default)| Pre-installed Alexa built-in- Your life simplified with Alexa. Just ask Alexa to check your calendar, create to-do lists, shopping lists, play music, set reminders, get latest news and control smart home."
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate (DisplayPort 1.4, HP Sleep and Charge), 1 SuperSpeed USB Type-A 5Gbps signaling rate (HP Sleep and Charge), 2 SuperSpeed USB Type-A 5Gbps signaling rate, 1 RJ-45, 1 headphone/microphone combo, 1 AC smart pin, 1 HDMI 2.1"
            },
            {
              name: "Features: Camera: HP Wide Vision 720p HD camera with integrated dual array digital microphones| Audio: Audio by B&O, Dual Speakers| Keyboard: Full-size backlit performance blue keyboard with numeric keypad, HP Imagepad with multi-touch gesture support| Battery: 4-cell, 70 Wh Li-ion polymer, Support battery fast charge| Networking: Integrated 10/100/1000 GbE LAN, Intel Wi-Fi CERTIFIED 6 AX201 (2x2) and Bluetooth 5 combo|; In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            },
            {
              name: "Human Interface Input: Numeric Keypadmicrophonekeyboard; Hard Disk Interface: Usbusb C; Software Included: Microsoft Office 365; Resolution: 1280 X 720; Display Resolution Maximum: 1920 X 1080"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61K9AyvhgmL._AC_UL320_.jpg",
          Name: "Dell Gaming G15 5525, AMD R5-6600H, 16GB, 512GB SSD, NVIDIA RTX 3050 (4GB GDDR6), 15.6\" (39.62Cms) FHD WVA AG 120Hz 250 nits, Win 11 + MSO'21, Phantom Grey with speckles, 2.51Kgs (D560818WIN9B)",
          reviewNumber: "9",
          mrp: "₹1,12,802",
          price: "87,990",
          discount: "(22% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen5 6600H 6-Cores Processor (19M Cache, up to 4.5 GHz)"
            },
            {
              name: "RAM & Storage: 16GB, 2x8GB, DDR5, 4800MHz & 512GB M.2 PCIe Solid State Drive"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3050 4GB GDDR6 (90 W)"
            },
            {
              name: "Display & Keyboard: 15.6 inch FHD (1920 x 1080) 120Hz 250 nits WVA Anti- Glare LED Backlit Narrow Border Display & Orange backlit Keyboard"
            },
            {
              name: "Software: Windows 11 & Microsoft Office Home and Student 2021 & 3-Cell Battery, 56WHr (Integrated)"
            },
            {
              name: "Ports: (1) HDMI 2.1, (3) SuperSpeed USB 3.2 Gen 1 Type-A, (1) USB Type C Gen 3.2 Display Port Alt-Mode, Headphone/Mic, (1) RJ45"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71yxQ9XaIwL._AC_UL320_.jpg",
          Name: "MSI Gaming Katana GF66, Intel 12th Gen. i7-12700H, 15.6\"(39.6cm) FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia RTX 3060 6GB GDDR 6/ Black/2.25Kg), 12UE-262IN",
          reviewNumber: "1",
          mrp: "₹1,45,990",
          price: "1,44,834",
          discount: "(1% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel Core i7-12700H Up To 4.70 GHz"
            },
            {
              name: "Operating System: Pre-loaded Windows 11 Home with lifetime validity |Preinstalled Software: Nvidia GeForce Experience Nahimic 3 MSI Center Gaming Mode MSI App player | In the box: Laptop, Adapter, Laptop Bag"
            },
            {
              name: "Display: 15.6\" FHD (1920*1080), 240Hz, close to 100%sRGB"
            },
            {
              name: "Memory & Storage: 8x2GB DDR4 3200MHz RAM, expandable to 64 GB | Storage: 1TB NVMe PCIe Gen4x4 SSD"
            },
            {
              name: "Dedicated Graphics: NVIDIA GeForce RTX 3060 GDDR6 6GB"
            },
            {
              name: "\"Ultra Thin and light design | Laptop weight: 2.25 kg "
            },
            {
              name: "Keyboard: Backlight Keyboard (Single-Color, Red)"
            },
            {
              name: "Camera: HD type (30fps@720p) | Microphone: Built-in microphone"
            },
            {
              name: "1x Type-C USB3.2 Gen1, 2x Type-A USB3.2 Gen1, 1x Type-A USB2.0, 1x RJ45, 1x (4K @ 60Hz) HDMI"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/41JM2AxnD9L._AC_UL320_.jpg",
          Name: "Microsoft Surface Laptop GO2 Touch Screen 12.4\" inches, 11th Gen Intel ® Core \u0099 i5/8GB RAM /256 GB SSD, Windows Hello, Platinum - (8QF-00046)",
          reviewNumber: "18",
          mrp: "₹83,999",
          price: "77,324",
          discount: "(8% off)",
          selection6: [
            {
              name: "12.4\" PixelSense touchscreen Improved HD camera and built-in Studio Mics"
            },
            {
              name: "11th Gen Intel Core i5 processor"
            },
            {
              name: "Long battery life up to 13.5 hours4 Charge up to 80% in just over an hour5 with Fast Charging"
            },
            {
              name: "Fingerprint Power Button with Windows Hello and One Touch sign-in on select models"
            },
            {
              name: "Built-in USB-C and USB-A ports, Surface Connect, and headphone jack"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Ymwc0nHOL._AC_UL320_.jpg",
          Name: "Dell 2in1 Inspiron 7620, Windows 11 Intel i5-1235U, 16GB, 512GB, Win 11+MSO'21, 16.0\" (40.64Cms) FHD+ WVA AG Touch 60Hz 300 nits, Dell Active Pen, Platinum Silver - D560775WIN9S, 2.1Kgs",
          reviewNumber: "12",
          mrp: "₹1,14,382",
          price: "94,500",
          discount: "(17% off)",
          selection6: [
            {
              name: "Processor: Intel i5-1235U (3.30 GHz up to 4.40 GHz)"
            },
            {
              name: "RAM & Storage: 16GB & 512GB SSD"
            },
            {
              name: "Display: 16.0\" (40.64Cms) FHD+ WVA AG Touch 60 Hz LBL 300 nits with ComfortView Plus, Dell Active Pen"
            },
            {
              name: "Graphics: Integrated, Keyboard: Backlit Keyboard + Fingerprint Reader"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81ahHX9wU1L._AC_UL320_.jpg",
          Name: "ASUS ROG Strix G17 (2022), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7-6800H, RTX 3050 4GB Graphics, Gaming Laptop (16GB/512GB SSD/Windows 11/Green/2.5 Kg), G713RC-HX021W",
          reviewNumber: "144",
          mrp: "₹1,36,990",
          price: "1,02,490",
          discount: "(25% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 7 6800HS Mobile Processor (8-core/16-thread, 20MB cache, up to 4.7 GHz max boost)"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new G713RC-HX021W and one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz Upgradeble Up to 32GB using 2x SO-DIMM Slot | Storage: 512GB PCIe 4.0 NVMe M.2 SSD with empty additional 1x M.2 Slot for SSD Storage"
            },
            {
              name: "Display: 17.3-inch ( 43.94 cm) FHD (1920 x 1080) 16:9 250nits, 144 Hz Refresh Rate, vIPS-level Anti-glare display, Contrast Ratio: 1000:1, with Adaptive-Sync"
            },
            {
              name: "Graphics: Dedicated NVIDIA GeForce RTX 3050 4GB GDDR6 VRAM with ROG Boost: 1550MHz* at 95W (1500MHz Boost Clock+50MHz OC, 80W+15W Dynamic Boost)"
            },
            {
              name: "Operating System: Pre-installed Windows 11 Home with Lifetime Validity"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard 4-Zone RGB"
            },
            {
              name: "I/O port: 1x 3.5mm Combo Audio Jack, 1x HDMI 2.0b, 1x USB 3.2 Gen 2 Type-C, 2x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery / G-SYNC, 1x 2.5G LAN port"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/717wZ9Wh4eL._AC_UL320_.jpg",
          Name: "Microsoft Surface Laptop 4 - 13.5\" inches Screen, Windows 11 Home, Intel Core i5-1135G7 /16 GB RAM/512 GB SSD/ Black - (5AI-00121)",
          reviewNumber: "1",
          mrp: "₹1,59,999",
          price: "1,43,999",
          discount: "(10% off)",
          selection6: [
            {
              name: "Windows 11 ready"
            },
            {
              name: "Processor: 11th Gen Intel Core i5-1135G7 Processor"
            },
            {
              name: "Operating system: Windows 11 Home , Microsoft 365 Family 30-day trial | In the box: Surface Laptop 4, Power Supply, Quick Start Guide, Safety and warranty documents"
            },
            {
              name: "Display: 13.5 inch 2256 x 1504 PixelSense display | Touchscreen enabled | Surface Pen enabled"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81isDVo0CmL._AC_UL320_.jpg",
          Name: "ASUS ROG Strix G17 (2022), 17.3\" (43.94 cms) FHD 360Hz/3ms, AMD Ryzen 7-6800H, RTX 3060 6GB Graphics, Gaming Laptop (16GB/1TB SSD/90WHrs Battery/Windows 11/Office 2021/Green/2.9 kg), G713RM-KH168WS",
          reviewNumber: "24",
          mrp: "₹1,97,990",
          price: "1,37,028",
          discount: "(31% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 7 6800H Mobile Processor, 8-core, 16-thread, 20MB cache, Up to 4.7 GHz max boost"
            },
            {
              name: "Play over 100 high-quality PC games, plus new and upcoming blockbusters on day one like Halo Infinite, Forza Horizon 5, and Age of Empires IV with your new G713RC-HX020W and one month of Game Pass-including EA Play."
            },
            {
              name: "With new games added all the time, there’s always something new to play. Age of Empires IV, Back 4 Blood, Battlefield V, Forza Horizon 5, Halo Infinite*, Knockout City, Microsoft Flight Simulator, Minecraft PC Bundle, Need for Speed Heat, Psychonauts2, The Sims 4, Titanfall 2, 12 Minutes"
            },
            {
              name: "Memory: 16GB (8GB SO-DIMM *2) DDR5 4800MHz, Support Up to 32GB | Storage: 1 TB SSD M.2 NVMe PCIe 4.0 with additional 1x M.2 Slot"
            },
            {
              name: "Graphics: NVIDIA GeForce RTX 3060 GDDR6 6GB VRAM, with MUX Switch + Optimus, ROG Boost: 1752MHz* at 140W (1702MHz Boost Clock+50MHz OC, 115W+25W Dynamic Boost)"
            },
            {
              name: "Display: 17.3-inch FHD (1920 x 1080) 16:9, 300Hz Refresh Rate, 3ms Response Time (G2G), anti-glare display, sRGB: 100%, Adobe: 47.34%, Refresh Rate: 144Hz, IPS-level, Adaptive-Sync, Optimus"
            },
            {
              name: "Operating System: Pre-loaded Windows 11 Home with lifetime validity | Software Included: McAfee Anti-Virus (1 Years Validity)"
            },
            {
              name: "Keyboard: 4-Zone RGB Backlit Chiclet Keyboard"
            },
            {
              name: "I/O Port: 1x 3.5mm Combo Audio Jack, 1x RJ45 LAN port, 1x USB 3.2 Gen 2 Type-C, 1x USB 3.2 Gen 2 Type-C support DisplayPort / power delivery, 2x USB 3.2 Gen 1 Type-A, 1x HDMI 2.0b"
            },
            {
              name: "Other: Wi-Fi 6E (802.11ax) 2*2 + Bluetooth 5.2 | Built-in array microphone"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71-vsNgqZUL._AC_UL320_.jpg",
          Name: "ASUS Vivobook Pro 14X OLED (2021) DialPad, 14\" (35.56 cm) 2.8K OLED, AMD Ryzen 9 5900HX, 4GB RTX 3050 Ti Graphics, Laptop (16GB/1TB SSD/Office 2019/Win 10/Black/1.45 Kg), M7400QE-KM046TS",
          reviewNumber: "35",
          mrp: "₹1,49,990",
          price: "1,06,300",
          discount: "(29% off)",
          selection6: [
            {
              name: "Free upgrade to Windows 11 when available. Disclaimer-Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device. *"
            },
            {
              name: "Processor: AMD Ryzen 9 5900HX Mobile Processor, 8-core, 16-thread, 20MB cache, Up to 4.6 GHz max boost"
            },
            {
              name: "Memory & Storage: 16GB onboard DDR4-3200MHz RAM| Storage: 1TB SSD M.2 NVMe PCIe 3.0"
            },
            {
              name: "Graphics: Dedicated NVIDIA GeForce RTX 3050 Ti GDDR6 4GB VRAM"
            },
            {
              name: "Display: 14.0-inch (35.56 cms) 2.8K (2880 x 1800) OLED 16:10 aspect ratio 90Hz Refresh Rate, 0.2ms response time, 100% DCI-P3 color gamut, PANTONE Validated"
            },
            {
              name: "Operating System: Pre-loaded Windows 10 Home with lifetime validity | Software Included: Office Home and Student 2019"
            },
            {
              name: "Design: Metallic Chassis | 1.79 cm Thin | Thin and Light Laptop | 1.45 kg weight | 63WHrs, 3-cell Li-ion Battery"
            },
            {
              name: "Keyboard: Backlit Chiclet Keyboard | with ASUS Dialpad on Touchpad"
            },
            {
              name: "Cooling: Dual Fan Cooling | Ice Cool Plus Technology"
            },
            {
              name: "I/O Port: 1x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 1 Type-C, 2x USB 2.0 Type-A//1x HDMI 1.4, 1x 3.5mm Combo Audio Jack, Micro SD card reader"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81eHv4n4vbL._AC_UL320_.jpg",
          Name: "HP Spectre x360 11th Gen Intel Core i5 13.5\"(35.5cm)WUXGA+ Touchscreen Convertible Laptop (16GB RAM/512GB SSD/1000 Nits/Backlit Keyboard/Windows 10 Pro/MS Office/Nightfall Black/1.34 Kg), 14-ea0542TU",
          reviewNumber: "2",
          mrp: "₹1,55,437",
          price: "91,990",
          discount: "(41% off)",
          selection6: [
            {
              name: "Do Check Partner offer section for Exciting offers from HP.;Processor: 11th Gen Intel Core i5-1135G7 (up to 4.2 GHz with Intel Turbo Boost Technology, 8 MB L3 cache, 4 cores)"
            },
            {
              name: "Memory & Storage: 16 GB LPDDR4x-3733 MHz RAM, upgradable upto 32GB | Storage: 512GB PCIe NVMe TLC M.2 SSD;Display: 34.3 cm (13.5-inch), WUXGA+ (1920 x 1280), multitouch-enabled, IPS, edge-to-edge glass, micro-edge, Corning Gorilla Glass NBT, 1000 nits, 100% sRGB, HP Sure View Reflect integrated privacy screen"
            },
            {
              name: "Graphics & Networking: Intel Iris Xe Graphics | Realtek Wi-Fi 6 (2x2) and Bluetooth 5.2 combo (Supporting Gigabit data rate), MU-MIMO supported, Miracast Compatible;Operating System & Software: Pre-loaded Windows 11 Pro | Pre-installed Microsoft Office Home & Student 2019 | Alexa Built-in | Fingerprint Reader"
            },
            {
              name: "Why HP? What is good for the planet, is good for technology and good for us. Technology must be mindful of the environment and HP believes in sustainability.; In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            },
            {
              name: "Display Resolution Maximum: 2736 X 1824; Software Included: Microsoft Office 365; Hard Disk Interface: Solid State; Human Interface Input: Touch Screen Stylus Pen"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Lh64FYeQL._AC_UL320_.jpg",
          Name: "Hp Pavilion 15 12Th Gen Intel Core I7 16Gb Sdram/1Tb Ssd 15.6 Inches (39.6Cm) Fhd,IPS/Intel Iris Xe Graphics/B&O/Windows 11 Home/Alexa/Backlit Kb/Fpr/Mso 2021/1.75Kg, 15-Eg2039Tu, Natural Silver",
          reviewNumber: "51",
          mrp: "₹99,999",
          price: "90,550",
          discount: "(9% off)",
          selection6: [
            {
              name: "Do Check Partner offer section for Exciting offers from HP"
            },
            {
              name: "Processor: Intel Core i7-1260P (up to 4.7 GHz with Intel Turbo Boost Technology, 18 MB L3 cache, 12 cores, 16 threads)| Memory & Storage: 16 GB DDR4-3200 SDRAM (2 x 8 GB), Upto 16 GB DDR4-3200 SDRAM (2 x 8 GB)| Storage: 1 TB PCIe NVMe M.2 SSD"
            },
            {
              name: "Display & Graphics: 39.6 cm (15.6\") diagonal, FHD,IPS, micro-edge, Anti glare, low blue light, 300 nits, 141 ppi, TUV Certified EyeSafe display |Graphics: Intel Iris Xe Graphics"
            },
            {
              name: "Operating System & Pre-installed Software: Pre-loaded Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2021|McAfee LiveSafe (30 days free trial as default)| Pre-installed Alexa built-in- Your life simplified with Alexa. Just ask Alexa to check your calendar, create to-do lists, shopping lists, play music, set reminders, get latest news and control smart home."
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 10Gbps signaling rate (USB Power Delivery, DisplayPort 1.4, HP Sleep and Charge), 2 SuperSpeed USB Type-A 5Gbps signaling rate,1 Headphone/microphone Combo,1 AC Smart pin, 1 HDMI 2.1"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61Cgi5nM7JL._AC_UL320_.jpg",
          Name: "Samsung Galaxy Book2 360 Intel 12th Gen i5 EvoTM 33.78cm (13.3\") AMOLED 2 in 1 touch screen Laptop (16 GB/512 GB SSD/Windows 11/MS Office/Backlit KB/Fingerprint Sensor/Graphite/1.16Kg), NP730QED-KA2IN",
          reviewNumber: "47",
          mrp: "₹1,19,990",
          price: "94,990",
          discount: "(21% off)",
          selection6: [
            {
              name: "Processor: 12th Generation Intel EVOTM Core i5-1235U Processor(1.3 GHz up to 4.4 GHz, 12 MB L3 Cache) | Memory: 16 GB LPDDR4x Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
            },
            {
              name: "Operating System: Windows 11 Home | Preinstalled Software: MS Office Home & Student 2021, Live Message, Live Wallpaper, McAfee Live Safe (Trial), Screen Recorder, Samsung Gallery, Quick Search, Samsung Flow, Samsung Notes, Samsung Recovery, Samsung Settings, Studio Plus, Samsung Update, Samsung Security, Quick Share, Galaxy Book Smart Switch"
            },
            {
              name: "Display: 13.3 inch (33.7 cm), FHD AMOLED Display (1920 x 1080) | Touchscreen | Intel Iris Xe Graphics | Design: Aluminum body with 12.9mm thinness and 1.6kg"
            },
            {
              name: "Ports: 1 HDMI, 1 Thunderbolt 4, 1 USB Type-C, 1 USB3.2, MicroSD Multi-media Card Reader, 1 Headphone out/Mic-in Combo, | Without CD-drive | Battery = 61.1 Wh, 65 W USB Type-C Adapter"
            },
            {
              name: "Camera: 720p HD, Intelligent Video Call Solution with Intel Collaboration | Microphone: 1 Headphone out/Mic-in Combo | Keyboard: Pro Keyboard (Backlit) | FingerPrint Reader, Accelerometer Sensor, Gyro Sensor"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/61C1eSRsptL._AC_UL320_.jpg",
          Name: "HP Victus Gaming Latest AMD Ryzen 7-5800H Processor 16.1inch(40.9cm) QHD Gaming Laptop (16GB RAM/ 1TB SSD/6GB RTX 3060 Graphics/165Hz/3Ms Response Time/Alexa/Win 11/ MSO/ Xbox Game Pass)- 16-e0362ax",
          reviewNumber: "56",
          mrp: "₹1,40,347",
          price: "1,04,990",
          discount: "(25% off)",
          selection6: [
            {
              name: "Crafted for Gaming: Built with the powerful 5th Gen AMD Ryzen 7 5800H, The HP Victus Gaming Laptop comes with 16 GB DDR4-3200 MHz RAM, upgradable upto 32 GB DDR4-3200 SDRAM (2 x 16 GB) and 1 TB PCIe NVMe TLC M.2 SSD."
            },
            {
              name: "Next-Gen Graphics – Experience incredible visuals to elevate all of your gameplay with NVIDIA GeForce RTX 3060 graphics(6 GB GDDR6 dedicated)."
            },
            {
              name: "Immersive Display– Enjoy vibrant, crystal-clear images with 16.1” diagonal FHD IPS micro-edge display with anti-glare technology"
            },
            {
              name: "Windows 11 Home – From a rejuvenated Start menu to new ways to connect, the Windows 11 OS is the place to think, express, and create in a natural way"
            },
            {
              name: "Ports: 1 SuperSpeed USB Type-C 5Gbps signaling rate(DisplayPort 1.4, HP Sleep and Charge), 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 SuperSpeed USB Type-A 5Gbps signaling rate, 1 RJ-45, 1 headphone/microphone combo, 1 AC smart pin, 1 HDMI 2.1"
            },
            {
              name: "Always Charged: Experience a support battery fast charge, 4-cell, 70 Wh Li-ion polymer battery that supports fast-charging and keeps you going, non-stop."
            },
            {
              name: "Keyboard & Pointing Device: Elevate your games with a full-sized, ultraviolet backlit keyboard and a HP Imagepad with multi-touch gesture support and Precision Touchpad Support."
            },
            {
              name: "Wide Vision Webcam : Amp up your gaming sessions with HP Wide Vision 720p HD camera with integrated dual array digital microphones and audio by Bang & Olufsen."
            },
            {
              name: "Optimised for Play – Game or stream longer without slow-down, thanks to the updated thermal design—perfect for keeping your device cooled even when your gameplay heats up."
            },
            {
              name: "Sustainable Design – Built with the environment in mind, this laptop gaming computer is designed using sustainable materials, shipped in recycled packaging, and is Energy Star certified and EPEAT Silver registered."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/81S0RJKddIL._AC_UL320_.jpg",
          Name: "HP ProBook 450 G8, 11th Gen Intel Core i5 15.6 inches HD Notebook PC (1366 x 768), Anti-Glare Display (8GB RAM/512GB SSD/FPR/Windows 10/Pike Silver Aluminium/1.74Kg) - 364C7PA",
          reviewNumber: "4",
          mrp: "₹92,007.20",
          price: "92,007",
          selection6: [
            {
              name: "Processor: Intel Core i5-1135G7 (up to 4.2 GHz with Intel Turbo Boost Technology, 8 MB L3 cache, 4 cores)"
            },
            {
              name: "Memory & Storage: 8 GB DDR4-3200 MHz RAM (1 x 8GB)| Storage: 512 GB SSD PCIe NVMe M.2 SSD"
            },
            {
              name: "Display: 39.6 cm (15.6\") diagonal, HD (1366 x 768), micro-edge, anti-glare, 250 nits, 45% NTSC"
            },
            {
              name: "Graphics & Networking: Intel Iris X Graphics| Intel AX201 Wi-Fi 6 (2x2) and Bluetooth 5 combo, non-vPro"
            },
            {
              name: "Ports: 3 SuperSpeed USB Type-A 5Gbps signaling rate (1 charging, 1 power); 1 HDMI 1.4b; 1 headphone/microphone combo; 1 AC power; 1 RJ-45"
            },
            {
              name: "In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71FlpIM+OhL._AC_UL320_.jpg",
          Name: "Hp Probook 635 Aero G8 Notebook Pc, AMD Ryzen 7 13.3 Inches Fhd, IPS, Anti-Glare Display (8Gb Ram/512Gb Ssd/Windows 10/Pike Silver Aluminium/0.99 Kg) - 4Q1T3Pa",
          reviewNumber: "2",
          mrp: "₹1,01,569.97",
          price: "1,01,569"
        },
        {
          image: "https://m.media-amazon.com/images/I/61CqXfwg04L._AC_UL320_.jpg",
          Name: "LG Gram 16 inches(40cm) Intel Evo 11th Gen Core i7 Ultra-Light Laptop (16GB RAM, 512 GB SSD, Windows 11 Home Preload, Iris Xe Graphics,USB-Cx2, 1.19 kg, 16Z90P-G.AH85A2, Black)",
          reviewNumber: "55",
          mrp: "₹1,29,999",
          price: "92,000",
          discount: "(29% off)"
        },
        {
          image: "https://m.media-amazon.com/images/I/71FlpIM+OhL._AC_UL320_.jpg",
          Name: "Hp Probook 635 Aero G8 Notebook Pc, AMD Ryzen 5 13.3 Inches Fhd, IPS, Anti-Glare Display (8Gb Ram/512Gb Ssd/Windows 10/Pike Silver Aluminium/0.99 Kg) - 4Q1T0Pa",
          reviewNumber: "4",
          mrp: "₹92,239.42",
          price: "75,010",
          discount: "(19% off)",
          selection6: [
            {
              name: "Processor: AMD Ryzen 5 5600U (2.3 GHz base clock, up to 4.2 GHz maz boost clock, 16 MB L3 cache, 6 cores)"
            },
            {
              name: "Memory & Storage: 8 GB DDR4-3200 MHz RAM (1 x 8GB)| Storage: 512 GB SSD PCIe NVMe M.2 SSD"
            },
            {
              name: "Display: 33.8 cm (13.3\") diagonal, FHD (1920 x 1080), IPS, anti-glare, 220 nits, 45% NTSC"
            },
            {
              name: "Graphics & Networking: AMD Radeon Graphics| Realtek 802.11a/b/g/n/ac (2x2) Wi-Fi and Bluetooth 5 combo"
            },
            {
              name: "Ports: 2 SuperSpeed USB Type-A 5Gbps signaling rate (1 charging); 1 SuperSpeed USB Type-C 10Gbps signaling rate (USB Power Delivery, DisplayPort 1.4); 1 headphone/microphone combo; 1 HDMI 2.0; 1 AC power"
            },
            {
              name: "In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71XkMLayGAL._AC_UL320_.jpg",
          Name: "ASUS TUF Gaming F15, 15.6\"(39.62 cms) FHD 144Hz, Intel Core i7-11800H 11th Gen, RTX 3050 4GB Graphics, Gaming Laptop (8GB/1TB SSD/90WHrs Battery/Windows 10/Eclipse Gray/2.3 Kg), FX566HCB-HN231T",
          reviewNumber: "42",
          mrp: "₹1,10,000",
          price: "1,01,000",
          discount: "(8% off)",
          selection6: [
            {
              name: "Free upgrade to Windows 11 when available. Disclaimer-Upgrade rollout plan is being finalized and is scheduled to begin late in 2021 and continue into 2022. Specific timing will vary by device. *"
            },
            {
              name: "Processor: 11th Gen Intel Core i7-11800H Processor, 2.3 GHz Base Speed, Up to 4.6 GHz Turbo Boost Speed, 8 Cores, 16 Threads, 24MB Cache"
            },
            {
              name: "Access to over 100 high-quality PC games on Windows 10"
            },
            {
              name: "One-month subscription to Xbox Game Pass that’s included with the purchase of your device"
            },
            {
              name: "Memory: 8GB SO-DIMM DDR4 3200MHz, Support Up to 32GB Using 2x SO-DIMM slots with | Storage: 1TB M.2 NVMe PCIe 3.0 SSD with additional empty 1x M.2 2280 PCIe 3.0 SSD Slot"
            },
            {
              name: "Graphics: Dedicated NVIDIA GeForce RTX 3050 GDDR6 4GB VRAM, Up to 1600MHz at 60W + 15W with Dynamic Boost"
            },
            {
              name: "Display: 15.6-inch (39.62 cms) FHD (1920 x 1080) 16:9, 250nits, 144Hz Refresh Rate, vIPS-level Anti-glare Panel, 1000:1 Contrast Ratio, 45% NTSC, 62.5% sRGB, 47.34% Adobe, Adaptive-Sync technology"
            },
            {
              name: "Software Included: 1-month trial for new Microsoft 365 customers, McAfee Anti-Virus With 1 year validity | Operating System: Pre-loaded Windows 10 Home (64bit) with lifetime validity"
            },
            {
              name: "I/O Port: 1x RJ45 LAN port, 3x USB 3.2 Gen 1 Type-A, 1x USB 3.2 Gen 2 Type-C support DisplayPort, 1x 3.5mm Combo Audio Jack, 1x HDMI 2.0b"
            },
            {
              name: "* Certain features require specific hardware"
            }
          ]
        },
        {
          image: "https://m.media-amazon.com/images/I/71999J1wmGL._AC_UL320_.jpg",
          Name: "HP Omen AMD Ryzen 7 16.1 Inches (40.9 Cm) Micro-Edge, IPS, Anti-Glare, Fhd Gaming Laptop (16Gb Ram/512Gb Ssd/144 Hz/300 Nits/Geforce RTX 3050Ti Graphics/Windows 11 Home/Ms Office),16-C0138Ax, Silver",
          reviewNumber: "7",
          mrp: "₹1,35,999",
          price: "1,01,200",
          discount: "(26% off)",
          selection6: [
            {
              name: "Do Check Partner offer section for Exciting offers from HP."
            },
            {
              name: "Processor: AMD Ryzen 7 5800H (up to 4.4 GHz max boost clock(2i), 16 MB L3 cache, 8 cores, 16 threads)| Memory: 16GB DDR4-3200 MHz RAM (2 x 8 GB), Upto 32 GB DDR4-3200 MHz RAM (2 x 16 GB) | Storage: 512 GB PCIe NVMe TLC M.2 SSD"
            },
            {
              name: "Display & Graphics: 40.9 cm (16.1\") diagonal, FHD, 144 Hz Refresh Rate, 7ms response time, IPS, micro-edge, anti-glare, Low Blue Light, 300 nits, 100% sRGB|Graphics: NVIDIA GeForce RTX 3050Ti Laptop GPU (4 GB GDDR6 dedicated)"
            },
            {
              name: "Operating System & Pre-installed Software: Windows 11 Home 64 Single Language| Microsoft Office Home & Student 2019 pre-installed"
            },
            {
              name: "Ports & Battery: 1 SuperSpeed USB Type-C 10Gbps signaling rate (USB Power Delivery, DisplayPort 1.4, HP Sleep and Charge) 1 SuperSpeed USB Type-A 5Gbps signaling rate (HP Sleep and Charge) 2 SuperSpeed USB Type-A 5Gbps signaling rate, 1 RJ-45, 1 headphone/microphone combo, 1 AC smart pin, 1 Mini DisplayPort, 1 HDMI 2.1|Battery:4-cell, 70 Wh Li-ion polymer, Supports battery fast charge: approximately 50% in 45 minutes"
            },
            {
              name: "Features: Keyboard: Full-size, 4-zone RGB backlit, mica silver keyboard and 26-Key Rollover Anti-Ghosting Key technology,HP Imagepad with multi-touch gesture support| Camera: HP Wide Vision 720p HD camera| Microphone: Integrated Dual array digital microphones| Audio: Dual Speakers, Audio by Bang & Olufsen | Alexa Built In | Networking: Integrated 10/100/1000 GbE LAN,Intel Wi-Fi AX210 (2x2) and Bluetooth 5.2 combo (Supporting Gigabit data rate)"
            },
            {
              name: "In an unlikely case of product quality related issue, we may ask you to reach out to brand’s customer service support and seek resolution. We will require brand proof of issue to process replacement request."
            }
          ]
        }
      ]
    
    for(let i=0;i<selection1.length;i++){
      selection1[i].category="Laptop"
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