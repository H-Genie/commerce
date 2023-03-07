import { useRef, useEffect, useState } from 'react'
import { NextPage } from 'next'
import { css } from '@emotion/react'
import Button from '@/components/Button'

const Home: NextPage = () => {
  // const [products, setProduct] = useState<
  //   { id: string; properties: { id: string }[] }[]
  // >([])
  const [products, setProduct] = useState<
    { id: string; name: string; createdAt: string }[]
  >([])
  const inputRef: any = useRef<HTMLInputElement>(null)

  // useEffect(() => {
  //   fetch('/api/get-items')
  //     .then((res) => res.json())
  //     .then((data) => setProduct(data.items))
  // }, [])
  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => setProduct(data.items))
  }, [])

  const handleClick = () => {
    if (inputRef.current === null || inputRef.current === '') {
      alert('이름을 넣어주세요')
      return
    }
    fetch(`/api/add-item?name=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => alert(data.message))
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="name"
        className="placeholder:italic placeholder:text-pink-400 block bg-white w-96 border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      />
      <button
        css={css`
          background-color: hotpink;
          padding: 16px;
          border-radius: 8px;
        `}
        onClick={handleClick}
      >
        Add Jacket
      </button>
      <Button onClick={handleClick}>Add Jacket</Button>

      <div>
        <p>Product List</p>
        {products &&
          products.map((item) => (
            <div key={item.id}>
              {item.name} <span>{item.createdAt}</span>
            </div>
          ))}
        {/* {products &&
          products.map((item) => (
            <div key={item.id}>
              {JSON.stringify(item)}
              <br />
              <br />
              {item.properties &&
                Object.entries(item.properties).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      fetch(
                        `/api/get-detail?pageId=${item.id}&propertyId=${value.id}`
                      )
                        .then((res) => res.json())
                        .then((data) => alert(JSON.stringify(data.detail)))
                    }}
                  >
                    {key}
                  </button>
                ))}
            </div>
          ))} */}
      </div>
    </>
  )
}

export default Home
