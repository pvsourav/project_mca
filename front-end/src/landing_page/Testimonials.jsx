import React from 'react'
import './testimonials.scss'

const Testimonial = ({ quote, author, role }) => (
  <div className="testimonial">
    <div className="testimonial__author">
      <div className="testimonial__avatar">
        {author.split(' ').map(name => name[0]).join('')}
      </div>
      <div className="testimonial__info">
        <div className="testimonial__name">{author}</div>
        <div className="testimonial__role">{role}</div>
      </div>
    </div>
    <blockquote className="testimonial__quote">
      <span className="testimonial__quote-text">{quote}</span>
    </blockquote>
  </div>
)

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The program provided me with the skills and knowledge to excel in my career in tech. The faculty's support was invaluable.",
      author: "Jane Doe",
      role: "Software Engineer, Tech Giant Inc."
    },
    {
      quote: "I found the practical approach to learning particularly beneficial. It prepared me well for real-world challenges in the industry.",
      author: "John Smith",
      role: "Data Scientist, AI Innovations Ltd."
    },
    {
      quote: "The networking opportunities and industry connections I made through this program were instrumental in landing my dream job.",
      author: "Emily Johnson",
      role: "Cybersecurity Analyst, SecureNet Corp."
    }
  ]

  return (
    <section className="testimonials">
      <h2 className="testimonials__title">What Our Alumni Say</h2>
      <div className="testimonials__grid">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  )
}

export default Testimonials