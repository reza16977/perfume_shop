import React from "react";
import './contact.css'

export const Contact = () => {
  return (
    <div className="contact-page">
      
      <div className="contact-info">
        <div className="contact-text">
          <h2 className="head">We'd love to hear from you!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, turpis vel auctor dignissim, arcu ante rhoncus massa, ac
            posuere diam tortor non nulla. Vestibulum auctor justo elit, sed
            fermentum urna efficitur et. Aenean efficitur ligula ac est mollis,
            eu feugiat leo ultricies. Suspendisse ac consectetur velit.
          </p>
          <p>
            Vestibulum euismod, mi et aliquet tincidunt, diam lorem maximus
            justo, eget varius ex dui id tortor. Sed tempor nunc eu mauris
            sagittis, sed vulputate nisl consectetur.
          </p>
          <p>
            Sed semper nisl in lectus rhoncus, non aliquet urna gravida.
            Curabitur rutrum aliquam arcu, at fermentum nibh bibendum quis. Sed
            dignissim eros id dolor pulvinar, in hendrerit sapien malesuada.
          </p>
        </div>
        <div className="contact-details">
          <h3>Contact Information</h3>
          <ul>
            <li>
              <i className="fa fa-phone"></i>Phone: 02-2323-5634
            </li>
            <li>
              <i className="fa fa-envelope"></i>Email: abs@gmail.com
            </li>
            <li>
              <i className="fa fa-map-marker"></i>Address: 123 Shopping Street,
              Chuncheon, Korea
            </li>
            <li>
              <i className="fa fa-fax"></i>Fax: 123456789
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
