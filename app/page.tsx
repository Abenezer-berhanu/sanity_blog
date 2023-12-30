import { homeBlogData } from "@/lib/interface";
import { client } from "@/lib/sanity";

const getData = async () => {
  const query = `*[_type == 'blog'] |order(_createdAt desc){
    title,
    description,
    _id,
    "slug": slug.current,
    titleImage
  }`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data: homeBlogData[] = await getData();
  return <div>
    
  </div>;
}
