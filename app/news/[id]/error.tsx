"use client";

const Error = ({ error, reset }: any) => {
  return (
    <main className="p-6">
      <h2> News not found</h2>

      <button onClick={reset}>Retry</button>
    </main>
  );
};
export default Error;