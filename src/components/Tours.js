import Title from "./Title";
import { tours } from "../Data";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" sub="tours" />
      <div className="section-center featured-center">
        {tours.map((data) => {
          const { id, imgs, date, title, cost, text, country, duration } = data;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={imgs} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{duration}</p>
                  <p>{cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
