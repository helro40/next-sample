import Image from "next/image";

export default function Home({params, searchParams }) {
  // console.log(params)
  const {name} = searchParams
  return (
    <div>
      <h1>Hello {name}</h1>
    <a href="/vat">Go to the app</a>
    </div>
  );
}
