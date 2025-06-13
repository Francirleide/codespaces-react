import styles from './MyMain.module.css';

export function Main() {
  const cards = [
    { id: 0, title: "My Text 0" },
    { id: 1, title: "My Text 1" },
    { id: 2, title: "My Text 2" },
    { id: 3, title: "My Text 3" },
    { id: 4, title: "My Text 4" },
  ];

  return (
    <main className="main">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={`https://picsum.photos/300?random=${card.id}`} alt="" />
          <h2>{card.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi 
            quisquam mollitia minus dolores quae aperiam nobis.
          </p>
        </div>
      ))}
    </main>
  );
}
