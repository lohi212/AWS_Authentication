import { useAuthenticator } from "@aws-amplify/ui-react";

const Home = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log({ user });
  return (
    <div>
      <h1>Home Page</h1>
      <button>Logout</button>
    </div>
  );
};

export default Home;
