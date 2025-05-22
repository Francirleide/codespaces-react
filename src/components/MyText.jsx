import styles from './MyText.module.css';

export function MyText()
{
  return (
    <div className ={styles.container}>
    <div className={styles.div}>
      <h1 className= {styles.title}>Meu primeiro projeto</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quaerat commodi, vitae atque, numquam repellat porro ad et repellendus eius quos
        doloremque excepturi, ratione ipsa! Nihil est consequatur dolorem itaque!
      </p>
    </div>
    </div>

  );
}