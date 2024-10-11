import { auth } from "@/lib/auth";
import Navbar from "./Navbar";

async function Header() {
  const session = await auth();
  console.log(session);

  return <Navbar session={session} />;
}

export default Header;
