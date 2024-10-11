import Image from "next/image";

export default async function Home() {
  return (
    <main className="mt-32">
      <h1 className="text-3xl font-bold text-left md:text-center md:text-5xl mb-4 md:mb-10">
        Welcome to My Blog
      </h1>
      <p className=" leading-8">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        pariatur porro asperiores eius fugit rerum, optio magnam cupiditate fuga
        tempore! Molestiae beatae harum eos dignissimos assumenda eveniet culpa
        ducimus corporis. Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Nisi, minus voluptatum doloribus deleniti ratione eos maiores
        inventore similique ut ullam dolor ipsa libero placeat mollitia delectus
        esse illum officiis dignissimos?
      </p>
    </main>
  );
}
