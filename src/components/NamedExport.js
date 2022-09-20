export const Headline = () => {
  return (
    <header>
      <h1>Named Export Example</h1>
    </header>
  );
};

export const Button = () => {
  const Log = () => {
    console.log("test");
  };
  return <button onClick={Log}>Click</button>;
};
