import React, {useEffect, useState} from "react";
import axios from "axios";

const TableRowImage = ({ itemId }) => {

  const [img, setImg] = useState([]);

  useEffect(() => {
    try {
      axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        setImg(res.data)
      })
  
  }
    catch(error){
      console.log(error);
    }
  }, [])


  const itemImg = img.filter((imgs) => imgs.id === itemId)[0];
  return (
    <td>
      {itemImg && (
        <img
          key={itemImg.id}
          alt={itemImg.title}
          src={itemImg.thumbnailUrl}
          width={"50px"}
          height={"50px"}
        />
      )}
    </td>
  );
};

export default TableRowImage;