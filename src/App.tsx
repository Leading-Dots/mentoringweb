import { UseAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "./components/ui/button";
import { AuthUser } from "aws-amplify/auth";

type AppProps = {
  signOut?: UseAuthenticator["signOut"]; //() => void;
  user?: AuthUser;
};

const App: React.FC<AppProps> = ({ signOut, user }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button onClick={signOut}>Click me</Button>
      <div>{user?.userId}</div>
    </div>
  );
};

export default withAuthenticator(App);
