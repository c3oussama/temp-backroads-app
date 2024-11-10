import { toursData } from '../data';
const Tour = () => {
  return toursData.map((tourData) => {
    const { id, img, date, title, text, icon, country, duration, price } =
      tourData;
    return (
      <article className="tour-card" key={id}>
        <div className="tour-img-container">
          <img src={img} className="tour-img" alt={title} />
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
                <i className={icon}></i>
              </span>
              {country}
            </p>
            <p>{duration} days</p>
            <p>from ${price}</p>
          </div>
        </div>
      </article>
    );
  });
};
export default Tour;
