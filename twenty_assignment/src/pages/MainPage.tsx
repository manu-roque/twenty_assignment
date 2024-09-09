import React from 'react';
import Card from '../components/Card'
import '../style/MainPage.css';

interface Column {
    title: string;
    cardCount: number;
  }

const MainPage: React.FC = () => {
    const getRandomCardCount = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const columns: Column[] = [
        { title: "New", cardCount: getRandomCardCount(1, 5) },
        { title: "Screening", cardCount: getRandomCardCount(1, 5) },
        { title: "Meeting", cardCount: getRandomCardCount(1, 5) },
        { title: "Proposal", cardCount: getRandomCardCount(1, 5) },
        { title: "Customer", cardCount: getRandomCardCount(1, 5) },
    ];

    return (
        <div className="main-container">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="column-container">
            <div className="column-title">
              <div className="title-text">{column.title}</div>&nbsp;{column.cardCount}
            </div>
  
            {colIndex > 0 && <div className="border-l"></div>}
  
            <div className="cards">
              {Array.from({ length: column.cardCount }).map((_, cardIndex) => (
                <Card
                  key={cardIndex}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
}

export default MainPage;
