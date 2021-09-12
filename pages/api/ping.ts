import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const response = await fetch(`${process.env.WEDDING_INVITATIONS_SERVICE_URL}/actuator/health`)

  if (!response.ok) {
    res.status(404).end()
    return
  }

  res.status(200).json({ status: 'ok' })
}

export default handler
