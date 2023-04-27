import styled from '@emotion/styled'
import Image from 'next/image'

export default function AutoSizeImage({
  src,
  size = 500,
}: {
  src: string
  size?: number
}) {
  return (
    <AutoSizeImageWrapper size={size}>
      <Image src={src} layout="fill" objectFit="contain" alt="" />
    </AutoSizeImageWrapper>
  )
}

const AutoSizeImageWrapper = styled.div<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  position: relative;
`
