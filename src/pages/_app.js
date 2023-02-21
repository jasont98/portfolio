import Head from 'next/head'
import '@/styles/globals.css'
import Layout from '../components/Layout'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <TransitionGroup>
        <CSSTransition key={router.route} classNames="fade" timeout={500}>
          <div className="page-wrapper text-white">
            <Component {...pageProps} />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );
}
