import { Carousel } from "react-bootstrap"

export default function Slider (props) {
    return (
        <Carousel>
          <Carousel.Item>
            <img
              src="https://images2.alphacoders.com/102/thumb-1920-102660.jpg"
              alt="Image 1"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images8.alphacoders.com/412/412607.jpg"
              alt="Image 2"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.unsplash.com/photo-1512936702668-1ab037aced2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image 3"
              style={{ height: '300px', width: '100%', objectFit: 'cover' }}
            />
          </Carousel.Item>
        </Carousel>
    )
}