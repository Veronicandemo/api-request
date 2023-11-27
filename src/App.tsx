import { useFetchCountry } from "./hooks/getHooks";
import HomePage from "./pages";

function App() {
  const { country } = useFetchCountry();
  console.log(country);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
