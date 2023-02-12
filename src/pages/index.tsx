import { Post, ListPostsQuery } from "@/API";
import { useUser } from "@/context/AuthContext";
import { listPosts } from "@/graphql/queries";
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
export default function Home() {
  const { user } = useUser();
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    //Make a request to the Graphql API
    const fetchPostsFromApi = async (): Promise<Post[]> => {
      const allPosts = (await API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        error: any[];
      };
      if (allPosts.data) {
        setPost(allPosts.data.listPosts?.items as Post[]);
        return allPosts.data.listPosts?.items as Post[];
      } else {
        throw new Error("Coundn't get post");
      }
    };
    fetchPostsFromApi();
  }, []);
  console.log("User: ", user);
  console.log("Posts: ", posts);
  return <>Srikar</>;
}

//Get all the posts on the server-side
// Since all users can read posts in our schema logic
// We can use the API Key authorization method
//So we'll call some code to access our GraphQL API on the serverside
// Pass it to our function as props
// Render the posts on the home page to look like reddit posts.
