'use client';

import React from "react";
import { useIntersection } from 'react-use';
import { Title } from "./lib";
import { cn } from "../../../lib/utils";
import { ProductCard } from "./product-card";
import { useCategoryStore } from "../../../store/category";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    listClassName,
    categoryId,
    className,
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

    return (
        <div ref={intersectionRef} className={className} id={title}>
            <h2 className="text-xl font-bold">{title}</h2>
            <div className={cn('grid grid-cols-3 gap-4', listClassName)}>
                {items.map((item) => (
                    <div key={item.id} className="border p-4 rounded-lg">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-auto rounded-lg" />
                        <h3 className="mt-2 font-semibold">{item.name}</h3>
                        {item.discountedPrice ? (
                            <div className="flex items-center">
                                <span className="line-through text-red-500 mr-2">{item.price.toFixed(2)} $</span>
                                <span className="text-green-600 font-bold">{item.discountedPrice.toFixed(2)} $</span>
                            </div>
                        ) : (
                            <span className="text-black font-bold">{item.price.toFixed(2)} $</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
