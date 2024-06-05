import "@/styles/app.scss"
import { AuthProvider } from "@/hooks/use-auth";
// import MainLayout from '@/components/nav/Navigation/main-layout'
export default function App({ Component, pageProps }) {
  // const getLayout =    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)
  const getLayout =    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>)


  return (
  <>  <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  </>)
  ;
}
