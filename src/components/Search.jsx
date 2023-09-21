let Search = ({ searchTag, setTag }) => {
   return (
      <div className="search">
         <input
            type="text"
            placeholder="Search an image"
            value={searchTag}
            onChange={setTag}
            key={1}
         />
      </div>
   );
};

export default Search;
