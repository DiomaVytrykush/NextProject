import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Layout } from '../../components/Layout'
import { useRouter } from 'next/router'
import { NextPageContext } from 'next'

interface Post {
    id: number,
    title: string
}

interface PostPageProps {
    post: Post
}

export default function Post({ post: serverPost }: PostPageProps) {

    const router = useRouter()

    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) {
            load()
        }
    }, [])

    if (!post) {
        return (
            <Layout>
                <h1>Loading...</h1>
            </Layout>
        )
    }

    return (
        <Layout>
            <p>{post.title}</p>
            <Link href="/posts"><a>Back to posts</a></Link>
        </Layout>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if (!req) {
        return { post: null }
    }
    const response = await fetch(`http://localhost:4200/posts/${query.id}`)
    const post: Post = await response.json()

    return {
        post
    }
}