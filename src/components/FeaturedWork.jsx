import React from 'react';
import Wedding1Jpg from '../assets/wedding-1.jpg';
import Corp2Jpg from '../assets/corp-2.jpg';
import RusticBirthdayJpg from '../assets/rustic-birthday.jpg';

const featuredWork = [
  { id: 1, image: Wedding1Jpg, title: 'Elegant Wedding Decor' },
  { id: 2, image: RusticBirthdayJpg, title: 'Rustic Birthday Party' },
  { id: 3, image: Corp2Jpg, title: 'Corporate Event Setup' },
];

const FeaturedWork = () => {
  return (
    <div className="featured-work" id="work">
      <h2>Our Work</h2>
      <div className="work-gallery">
        {featuredWork.map((item) => (
          <div key={item.id} className="work-card">
            <img src={item.image} alt={item.title} className="work-image" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedWork;