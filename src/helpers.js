export const displayData = (data, start, number) =>
  data.slice(start, number).map(({ title, content }, index) => (
    <div className="feature-card card-hover" data-aos="fade-up" key={index}>
      <h3>{title}</h3>
      <p className="mt-2">{content}</p>
    </div>
  ));

export const makeLowerCase = (val) => val.toLowerCase().trim();
export const makeUpperCase = (val) => val.toUpperCase().trim();
