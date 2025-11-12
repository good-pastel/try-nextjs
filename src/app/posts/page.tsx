import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/api";
import PostList from "@/components/PostList";

export default async function Page() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h2>Daftar Tulisan</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          dolorem voluptas aliquam odio veritatis amet veniam laudantium
          molestias quam explicabo?
        </p>
      </div>
      <PostList posts={posts} />
    </>
  );
}
