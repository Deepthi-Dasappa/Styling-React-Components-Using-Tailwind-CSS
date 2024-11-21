export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img
        src="src\assets\logo.png"
        alt="an-art-logo"
        className="-mt-4 mb-3 w-28 h-28 object-contain"
      />
      <h1 className="text-2xl md:text-4xl mb-1 md:mb-4 font-semibold tracking-widest text-center uppercase text-yellow-600 font-style hover:text-neutral-200">
        React Art
      </h1>
      <p>A community by the artist for a art lovers</p>
    </header>
  );
}
