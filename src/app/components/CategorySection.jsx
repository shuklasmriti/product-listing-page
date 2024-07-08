import React from "react";
import Image from "next/image";
import styles from "../styles/category.module.css";
const images = [
  { src: "/images/AllBags.png", label: "All Bags" },
  { src: "/images/VanityPouch.png", label: "Vanity Pouch" },
  { src: "/images/ToteBag.png", label: "Tote Bag" },
  { src: "/images/DuffleBag.png", label: "Duffle Bag" },
  { src: "/images/LaptopSleeve.png", label: "laptop Sleeve" },
  { src: "/images/MessengerBag.png", label: "Messenger Bags" },
  { src: "/images/SlingBags.png", label: "Slings Bag" },
  { src: "/images/HandBags.png", label: "Handbags" },
];
const CategorySection = () => {
  return (
    <div className={styles.category}>
      {images?.map((img, index) => {
        return (
          <div key={index}>
            <Image src={img?.src} alt="category" width={100} height={100} />
            <span className={styles.category}>{img.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategorySection;
