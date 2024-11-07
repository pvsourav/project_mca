import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpCircle, PlusCircle, ArrowDownCircle, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import './newscms.scss';
import { NewsData } from '../../../../DataBase';

const NewsCms = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', checkScroll);
    checkScroll();

    return () => scrollContainer.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    const cardWidth = scrollContainer.querySelector('.news-card').offsetWidth;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="news-display">
      <div className="top-section">
        <div className="action-buttons">
          <Link to="/admin/cms/addnews" className="action-button-primary"><PlusCircle size={20} />Add News</Link>
          <button className="action-button">
            <ArrowUpCircle size={20} />
            Share
          </button>
          <button className="action-button">
            <ArrowDownCircle size={20} />
            Edit
          </button>
        </div>
        <div className="nav-buttons">
          <button 
            className={canScrollLeft ? 'active' : ''}
            onClick={() => canScrollLeft && scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className={canScrollRight ? 'active' : ''}
            onClick={() => canScrollRight && scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div 
        ref={scrollContainerRef}
        className="news-scroll-container"
      >
        {NewsData.slice().reverse().map((news) => (
          <div key={news.id} className="news-card">
            <div className="card-content">
              <h3 className="title">{news.title}</h3>
              <div className="date-time">
                <Clock size={16} />
                <span>{news.date} | {news.time}</span>
              </div>
              <p className="description">{news.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCms;
