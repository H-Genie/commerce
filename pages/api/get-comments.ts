import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function getComments(productId: number) {
  try {
    const orderItems = await prisma.orderItem.findMany({
      where: {
        productId,
      },
    })

    let response = []

    for (const orderItem of orderItems) {
      const res = await prisma.comment.findUnique({
        where: {
          orderItemId: orderItem.id,
        },
      })

      if (res) {
        response.push({ ...orderItem, ...res })
      }
    }
    return response
  } catch (error) {
    console.error(error)
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
  const { productId } = req.query

  if (productId == null) {
    res.status(200).json({ items: [], message: 'no productId' })
    return
  }

  try {
    const comments = await getComments(Number(productId))

    res.status(200).json({ items: comments, message: 'Success' })
  } catch (error) {
    res.status(200).json({ message: 'Failed' })
  }
}
