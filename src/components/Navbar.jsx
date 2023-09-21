let Navbar = ({
   loginWithRedirect,
   logout,
   user,
   isLoading,
   isAuthenticated,
}) => {
   return (
      <div className="header">
         <h1>Draggg</h1>
         <div className="log">
            {!isLoading && !isAuthenticated && (
               <button className="btn" onClick={() => loginWithRedirect()}>
                  Login
               </button>
            )}
            {!isLoading && isAuthenticated && (
               <button className="btn" onClick={() => logout()}>
                  Logout
               </button>
            )}
         </div>
      </div>
   );
};

export default Navbar;
