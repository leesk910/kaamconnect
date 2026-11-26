const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Find a Service",
    description:
      "Search for the service you need and discover skilled professionals near you.",
  },
  {
    number: "02",
    icon: "🤝",
    title: "Choose a Professional",
    description:
      "Compare profiles, ratings and experience to find the right person for your job.",
  },
  {
    number: "03",
    icon: "✨",
    title: "Get the Job Done",
    description:
      "Connect with your chosen professional and get your work done hassle-free.",
  },
];

function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">

        <div className="how-header">
          <span className="section-label">SIMPLE PROCESS</span>

          <h2>
            How <span>KaamConnect</span> works
          </h2>

          <p>
            Getting help has never been easier. Just three simple steps.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => (
            <div className="how-card" key={step.number}>

              <span className="how-number">{step.number}</span>

              <div className="how-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;