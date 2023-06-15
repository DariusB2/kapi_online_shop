import { defineStore } from "pinia";
import coatImage from "/src/assets/coat_600.png";
import heelsImage from "/src/assets/heels_600.png";
import hoodieImage from "/src/assets/hoodie_600.png";
import jacketImage from "/src/assets/jacket_600.png";
import shirtImage from "/src/assets/shirt_600.png";
import sneakersImage from "/src/assets/sneakers_600.png";
import samsungTvImage from "/src/assets/samsung_tv.png"
import samsungNote8 from "/src/assets/phone_samsung_note_8.png"
import iphone from "/src/assets/iphone.jpg"
import sony from "/src/assets/sony.jpg"
import airPodsPro from "/src/assets/airPodsPro.webp"
import appleWatch from "/src/assets/appleWatch.jpg"
import bose from "/src/assets/bose.jpg"
import echoDot from "/src/assets/echoDot.jpg"
import galaxyS8 from "/src/assets/galaxyS8.jpg"
import logitech from "/src/assets/logitech.webp"
import macBookAir from "/src/assets/macbookAir.jpg"
import msiHealth15 from "/src/assets/msiHealth16.jpg"
import nikonDslr from "/src/assets/nikonDslr.jpg"
import ringCam from "/src/assets/ringCam.jpg"
import roombaI3 from "/src/assets/roombaI3.jpg"
import xboxS from "/src/assets/xboxS.jpg"
import dogFood from "/src/assets/dog_food.jpg"
import dogPads from "/src/assets/dog_pad.jpg"
import faceWipes from "/src/assets/face_wipes.jpg"
import wardrobe from "/src/assets/wardrobe.jpg"
import wheelAccessory from "/src/assets/car_wheel_accesory.jpg"

