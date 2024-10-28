'use client';

import { Button } from '@/components/ui/lib';
import React, { ReactNode } from 'react';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode; // Додано тип для children
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Information</h2>
                <div className="mb-4">{children}</div>
                <Button onClick={onClose} className="w-full">Close</Button>
            </div>
        </div>
    );
};

export default Modal;
