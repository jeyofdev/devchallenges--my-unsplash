import type { NextPage } from 'next';
import Header from '../components/organisms/Header';
import Gallery from '../components/organisms/Gallery';
import imagesApp from '../datas/files';

const Home: NextPage = () => (
  <div className="container md:mx-auto my-8">
    <Header />
    <Gallery images={imagesApp} />
  </div>
);

export default Home;
