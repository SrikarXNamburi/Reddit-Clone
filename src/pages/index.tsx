import { useUser } from "@/context/AuthContext";

export default function Home() {
  const { user } = useUser();
  return <>Srikar</>;
}

//Get all the posts on the server-side
// Since all users can read posts in our schema logic
// We can use the API Key authorization method
//So we'll call some code to access our GraphQL API on the serverside
// Pass it to our function as props
// Render the posts on the home page to look like reddit posts.
