export default function MainNavigation() {
  return (
    <>
      <main className="bg-slate-100 text-center h-96 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold text-stone-600 tracking-wide bg-slate-100">
          ZAVOCADO
        </h1>
        <h3 className="text-lg text-stone-600 font-light bg-slate-100">
          <div className="bg-slate-100">Organic avocados</div>
          <div className="bg-slate-100">from Zava Farm</div>
        </h3>
        <button className="bg-zinc-500 text-white px-5 py-1 rounded hover:bg-zinc-800">
          Shop now
        </button>
      </main>
      <div className="h-80">
        <img
          src="public/landing-page/avocado-full.jpg"
          alt="Rounded green avocados"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-center text-3xl text-stone-600 font-light my-12">
        Something about the beauty of organic avocados
      </h2>
      <div className="flex items-center justify-center px-10 space-x-8">
        <div className="w-1/2">
          <img
            src="public/landing-page/farm.jpg"
            alt="Aerial view of a farm"
            className="w-full h-96 object-cover rounded"
          />
        </div>
        <div className="w-1/2 space-y-4 leading-relaxed text-center">
          <h3 className="text-3xl">Our products</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            enim sint. Facere natus explicabo aut temporibus numquam quam dolore
            aliquid, ipsa corrupti? Aliquid ratione, inventore nam ex iste ipsa
            placeat! Eaque numquam culpa harum asperiores placeat.
          </p>
          <button className="bg-zinc-500 text-white px-5 py-1 rounded hover:bg-zinc-800">
            Shop now
          </button>
        </div>
      </div>
    </>
  );
}