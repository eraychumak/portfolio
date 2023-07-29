'use client'

import Image from 'next/image'

export default function DecoratedPFP() {

  return (
    <div>
      <div/>
      <Image src="/pfp.jpg" width={64} height={64} alt="pfp"/>
      <div>
        <p>Eray Chumak</p>
      </div>
    </div>
  )
}