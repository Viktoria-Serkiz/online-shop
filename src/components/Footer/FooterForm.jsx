const FooterForm = () => {
  return (
    <form className="footer__form">
      <input
        type="text"
        placeholder="Enter your Email"
        className="footer__form_input"
      />
      <button type="button" className="footer__form_button">
        Subscribe
      </button>
    </form>
  );
};

export { FooterForm };
