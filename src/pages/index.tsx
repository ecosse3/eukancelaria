import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Header />

      <div className="bg-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div className="hero-content animated fadeInLeft">
                <h1 className="h2-responsive">
                  Scire leges non hoc est verba earum tenere, sed vim ac potestatem
                </h1>
                <h2 className="h4-responsive">
                  - Znajomość praw polega nie na pamiętaniu ich dosłownie, ale na
                  umiejętności stosowania ich sensu
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-area-social d-none d-lg-block"> */}
        {/*     <ul> */}
        {/*         <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a> */}
        {/*         </li> */}
        {/*         <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a> */}
        {/*         </li> */}
        {/*         <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a> */}
        {/*         </li> */}
        {/*     </ul> */}
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
