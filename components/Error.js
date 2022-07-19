import styles from '../styles/Error.module.css'

export default function Error({ error }) {
  return (
    <div className={styles.error}>
      {error} 😪
    </div>
  )
}