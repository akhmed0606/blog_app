import Head from "next/head";
import CardPost from "../Components/CardPost";

const posts = [
  {
    title: "React",
    excerpt: "Learn",
  },
  {
    title: "React",
    excerpt: "Learn",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px mb-8 bg-gray-300">
      <Head>Hello World</Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div >
             <CardPost post={post} key={index}/>
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>

          </div>
        </div>
      </div>
    </div>
  );
}
