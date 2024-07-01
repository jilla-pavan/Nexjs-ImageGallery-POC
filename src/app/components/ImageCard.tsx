import React from "react";

interface ImageInfo {
  farm: number;
  id: string;
  secret: string;
  server: string;
}

interface Props {
  imageinfo: ImageInfo[];
}

const ImageCard: React.FC<Props> = ({ imageinfo }) => {
  return (
    <div className="grid grid-cols-5 ml-6">
      {imageinfo.map((image, index) => (
        <div key={index}>
          <img
            className="w-[200px] h-[200px] object-cover rounded-lg shadow-lg m-4"
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={`Image ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
