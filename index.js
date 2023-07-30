function Navbar(){
   return(
      <nav>
      <h1></h1>
       <img className="nav--logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtuknAda3islq33JTqDa9EkZKwaFP-edL-SViBfhb&s"></img>
       </nav>
   )
}
function Hero(){
   return(
      <section className="hero"> 
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhFnAK9jV1lC6a-cuhbvyl40bRFldTH_m0P1fHZW4_RO-2aqx1qnA4347gn0HxQU1yJp4&usqp=CAU"></img>
         <h1 className="hero--header" >Useful books</h1>
         <p className="hero--text">you have to read theses books!</p>
      </section>
   )
}
function Card(props){
  
   return(
      
   <div className="card">
      <div className="card--badge">novel</div>
      <img src={props.img} className="card--image"></img>
      <div className="card--stats">
      <img className="star" src="data:image/png;base64,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"></img>
      <span>{props.rating}</span>
      
      <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">{props.price}</p>

   </div>
   

   )
}


function App() {
  

  
   return(
   <div>
        
     <Navbar />
     <Hero />
     <Card
     img="https://4.bp.blogspot.com/-MaUK8EVpowE/VkqUqB1KA-I/AAAAAAAAAC8/zj9_dMcnfd0/s1600/071715_0624_14.jpg"
     rating="9/10"
 
     country="America"
     title="Books for people who have gone through more troubles and bad life experiences in their lives"
     price="change pepole thughts"
     
     />
      <Card
     img="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1511638272i/36660125.jpg"
     rating="8/10 "
    
     country="Brazil"
     title="The life and suffering of a young child"
     price="Funny and sad"
     
     />
     
      <Card
     img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIKObyuFHTeO4IWy6gS2MkUXKbFj1nsLBflsajAwcZB2rhYi8VdDhjOdcd8xLHrlWOIg&usqp=CAU"
     rating="7/10"
    
     country="KSA"
     title="Read wisdom and etiquette"
     price="It widens the perceptions and distances the narrow view"
     
     />
     
   </div>
  
   )

};
ReactDOM.render(<App />, document.getElementById("root"));
