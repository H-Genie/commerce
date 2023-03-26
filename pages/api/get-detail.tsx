import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_ncV5kPRNWZnfrH4osQJvuDEAnDhZy2mKppO8DqN0iVc',
})

const databaseId = 'a45a9d236b7a4d40a3975e43001a5698'

async function getDetail(pageId: string, propertyId: string) {
  try {
    const response = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
    })
    // console.log(response)
    return response
  } catch (err) {
    console.error(JSON.stringify(err))
  }
}

type Data = {
  detail?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { pageId, propertyId } = req.query
    const response = await getDetail(String(pageId), String(propertyId))
    res.status(200).json({ detail: response, message: `Success` })
  } catch (err) {
    res.status(400).json({ message: `Failed` })
  }
}
