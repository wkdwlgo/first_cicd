import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const FakeFetch = () =>
  Promise.resolve<Post>({
    userId: 1,
    id: 1,
    title: "fake title",
    body: "fake body",
  });

export const FetchDataComponent: React.FC = () => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    FakeFetch().then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <div>
      {post && (
        <ul>
          <li>{`id: ${post.id}`}</li>
          <li>{`userId: ${post.userId}`}</li>
          <li>{`title: ${post.title}`}</li>
          <li>{`body: ${post.body}`}</li>
        </ul>
      )}
    </div>
  );
};