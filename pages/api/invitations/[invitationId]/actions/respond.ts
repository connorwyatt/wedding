import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const invitationId = req.query.invitationId

  if (typeof invitationId !== 'string') {
    res.status(400).end()
    return
  }

  const url = `${process.env.WEDDING_INVITATIONS_SERVICE_URL}/invitations/${invitationId}/actions/respond`
  const body = JSON.stringify(req.body)

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })

  if (!response.ok) {
    res.status(400).end()
    return
  }

  res.status(200).json({ status: 'ok' })
}

export default handler
