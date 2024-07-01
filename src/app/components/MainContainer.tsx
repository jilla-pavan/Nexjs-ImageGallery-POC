"use client";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";

interface MainContainerProps {
  textData: string;
  btnClickCheck: boolean;
}

const MainContainer: React.FC<MainContainerProps> = ({
  textData,
  btnClickCheck,
}) => {
  const [photosList, setPhotosList] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${textData}&per_page=24&format=json&nojsoncallback=1`
    );
    const json = await data.json();
    console.log(json.photos.photo);
    setPhotosList(json.photos.photo);
  };

  useEffect(() => {
   fetchData();
  }, [textData]);

  return (
    <div className="">
      {/* {photosList.map((photo) => (
        <ImageCard key={photo.id} photo={photo} />
      ))} */}
    </div>
  );
};

export default MainContainer;
