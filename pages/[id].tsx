import React from 'react'
import { useRouter } from 'next/router'

export default function post(props: any) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(router , 'routes')
  return (
    <div>post {router.query.id}</div>
  )
}
