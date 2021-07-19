import { FC } from 'react'

export const Map: FC = () => (
  <iframe
    width='100%'
    height='450'
    style={{ border: 'none' }}
    loading='lazy'
    allowFullScreen
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Wootton+Park,Wootton+Wawen,Henley-in-Arden,B956HJ`}
  />
)
