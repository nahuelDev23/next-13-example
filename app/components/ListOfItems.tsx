import Link from 'next/link'
import { LikeButton } from './LikeButton'

const fetchPost = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
}
export const ListOfItems = async () => {
  const posts = await fetchPost()
  return (
    <div>

      {posts.map(post => (
        <div key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <p>{post.title}</p>
            <LikeButton />
          </Link>
        </div>
      ))}
    </div>
  )
}
