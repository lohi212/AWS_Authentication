import { useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const Home = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log({ user });
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};

export default Home;
