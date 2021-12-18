import TestimonialItem from "./TestimonialItem";
import "./Testimonial.css"

function Testimonial() {
  return (
    <section
      className="row section text-light"
      style={{ backgroundColor: "#4FC1E9" }}
    >
      <div className="row-content even clear-after testimonial-wrapper">
        <div
          className="testimonial-slider centertxt"
        >
          <TestimonialItem />
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
