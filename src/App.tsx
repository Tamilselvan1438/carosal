import { Carousel, CarouselItem } from "./components/Carousel";

export default function App() {
  return (
    <div className="mx-auto max-w-4xl py-12">
      <h1 className="mb-8 text-center text-3xl font-bold">Carousel</h1>

      <Carousel autoPlay interval={5000} controls dots>
        <CarouselItem>
          <div className="h-64 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
            <img
              src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
              alt="Description 1"
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-64 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
            <img
              src="https://st.depositphotos.com/22224476/51435/i/450/depositphotos_514355458-stock-photo-hibiscus-flower-also-known-shoe.jpg"
              alt="Description 1"
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-64 bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
            <img
              src="https://m.media-amazon.com/images/I/71CNQ8Njn+L._AC_UF894,1000_QL80_.jpg"
              alt="Description 1"
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-64 bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
            <img
              src="https://cdn.pixabay.com/photo/2017/06/05/13/10/flower-2374062_1280.jpg"
              alt="Description 1"
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="h-64 bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
            <img
              src="https://images2.alphacoders.com/732/732519.jpg"
              alt="Description 1"
              className="w-full h-full object-cover"
            />
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
}
