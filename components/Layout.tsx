import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/layout.module.css'

export function Layout({ children, title = "Next App" }) {
    return (
        <>
            <Head>
                <title>
                    {title} | Dioma Next
            </title>
            </Head>
            <nav className={styles.layout}>
                <Link href='/'><a>Home</a></Link>
                <Link href='/about'><a>About</a></Link>
                <Link href='/posts'><a>Posts</a></Link>
            </nav>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}