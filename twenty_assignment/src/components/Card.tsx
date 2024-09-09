import React from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';


import '../style/Card.css'

interface Item {
    name: string;
    icon: string;
}

const Card: React.FC = () => {

    const items: Item[] = [
        { name: "name", icon: "check" },
        { name: "money", icon: "money" },
        { name: "name2", icon: "return" },
        { name: "date", icon: "calendar" },
        { name: "company", icon: "building" },
        { name: "user", icon: "user" },
      ];

    const icons = (name: string, icon: string) => {
        if (icon === 'check') {
            if (!name) return "";
            const firstLetter = name.charAt(0).toUpperCase();


            return (
                <div className="font-bold">
                    {firstLetter}
                </div>
            )
        } else if (icon === 'money') {
            return (
                <div>
                    <AttachMoneyIcon />
                </div>
            )
        } else if (icon === 'return') {
            return (
                <div>
                    <KeyboardReturnIcon />
                </div>
            )
        } else if (icon === 'calendar') {
            return (
                <div>
                    <EventIcon />
                </div>
            )
        } else if (icon === 'building') {
            return (
                <div>
                    <BusinessIcon />
                </div>
            )
        } else if (icon === 'user') {
                return (
                    <div>
                        <PersonIcon />
                    </div>
                )
        }
    }

    return (
        <div className="card-container">
        {/* Title of the Card */}
        {/* <h2 className="card-title">Card Title</h2> */}
  
        {/* Iterate through each item and render a row */}
        {items.map((item, index) => (
          <div key={index} className="card-item">
            {/* Icon - You can customize this SVG or replace it with any icon set */}
            {icons(item.name, item.icon)}
            {/* <svg
              className="card-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg> */}
  
            {/* Name */}
            <span className="card-name">{item.name}</span>
          </div>
        ))}
      </div>
    )
}

export default Card;
