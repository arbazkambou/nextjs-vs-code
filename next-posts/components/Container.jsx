function Container({ children }) {
  return (
    <section className="max-w-[1400px] mx-auto bg-white min-h-screen flex flex-col">
      {children}
    </section>
  );
}

export default Container;
