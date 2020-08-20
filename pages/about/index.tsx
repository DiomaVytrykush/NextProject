import { Layout } from '../../components/Layout'

interface About {
    title: string
}

interface AboutPageProps {
    about: About
}

export default function About({ about }: AboutPageProps) {
    return (
        <Layout title="About Page">
            <h1>{about.title}</h1>
        </Layout>
    )
}

export async function getServerSideProps() {

    const response = await fetch('http://localhost:4200/about')
    const about: About = await response.json()

    return { props: { title: about.title } }
}