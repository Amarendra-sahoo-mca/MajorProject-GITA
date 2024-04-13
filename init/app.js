const mongose=require("mongoose");
//data object array home
const fridgeData=require("./homeApD/fridgeData.js");
const acData=require("./homeApD/acData.js");
const tvData=require("./homeApD/tvData.js");

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

//models Home
const Fridge=require("../models/homeAp/fridgemdl.js");
const Ac=require("../models/homeAp/Acmodel.js");
const Tv=require("../models/homeAp/Tvmodel.js");

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
dwInitDB();

//Dish wasser data innitialize
const ecInitDB= async ()=>{
  await Ecockr.deleteMany({});
  await Ecockr.insertMany(eCockrData.data);
  console.log("Dish wasser data was innitialize");
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