function addImageAndDateFormat(someData) {
  someData.map((value, id)=>{
    value["image"]=`eventImages/${value["categories"]}.jpg`
    const eventDate = new Date(value["date"])
    const myDay = eventDate.toDateString() 
    value["myDay"] = myDay
    const myTime = eventDate.toLocaleTimeString()
    value["myTime"] = myTime
  })
}


// function addImage(someData) {
//   let i, j;
//   var len = Object.keys(someData).length;
//   var myData = Object.values(someData);

//   for (i = 0; i < len; i++) {
//     var myElement = Object.values(myData)[i];
//     var value = Object.values(myElement);
//     var key = Object.keys(myElement);

//     for (j = 0; j < value.length; j++) {
//       var myValue = value[j];
//       var myKey = key[j];

//       if (myKey === "categories") {
//         myElement.image = `eventImages/${myValue}.jpg`;
//       }
//     }
//   }
// }

export default addImageAndDateFormat;
