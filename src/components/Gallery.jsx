import React, { useState } from 'react';
import "./styles.css";

function Gallery() {
  const [images, setImages] = useState([
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc4658296393.5630bc592938a.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc4658296393.5630bc592938a.jpg',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bc4658296393.5630bc592938a.jpg',
  ]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages((prevImages) => [...prevImages, event.target.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-customGray p-4 rounded-lg relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl bg-black p-2 rounded-3xl w-32 text-center">Gallery</h2>
        <div className="flex justify-around items-center">
          {/* Add Image Button */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="bg-gray-700 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-gray-800"
          >
            + ADD IMAGE
          </label>
          
          {/* Arrow Buttons */}
          <button className="bg-black text-white px-4 py-2 rounded-full mx-2 hover:bg-gray-800">
            ←
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-full mx-2 hover:bg-gray-800">
            →
          </button>
        </div>
      </div>
      <div className="flex space-x-4 custom-scrollbar">
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/3">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
