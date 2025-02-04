import Accordion from "./Accordion";

export const Faq = () => {
  return (
    <section className="section">
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <p className="section-desc">
        Find clear, helpful responses to common questions about Skyline Bank’s
        services and features.
      </p>
      <Accordion />
    </section>
  );
};
