import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import Head from "next/head";
import { useRouter } from "next/router";

export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);

  return { props: { cabin } };
}

function Cabin({ cabin }) {
  console.log(cabin);
  return (
    <>
      <Head>
        <title>The Wild Oasis | Cabin# </title>
      </Head>
      <div className="max-w-6xl m-auto mt-12">
        <CabinView cabin={cabin} />
      </div>
    </>
  );
}

export default Cabin;
