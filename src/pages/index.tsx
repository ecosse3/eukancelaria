import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Logo from '../assets/images/logo.png';

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

      <section id="about" className="dark-grey-text">
        <div className="container pt-20 pb-5">
          <div className="row justify-content-center">
            {/* <div className="col-md-7 mb-4"> */}
            {/*   <div className="view"> */}
            {/*     <img src="/lawyer_woman/2x/Zasob4@2x.png" className="img-fluid mr-5" /> */}
            {/*   </div> */}
            {/* </div> */}
            <div className="col-md-10 text-center d-flex align-items-center">
              <div>
                <p className="mb-5 wow fadeInRight slow">
                  <Image src={Logo} width="250" height="104" alt="" />
                </p>

                <p className="wow fadeInRight slow text-muted">
                  Kancelaria oferuje kompleksową obsługę prawną przedsiębiorców, jak i
                  świadczy usługi prawne dla osób fizycznych. Poza nieustannym dążeniem do
                  doskonałości zawodowej, przy jednoczesnym poszanowaniu zasad etyki,
                  pamiętamy, że każdy Klient i każda sprawa wymaga szczególnego,
                  zindywidualizowanego podejścia.
                </p>

                <a href="o-nas.html">
                  <button
                    type="button"
                    className="btn btn-rounded btn-color text-white my-4 wow fadeInUp slower"
                  >
                    Dowiedz się więcej
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
