import './Content.css';

function Content() {
  return (
    <main className="story-content">
      <div className="story-container">
        <article className="story-card story-card-coral">
          <h2 className="card-title">The Journey Begins</h2>
          <p className="card-text">
            Once upon a time, there lived a sweet little girl who was loved by everyone,
            especially her grandmother, who gave her a beautiful red velvet hood. The girl
            wore it so often that everyone called her Little Red Riding Hood. One sunny
            morning, her mother asked her to bring a basket of treats to her sick grandmother
            who lived deep in the forest. "Stay on the path and don't talk to strangers,"
            her mother warned as she set off on her journey through the woods.
          </p>
        </article>

        <article className="story-card story-card-mint">
          <h2 className="card-title">The Big Bad Wolf</h2>
          <p className="card-text">
            As Little Red Riding Hood walked through the forest, she met a cunning wolf
            with sharp teeth and hungry eyes. The wolf, with a sly smile, asked where she
            was going. Forgetting her mother's warning, she told him about her grandmother's
            cottage. The clever wolf suggested she pick some flowers, and while she was
            distracted, he raced ahead to grandmother's house. He swallowed the old woman
            whole, put on her clothes, and climbed into her bed, waiting for the little girl.
          </p>
        </article>

        <article className="story-card story-card-lavender">
          <h2 className="card-title">The Happy Ending</h2>
          <p className="card-text">
            When Little Red Riding Hood arrived, she noticed something strange. "What big
            eyes you have! What big ears you have! What big teeth you have!" she exclaimed.
            "All the better to EAT you with!" growled the wolf, leaping from the bed. But
            just then, a brave woodcutter heard her screams and burst through the door. He
            rescued both Little Red Riding Hood and her grandmother from the wolf's belly.
            From that day on, Little Red Riding Hood always listened to her mother's advice.
          </p>
        </article>
      </div>
    </main>
  );
}

export default Content;
