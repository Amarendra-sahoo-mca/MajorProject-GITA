const mongose=require("mongoose");
//data object array home
const fridgeData=require("./homeApD/fridgeData.js");
const acData=require("./homeApD/acData.js");
const tvData=require("./homeApD/tvData.js");
const arpData=require("./homeApD/airPData.js");
const washData=require("./homeApD/washingMData.js");
const waterPData=require("./homeApD/waterPData.js");

//data object array Kitchen
const airFeierData=require("./kd/airfData.js");
const chimneyData=require("./kd/chimneyData.js");
const cmData=require("./kd/cmData.js");
const dwData=require("./kd/dishWData.js");
const eCockrData=require("./kd/eCockrData.js");
const grindeData=require("./kd/grinderData.js");
const inductionData=require("./kd/inductionData.js");
const ovenData=require("./kd/ovenData.js");
const sandwichData=require("./kd/sandwichData.js");
const tosterData=require("./kd/tosterData.js");

//data object array Winter Appliance
const ktlData=require("./winterD/ktlData.js");
const roomHData=require("./winterD/roomHData.js");
const waterGData=require("./winterD/waterGData.js");

//data object array Smart Gadget
const laptopData=require("./smartGD/laptopData.js");
const wChargerData=require("./smartGD/wChargerData.js");
const printerData=require("./smartGD/printerData.js");
const powerBankData=require("./smartGD/powerBankData.js");
const cameraData=require("./smartGD/cameraData.js");
const computerData=require("./smartGD/computerData.js");
const earbudData=require("./smartGD/earbudData.js");
const mobileData=require("./smartGD/mobileData.js");
const neckbandData=require("./smartGD/neckbandData.js");
const smartwatchData=require("./smartGD/smartwatchData.js");


//models Home
const Fridge=require("../models/homeAp/fridgemdl.js");
const Ac=require("../models/homeAp/Acmodel.js");
const Tv=require("../models/homeAp/Tvmodel.js");
const Arp=require("../models/homeAp/AirPmdl.js");
const Washingm=require("../models/homeAp/washingmdl.js");
const Waterpurifier=require("../models/homeAp/Waterpmdl.js");

//models Kitchen
 const Afrier =require("../models/kitchenAp/airFrierMdl.js");
 const Chimney=require("../models/kitchenAp/chimneyMdl.js");
 const CoffeeMkr=require("../models/kitchenAp/cmMdl.js");
 const DishWasher=require("../models/kitchenAp/dishwMdl.js");
 const Ecockr=require("../models/kitchenAp/eCockrMdl.js");
 const Grinder=require("../models/kitchenAp/grinderMdl.js");
 const Induction=require("../models/kitchenAp/inductionMdl.js");
 const Toster=require("../models/kitchenAp/tosterMdl.js");
 const Sandwich=require("../models/kitchenAp/sandwichMdl.js");
 const Oven=require("../models/kitchenAp/ovenMdl.js");

//models Winter
const Ktl=require("../models/winterAp/ktlMdl.js");
const RoomH=require("../models/winterAp/roomHMdl.js");
const WaterG=require("../models/winterAp/waterGMdl.js");

//model Smart Gadget
const Laptop= require("../models/smartGadget/laptopMdl.js");
const WCharger= require("../models/smartGadget/wChargerMdl.js");
const Printer= require("../models/smartGadget/printerMdl.js");
const PowerBank= require("../models/smartGadget/powerbankMdl.js");
const Camera= require("../models/smartGadget/cameraMdl.js");
const Computer= require("../models/smartGadget/computerMdl.js");
const Earbod= require("../models/smartGadget/earbodMdl.js");
const Mobile= require("../models/smartGadget/mobileMdl.js");
const NeckBand= require("../models/smartGadget/neckbandMdl.js");
const SmartW= require("../models/smartGadget/smartWMdl.js");

