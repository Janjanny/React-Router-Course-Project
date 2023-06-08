import "../Styles/About.css";

function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <div className="image-container">
            <img src="" alt="" />
          </div>
          <div className="text-container">
            <h1 className="title">
              Don &apos;t squeeze in a sedan when you could relax in a van.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem debitis accusamus quod impedit numquam excepturi illum
              hic dolorum reprehenderit. Doloremque minus aspernatur eius
              facilis ipsa a est placeat provident labore?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
              libero, quisquam totam iusto explicabo in!
            </p>

            <div className="colored-div">
              <h1>
                Your destination is waiting. <br /> Your van is ready.
              </h1>
              <button className="about-btn">Explore our vans</button>
            </div>
          </div>
          <div className="footer">
            <p>&copy; 2022 #VANLIFE</p>
          </div>
        </section>
      </div>
    </>
  );
}
export default About;
