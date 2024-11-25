import Image from "next/image";
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
      <Link href="/admin">
        <button className="buttonstyle">Go to Portal</button>
      </Link>
    </main>
  );
}
