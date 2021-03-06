import React from 'react'
import {
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react'

interface HabilidadeProps {
  skill: string
  value: number
}

const Habilidade: React.FC<HabilidadeProps> = ({ skill, value }) => {
  return (
    <>
      <Text color="brand.100" fontWeight={100}>
        {skill}
      </Text>
      <Slider aria-label="slider-ex-4" value={value}>
        <SliderTrack bg="brand.300">
          <SliderFilledTrack bg="brand.500" />
        </SliderTrack>
        <SliderThumb boxSize={[6, 8]} fontSize={[10, 14]}>
          {value}%
        </SliderThumb>
      </Slider>
    </>
  )
}

export default Habilidade
