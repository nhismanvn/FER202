// File: src/components/MenuSection.js
const pizzas = [
  {
    name: "Margherita Pizza",
    image: "menu1.jpg",
    oldPrice: 40,
    newPrice: 24,
    tag: "SALE",
  },
  {
    name: "Mushroom Pizza",
    image: "menu2.jpg",
    oldPrice: null,
    newPrice: 25,
    tag: "",
  },
  {
    name: "Hawaiian Pizza",
    image: "menu3.jpg",
    oldPrice: null,
    newPrice: 30,
    tag: "NEW",
  },
  {
    name: "Pesto Pizza",
    image: "menu4.jpg",
    oldPrice: 60,
    newPrice: 30,
    tag: "SALE",
  },
];

export default function MenuSection() {
  return (
    <section className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-list">
        {pizzas.map((pizza, index) => {
          const hasSale = pizza.oldPrice && pizza.newPrice;
          const saleOff = hasSale
            ? Math.round(((pizza.oldPrice - pizza.newPrice) / pizza.oldPrice) * 100)
            : 0;

          return (
            <div className="menu-item" key={index}>
              {pizza.tag && <span className="tag">{pizza.tag}</span>}
              <img src={`/assets/img/${pizza.image}`} alt={pizza.name} />
              <h3>{pizza.name}</h3>
              <p>
                {hasSale && <del>${pizza.oldPrice.toFixed(2)}</del>}{" "}
                <span className="price">${pizza.newPrice.toFixed(2)}</span>
              </p>
              {hasSale && (
                <p className="sale-off">-{saleOff}% OFF</p>
              )}
              <button>Buy</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