export const useShopStore = defineStore("shop", {
    state: () => {
        return {
            forSale: [
                {
                    id: "coat",
                    title: "Coat",
                    price: 5000,
                    type: "fashion",
                    photo: coatImage,
                    description:
                        "Waterproof - Tested 1,500mm\n" +
                        "Taped Seams - All seams are taped to make this item fully waterproof\n" +
                        "100% Polyester\n" +
                        "Machine Wash\n" +
                        "Fastening: Zipper\n" +
                        "Collar Style: Band\n" +
                        "Raincoat",
                },
                {
                    id: "heels",
                    title: "Heels",
                    price: 10000,
                    type: "fashion",
                    photo: heelsImage,
                    description:
                        "Please note, the size located on the care label in this garment corresponds to US sizing. Please use the size charts on the product detail page to find the equivalent size\n" +
                        "Outer Material: Faux Leather\n" +
                        "Sole: Leather\n" +
                        "Closure: Button\n" +
                        "Heel Height: 2.25 inches\n" +
                        "Heel Type: Block Heel",
                },
                {
                    id: "hoodie",
                    title: "Hoodie",
                    price: 2500,
                    type: "fashion",
                    photo: hoodieImage,
                    description:
                        "Fastening: Closure Type\n" +
                        "Regular\n" +
                        "Style:Fashion\n" +
                        "Collar:O-Neck\n" +
                        "Closure Type:None",
                },
                {
                    id: "jacket",
                    title: "Jacket",
                    price: 8900,
                    type: "fashion",
                    photo: jacketImage,
                    description:
                        "Polyester\n" +
                        "Hand Wash Only\n" +
                        "Collar Style: Band\n" +
                        "Military Coat\n" +
                        "Long Sleeve",
                },
                {
                    id: "shirt",
                    title: "Shirt",
                    price: 5000,
                    type: "fashion",
                    photo: shirtImage,
                    description:
                        "Stretch Fabric - The long sleeve shirt is made of stretch fabric, which makes you move body easier, soft and comfortable with anti-shrink, good color fastness.\n" +
                        "Wrinkle Free - High-Density fabric and Machine Knitting Process makes the solid dress shirt not easy to wrinkle, easy to care.\n" +
                        "62% Cotton, 35% Polyester, 3% Elastane\n" +
                        "Machine Wash\n" +
                        "Fastening: Button\n" +
                        "Collar Style: Spread Collar\n" +
                        "Business Casual",
                },
                {
                    id: "sneakers",
                    title: "Sneakers",
                    price: 2000,
                    type: "fashion",
                    photo: sneakersImage,
                    description:
                        "Flat knit mesh fabric nearly one piece upper - Stability knit mesh panels for added comfort\n" +
                        "Slip on bungee front athletic training sneaker design - Stitching accents\n" +
                        "Outer Material: Synthetic\n" +
                        "Inner Material: Textile\n" +
                        "Sole: Ethylene Vinyl Acetate\n" +
                        "Closure: Pull On\n" +
                        "Heel Type: Flat",
                },
                {
                    id: "samsung-tv",
                    title: "TV",
                    price: 50000,
                    type: "electronics",
                    photo: samsungTvImage,
                    description:
                        "Crystal Display: Don't settle for anything less than long-lasting, crystal clear colour. With the Crystal Display we bring you pure colour, sharp contrast and brightness that are right up there with 4K resolution.\n" +
                        "Crystal Processor 4K: Simply relax and enjoy all the content you love, with a 4K upscaling TV that adapts to give you striking Ultra HD picture quality. It even adjusts sound to suit whatever you’re watching.\n" +
                        "HDR powered by HDR10+: Watch every scene burst from the screen with Samsung HDR TV. High Dynamic Range uncovers all the finest details, even in dark and bright scenes.\n" +
                        "With the best-selling Samsung Smart TV¹ at your fingertips, it’s never been easier to enjoy TV. From live TV to BBC iPlayer, Netflix, Disney+, Apple TV² and much more, Samsung Smart TV Hub brings all your favourite entertainment together, in one place.",
                },
                {
                    id: "samsung-note-8",
                    title: "Samsung Note 8",
                    price: 40000,
                    type: "phones",
                    photo: samsungNote8,
                    description:
                        "Ample 6.3 inch dual curved QHD+ super AMOLED display lets you see and enjoy more of the things you love\n" +
                        "12 MP dual lense camera with wide-angle and telephoto lens and 8 MP front-facing camera for incredible photos every time\n" +
                        "Store and access more of the content you love quickly using 6 GB of RAM, 64 GB of internal memory and expandable memory supporting up to 256 GB microSD\n" +
                        "S Pen with thinner tip and greater pressure sensitivity to express your creative side with increased precision\n" +
                        "Water and dust resistant with IP68 rating, Single Sim",
                },
                {
                    id: "iphone-12",
                    title: "IPhone 12",
                    price: 100000,
                    type: "phones",
                    photo: iphone,
                    description:
                        "6.1-inch Super Retina XDR display\n" +
                        "Ceramic Shield, tougher than any smartphone glass\n" +
                        "A14 Bionic chip, the fastest chip ever in a smartphone\n" +
                        "Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording\n" +
                        "12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording\n" +
                        "Industry-leading IP68 water resistance",
                },
                {
                    id: "sony-whch710n",
                    title: "Sony WHCH710N",
                    price: 100000,
                    type: "electronics",
                    photo: sony,
                    description:
                        "AI Noise Cancelling with Dual Noise Sensor technology lets you cancel out the world tailored to your environment or choose to let it in with Ambient Sound Mode\n" +
                        "These long-lasting wireless bluetooth and NFC enabled headphones deliver up to 35 hours of playback\n" +
                        "New 30mm driver units provide the superior audio quality you'd expect of Sony headphones\n" +
                        "Get clear hands-free calling and Voice Control on the WH-CH710N\n" +
                        "With soft oval ear pads these over-ear headphones have been designed for all-day comfort\n" +
                        "Bluetooth Version : Version5.0, Effective Range : Line of sight approx.30ft (10m), Frequency Range : 2.4GHz band\n" +
                        "Plug : L-shaped stereo mini plug (supplied headphone cable) and Cord Length Approx. 1.2m (supplied headphone cable)",
                },

                {
                    id: "airpods-pro",
                    title: "AirPods Pro",
                    price: 50000,
                    type: "electronics",
                    photo: airPodsPro,
                    description:
                        "Up to 2x more Active Noise Cancellation than the previous-generation AirPods Pro, so you’ll hear dramatically less noise during your commute and when you need to focus.\n" +
                        "Adaptive Transparency lets you comfortably hear the world around you, all while minimising the intensity of loud noises like sirens or construction in real time.\n" +
                        "Personalised Spatial Audio surrounds you in sound tuned just for you. It works with dynamic head tracking to immerse you deeper in music and movies.\n" +
                        "Four pairs of silicone tips are included to fit a wider range of ears, with a new extra small size. The tips create an acoustic seal to help keep out noise and secure AirPods Pro in place.\n" +
                        "Touch control now lets you swipe the stem to adjust volume. Press the stem to play and pause music or to answer or end a call, or hold it to switch between Active Noise Cancellation and Adaptive Transparency.\n" +
                        "IPX4 sweat- and water-resistant AirPods Pro and MagSafe Charging Case.\n" +
                        "A more capable MagSafe Charging Case with Precision Finding, built-in speaker and lanyard loop. Charge with an Apple Watch or MagSafe charger. Or use the Lightning connector or a Qi-certified charger.",
                },
                {
                    id: "apple-watch",
                    title: "Apple Watch",
                    price: 60000,
                    type: "electronics",
                    photo: appleWatch,
                    description:
                        "Temperature sensor provides retrospective ovulation estimates and advanced cycle tracking features\n" +
                        "Measure your blood oxygen with a powerful sensor and app\n" +
                        "Take an ECG anytime, anywhere\n" +
                        "Get high and low heart rate, and irregular rhythm notifications\n" +
                        "Advanced safety features, including Fall Detection, Emergency SOS, and Crash Detection\n" +
                        "Enhanced Workout app with more advanced metrics and ways to train\n" +
                        "A completely redesigned Compass app with waypoints and Backtrack",
                },
                {
                    id: "bose-speaker",
                    title: "Bose Speaker",
                    price: 35000,
                    type: "electronics",
                    photo: bose,
                    description:
                        "BOSE WATERPROOF SPEAKER: Small but powerful, the Bose SoundLInk Micro Bluetooth speaker produces loud, clear sound with shockingly deep bass. It packs a custom-designed transducer and passive radiators for crisp, balanced sound\n" +
                        "TEAR-RESISTANT STRAP: This small portable speaker comes equipped with an easy-to-use, tear-resistant silicone strap. Secure it to your backpack, beach cooler, or handlebars, and the reliable strap will hold tight through shocks and shakes\n" +
                        "RUGGED OUTDOOR SPEAKER: Constructed from durable materials, including a rubberized silicone exterior, SoundLink Micro resists drops, dents, cracks, and scratches. Plus, its soft-touch finish almost never shows a mark\n" +
                        "WATERPROOF SPEAKER: The SoundLink Micro Bluetooth speaker has been rigorously tested to meet an IP67 rating. It’s waterproof, dust-proof, and protected from extreme temperatures, liquids, and other substances\n" +
                        "LONG-LASTING BATTERY: This small outdoor speaker comes with a powerful lithium-ion battery. Enjoy up to 6 hours of music and charge anytime via the included Micro-USB cable\n" +
                        "PHONE CALLS: An integrated microphone allows you to take phone calls directly from the speaker, while a multi-function button gives you access to your phone’s voice assistant (Siri or Google Assistant)\n" +
                        "BOSE CONNECT APP: App automatically updates the small Bluetooth speaker with the latest software, allows you to customize settings, unlock product features, and more\n" +
                        "BOSE SIMPLESYNC TECHNOLOGY: SimpleSync pairs your Bose SoundLink Micro Bluetooth Speaker to compatible Bose products for sound that follows you from room to room. Away from your phone? Press and hold the Bluetooth button on each device to sync their sound. Already got a group going? Link by pressing the Action button to connect at a moment’s notice",
                },
                {
                    id: "echo-dot",
                    title: "Echo Dot",
                    price: 49900,
                    type: "electronics",
                    photo: echoDot,
                    description:
                        "Our best-sounding Echo Dot yet: enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.\n" +
                        "Your favourite music and content: play music, audiobooks and podcasts from Amazon Music, Apple Music, Spotify, Deezer and more, or via Bluetooth throughout your home.\n" +
                        "Alexa is happy to help: ask Alexa for the weather forecast, to set hands-free timers, get answers to your questions and even tell jokes. Need a few extra minutes in the morning? Just tap your Echo Dot to snooze your alarm.\n" +
                        "Keep your home comfortable: control compatible smart home devices with your voice and routines triggered by indoor temperature sensors. Create routines to automatically start a smart fan if the inside temperature goes above your comfort zone.\n" +
                        "Do more with device pairing: fill your home with music using compatible Echo devices in different rooms. Create a home cinema system with Fire TV.\n" +
                        "Designed to protect your privacy: built with multiple layers of privacy protection and control, including a Microphone Off button that electronically disconnects the microphones.\n" +
                        "Climate Pledge Friendly: we integrated sustainability in the design of this device with 99% of packaging coming from responsibly managed forests or recycled sources, 95% use of post-consumer recycled fabric and 55% post-consumer recycled plastics.",
                },
                {
                    id: "samsung-s-8",
                    title: "Samsung Galaxy S8",
                    price: 80000,
                    type: "phones",
                    photo: galaxyS8,
                    description:
                        "Capture life as it happens with the Galaxy S8 cameras: the 12MP rear camera and the 8MP front camera are so accurate and fast that you won't miss a moment, day or night\n" +
                        "Built for the life you lead, the Galaxy S8 are driven by the world's first 10nm processor: it's fast, powerful and increases battery efficiency (there's the ability to expand storage and to work through rain and dust, with IP68-rated performance)\n" +
                        "The Infinity Display has an incredible end-to-end screen that spills over the phone’s sides, forming a completely smooth, continuous surface with no bumps or angles - it’s pure, pristine, uninterrupted glass\n" +
                        "Say hello to Bixby: a personal assistant that understands talk, text, and taps so you're never confined to one mode of communication\n" +
                        "Change your phone, easily keep your memories: from your photos and videos to your contacts and music, Smart Switch lets you easily transfer your memories from your old phone to your new Galaxy S8\n" +
                        "5.8” QuadHD + sAMOLED display – Rounded-corner Infinity Display and symmetrical metal sides that blend effortlessly for a seamless look(unlocked)\n" +
                        "IP68-rated water and dust resistant with a powerful 10nm mobile AP for multi-tasking",
                },
                {
                    id: "logitech-g305",
                    title: "Logitech G305",
                    price: 40000,
                    type: "electronics",
                    photo: logitech,
                    description:
                        "HERO Gaming Sensor: Next-gen HERO mouse sensor delivers up to 10x the power efficiency over other gaming mice with exceptional accuracy and responsiveness thanks to 400 IPS precision and up to 12000 DPI sensitivity\n" +
                        "LIGHTSPEED Wireless: Ultra-fast LIGHTSPEED Wireless technology gives you a lag-free gaming experience. The G305 wireless gaming mouse delivers incredible responsiveness and reliability with a super-fast 1ms report rate for competition-level performance\n" +
                        "Ultra-Long Battery Life: The G305 wireless Logitech mouse boasts an incredible 250 hours of continuous gameplay on a single AA battery so you can play at peak performance without worrying about running out of power\n" +
                        "Lightweight design: Thanks to an efficient mechanical design, the G305 gaming mouse weighs in at only 99 grams for high manoeuvrability\n" +
                        "Portable Convenience: The durable, compact design with built-in USB receiver storage makes the G305 means you can take it with you.\n" +
                        "NO WIRES. NO LIMITS: World’s NO.1 Best Selling Wireless Gaming Gear Brand - Based on independent aggregated sales data (FEB ‘19 - FEB’20) of Wireless Gaming Keyboard, Mice, & PC Headset in units",
                },
                {
                    id: "macbook-air",
                    title: "MacBook Air",
                    price: 200000,
                    type: "laptops",
                    photo: macBookAir,
                    description:
                        "All-Day Battery Life — Go longer than ever with up to 18 hours of battery life depending on use.\n" +
                        "Powerful Performance — Take on everything from professional-quality editing to action- packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using far less power.\n" +
                        "Superfast Memory — 8GB of unified memory makes your entire system speedy and responsive. That way, it can support tasks like memory-hogging multi-tab browsing and opening a huge graphic file quickly and easily.\n" +
                        "Stunning Display — With a 13.3” Retina display, images come alive with new levels of realism. Text is sharp and clear, and colours are more vibrant.\n" +
                        "Why Mac — Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use straight out of the box. Mac is designed to let you work, play and create like never before.\n" +
                        "Simply Compatible — All your existing apps work, including Adobe Creative Cloud, Microsoft 365 and Google Drive. Plus you can use your favourite iPhone and iPad apps directly on macOS. Altogether you’ll have access to the biggest collection of apps ever for Mac. All available on the App Store.\n" +
                        "Easy to Learn — If you already have an iPhone, MacBook Air feels familiar from the moment you turn it on. And it works perfectly with all your Apple devices. Use your iPad to extend the workspace of your Mac, answer texts and phone calls directly on your Mac, and more.",
                },
                {
                    id: "msi-15m",
                    title: "Msi 15M",
                    price: 300000,
                    type: "laptops",
                    photo: msiHealth15,
                    description:
                        "Intel 12th Gen Core i7-1280P\n" +
                        "NVIDIA GeForce RTX 3060,GDDR6 6GB\n" +
                        "1TB M.2 PCIe SSD\n" +
                        "Spectrum Backlight Keyboard\n" +
                        "Cooler Boost 5\n" +
                        "Total Usb Ports : 4\n" +
                        "Model Year : 2022",
                },
                {
                    id: "nikon-dslr",
                    title: "Nikon DSLR",
                    price: 225000,
                    type: "cameras",
                    photo: nikonDslr,
                    description:
                        "Excel in low light with ISO 100-51200 extendable up to ISO 1640000 (equivalent)\n" +
                        "20.9 MP DX-format sensor EXPEED 5\n" +
                        "51-point AF system will track your subject, lock onto it, and keep it in focus\n" +
                        "4K/UHD video footage\n" +
                        "D7500 Camera Body, AN-DC3 Strap, BF-1B Body Cap, DK-28 Eyepiece Adapter, EN-EL15a Li-ion Battery, MH-25a Battery Charger, UC-E20 USB Cable.\n" +
                        "Viewfinder type: optical\n" +
                        "Video capture resolution: 2160p",
                },
                {
                    id: "ring-cam",
                    title: "Ring Cam",
                    price: 10000,
                    type: "cameras",
                    photo: ringCam,
                    description:
                        "See, hear and speak to people and pets from your phone, tablet or select Echo device with Stick Up Cam Battery, a battery-powered camera that can be mounted anywhere, indoors or outdoors.\n" +
                        "With Live View, you can check on your home any time through the Ring app.\n" +
                        "Get notifications whenever motion is detected by adjusting your Motion Detection settings.\n" +
                        "Place it anywhere: indoors or outdoors, on flat surfaces or mount it to a wall.\n" +
                        "Watch over your entire home by connecting one or multiple Stick Up Cams to all of your Ring devices in the Ring app.Watch over your entire home by connecting one or multiple Stick Up Cams to all of your Ring devices in the Ring app.\n" +
                        "Easily set up your Stick Up Cam in just a few minutes.\n" +
                        "Powered by a quick-release removable battery pack.",
                },
                {
                    id: "roomba-i-3",
                    title: "Roomba I3",
                    price: 37900,
                    type: "electronics",
                    photo: roombaI3,
                    description:
                        "iRobot has over 30 years of robotics expertise and innovation with over 30 million home robots sold worldwide. Whether you choose Roomba, Braava or both - your floors get the specialized care they need.\n" +
                        "Smart navigation gets the job done Intelligent, straight line navigation uses floor tracking sensors to clean purposefully and logically in neat rows. When the i3/i3+ needs to recharge, it will resume right where it left off ensuring a complete clean.\n" +
                        "Small dust? Large debris? No problem. Experience a comprehensive clean with Dual Multi-Surface Rubber Brushes and 10X the Power-Lifting Suction* that pulls in dirt, debris, and pet hair from wherever it hides, along with an Edge-Sweeping Brush to take care of the details.\n" +
                        "Goes where it's needed, avoids where it's not. Keep cleaning off your mind with the Roomba i3 robot vacuum. Reactive Sensor Technology helps it avoid getting stuck, while Dirt Detect(TM) sensors help it focus cleaning where it's needed.\n" +
                        "Not just smart--genius. iRobot Genius(TM) Home Intelligence Platform brings serious smarts to your everyday clean--understanding your home and lifestyle to give you a new level of control.",
                },
                {
                    id: "xbox-series-s",
                    title: "Xbox Series S",
                    price: 30000,
                    type: "gaming",
                    photo: xboxS,
                    description:
                        "Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point.\n" +
                        "Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever made.\n" +
                        "Bundle includes: Xbox Series S console, one Xbox Wireless Controller, a high-speed HDMI cable, and power cable\n" +
                        "Experience next-gen speed and performance with the Xbox Velocity Architecture, powered by a custom SSD and integrated software\n" +
                        "Play thousands of digital games from four generations of Xbox with backward compatibility, including optimized titles at launch\n" +
                        "Xbox Game Pass Ultimate includes over 100 high-quality games on console, PC, and Android mobile devices, online multiplayer, and an EA Play membership for one low monthly price (membership sold separately).*",
                },

                {
                    id: "dog_food",
                    title: "Dog Food",
                    price: 2000,
                    type: "pets",
                    photo: dogFood,
                    description:
                        "100% Complete Complete dog food for adult dogs Perfect nutritional balance for all your dog's daily needs Made with Selected Natural Ingredients\n" +
                        "Recipe using superfoods With Natural Spirulina Algae, known for its beneficial impact on intestinal health With spinach, a natural ingredient contributing to essential minerals\n" +
                        "No added Artificial Colours, Flavours & Preservatives\n" +
                        "Antioxidants to help support natural defences\n" +
                        "Added quality protein to help support muscle strength\n" +
                        "Vitamin D & Minerals for healthy teeth and strong bones\n" +
                        "Vitamin A & Zinc to help support healthy skin & coat",
                },
                {
                    id: "dog_pad",
                    title: "Dog Pad",
                    price: 1000,
                    type: "pets",
                    photo: dogPads,
                    description:
                        "Includes 50 regular size, standard absorbency pee pads for dogs\n" +
                        "5-layer construction; super absorbent core turns liquid into gel on contact\n" +
                        "Quick-dry surface with built-in attractant for potty training; leakproof plastic lining keeps floors safe from damage\n" +
                        "For indoor/outdoor/car use; suitable for puppy training, assisting older dogs or as an alternative when outdoor is not an option\n" +
                        "Pad dimensions: Regular pads measure 22 x 22 inches or 56 x 56 cm (L x W); centre pad measures 19 x 19 inches or 48 x 48 cm (L x W) with a 1.5-inch (4 cm) plastic border on all sides to help prevent overflow",
                },
                {
                    id: "face_wipes",
                    title: "Nivea Face Wipes",
                    price: 500,
                    type: "care",
                    photo: faceWipes,
                    description:
                        "Biodegradable wipes: These eco-friendly wipes are made with 100 percent renewable plant fibres and are biodegradable, helping you to save the planet with every use\n" +
                        "Caring formula: Caring plant-based cleansing wipes for dry skin, enriched with lotus flower extract to effectively remove even waterproof make-up and mascara\n" +
                        "Thoroughly cleanse: NIVEA face wipes for daily use, for skin that feels thoroughly cleansed, refreshed and hydrated. Wipes are suitable for dry skin\n" +
                        "How to apply: Use these biodegradable makeup remover wipes to thoroughly remove face and eye makeup. Avoid harshly scrubbing the skin during this process\n" +
                        "Planet-friendly: Packaging made from 45 percent recycled material. The formula contains 0 percent alcohol and is enriched with 97 percent* natural origin ingredients to moisturise and refresh",
                },
                {
                    id: "wardrobe",
                    title: "Oslo Wardrobe",
                    price: 30000,
                    type: "furniture",
                    photo: wardrobe,
                    description:
                        "🚚 Note: Delivery Available in London and 100-miles Around London. All other areas England and Wales delivery available but extra delivery charge applies with extra 2 week delivery time. Please see delivery map in picture gallery.\n" +
                        "✅ Sliding Mirror Wardrobe\n" +
                        "✅ Flat Pack - Wardrobe Comes in Rich Colours with a Beautifully Elegant Finish\n" +
                        "✅ 🛠 Assembly service available only in LONDON and around 40-Miles. (But Assembly charge Apply) Any Damages to the product must notify within 24 hours of after delivery. Item installed fully or partially not refundable.\n" +
                        "✅ Colours: White, Black, Grey Size: 150cm / 180cm / 203cm",
                },
                {
                    id: "wheel-trims",
                    title: "Versaco Car Wheel Trims",
                    price: 20000,
                    type: "auto",
                    photo: wheelAccessory,
                    description:
                        "4 wheel trims, all fittings and instructions\n" +
                        "Your tyre’s R number decides wheel trim size\n" +
                        "Fade and weather resistant, wipe clean\n" +
                        "Easy to fit, not suitable for alloy wheels or vans\n" +
                        "Choice 19 styles, wheel sizes R13 to R17 (13 inch-17 inch)",
                },
            ],
            cart: [],
            addedMessageShown: false,
        };
    },
    getters: {
        cartQuantity() {
            return this.cart.reduce((prev, curr) => {
                return prev + curr.quantity;
            }, 0);
        },
        cartSubtotal() {
            return this.cart.reduce((prev, curr) => {
                return prev + curr.price * curr.quantity;
            }, 0);
        },
        cartShipping() {
            return Math.ceil(this.cartQuantity / 10) * 500;
        },
        cartTax() {
            return this.cartSubtotal * 0.08;
        },
        cartTotal() {
            return this.cartSubtotal + this.cartShipping + this.cartTax;
        },
    },
    actions: {
        addToCart(item) {
            const existingId = this.cart.findIndex(
                (cartItem) => cartItem.id === item.id
            );

            if (existingId !== -1) {
                this.cart[existingId].quantity += 1;
            } else {
                this.cart.push({
                    ...item,
                    quantity: 1,
                });
            }

            this.addedMessageShown = true;

            setTimeout(() => {
                this.addedMessageShown = false;
            }, 2000);
        },
        removeItem(removedItem) {
            this.cart = this.cart.filter((item) => item.id !== removedItem.id);
        },
    },
});
