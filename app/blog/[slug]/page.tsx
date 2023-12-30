import { client } from "@/lib/sanity";
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
                "slug": slug.current
            }[0]`;

    const data = await client.fetch(query);
    return data;
  };
  const data = await getData();
  console.log(data);
  return <div></div>;
}

export default page;
