import { CATEGORY_MAP } from '@/constants/products'
import { products } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export default function Wishlist() {
  const router = useRouter()

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [`/api/get-wishlists`],
    () => fetch(`/api/get-wishlists`).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  return (
    <div>
      <p className="text-2xl mb-4">내가 찜한 상품</p>
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div
              key={item.id}
              style={{ maxWidth: 300 }}
              onClick={() => router.push(`/products/${item.id}`)}
            >
              <Image
                className="rounded"
                src={item.image_url ?? ''}
                alt={item.name}
                width={300}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO0rAcAAPcAulGYQS0AAAAASUVORK5CYII="
                style={{ objectFit: 'cover' }}
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString('ko-KR')}원
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
