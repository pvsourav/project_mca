import React, { useEffect, useRef } from 'react';
import './content.scss';

import LanguageIcon from '@mui/icons-material/Language';
import TabletAndroidIcon from '@mui/icons-material/TabletAndroid';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DataObjectIcon from '@mui/icons-material/DataObject';

const Card = ({ title, description, icon }) => (
  <div className="card">
    <div className="card__icon">{icon}</div>
    <h3 className="card__title">{title}</h3>
    <p className="card__description">{description}</p>
  </div>
);

const Content = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { rootMargin: '0px', threshold: 0.5 }
    );
  
    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });
  
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {  // Check if card is a valid element
          observer.unobserve(card);
        }
      });
    };
  }, []);
  

  const cards = [
    { title: "Web Development", description: "Learn to build modern web applications", icon: <LanguageIcon/> },
    { title: "Data Science", description: "Analyze and interpret complex data", icon: <DataObjectIcon/> },
    { title: "Artificial Intelligence", description: "Explore the world of AI and machine learning", icon: <AutoAwesomeIcon/> },
    { title: "Cybersecurity", description: "Protect systems from digital threats", icon: <SecurityIcon/> },
    { title: "Cloud Computing", description: "Master cloud technologies and services", icon: <CloudQueueIcon/> },
    { title: "Mobile App Development", description: "Create apps for iOS and Android", icon: <TabletAndroidIcon/> },
  ];

  return (
    <section className="content">
      <h2 className="content__title">Our Curriculum</h2>
      <div className="content__grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card-wrapper"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-inner">
              <Card {...card} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;