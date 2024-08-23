import type { PostWithData } from "@/db/queries/posts";
import type { Post, User, Topic } from "@prisma/client";
import Link from "next/link";
import paths from "@/paths";

interface PostListProps {
  fetchPosts: () => Promise<PostWithData[]>;
}

export default async function PostList({ fetchPosts }: PostListProps) {
  const posts = await fetchPosts();

  const renderedPosts = posts.map((post) => {
    const topicSlug = post.topic.slug;

    if (!topicSlug) {
      throw new Error("Need a slug to link to a post");
    }

    return (
      <div key={post.id} className="border rounded-lg p-3 mt-8 mb-4">
        <Link href={paths.postShow(topicSlug, post.id)}>
          <h3 className="text-lg font-bold">{post.title}</h3>
          <div className="flex flex-row gap-8">
            <p className="text-xs text-gray-400">By {post.user.name}</p>
            <p className="text-xs text-gray-400">
              {post._count.comments} comments
            </p>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="space-y-2">{renderedPosts}</div>;
}
