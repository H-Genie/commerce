import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const getRandom = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const sneakers = [
  {
    name: 'Sneakers 1',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/B79D5B33-76DE-48A4-9B81-B74DDD23DF31_large.jpg?v=1680659698',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 2',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-24-114401_large.jpg?v=1679611580',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 3',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-23-124819_large.jpg?v=1679529040',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 4',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-18-132629_large.jpg?v=1679099422',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 5',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/3C4946A4-B536-424F-8D7E-9DF4D772A53D_large.jpg?v=1678841891',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 6',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/89CD2B8B-A3E9-45CF-8B3A-FBEC72476FA4_4_5005_c_large.jpg?v=1678838601',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 7',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-01-153353--2_large.jpg?v=1677638231',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 8',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-01-151142_large.jpg?v=1677637306',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 9',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-01-145238_large.jpg?v=1677636475',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Sneakers 10',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 1,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-01-141200_large.jpg?v=1677633882',
    price: getRandom(300000, 100000),
  },
]

const tShirt = [
  {
    name: 'T-Shirt 1',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-05-113729_large.jpg?v=1680651577',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 2',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-05-111409_large.jpg?v=1680650465',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 3',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-03-133843_large.jpg?v=1680486122',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 4',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-21-150449_large.jpg?v=1679372349',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 5',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-20-145838_large.jpg?v=1679277784',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 6',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-20-142423_large.jpg?v=1679275743',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 7',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-20-140236_large.jpg?v=1679274352',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 8',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-20-123233_large.png?v=1679268835',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 9',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-20-105800_large.png?v=1679268429',
    price: getRandom(300000, 100000),
  },
  {
    name: 'T-Shirt 10',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 2,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-16-113046_large.jpg?v=1679078528',
    price: getRandom(300000, 100000),
  },
]

const pants = [
  {
    name: 'Pants 1',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-04-160425_large.jpg?v=1680582579',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 2',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-15-165849_large.jpg?v=1679077125',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 3',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-15-164246_large.jpg?v=1679077070',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 4',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/ED664209-B573-4BE0-BDA3-E5F750EF5BF9_large.jpg?v=1679713725',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 5',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-07-105719_large.jpg?v=1678140025',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 6',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/6F0D944F-6A4F-4906-BD57-3D0C1E40FF26_large.jpg?v=1677224880',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 7',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/B5916FC7-C153-4864-A283-695CF6A2ABDB_large.jpg?v=1677224489',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 8',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-02-10-130439_large.jpg?v=1675987534',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 9',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2022-12-16-180833_large.jpg?v=1671181678',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Pants 10',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 3,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2022-12-15-204143_large.jpg?v=1671090304',
    price: getRandom(300000, 100000),
  },
]

const cap = [
  {
    name: 'Cap 1',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-05-135341_large.jpg?v=1680659765',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 2',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-04-151104_large.jpg?v=1680578399',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 3',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-04-143326_large.jpg?v=1680577330',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 4',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-04-131839_large.jpg?v=1680571738',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 5',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-04-03-140301_large.jpg?v=1680487539',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 6',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/4AC0B5D3-6992-40AA-9B44-CAC199C10BF3_large.jpg?v=1679699084',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 7',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-22-150014_large.jpg?v=1679450938',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 8',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-22-142635_large.jpg?v=1679448533',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 9',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-22-140547_large.jpg?v=1679447459',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Cap 10',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 4,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-22-133437_large.jpg?v=1679445674',
    price: getRandom(300000, 100000),
  },
]

const hoodie = [
  {
    name: 'Hoodie 1',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-10-151245_large.jpg?v=1678414517',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 2',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2022-12-16-184347_large.jpg?v=1671211936',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 3',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-02-13-121025_large.jpg?v=1676243676',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 4',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/A86C907D-FC07-47DF-B86D-F4ECF71B9098_large.jpg?v=1673660675',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 5',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2022-11-12-121725_large.jpg?v=1668208932',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 6',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2022-09-08-145045_large.png?v=1662673242',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 7',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-03-01-111503_large.jpg?v=1677622732',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 8',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot2022-07-14162927_large.jpg?v=1657846666',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 9',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/Screenshot-2023-02-09-113725_large.jpg?v=1675899066',
    price: getRandom(300000, 100000),
  },
  {
    name: 'Hoodie 10',
    contents:
      '{"blocks":[{"key":"5kq8r","text":"이것은 오가닉 소재입니다","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    category_id: 5,
    image_url:
      'https://cdn.shopify.com/s/files/1/0192/8264/products/dickkkkhr_large.png?v=1634785984',
    price: getRandom(300000, 100000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  await prisma.products.deleteMany({})

  for (const p of productData) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id : ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err)
    await prisma.$disconnect()
    // process.exit(1)
  })
