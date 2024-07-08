import styles from "../styles/main.module.css";
import Image from "next/image";
import { IoBagAddOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";

const truncateTitle = (title, wordLimit) => {
  if (!title) return "";
  const words = title.split(" ");
  return words.slice(0, wordLimit).join(" ");
};

const fetchData = async () => {
  const res = await axios("https://fakestoreapi.com/products");
  return res.data ?? [];
};
const MainSection = async () => {
  const getData = await fetchData();

  return (
    <div className={styles.mainSection}>
      {getData?.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <CiBookmark className={styles.bookmark} />
            <Image src={item?.image} alt="image" width={100} height={100} />
            <div className={styles.detail}>
              <p>{truncateTitle(item?.title, 4)}</p>
              <div className={styles.price_container}>
                <div className={styles.price}>
                  <p>₹ {item?.price}</p>
                  <span>{item?.price * 2}</span>
                  <span>(50% Off)</span>
                </div>
                <IoBagAddOutline />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainSection;
