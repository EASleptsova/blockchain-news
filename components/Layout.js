import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Meta from './Meta';
import Header from './Header';

const Layout = (props) => {

  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {props.children}
        </main>
      </div>
    </>
  )
}
export default Layout