import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import EventIcon from '@mui/icons-material/Event';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';


import '../style/Card.css'

interface CardItems {
    name: string;
    icon: string;
}

const Card: React.FC = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const items: CardItems[] = [
        { name: "name", icon: "check" },
        { name: "40k", icon: "money" },
        { name: "Noah H", icon: "return" },
        { name: `${day} ${month} ${year}`, icon: "calendar" },
        { name: "Twenty", icon: "building" },
        { name: "John Doe", icon: "user" },
      ];

    const icons = (name: string, icon: string) => {
        if (icon === 'check') {
            if (!name) return "";
            const firstLetter = name.charAt(0).toUpperCase();

            return (
                <div className="flex">
                    <div className="flex items-center justify-center w-6 h-6 bg-green-400 text-white font-bold rounded-full">
                        {firstLetter}
                    </div>
                    <span className="card-name font-bold">{name}</span>
                </div>
            )
        } else if (icon === 'money') {
            return (
                <div>
                    <AttachMoneyIcon />
                    <span className="card-name">{name}</span>
                </div>
            )
        } else if (icon === 'return') {
            const firstLetter = name.charAt(0).toUpperCase();
            return (
                    <div className="flex">
                        <KeyboardReturnIcon /> &nbsp;&nbsp;&nbsp;<div className="flex items-center justify-center w-6 h-6 bg-green-400 text-white font-bold rounded-full">{firstLetter}</div> 
                        <span className="card-name">{name}</span>
                    </div>
            )
        } else if (icon === 'calendar') {
            return (
                <div>
                    <EventIcon />
                    <span className="card-name">{name}</span>
                </div>
            )
        } else if (icon === 'building') {
            return (
                <div>
                    <BusinessIcon />
                    <span className="card-name bg-gray-200 px-2 rounded-sm">{name}</span>
                </div>
            )
        } else if (icon === 'user') {
            return (
                <div>
                    <PersonIcon />
                    <span className="card-name bg-gray-200 px-2 py-1 rounded-sm">{name}</span>
                </div>
            )
        }
    }

    return (
        <div className="card-container">
        {items.map((item, index) => (
          <div key={index} className="card-item">
            {icons(item.name, item.icon)}
          </div>
        ))}
      </div>
    )
}

export default Card;