main().then(()=>{
    console.log("connection establish");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongose.connect('mongodb://127.0.0.1:27017/esport');
}


//HOME APPLIANCES
//fridge data innitialize
const initDB= async ()=>{
    await  Fridge.deleteMany({});
    await Fridge.insertMany(fridgeData.data);
    console.log("data was innitialize");
  };
//initDB();

//Ac data innitialize
const AcInitDB= async ()=>{
    await  Ac.deleteMany({});
    await Ac.insertMany(acData.data);
    console.log("Ac data was innitialize");
  };
 // AcInitDB();

 //Tv data innitialize
 const TvInitDB= async ()=>{
    await  Tv.deleteMany({});
    await  Tv.insertMany(tvData.data);
    console.log("Tv data was innitialize");
  };
 //TvInitDB();
//air purifier data innitialize
const airpInitDB= async ()=>{
  await  Arp.deleteMany({});
  await  Arp.insertMany(arpData.data);
  console.log("air purifier data was innitialize");
};
//airpInitDB();
//washing machine data innitialize
const washInitDB= async ()=>{
  await  Washingm.deleteMany({});
  await  Washingm.insertMany(washData.data);
  console.log("washing machine data was innitialize");
};
//washInitDB();
//water purifier data innitialize
const wapInitDB= async ()=>{
  await  Waterpurifier.deleteMany({});
  await  Waterpurifier.insertMany(waterPData.data);
  console.log("water purifier data was innitialize");
};
//wapInitDB();

 //Kitchen APPLIANCES
//airfryer data innitialize
const AfrInitDB= async ()=>{
  await  Afrier.deleteMany({});
  await  Afrier.insertMany(airFeierData.data);
  console.log("airFeyer data was innitialize");
};
// AfrInitDB();
//chimney data innitialize
const chimneyInitDB= async ()=>{
  await Chimney.deleteMany({});
  await Chimney.insertMany(chimneyData.data);
  console.log("chimney data was innitialize");
};
//chimneyInitDB();
//coffee maker data innitialize
const cmInitDB= async ()=>{
  await CoffeeMkr.deleteMany({});
  await CoffeeMkr.insertMany(cmData.data);
  console.log("coffee maker data was innitialize");
};
//cmInitDB();
//Dish wasser data innitialize
const dwInitDB= async ()=>{
  await DishWasher.deleteMany({});
  await DishWasher.insertMany(dwData.data);
  console.log("Dish wasser data was innitialize");
};
//dwInitDB();

//electric coocker data innitialize
const ecInitDB= async ()=>{
  await Ecockr.deleteMany({});
  await Ecockr.insertMany(eCockrData.data);
  console.log("electric coocker data was innitialize");
};
//ecInitDB();
//grinder data innitialize
const grInitDB= async ()=>{
  await Grinder.deleteMany({});
  await Grinder.insertMany(grindeData.data);
  console.log("grinder data was innitialize");
};
//grInitDB();
//induction data innitialize
const indInitDB= async ()=>{
  await Induction.deleteMany({});
  await Induction.insertMany(inductionData.data);
  console.log("induction data was innitialize");
};
//indInitDB();
//oven data innitialize
const ovenInitDB= async ()=>{
  await Oven.deleteMany({});
  await Oven.insertMany(ovenData.data);
  console.log("oven data was innitialize");
};
//ovenInitDB();
//sandwich data innitialize
const SandwichInitDB= async ()=>{
  await Sandwich.deleteMany({});
  await Sandwich.insertMany(sandwichData.data);
  console.log("sandwich data was innitialize");
};
//SandwichInitDB();
//Toster data innitialize
const tosterInitDB= async ()=>{
  await Toster.deleteMany({});
  await Toster.insertMany(tosterData.data);
  console.log("Toster data was innitialize");
};
//tosterInitDB();

 //WINTER APPLIANCES
//ktl data innitialize
async function ktlInitDB(){
  await  Ktl.deleteMany({});
  await  Ktl.insertMany(ktlData.data);
  console.log("ktl data was innitialize");
};
//ktlInitDB();

//Room Hitter data innitialize
async function roomhInitDB(){
  await RoomH.deleteMany({});
  await RoomH.insertMany(roomHData.data);
  console.log("Room Hitter was innitialize");
};
//roomhInitDB();

//Water gryser data innitialize
async function WaterGInitDB(){
  await WaterG.deleteMany({});
  await WaterG.insertMany(waterGData.data);
  console.log("Water gryser was innitialize");
};
//WaterGInitDB();

 //SMART GADGET
//Laptop data innitialize
async function laptopInitDB(){
  await  Laptop.deleteMany({});
  await  Laptop.insertMany(laptopData.data);
  console.log("Laptop data was innitialize");
};
//laptopInitDB();
//wareless charger data innitialize
async function wcInitDB(){
  await  WCharger.deleteMany({});
  await  WCharger.insertMany(wChargerData.data);
  console.log("wareless charger data was innitialize");
};
//wcInitDB();
//Printer data innitialize
async function printerInitDB(){
  await  Printer.deleteMany({});
  await  Printer.insertMany(printerData.data);
  console.log("Printer data was innitialize");
};
//printerInitDB();
//Power bank data innitialize
async function pbInitDB(){
  await  PowerBank.deleteMany({});
  await  PowerBank.insertMany(powerBankData.data);
  console.log("Power bank data was innitialize");
};
//pbInitDB();
//camera data innitialize
async function cmrInitDB(){
  await  Camera.deleteMany({});
  await  Camera.insertMany(cameraData.data);
  console.log("camera data was innitialize");
};
//cmrInitDB();
//Computer data innitialize
async function cmpInitDB(){
  await  Computer.deleteMany({});
  await  Computer.insertMany(computerData.data);
  console.log("computer data was innitialize");
};
cmpInitDB();
//earbud data innitialize
async function ebInitDB(){
  await  Earbod.deleteMany({});
  await  Earbod.insertMany(earbudData.data);
  console.log("earbud data was innitialize");
};
//ebInitDB();
//mobile data innitialize
async function mobInitDB(){
  await  Mobile.deleteMany({});
  await  Mobile.insertMany(mobileData.data);
  console.log("mobile data was innitialize");
};
//mobInitDB();
//neckBand data innitialize
async function nbInitDB(){
  await  NeckBand.deleteMany({});
  await  NeckBand.insertMany(neckbandData.data);
  console.log("neckBand data was innitialize");
};
//nbInitDB();
//smart watch data innitialize
async function swInitDB(){
  await  SmartW.deleteMany({});
  await  SmartW.insertMany(smartwatchData.data);
  console.log("smart watch data was innitialize");
};
//swInitDB();
