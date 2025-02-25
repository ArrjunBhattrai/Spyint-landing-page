import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./DarkWebInsights.css";

const cards = [
  { id: 1, title: "Card 1", content: "This is the first insight." },
  { id: 2, title: "Card 2", content: "This is the second insight." },
  { id: 3, title: "Card 3", content: "This is the final insight." },
];

export default function DarkWebInsights() {
  const [currentCard, setCurrentCard] = useState(0);
  const [sectionMove, setSectionMove] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        if (scrollCount === 0) {
          setScrollCount(1);
        } else if (currentCard < cards.length - 1) {
          setCurrentCard((prev) => prev + 1);
          setScrollCount(0);
        } else if (!sectionMove) {
          setSectionMove(true);
        }
      } else {
        if (sectionMove) {
          setSectionMove(false);
        } else if (currentCard > 0 && scrollCount === 0) {
          setCurrentCard((prev) => prev - 1);
          setScrollCount(1);
        }
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentCard, sectionMove, scrollCount]);

  return (
    <div className="container">
      {/* Left Section */}
      {!sectionMove && (
        <motion.div
          className="left-section"
          animate={sectionMove ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="heading">Dark Web Insights</h1>
        </motion.div>
      )}
      
      {/* Right Section */}
      <motion.div
        className="right-section"
        animate={sectionMove ? { y: "-100%", opacity: 0 } : { y: `-${currentCard * 100}vh`, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="card"
            initial={{ opacity: 0 }}
            animate={index === currentCard ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="card-title">{card.title}</h2>
            <p className="card-content">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
