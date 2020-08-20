import Link from "next/link";
import { Layout } from '../components/Layout'
import styles from '../styles/error.module.css';

export default function Error() {
    return (
        <Layout>
            <h1 className={styles.error}>Error 404</h1>
            <p>Please go back to <Link href="/"><a>Home page</a></Link></p>
        </Layout>
    )
}