import Auth0ProviderWithHistory from "./auth0Provider";
import Home from "./components/Home";

function App() {
   return (
      <Auth0ProviderWithHistory>
         <Home />
      </Auth0ProviderWithHistory>
   );
}

export default App;
