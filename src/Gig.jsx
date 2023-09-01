import "./Gig.css"
const Gig = () => {
    return (
      <div className="gig">
        <h3 className="band-name">The Beatles</h3>
        <img src= 'https://www.historic-newspapers.co.uk/wp-content/uploads/sites/5/2020/03/Beatles_ad_1965_just_the_beatles_crop.jpg' width="300" height="200"/>
        <p className="description"> In those years the Beatles effectively reinvented the meaning of rock and roll as a cultural form.</p>
        <p className="date-time">09.08.2013</p>
        <p className="location">London</p>
      </div>
      
    );
  }
  
  export default Gig;