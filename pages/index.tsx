import HomePage from '../components/pages/HomePage';
import { BlogPosts } from '../types'
import { getAllPosts } from '../api/api';

const Home = ({ posts }: BlogPosts) => <HomePage posts={posts} />

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Home
