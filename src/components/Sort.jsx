import { useState, useEffect } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import Loader from "./Loader";

export default function Sort({
   data,
   searchTag,
   user,
   isLoading,
   setData,
   isAuthenticated,
}) {
   const [isDelayed, setIsDelayed] = useState(true);

   useEffect(() => {
      const delay = 4000;
      const timer = setTimeout(() => {
         setIsDelayed(false);
      }, delay);
      return () => clearTimeout(timer);
   }, []);

   const onSortEnd = (oldIndex, newIndex) => {
      setData((array) => arrayMove(array, oldIndex, newIndex));
   };

   return (
      <div>
         {isDelayed && (
            <div className="load">
               <Loader />
            </div>
         )}
         {!isDelayed && isAuthenticated && (
            <div>
               <SortableList
                  onSortEnd={onSortEnd}
                  className="list"
                  draggedItemClassName="dragged"
               >
                  <div className="images_list">
                     {data
                        .filter((eachData) => {
                           if (searchTag === "") {
                              return eachData;
                           } else if (
                              eachData.tag
                                 .toLowerCase()
                                 .includes(searchTag.toLowerCase())
                           ) {
                              return eachData;
                           }
                        })
                        .map((item) => (
                           <SortableItem key={item.id}>
                              <div className="list-group-item">
                                 <img
                                    src={`https://picsum.photos/id/${item.id}/200`}
                                    alt={item.tag}
                                 />
                                 <p>{item.tag}</p>
                              </div>
                           </SortableItem>
                        ))}
                  </div>
               </SortableList>
            </div>
         )}
      </div>
   );
}
