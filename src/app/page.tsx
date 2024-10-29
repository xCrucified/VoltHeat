"use client";

import { Container, Filters, Title, TopBar } from "../components/shared/lib";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import './globals.css';
import { useState } from 'react';

export default function Home() {
  const [discountNames] = useState([
    'Unimax 12/380',
    'Hot-Well Elektra LUX 6',
    'Маяк КОЭ-12/380'
  ]);

  return (
    <>
      <Container className="mt-5">
        <Title text="Electro boilers" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-4">
        <div className="flex gap-[60px]">
          {/* Filtration */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"premium"} items={[{
                id: 1,
                name: 'Титан 540 кВт 380В',
                imageUrl: 'https://kotly-ttsk.com.ua/image/cache/catalog/tables/elektrokotli/titan/napolniy/icotitannapol4-500x500.png',
                price: 7302.55,
                items: [{ price: 7302.55 }],
              },
              {
                id: 2,
                name: 'Галан Вулкан 100 кВт',
                imageUrl: 'https://st50.stblizko.ru/images/product/001/047/708/764_medium.png',
                price: 961.91,
                items: [{ price: 961.91 }],
              },
              {
                id: 3,
                name: 'TENKO 6-28 кВт',
                imageUrl: 'https://kvantum.com.ua/upload/resize_cache/iblock/247/5fuj5nnz9iug8m7zwu6ddnzpktqryz01/450_450_140cd750bba9870f18aada2478b24840a/kotel-tenko-premium.jpg',
                price: 357.69,
                items: [{ price: 357.69 }],
              },
              ]} categoryId={1} />
              
              <ProductsGroupList title={"middle"} categoryId={2} items={[{
                id: 4,
                name: 'Bosch Tronic Heat 4-24 кВт',
                imageUrl: 'https://www.dus-service.com.ua/image/cache/454-300/data/i/cg/pg/6d1844865cd53cd85502b3ccf1175f2b.jpg',
                price: 603.72,
                items: [{ price: 603.72 }],
              },
              {
                id: 5,
                name: 'Ferroli LEB 12 6-28 кВт',
                imageUrl: 'https://hmao.energomir.su/_next/image?url=https%3A%2F%2Fenergomir.su%2Fstorage%2Fapp%2Fuploads%2Fpublic%2F5d5%2F6f3%2F2a3%2F5d56f32a3c0a0007854083.jpg&w=1920&q=75',
                price: 454.43,
                items: [{ price: 454.43 }],
              },
              {
                id: 6,
                name: 'MORA-TOP ELECTRA 8 Light',
                imageUrl: 'https://teploformat.ua/upload/catalog/6700/6651/elektrichnij_kotel_mora_top_electra_8_light.webp',
                price: 497.01,
                items: [{ price: 497.01 }],
              }]} />
              
              <ProductsGroupList title={"budgetary"} categoryId={3} items={[{
                id: 7,
                name: 'Unimax 12/380',
                imageUrl: 'https://aquaterms.com/uploads/shop/products/main/unimax-mini.jpg',
                price: 215.01,
                items: [{ price: 215.01 }],
              },
              {
                id: 8,
                name: 'Hot-Well Elektra LUX 6',
                imageUrl: 'https://kotlotorg.com.ua/image/cache/catalog/Hot-Well/17-500x500.jpg',
                price: 193.32,
                items: [{ price: 193.32 }],
              },
              {
                id: 9,
                name: 'Маяк КОЭ-12/380',
                imageUrl: 'https://majak.org.ua/wp-content/uploads/2020/01/prod-b-190.jpg',
                price: 81.48,
                items: [{ price: 81.48 }],
              }]} />
              
              <ProductsGroupList title={"discounts"} categoryId={4} items={[
                {
                  id: 10,
                  name: discountNames[0],
                  imageUrl: 'https://aquaterms.com/uploads/shop/products/main/unimax-mini.jpg',
                  price: 215.01,
                  discountedPrice: 165.01,
                  items: [{ price: 215.01 }],
                },
                {
                  id: 11,
                  name: discountNames[1],
                  imageUrl: 'https://kotlotorg.com.ua/image/cache/catalog/Hot-Well/17-500x500.jpg',
                  price: 193.32,
                  discountedPrice: 143.32,
                  items: [{ price: 193.32 }],
                },
                {
                  id: 12,
                  name: discountNames[2],
                  imageUrl: 'https://majak.org.ua/wp-content/uploads/2020/01/prod-b-190.jpg',
                  price: 81.48,
                  discountedPrice: 21.48,
                  items: [{ price: 81.48 }],
                },
              ]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
