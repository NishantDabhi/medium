import Header from "../components/header"
import Banner from "../components/Banner"
import PostCard from "../components/PostCard"
import { MediumContext } from '../context/MediumContext'
import { useContext } from 'react'


const styles = {
  postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,

  container: `max-w-7xl flex-1`,

  main: `flex justify-center`,
  wrapper: `mx-auto`,
}

export default function Home() {

  const { posts } = useContext(MediumContext)
  console.log(posts, '🔥')
  
  return (
  <div className={styles.wrapper}>

    <div>
      <Header />
      <Banner />
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.postsList}>
            {posts.map(post => (
              <PostCard post={post} key={post.id} />
            ))}
        
       
          </div>
      </div>
    </div>  
      
    </div>
  </div>  
  )
}
