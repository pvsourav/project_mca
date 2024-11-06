import React from 'react';
import { Search, FileText, Users, Calendar, MapPin } from 'lucide-react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './contributions.scss';
import ContentCard from './ContentCard';

const contentData = [
    {
      eventId: "1",
      owner: { name: "Jon Doe", profilePhoto: "https://example.com/path/to/photo1.png" },
      title: "Workshop on IoT",
      description: "A comprehensive 2-day workshop on IoT, covering sensor integration and real-world applications.",
      type: "Workshop",
      registrations: [
        { name: "Alice Brown", email: "alice@example.com", phone: "123-456-7890" },
        { name: "Bob Smith", email: "bob@example.com", phone: "234-567-8901" },
        { name: "Charlie Johnson", email: "charlie@example.com", phone: "345-678-9012" },
        { name: "David Wilson", email: "david@example.com", phone: "456-789-0123" },
        { name: "Eva Adams", email: "eva@example.com", phone: "567-890-1234" }
      ]
    },
    {
      eventId: "2",
      owner: { name: "Jane Smith", profilePhoto: "https://example.com/path/to/photo2.png" },
      title: "AI and Machine Learning Seminar",
      description: "An interactive seminar exploring AI trends, machine learning algorithms, and industry use cases.",
      type: "Seminar",
      registrations: [
        { name: "Frank Martin", email: "frank@example.com", phone: "678-901-2345" },
        { name: "Grace Lee", email: "grace@example.com", phone: "789-012-3456" },
        { name: "Hannah Thomas", email: "hannah@example.com", phone: "890-123-4567" },
        { name: "Ian Wright", email: "ian@example.com", phone: "901-234-5678" },
        { name: "Judy Green", email: "judy@example.com", phone: "012-345-6789" }
      ]
    },
    {
      eventId: "3",
      owner: { name: "Mike Johnson", profilePhoto: "https://example.com/path/to/photo3.png" },
      title: "Web Development Bootcamp",
      description: "A hands-on bootcamp on modern web development, focusing on HTML, CSS, JavaScript, and React.",
      type: "Bootcamp",
      registrations: [
        { name: "Kevin White", email: "kevin@example.com", phone: "123-456-7891" },
        { name: "Laura King", email: "laura@example.com", phone: "234-567-8902" },
        { name: "Michael Garcia", email: "michael@example.com", phone: "345-678-9013" },
        { name: "Nina Allen", email: "nina@example.com", phone: "456-789-0124" },
        { name: "Olivia James", email: "olivia@example.com", phone: "567-890-1235" }
      ]
    },
    {
      eventId: "4",
      owner: { name: "Sarah Williams", profilePhoto: "https://example.com/path/to/photo4.png" },
      title: "Blockchain Basics",
      description: "Introduction to blockchain technology and its applications in finance, supply chain, and more.",
      type: "Workshop",
      registrations: [
        { name: "Patrick Wilson", email: "patrick@example.com", phone: "678-901-2346" },
        { name: "Quincy Roberts", email: "quincy@example.com", phone: "789-012-3457" },
        { name: "Rachel Lopez", email: "rachel@example.com", phone: "890-123-4568" },
        { name: "Sam Harris", email: "sam@example.com", phone: "901-234-5679" },
        { name: "Tina Young", email: "tina@example.com", phone: "012-345-6780" }
      ]
    },
    {
      eventId: "5",
      owner: { name: "Emily Davis", profilePhoto: "https://example.com/path/to/photo5.png" },
      title: "Cybersecurity Essentials",
      description: "A detailed workshop on cybersecurity best practices, focusing on data protection and network security.",
      type: "Workshop",
      registrations: [
        { name: "Uma Patel", email: "uma@example.com", phone: "123-456-7891" },
        { name: "Victor Gray", email: "victor@example.com", phone: "234-567-8902" },
        { name: "Wendy Hall", email: "wendy@example.com", phone: "345-678-9013" },
        { name: "Xander Ford", email: "xander@example.com", phone: "456-789-0124" },
        { name: "Yara Evans", email: "yara@example.com", phone: "567-890-1235" }
      ]
    },
    {
      eventId: "6",
      owner: { name: "James Brown", profilePhoto: "https://example.com/path/to/photo6.png" },
      title: "Data Science with Python",
      description: "A workshop covering data analysis, visualization, and machine learning using Python.",
      type: "Workshop",
      registrations: [
        { name: "Zach Green", email: "zach@example.com", phone: "678-901-2346" },
        { name: "Amy Collins", email: "amy@example.com", phone: "789-012-3457" },
        { name: "Ben Reed", email: "ben@example.com", phone: "890-123-4568" },
        { name: "Cathy Nguyen", email: "cathy@example.com", phone: "901-234-5679" },
        { name: "Dan Stewart", email: "dan@example.com", phone: "012-345-6780" }
      ]
    },
    {
      eventId: "7",
      owner: { name: "Olivia Miller", profilePhoto: "https://example.com/path/to/photo7.png" },
      title: "Cloud Computing Fundamentals",
      description: "Understanding cloud services and infrastructure, with hands-on examples in AWS and Azure.",
      type: "Seminar",
      registrations: [
        { name: "Eliza Cooper", email: "eliza@example.com", phone: "123-456-7891" },
        { name: "Felix Morgan", email: "felix@example.com", phone: "234-567-8902" },
        { name: "Gina Bennett", email: "gina@example.com", phone: "345-678-9013" },
        { name: "Henry Bell", email: "henry@example.com", phone: "456-789-0124" },
        { name: "Ivy Foster", email: "ivy@example.com", phone: "567-890-1235" }
      ]
    },
    {
      eventId: "8",
      owner: { name: "Daniel Wilson", profilePhoto: "https://example.com/path/to/photo8.png" },
      title: "Digital Marketing 101",
      description: "A seminar on digital marketing strategies, including SEO, PPC, and social media marketing.",
      type: "Seminar",
      registrations: [
        { name: "Jackie Long", email: "jackie@example.com", phone: "678-901-2346" },
        { name: "Karl Warner", email: "karl@example.com", phone: "789-012-3457" },
        { name: "Lily Owens", email: "lily@example.com", phone: "890-123-4568" },
        { name: "Mona Fox", email: "mona@example.com", phone: "901-234-5679" },
        { name: "Ned Stone", email: "ned@example.com", phone: "012-345-6780" }
      ]
    },
    {
      eventId: "9",
      owner: { name: "Sophia Garcia", profilePhoto: "https://example.com/path/to/photo9.png" },
      title: "Introduction to Big Data",
      description: "Learn the fundamentals of big data, including data storage, processing, and analysis techniques.",
      type: "Workshop",
      registrations: [
        { name: "Olga Ramirez", email: "olga@example.com", phone: "123-456-7891" },
        { name: "Paul Baker", email: "paul@example.com", phone: "234-567-8902" },
        { name: "Quinn Price", email: "quinn@example.com", phone: "345-678-9013" },
        { name: "Rita Simon", email: "rita@example.com", phone: "456-789-0124" },
        { name: "Steve Wells", email: "steve@example.com", phone: "567-890-1235" }
      ]
    },
    {
      eventId: "10",
      owner: { name: "Liam Martinez", profilePhoto: "https://example.com/path/to/photo10.png" },
      title: "Mobile App Development",
      description: "A workshop on mobile app development for Android and iOS using React Native.",
      type: "Workshop",
      registrations: [
        { name: "Tim Ross", email: "tim@example.com", phone: "678-901-2346" },
        { name: "Uma Harris", email: "uma@example.com", phone: "789-012-3457" },
        { name: "Vera Dean", email: "vera@example.com", phone: "890-123-4568" },
        { name: "Will Gray", email: "will@example.com", phone: "901-234-5679" },
        { name: "Xena Cruz", email: "xena@example.com", phone: "012-345-6780" }
      ]
    }
  ];
  

const Contributions = () => {
  return (
    <div className="profiles-container">
      <div className="search-filter-bar">
        <div className="search-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search People"
            className="search-input"
          />
        </div>
        <div className="filters-wrapper">
          <div className="filter-dropdown">
            <FileText size={16} className='icon' />
            <span>Type</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">All Types</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Users size={16} className='icon' />
            <span>People</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">All People</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <Calendar size={16} className='icon' />
            <span>Modified</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">Any time</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <MapPin size={16} className='icon' />
            <span>Location</span>
            <ArrowDropDownIcon size={16} className="chevron-down" />
            <select>
              <option value="">Anywhere</option>
            </select>
          </div>
        </div>
      </div>
      <div className="profiles-wrapper">
        {contentData.map((content) => (
          <ContentCard
            key={content.eventId}
            content={content}
          />
        ))}
      </div>
    </div>
  );
};

export default Contributions;
