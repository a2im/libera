
export async function getEvent({cleantitle}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/events?filters[Title][$eq]=${cleantitle}&populate=*`, { next: { revalidate: 60 }})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Events');
  }
  return res.json()
}

export async function getCategories({cleantitle}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/libera-categories?filters[events][Title][$eq]=${cleantitle}&sort[0]=[Name]%3Aasc&populate=*`, { next: { revalidate: 60 }})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Events');
  }
  return res.json()
}

export async function getNominees({cleantitle, catname}){
  catname = catname?.replace('&','%26')
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[events][Title][$eq]=${cleantitle}&filters[libera_categories][Name][$eq]=${catname}&filters[isWinner][$ne]=true&sort[0]=[Name]%3Aasc&populate=*`, { next: { revalidate: 60 }});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Nominees');
  }
  return res.json();
}

export async function getWinners({cleantitle}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations?filters[events][Title][$eq]=${cleantitle}&filters[isWinner][$eq]=true&sort[0]=[libera_categories][Name]%3Aasc&populate=*`, { next: { revalidate: 60 }});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Winners');
  }
  return res.json();
}

export async function getArtwork({id}){
  const res = await fetch(`${process.env.NEXT_PUBLIC_A2IMCMS_API_URL}/nominations/${id}?populate[0]=Artwork`, { next: { revalidate: 60 }});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch Artwork');
  }
  return res.json();
}