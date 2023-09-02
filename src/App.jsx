import Gig from "./Gig"; 

function App() {
  return (
    <div className="App">
      <h1>Gig Listings</h1>
      <Gig
        bandName="The Beatles"
        imageUrl="https://www.historic-newspapers.co.uk/wp-content/uploads/sites/5/2020/03/Beatles_ad_1965_just_the_beatles_crop.jpg"
        description="In those years, the Beatles effectively reinvented the meaning of rock and roll as a cultural form."
        dateTime="09.08.2013"
        location="London"
      />
    </div>
  );
}

export default App;