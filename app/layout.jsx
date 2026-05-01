import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
    title: 'Aptech Ibadan',
    description: 'Become An IT Pro',
    keywords: 'IT, Training, Aptech,ITSS, T24, Infinity, WebDevelopment'
}

const MainLayout = ({children}) => {
  return (
   <html lang='en'>
    <body className="bg-page-bg">
        <Navbar />
        <div>{children}</div>
    </body>
   </html>
  )
}
export default MainLayout