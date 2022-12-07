import Meta from "./meta"
export default function Head({children}) {
  return (
    <>
      <title>{children}</title>
      <Meta/>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon/favicon.ico" />
    </>
  )
}
