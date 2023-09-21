import Navbar from "./Navbar";
import Sort from "./Sort";
import Search from "./Search";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

let Home = () => {
   let [data, setData] = useState([
      {
         id: "1",
         tag: "laptop",
      },
      {
         id: "24",
         tag: "book",
      },
      {
         id: "38",
         tag: "sky",
      },
      {
         id: "42",
         tag: "home",
      },
      {
         id: "50",
         tag: "water",
      },
      {
         id: "64",
         tag: "girl",
      },
      {
         id: "77",
         tag: "bridge",
      },
      {
         id: "85",
         tag: "desert",
      },
      {
         id: "96",
         tag: "gamepad",
      },
      {
         id: "101",
         tag: "building",
      },
      {
         id: "114",
         tag: "cloud",
      },
      {
         id: "128",
         tag: "grass",
      },
   ]);

   let { loginWithRedirect, logout, user, isLoading, isAuthenticated } =
      useAuth0();

   const [searchTag, setSearchTag] = useState("");

   function setTag(event) {
      setSearchTag(event.target.value);
   }

   return (
      <div>
         <Navbar
            loginWithRedirect={loginWithRedirect}
            logout={logout}
            uset={user}
            isLoading={isLoading}
            isAuthenticated={isAuthenticated}
         />
         <Search searchTag={searchTag} setTag={setTag} />
         <Sort
            data={data}
            searchTag={searchTag}
            user={user}
            isLoading={isLoading}
            setData={setData}
            isAuthenticated={isAuthenticated}
         />
      </div>
   );
};

export default Home;
