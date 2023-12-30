import { Button } from "@/components/ui/button";
import { blogDetailData } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const getData = async () => {
    const query = `*[_type == 'blog' && slug.current == '${slug}']{
              _createdAt,
                description,
                titleImage,
                _id,
                title,
                content,
                "slug": slug.current
            }[0]`;

    const data = await client.fetch(query);
    return data;
  };
  const data: blogDetailData = await getData();
  return (
    <div>
      <h1>
        <Button className="text-black bg-slate-200" asChild size={"sm"}>
          <Link href={"/"}>{"<"}Back</Link>
        </Button>
        <span className="block text-base text-center text-primary font-bold dark:font-semibold tracking-wide uppercase">
          Jan Marshal - Blog
        </span>
        <span className="mt-4 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
        <Image
          src={urlFor(data.titleImage).url()}
          alt="image"
          width={500}
          height={500}
          priority
          className="w-[500px] h-[200px] sm:h-[400px] mx-auto my-5 rounded-lg border"
        />
      </h1>
      <div className="mt-16 prose prose-blue decoration-transparent dark:prose-invert prose-xl">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

export default page;
