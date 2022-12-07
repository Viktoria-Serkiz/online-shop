import Eco from "../../img/eco-collection.jpg";

const Ecocollection = () => {
  return (
    <>
      <div className="container">
        <section className="ecocollection">
          <h2 className="visually-hidden">Eco-collection</h2>
          <article className="ecocollection__article">
            <h3 className="ecocollection__article--title">
              Eco Aware brands: Exclusively at Dresnote
            </h3>
            <p className="ecocollection__article--text">
              Science Story is a collaboration between Dressnote and creative
              thinkers, researchers and brands who are developing cutting-edge
              materials designed to address the environmental impacts of the
              textile industry.
            </p>
            <button className="ecocollection__article--button" type="button">
              Shop Eco collection
            </button>
          </article>
          <div className="ecocollection__photo">
            <img src={Eco} alt="" width="540px" height="479px"/>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ecocollection;
