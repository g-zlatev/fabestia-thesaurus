function Testimonial() {
  return (
    <section
      className="row section text-light"
      style={{ backgroundColor: "#4FC1E9" }}
    >
      <div className="row-content buffer even clear-after">
        <div
          className="testimonial-slider centertxt"
          data-autoplay="5000"
          data-pagination="true"
          data-transition="fade"
          data-autoheight="false"
        >
          <div className="quote">
            <p>
              "It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout."
            </p>
            <div className="author">John Lennon</div>
          </div>

          <div className="quote">
            <p>
              "Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum'.."
            </p>
            <div className="author">Fabrizio De Andr&egrave;</div>
          </div>

          <div className="quote">
            <p>
              "There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration."
            </p>
            <div className="author">B.B. King</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
