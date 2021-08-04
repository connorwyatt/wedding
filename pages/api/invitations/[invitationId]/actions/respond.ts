import { NextApiRequest, NextApiResponse } from 'next'
import poll from 'poll'
import { Invitation } from 'models/Invitation'

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

  let invitationResponseReceived = false
  let stopPolling = false

  poll(
    async () => {
      const response = await fetch(`${process.env.WEDDING_INVITATIONS_SERVICE_URL}/invitations/${invitationId}`)

      if (!response.ok) {
        return
      }

      const invitation = (await response.json()) as Invitation

      invitationResponseReceived = invitation.status === 'responseReceived'

      if (invitationResponseReceived) {
        res.status(200).end()
      }
    },
    0.5 * 1000,
    () => invitationResponseReceived || stopPolling,
  )

  const timeoutHandle = setTimeout(() => {
    stopPolling = true
    clearTimeout(timeoutHandle)
    res.status(400).end()
  }, 10 * 1000)
}

export default handler
