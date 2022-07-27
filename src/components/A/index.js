import styles from './style.module.css'
console.log("A" ,styles)

function A() {
  return (
    <div>
      <h1 className={styles.title}>AALorem, ipsum.</h1>
    </div>
  )
}

export default A;