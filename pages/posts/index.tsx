import { Layout } from '../../components/Layout'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NextPageContext } from 'next'

interface Posts {
    id: number,
    title: string
}

interface PostsPageProps {
    posts: Posts[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {

    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts')
            const data = await response.json()
            setPosts(data)
        }
        if (!serverPosts) {
            load()
        }
    }, [])

    if (!posts) {
        return (
            <Layout>
                <h1>Loading...</h1>
            </Layout>
        )
    }

    return (
        <Layout title="Posts Page">
            <h1>Posts Page</h1>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}><a>{post.title}</a></Link>
                    </li>)}
            </ul>
        </Layout>
    )
}

Posts.getInitialProps = async ({req }: NextPageContext) => {
    if (!req) {
        return { posts: null }
    }

    const response = await fetch('http://localhost:4200/posts')
    const posts: Posts[] = await response.json()

    return {
        posts
    }
}
