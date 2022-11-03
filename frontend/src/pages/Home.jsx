import SlideShow from "../components/SlideShow"

function Home() {
     const slides = [
        {url: 'http://localhost:3000/eventImages/Evening%20Events.jpg', title:'Evening Events'},
        {url: 'http://localhost:3000/eventImages/Classes%20and%20Workshops.jpg', title: 'Classes and Workshops'},
        {url: 'http://localhost:3000/eventImages/Childrens%20Events.jpg', title: 'Childrens Events'},
        {url: 'http://localhost:3000/eventImages/Misc.jpg', title: 'Misc'},
        {url: 'http://localhost:3000/eventImages/Music%20Events.jpg', title: 'Music Events'}
     ]

     const containerStyles ={
        width: '700px',
        height: "500px",
        margin: '0 auto'
     }
     return(
        <div>
           <div style={containerStyles}>
                <SlideShow slides={slides}/>
           </div>
        </div>
     )
}

export default Home
