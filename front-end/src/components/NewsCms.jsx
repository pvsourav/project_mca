import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpCircle, PlusCircle, ArrowDownCircle, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import './newscms.scss';

const NewsCms = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newsItems = [
    {
      title: 'Breaking: Major Tech Breakthrough',
      date: '2024-10-09',
      time: '14:30',
      description: 'Scientists announce a revolutionary advancement in quantum computing, potentially changing the landscape of technology as we know it.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop'
    },
    {
      title: 'Global Climate Summit Concludes',
      date: '2024-10-08',
      time: '18:45',
      description: 'World leaders reach a landmark agreement on reducing carbon emissions, setting ambitious targets for the next decade.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=200&fit=crop'
    },
    {
      title: 'New AI Model Surpasses Human Experts',
      date: '2024-10-07',
      time: '09:15',
      description: 'An advanced AI system demonstrates unprecedented problem-solving abilities, outperforming human experts in various fields.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop'
    },
    {
      title: 'Space Tourism Takes Off',
      date: '2024-10-06',
      time: '11:00',
      description: 'The first commercial space flight with tourists onboard successfully launches, marking a new era in space exploration.',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=200&fit=crop'
    },
    {
      title: 'Global Economic Outlook Improves',
      date: '2024-10-05',
      time: '16:20',
      description: 'International financial institutions report positive trends in global economic growth, signaling recovery from recent challenges.',
      image: 'https://images.unsplash.com/photo-1468254095679-bbcba94a7066?w=300&h=200&fit=crop'
    }
  ];

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
          <button className="primary">
            <ArrowUpCircle size={20} />
            Share
          </button>
          <button className="secondary">
            <PlusCircle size={20} />
            Add News
          </button>
          <button className="secondary">
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
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
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