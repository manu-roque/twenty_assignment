import React from 'react';
import Card from '../components/Card'

interface Column {
    title: string;
    cardCount: number; // Number of cards to display in this column
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
        <div className="flex space-x-4 p-4">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="w-1/5 flex flex-col">
            <div className="flex mb-4 text-left font-semibold text-lg ">
              <div className="flex items-center justify-center w-auto h-6 bg-green-400 text-white font-bold rounded-md px-2">{column.title}</div>&nbsp;{column.cardCount}
            </div>
  
            {colIndex > 0 && <div className="border-l"></div>}
  
            <div className="flex-grow space-y-4">
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
