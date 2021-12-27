import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer id="footer" className="page-footer font-small gradient-footer text-white">
    {/* style="background-color: #16273f;" */}
    <div className="bg-blue-900">
      <div className="container">
        <div className="row py-4 flex align-items-center ml-lg-1">
          <div className="col-md-6 col-lg-6 mb-4 mb-md-0 text-md-left">
            <h6 className="mb-0 font-roboto">Bądź z nami w kontakcie!</h6>
          </div>

          <div className="col-md-6 col-lg-6 text-center text-md-right">
            <h6 className="mb-0 font-roboto">
              Napisz na adres email:{' '}
              <a href="mailto:ewa.urbanowicz@eukancelaria.pl">
                ewa.urbanowicz@eukancelaria.pl
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div className="container text-left text-md-left mt-5">
      <div className="row mt-3">
        <div className="col-md-4 col-lg-4 col-xl-4 mb-4">
          <h6 className="text-uppercase font-weight-bold">O Kancelarii</h6>
          <hr className="w-16 accent-2 mb-4 mt-2 d-inline-block mx-auto" />
          <p>
            Kancelaria oferuje kompleksową obsługę prawną przedsiębiorców, jak i świadczy
            usługi prawne dla osób fizycznych.
          </p>
          <p>
            Wykonanie:{' '}
            <span className="font-semibold">
              <a href="https://kvsky.pl/">kvsky.pl</a>
            </span>
          </p>
        </div>

        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase font-weight-bold">Zakres usług</h6>
          <hr className="w-16 accent-2 mb-4 mt-2 d-inline-block mx-auto" />
          <p className="my-2">
            <a href="zakres-uslug/prawo-cywilne.html">Prawo cywilne</a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/prawo-rodzinne-i-opiekuncze.html">
              Prawo rodzinne i opiekuńcze
            </a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/prawo-pracy.html">Prawo pracy</a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/prawo-medyczne.html">Prawo medyczne</a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/prawo-gospodarcze-i-spolek.html">
              Prawo gospodarcze i spółek
            </a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/prawo-upadlosciowe.html">Prawo upadłościowe</a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/odpowiedzialnosc-dyscyplinarna.html">
              Odpowiedzialność dyscyplinarna
            </a>
          </p>
          <p className="my-3">
            <a href="zakres-uslug/rodo.html">Ochrona danych osobowych</a>
          </p>
        </div>

        <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase font-weight-bold">Kontakt</h6>
          <hr className="white w-16 accent-2 mb-4 mt-0 d-inline-block mx-auto" />
          <p className="my-3">
            <FontAwesomeIcon icon="home" className="w-3" /> Warszawa, Lublin
          </p>
          <p className="my-3">
            <FontAwesomeIcon icon="envelope" className="w-3" />
            <a href="mailto:ewa.urbanowicz@eukancelaria.pl">
              ewa.urbanowicz@eukancelaria.pl
            </a>
          </p>
          <p className="my-3">
            <FontAwesomeIcon icon="phone" className="w-3" /> Warszawa, Lublin + 48 605 457
            507
          </p>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://eukancelaria.pl/"> Ewa Urbanowicz</a>
    </div>
  </footer>
);

export default Footer;
