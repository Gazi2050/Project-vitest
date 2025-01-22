import Counter from "./components/Counter/Counter";
import Greeting from "./components/Greeting";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="space-y-5 h-screen pt-20 bg-zinc-800">
      <Greeting name={"Jack"} />
      <Counter />
      <UserProfile userId={5} />
    </div>
  );
};

export default App;