import styles from './style.module.css'
console.log("B" ,styles)

function B() {
  return (
    <div>
      <h1 className={styles.title}>BBLorem, ipsum dolor.</h1>
    </div>
  )
}

export default B;