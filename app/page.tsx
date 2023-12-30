import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { homeBlogData } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {data.map((data: homeBlogData) => (
        <Card key={data._id} className="grid">
          <Image
            src={urlFor(data.titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="w-full h-[120px] md:h-[300px] object-cover"
          />
          <CardContent className="mt-5">
            <h3 className="text-xl line-clamp-2 font-bold">
              <u>{data.title}</u>
            </h3>
            <p className="line-clamp-3 text-sm dark:text-gray-300">
              {data.description}
            </p>
            <Button asChild className="mt-5 w-full">
              <Link href={`/blog/${data.slug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
