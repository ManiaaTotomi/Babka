const { useState } = React;

function Card({ id, title, price, includesText, features, buttonText, isSpanRow, isHovered, onHover }) {
  const cardClass = `card ${isSpanRow ? 'card-span-row' : ''} ${isHovered ? 'card-hovered' : ''}`;
  return (
    <div
      className={cardClass}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <h1 className="card-title">{title}</h1>
      <p className="card-price">{price}</p>
      <div className="card-content">
        <p className="includes-text">{includesText}</p>
        <ul className="features-list">
          {features.map((text, i) => (
            <li key={i}>
              <span className="checkmark">✓</span>
              {text}
            </li>
          ))}
        </ul>
      </div>
      <button className="download-button">{buttonText}</button>
    </div>
  );
}

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="cards-container">
      <div className="cards-row">
        <Card
          id="pickles"
          title="Pickles"
          price="Free"
          includesText="Includes:"
          features={[
            'No credit card required',
            'Limited Agent requests',
            'Limited Tab completions',
          ]}
          buttonText="Download"
          isSpanRow={false}
          isHovered={hoveredCard === 'pickles'}
          onHover={setHoveredCard}
        />
        <Card
          id="cheese"
          title="Cheese"
          price="$20/mo."
          includesText="Everything in Hobby, plus:"
          features={[
            'Extended limits on Agent',
            'Unlimited Tab completions',
            'Background Agents',
            'Maximum context windows',
          ]}
          buttonText="Get Pro"
          isSpanRow={false}
          isHovered={hoveredCard === 'cheese'}
          onHover={setHoveredCard}
        />
      </div>
      <Card
        id="meat"
        title="Meat"
        price="$10/mo."
        includesText="Includes:"
        features={['meat']}
        buttonText="Get Meat"
        isSpanRow={true}
        isHovered={hoveredCard === 'meat'}
        onHover={setHoveredCard}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
