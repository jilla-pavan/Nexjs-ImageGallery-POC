"use client";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ShimmerUI from "./ShimmerUI";

interface ImageData {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

const ImageBody: React.FC = () => {
  const [imageInput, setImageInput] = useState<string>("");
  const [imagesData, setImagesData] = useState<ImageData[]>([]);

  const fetchData = async () => {
    try {
      const fetchImages = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${imageInput}&per_page=24&format=json&nojsoncallback=1`
      );
      const data = await fetchImages.json();
      setImagesData(data.photos.photo);
      console.log(imagesData);
    } catch {
      console.log("Encountered an error with fetching and parsing data");
    }
  };

  return (
    <div className="bg-slate-200 w-full mt-14 absolute">
      <div className="flex justify-center items-center">
        <input
          className="my-6 w-5/12 p-2 rounded-lg text-xl bg-red-200 text-black"
          placeholder="Search Images"
          value={imageInput}
          onChange={(e) => setImageInput(e.target.value)}
        />
        <button
          className="bg-slate-300 mx-2 p-2 px-6 font-bold text-lg rounded-lg border border-black hover:bg-slate-400 text-black"
          onClick={() => {
            imageInput === "" ? <ShimmerUI /> : fetchData();
          }}
        >
          Search
        </button>
      </div>
      <div className="">
        {imagesData.length >= 1 ? (
          <ImageCard imageinfo={imagesData} />
        ) : (
          <ShimmerUI />
        )}
      </div>
    </div>
  );
};

export default ImageBody;
