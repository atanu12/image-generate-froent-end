// import '../styles/globals.css'
import SearchedImage from './getImage'
import SeaerchImage from './SeaerchImage'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
        <div> <SeaerchImage/> </div>
        <div> {children}</div>
    </main>
  )
}