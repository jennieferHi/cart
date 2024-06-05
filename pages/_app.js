import "@/styles/app.scss";
import MainLayout from '@/components/nav/Navigation/main-layout';
import { AuthProvider } from '@/hooks/use-auth';
import { BuyProvider } from '@/hooks/use-buy';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AuthProvider>
      <BuyProvider>
        {getLayout(<Component {...pageProps} />)}
      </BuyProvider>
    </AuthProvider>
  );
}
