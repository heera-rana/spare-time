function addImageAndDateFormat(someData) {
  someData.forEach(value =>{
    value["image"]=`eventImages/${value["categories"]}.jpg`
    const eventDate = new Date(value["date"])
    const myDay = eventDate.toDateString() 
    value["myDay"] = myDay
  })
}


export default addImageAndDateFormat;
