import SlideShow from "../components/SlideShow"

function Home() {
     const slides = [
        {url: 'http://localhost:3000/eventImages/Evening%20Events.jpg', title:'Evening Events'},
      //   {url: 'http://localhost:3000/eventImages/Classes%20and%20Workshops.jpg', title: 'Classes and Workshops'},
        {url: 'http://localhost:3000/eventImages/Childrens%20Events.jpg', title: 'Childrens Events'},
        {url: 'http://localhost:3000/eventImages/Misc.jpg', title: 'Misc'},
        {url: 'http://localhost:3000/eventImages/Music%20Events.jpg', title: 'Music Events'},
      //   {url: 'http://localhost:3000/eventImages/Sports%20and%20Fitness.jpg', title: 'Sports'}
     ]

   
     return(
        <div>
           <div>
                <SlideShow slides={slides}/>
           </div>
        </div>
     )
}

export default Home
