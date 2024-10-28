'use client';

import { cn } from "../../../lib/utils";
import React, { useState } from "react";
import { useCategoryStore } from "../../../store/category";
import { Button } from "../ui/button";
import Modal from "@/app/modal";


interface Props {
  className?: string;
}

interface CategProps {
  id: number;
  title: string;
}

interface InformProps {
  id: number, title: string;
}

const categs: CategProps[] = [
  { id: 1, title: 'Premium' },
  { id: 2, title: 'Middle' },
  { id: 3, title: 'Budgetary' },
  { id: 4, title: 'Discounts' },
  { id: 5, title: 'Information' }
];

const inform: InformProps[] =[
  { id: 1, title: '💎Директор компанії: Конончук Максим (mxxknk@gmail.com)' },
  { id: 2, title: '👔Заступник директора: Кушнір Ілля (+380-63-549-7932)' },
  { id: 3, title: '🛠Головний конструктор: Антонюк Олександр (+380-95-401-7825)' },
  { id: 4, title: '🔧Інженер-конструктор: Моргунов Віталій (+380-97-171-3622)' },
]

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);
  const [isModalOpen, setModalOpen] = useState(false); // Додано стан для модального вікна

  const handleInfoClick = () => {
    setModalOpen(true); // Відкриваємо модальне вікно
  };

  return (
    <>
      <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
        {categs.map(({ title, id }, index) => (
          <div key={index}>
            {id === 5 ? ( // Якщо категорія "Information", рендеримо кнопку
              <button
                className={cn(
                  'flex items-center font-bold h-11 rounded-2xl px-5',
                  categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
                onClick={handleInfoClick} // Обробник кліку
              >
                {title}
              </button>
            ) : (
              <a
                href={`#${title.toLowerCase()}`}
                className={cn(
                  'flex items-center font-bold h-11 rounded-2xl px-5',
                  categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                )}
              >
                {title}
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Модальне вікно для категорії "Information" */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      <h2 style={{fontSize: '24px', fontWeight: 'bolder'}}>Контактна інформація</h2>
      <div className="inform-list">
        {inform.map((item) => (
          <p key={item.id} className="inform-item">{item.title}</p>
        ))}
      </div>
      </Modal>
    </>
  );
};
