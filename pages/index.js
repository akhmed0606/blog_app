import Head from 'next/head'

const posts = [{
  title:'React', excerpt:'Learn'
},
{
  title:'React', excerpt:'Learn'
}]

export default function Home() {
  return (
    <div className='container mx-auto px mb-8'>
      <Head>
        Hello World
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
         {posts.map((post,index) => (
           <div key={index}>
            {post}
           </div>
         ))}
      </div>
    </div>
    
  )
}
