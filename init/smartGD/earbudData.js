const Mobile = require("../../models/smartGadget/mobileMdl");

const earbudsData=[
    {
        name:"Noise Buds VS404 with 50 Hours Playtime, ENC with Quad Mic, 3 EQ modes Bluetooth Headset  (Jet Black, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb1/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb1/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb1/Screenshot%202024-04-13%20153833.png?raw=true",
        info:"1 Year Warranty from the Date of Purchase.Warranty is Applicable on Manufacturing Defects for All the Products for 1 Year and Accessories for 3 Months",
        description:"With Mic:Yes,   Bluetooth version: v5.3 Wireless range: 10 m,  Battery life: 50 Hours | Charging time: 1 Hour,  Battery life: 50 hr 3 EQ modes, ENC with Quad Mic, Driver Size: Immersive Audio with 10mm driver, AAC-supported, Type - C Charging Port | Bluetooth version: 5.3",
        price: 999,
    },
    {
        name:"Mivi DuoPods i7 TWS,3D Soundstage,High-fidelity Driver,AAC for Lossless Audio Earbuds Bluetooth Headset  (Pearl Black, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb2/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb2/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb2/3.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects. Not Covered in Warranty  Physical Damages",
        description:"Advance to the next level of revolutionary tech in audio with Mivi DuoPods i7. These DuoPods come with 3D Soundstage, a next-level immersive technology offering instrument separation. Enter a new dimension of sound with every instrument resonating clearly and distinctly all around you with crystal clarity. The 13mm Electroplated high-fidelity bass drivers have been re-engineered to offer unparalleled bass clarity",
        price: 1499,
    },
    {
        name:"SONY WF-C500 IPX4/20Hrs Battery Life Bluetooth Headset  (Green, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb3/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb3/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb3/3.png?raw=true",
        info:"1 Year Warranty from Date of Purchase.Manufacturing Defects. Not Covered in Warranty  Physical Damages, Improper Handling of Product",
        description:" You can enjoy listening to your favourite tracks with the Sony WF-C500 Truly Wireless In-ear Earbuds. Thanks to their convenient charging case, these earbuds provide up to 20 hours of playback time. Additionally, if you're in a rush and need to charge your earbuds quickly, you can get up to an hour of extra playback time with 10 minutes of charging.",
        price: 5990,
    },
    {
        name:"boAt Immortal 100 w/ Beast Mode(40ms Low Latency), 30 HRS Playback & RGB LEDs Bluetooth Headset  (Black Sabre, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb4/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb4/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb4/3.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects.Not Covered in Warranty: Physical Damages",
        description:"Lead the scoreboard in style when you plug in the boAt Immortal 100 TWS Gaming Earbuds. With up to 30 hours of flawless performance, these earbuds are a must-have for both binge streaming and endless gaming. Added to this, in as little as 10 minutes, ASAPTM Charging gives you about 100 minutes of extra playtime. boAts innovative",
        price: 999,
    },
    {
        name:"OnePlus Nord Buds 2r in Ear Earbuds with Dual Mic & AI Crystal Clear Call Bluetooth Headset  (Deep Grey, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb5/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb5/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb5/3.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects.Not Covered in Warranty: Physical Damages",
        description:"The buds comes with 12.4mm driver unit, which delivers crisp clear and enhanced bass quality sound experience. It allows users to access a plethora of features while playing supported games on a OnePlus handset. They can be accessed at any time while playing games and give players the option to toggle different features and settings. ",
        price: 1999,
    },
    {
        name:"CMF by Nothing Buds 42 dB Active Noise Cancellation, Ultra Bass Technology, 35.5 Hrs playtime Bluetooth Headset  (Dark Grey, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb6/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb6/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb6/3.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects. Not Covered in Warranty Physical Damages",
        description:"With Mic:Yes,  Bluetooth version: 5.3  Wireless range: 15 m, Battery life: 35.5 hr  42 dB Active noise cancellation, Custom 12.4mm dynamic driver Bio-fiber Diaphram for high definition sound, Clear voice technology for natural call experience, Ultra bass technology with adjustable bass levels, 10 minutes of charging= 7 hours of playback",
        price: 2499,
    },
    {
        name:"Boult W40 with Quad Mic ENC, 48H Battery Life, Low Latency Gaming, Made in India, 5.3v Bluetooth Headset  (Denim Blue, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb7/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb7/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb7/Screenshot%202024-04-13%20155203.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects. Not Covered in Warranty Physical Damages",
        description:"Experience audio bliss like never before with the Boult W40 Earbuds. Boasting an impressive 48 hours of total playtime, they ensure uninterrupted entertainment for extended periods. Thanks to Lightning Boult Type-C fast charging, you can get 100 minutes of playtime with just 10 minutes of charge.",
        price: 1299,
    },
    {
        name:"OPPO Enco Buds 2 with 28 hours Battery life & Deep Noise Cancellation Bluetooth Headset  (Midnight, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb8/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb8/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb8/3.png?raw=true",
        info:"1 Year Manufacturer Warranty. Manufacturing Defects Not Covered in Warranty Water Damage, Broken or Tampered Defects.",
        description:"With Mic:Yes,  Bluetooth version: 5.2  Battery life: 28 hrs | Charging time: 1.5 hrs  10mm Dynamic Bass Boost Driver - Powerful & Rhythmic Bass  Enco Live Stereo Sound Effects,  AI Deep Noice Cancellation | 80ms Ultra Low Latency game mode Intelligent Touch Controls | IPX4 Water Resistant",
        price: 1799,
    },
    {
        name:"Tunifi Twain Couple TWS Earbuds 8D Stereo Audio With 48Hrs Playtime Headphone Bluetooth Headset  (Black, In the Ear)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb9/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb9/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb9/3.png?raw=true",
        info:"1 Year Warranty. Manufacturing Defects.Not Covered in Warranty  Physical Damage",
        description:" Introducing our Tunifi cutting-edge Earbuds with a remarkable 48 hours of playtime, perfect for couples who love to enjoy music together. These Earbuds are equipped with Active Noise Cancellation (ANC) technology, Environmental Noise Cancellation (ENC), and 8D stereo sound for an immersive listening experience.",
        price: 1799,
    },
    {
        name:"realme Techlife Buds T100 with up to 28 Hours Playback & AI ENC for Calls Bluetooth Headset  (Black, True Wireless)",
        image1:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb10/1.png?raw=true",
        image2:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb10/2.png?raw=true",
        image3:"https://github.com/Amarendra-sahoo-mca/MajorProject-GITA/blob/main/images/smart%20gadget/earbuds/eb10/3.png?raw=true",
        info:"1 Year Domestic Warranty.Manufacturing Defects.Not Covered in Warranty:  Physical Damage",
        description:" If truly wireless is your vibe, the realme TechLife Buds T100 are sure to be your new best buds! The 10mm dynamic bass driver and Dirac technology ensures an immersive sound experience across all genres. With 28 hours total playback, you can keep your buds going for the long haul. You can even take crystal clear calls thanks to its AI ENC technology. The realme TechLife Buds T100 also have low latency of 88 ms and Bluetooth 5.3 compatibility, and many more amazing features, making them perfect for any activity.",
        price: 1499,
    },
];
module.exports = { data:earbudsData};