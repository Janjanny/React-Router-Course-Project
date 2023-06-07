import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="container">
        <section className="home-container">
          <div className="filter"></div>
          <div className="content">
            <div className="text">
              <h1 className="title">
                You got the travel plans, we got the travel vans.
              </h1>
              <p className="some-text">
                Add aventure to your life by joining the #vanlife movement. Rent
                the perfect van to make your perfect road trip.
              </p>
            </div>
            <button>Find your van</button>
            <div className="footer">
              <p>&copy; 2022 #VANLIFE</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;
