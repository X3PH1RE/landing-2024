import React from 'react'
import BgLines from '../components/PrevImages/BgLines'
import Title from '../components/PrevImages/Title'

const images = [
  "https://spaceupcusat.com/assets/gallery4-555fc366.jpg",
  "https://spaceupcusat.com/assets/gallery2-721a2cac.jpeg",
  "https://spaceupcusat.com/assets/gallery6-0d8f2651.jpeg",
  "https://spaceupcusat.com/assets/gallery5-103969ed.jpg",
  "https://spaceupcusat.com/assets/gallery3-74f91331.jpeg"
]

const TopImage = ({ image }) => {
  return (
    <div className="flex justify-center items-start h-full">
      <img src={image} alt="Top" className="max-h-96 w-auto" />
    </div>
  )
}

const BottomImage = ({ image }) => {
  return (
    <div className="flex justify-center mt-0 items-end h-full">
      <img src={image} alt="Bottom" className="max-h-96 w-auto" />
    </div>
  )
}

const PrevImages = () => {
  return (
    <>
      <Title />
          <BgLines />
          {images.map((image, index) => (
            <div className="panel3 w-[50vw] h-[100vh] " key={index}>
              {index % 2 === 0 ? (
                <BottomImage image={image} />
              ) : (
                <TopImage image={image} />
              )}
            </div>
          ))}
    </>
  )
}

export default PrevImages