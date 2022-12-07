const FooterForm = () => {
  return (
    <form className="footer__form">
      <input
        type="text"
        placeholder="Enter your Email"
        className="footer__form--input"
      />
      <button type="button" className="footer__form--button">
        Subscribe
      </button>
    </form>
  );
};

export { FooterForm };
