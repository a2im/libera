'use client';
import { GET_ARCHIVES, GET_ALL_ARCHIVES, GET_ARCHIVE_EVENTS } from "../lib/gql/queries";
import { useQuery } from '@apollo/client';
import { useRouter } from "next/navigation";
import Link from "next/link";

export async function GetArchives({Title}) {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ARCHIVES, { 
    variables: {
      Name: Title,
      PublicationState: "LIVE"
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
<div className="grid grid-cols-2 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 overflow-hidden px-5">
        {/* Map through the data */}
        {data?.nominations?.data.map(nominations => (
                <button id={nominations.attributes.Name} key={nominations.id} className=" text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{nominations.attributes.Name}</h2>
                  <Link href={`/archive/${nominations.attributes.Name}`} onClick={() => router.push(`/archive/${nominations.attributes.Title}`)}><h3 className="text-xl hover:scale-[1.01] px-3 -mt-3">{nominationsw.attributes.Name}</h3></Link>
                </button>
              )
            )}
        </div>
    );
}

export async function GetAllArchives() {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ALL_ARCHIVES, { 
    variables: {
      PublicationState: "LIVE",
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
<div className="grid grid-cols-2 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 px-5">
        {/* Map through the data */}
        {data?.nominations.data.map(nominations => (
                <button id={nominations?.attributes?.event?.attributes?.Name} key={nominations.id} className=" text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{nominations?.attributes?.event?.attributes?.Name}</h2>
                  <Link href={`/archive/${nominations?.attributes?.event?.attributes?.Name}`} onClick={() => router.push(`/archive/${nominations?.attributes?.event?.attributes?.Name}`)}><h3 className="text-xl hover:scale-[1.01] px-3 -mt-3">{nominations?.attributes?.event?.attributes?.Name}</h3></Link>
                </button>
              )
            )}
        </div>
    );
}

export async function GetArchiveEvents() {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_ARCHIVE_EVENTS, { 
    variables: {
      PublicationState: "LIVE",
    }});
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
<div className="grid grid-cols-2 max-w-3xl relative py-5 mx-auto justify-evenly gap-10 px-5">
        {/* Map through the data */}
        {data?.events.data.map(events => (
                <button id={events?.attributes?.Title} key={events.id} className=" text-stone-800 border-2 rounded-xl bg-stone-100 p-10 border-black">
                  <h2 >{events?.attributes?.Title}</h2>
                  <Link href={`/archive/${events?.attributes?.Title}`} onClick={() => router.push(`/archive/${events?.attributes?.Title}`)}><h3 className="text-xl hover:scale-[1.01] px-3 -mt-3">{event?.attributes?.Title}</h3></Link>
                </button>
              )
            )}
        </div>
    );
}