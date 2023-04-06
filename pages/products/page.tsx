import { useEffect, useState, useCallback } from 'react'
import { categories, products } from '@prisma/client'
import Image from 'next/image'
import { Pagination, Input } from '@mantine/core'
import { TAKE, CATEGORY_MAP, FILTERS } from '@/constants/products'
import { SegmentedControl, Select } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import useDebounce from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'

export default function Products() {
  // const [products, setProducts] = useState<products[]>([])
  const [total, setTotal] = useState(0)
  const [activePage, setPage] = useState(1)
  const [categories, setCategories] = useState<categories[]>([])
  const [selectedCategory, setCategory] = useState<string>('-1')
  const [selectedFilter, setSelectedFilter] = useState<string | null>(
    FILTERS[0].value
  )
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword = useDebounce<string>(keyword)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value)

  // Category
  useEffect(() => {
    fetch(`/api/get-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.items))
  }, [])

  // Counts
  useEffect(() => {
    fetch(
      `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`
    )
      .then((res) => res.json())
      .then((data) => setTotal(Math.ceil(data.items / TAKE)))
  }, [selectedCategory, debouncedKeyword])

  // Filtering
  // useEffect(() => {
  //   const skip = TAKE * (activePage - 1)
  //   fetch(
  //     `/api/get-products?skip=${skip}&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.items))
  // }, [activePage, selectedCategory, selectedFilter, debouncedKeyword])
  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [
      `/api/get-products?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`,
    ],
    () =>
      fetch(
        `/api/get-products?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  return (
    <div className="px-36 mt-36 mb-36">
      <div className="mb-4">
        <Input
          icon={<IconSearch />}
          placeholder="Search"
          value={keyword}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-4">
        <Select
          value={selectedFilter}
          onChange={setSelectedFilter}
          data={FILTERS}
        />
      </div>
      {categories && (
        <div className="mb-4">
          <SegmentedControl
            value={selectedCategory}
            onChange={setCategory}
            data={[
              { label: 'ALL', value: '-1' },
              ...categories.map((category) => ({
                label: category.name,
                value: String(category.id),
              })),
            ]}
            color="dark"
          />
        </div>
      )}
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id} style={{ maxWidth: 300 }}>
              <Image
                className="rounded"
                src={item.image_url ?? ''}
                alt={item.name}
                width={300}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
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
      <div className="w-full flex mt-5">
        <Pagination
          value={activePage}
          onChange={setPage}
          total={total}
          className="m-auto"
        />
      </div>
    </div>
  )
}
