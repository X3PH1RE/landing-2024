import React from 'react'
import BgLines from '../components/PrevImages/BgLines'
import Title from '../components/PrevImages/Title'

const images = [
  "/previmages/gallery4.jpg",
  "/previmages/gallery2.jpeg",
  "/previmages/gallery3.jpeg",
  "/previmages/gallery5.jpg",
  "/previmages/gallery1.jpeg",
  "/previmages/gallery6.jpeg"
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