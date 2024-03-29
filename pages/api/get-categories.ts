import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getCategories() {
  try {
    const response = await prisma.categories.findMany({})
    // console.log(response)
    return response
  } catch (err) {
    console.error(err)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const products = await getCategories()
    res.status(200).json({ items: products, message: `Success` })
  } catch (err) {
    res.status(400).json({ message: `Failed` })
  }
}
