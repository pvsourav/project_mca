import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpCircle, PlusCircle, ArrowDownCircle, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';
import './placementcms.scss';

const PlacementCms = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const placementNews = [
    {
      name: 'Sarah Johnson',
      company: 'Google',
      package: '24 LPA',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Chen',
      company: 'Microsoft',
      package: '22 LPA',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Amazon',
      package: '20 LPA',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop'
    },
    {
      name: 'David Kim',
      company: 'Apple',
      package: '26 LPA',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Priya Patel',
      company: 'Meta',
      package: '25 LPA',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop'
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
    const cardWidth = scrollContainer.querySelector('.placement-card').offsetWidth;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="placement-display">
      <div className="top-section">
        <div className="action-buttons">
          <button className="primary">
            <ArrowUpCircle size={20} />
            Share
          </button>
          <button className="secondary">
            <PlusCircle size={20} />
            Add Placement
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
        className="placement-scroll-container"
      >
        {placementNews.map((placement, index) => (
          <div key={index} className="placement-card">
            <div className="card-content">
              <div className="image-container">
                <img 
                  src={placement.photo} 
                  alt={placement.name} 
                  className="profile-photo"
                />
                <div className="overlay"></div>
              </div>
              <div className="info-container">
                <h3 className="name">{placement.name}</h3>
                <div className="company-info">
                  <Building2 size={16} />
                  <span>{placement.company}</span>
                </div>
                <div className="package-badge">
                  {placement.package}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacementCms;