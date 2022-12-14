import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request'
import { Card } from '../components/card/Card.component'
import { Global } from './index.style'


const graphcms = new GraphQLClient("https://api-eu-central-1.hygraph.com/v2/cl7v876h01m1p01ula3xlbpmb/master")

const QUERY = gql`
query MyQuery {
  posts {
    title,
    datePublished,
		slug
    img{
      url
    }
    content {
      text
    }
  }
}
`

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,

    },
    revalidate: 10,
  };
};


export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Global />
        {posts.map((post) => (
          <Card
            title={post.title}
            postIMG={post.img.url}
            content={post.content.text}
            key={post.slug}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  )
}
