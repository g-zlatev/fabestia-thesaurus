import TestimonialItem from "./TestimonialItem";

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
          <TestimonialItem />
          <TestimonialItem />

        </div>
      </div>
    </section>
  );
}

export default Testimonial;
