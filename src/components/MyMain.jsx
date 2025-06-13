export function MyMain() {
  const cards = [
    { id: 0, img: "https://picsum.photos/200/150?random=0", title: "My Text 0" },
    { id: 1, img: "https://picsum.photos/200/150?random=1", title: "My Text 1" },
    { id: 2, img: "https://picsum.photos/200/150?random=2", title: "My Text 2" },
    { id: 3, img: "https://picsum.photos/200/150?random=3", title: "My Text 3" },
    { id: 4, img: "https://picsum.photos/200/150?random=4", title: "My Text 4" },
  ];

  return (
    <main className="main">
      {cards.map(card => (
        <div key={card.id} className="card">
          <img src={card.img} alt={card.title} />
          <h2>{card.title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi 
            quisquam mollitia minus dolores quae aperiam nobis perspiciatis deleniti explicabo 
            enim suscipit, voluptatibus soluta maxime deserunt necessitatibus tempore. Expedita, exercitationem.
          </p>
        </div>
      ))}
    </main>
  );
}
