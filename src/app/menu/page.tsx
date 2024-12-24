import styles from "./page.module.css"
export default function Menu(){
    return(
      <div>
        <h1 className="blog-heading">Menu List</h1>
        <section className={styles.blogContainer} >
    <div className={styles.childContainer}>
      <h1 className={styles.blogTitle}>Flavours</h1>
      <div className={styles.headings}>
      <h2 >Chicken Supreme</h2>
      <h2>Chicken Tikka</h2>
      <h2>Chicken Fajita</h2>
      <h2>Malai Boti</h2>
      <h2>Tandoori Chicken</h2>
      <h2>Hot & Spicy</h2>
      <h2>Cheese Lovers</h2>
      </div>
      <h1 className={styles.blogTitle}>Price</h1>
      <div className={styles.headings}>
      <h2>Small&emsp;&emsp;&emsp;&nbsp;&nbsp;550/</h2>
      <h2>Medium &emsp;&emsp;750/</h2>
      <h2>Large &emsp;&emsp;&emsp;&nbsp;990/</h2>
      <h2>Jumbo&emsp;&emsp;&emsp;1100/</h2>
      </div>
    </div>
    </section>
    </div>
    )
}