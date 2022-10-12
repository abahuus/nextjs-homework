import Link from "next/link";
export default function Home() {
  return (
    <div>
      <div>Welcome Screen!</div>
      <div>
        {" "}
        <Link href="/login">
        < button className="btn btn-primary">Sign in</button>
        </Link>       
      </div>
    </div>
  );
}
