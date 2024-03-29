import { Cart, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function updateCart(item: Cart) {
  try {
    const res = await prisma.cart.update({
      where: {
        id: item.id,
      },
      data: {
        quantity: item.quantity,
        amount: item.amount,
      },
    })
    // console.log(res)
    return res
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
  const session = await unstable_getServerSession(req, res, authOptions)
  const { item } = JSON.parse(req.body)

  //@ts-ignore
  if (session == null || session.id !== item.userId) {
    res
      .status(200)
      .json({ items: [], message: 'no Session on invalid session' })
    return
  }

  try {
    //@ts-ignore
    const wishlist = await updateCart(item)
    res.status(200).json({ items: wishlist, message: 'Success' })
  } catch (error) {
    res.status(200).json({ message: 'Failed' })
  }
}
