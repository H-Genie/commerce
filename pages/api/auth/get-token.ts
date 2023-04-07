import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import jwtDecode from 'jwt-decode'

const prisma = new PrismaClient()

async function getToken(credential: string) {
  const decoded = jwtDecode(credential)

  try {
    // const response = await prisma.products.count({ where })

    console.log(decoded)
    return decoded
  } catch (err) {
    console.error(err)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { credential } = req.query

  try {
    const products = await getToken(String(credential))
    res.status(200).json({ items: products, message: `Success` })
  } catch (err) {
    res.status(400).json({ message: `Failed` })
  }
}
