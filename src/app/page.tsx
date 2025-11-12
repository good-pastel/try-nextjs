import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "@/components/PostList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1>Welcome to the new TRY (NEXT.JS)</h1>
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
