export const Awards = [
    {id: 1, Title:"21st Century Award", Details: "Spotify"},
    {id: 2,awardtitle:"Best Sync Usage", awardwinner: "Glassnote Records (GIVERS’ song “Saw You First” in Kindle Fire product launch)"},
    {id: 3,awardtitle:"Creative Packaging Award (Physical or Digital)", awardwinner: "Ninja Tune for Amon Tobin (ISAM limited edition “Control Over Nature” CD/Book)"},
    {id: 4,awardtitle:"Independent Album of the Year presented by Official.fm", awardwinner: "Bon Iver – Bon Iver (Jagjaguwar)"},
    {id: 5,awardtitle:"Indie Label of the Year Award (5 Employees or less worldwide)", awardwinner: "Daptone Records"},
    {id: 6,awardtitle:"Indie Label of the Year Award (6 Employees or more worldwide)", awardwinner: "Jagjaguwar"},
    {id: 7,awardtitle:"Lifetime Acheivement Award", awardwinner: "Martin Mills, Beggars Group Founder/CEO"},
    {id: 8,awardtitle:"Light Bulb Award (most innovative/creative marketing campaign)", awardwinner: "Epitaph/Anti- Records (Tom Waits Invite-Only Listening Party)"},
    {id: 9,awardtitle:"Music Supervisor of the Year", awardwinner: "PJ Bloom (Neophonic)"},
    {id: 10,awardtitle:"Road Warrior of the Year", awardwinner: "Charles Bradley (Daptone Records)"},
    {id: 11,awardtitle:"Up and Comer Award presented by eMusic", awardwinner: "The Dø (Six Degrees Records) [A2IM member vote] & JC Brooks and the Uptown Sound (Bloodshot Records) [eMusic member vote]"},
    {id: 12,awardtitle:"Video of the Year", awardwinner: "Arcade Fire’s “Sprawl II (Mountains Beyond Mountains)” (Merge Records)"},
]
export default function NomineeDetails(){

    return(
    <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-5 p-8 mb-20'>
            {Awards.map(Awards => (
              <button key={Awards.id} className="p-10 drop-shadow-4xl hover:scale-105 max-w-64 Borderswap3 mx-auto my-auto hover:bg-libera-pink hover:text-white">
              <h3 className='p-3 text-2xl text-white font-medium mb-2 tracking-tight'>
                  {Awards.Title}
              </h3>
              <h4 className='p-2 mx-auto hover:font-bold w-40 text-xl'>
                  {Awards.Details}
              </h4>
              </button>
            ))}
              </div>
              )
            }