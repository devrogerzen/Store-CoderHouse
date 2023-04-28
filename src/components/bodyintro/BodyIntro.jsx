import ImgImports from "../../assets/images/importados.jpg";
import "./BodyIntro.css";

export const BodyIntro = () => {
  return (
    <section className="promo-section">
      <div className="promo-text">
        <h2>¡Great Store!!</h2>
        <p>
          Take advantage of our promotions on a wide selection of appliances
          from top brands. Don't miss the opportunity to save on your
          purchases!!
        </p>
        <button className="promo-button">Login</button>
        <button className="promo-button">Create User</button>
      </div>
      <img src={ImgImports} alt="Products Sales" className="promo-image" />
    </section>
  );
};