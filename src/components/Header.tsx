import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/logo.png';

const Header = () => (
  <header className="sticky-header">
    <div id="site" className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="logo">
            <a href="#">
              <Image src={Logo} alt="Ewa Urbanowicz" />
            </a>
          </div>
        </div>
        <div className="col-lg-8 col-md-10">
          <div className="main-menu pl-0 d-none d-md-block d-lg-block">
            <div className="menu-menu-1-container">
              <ul id="primary-menu" className="menu">
                <li
                  id="menu-item-204"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-396 current_page_item menu-item-204"
                >
                  <a title="" href="#site" aria-current="page">
                    Strona główna
                  </a>
                </li>
                <li
                  id="menu-item-208"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-208"
                >
                  <a title="O Kancelarii" href="#" aria-current="page">
                    O Kancelarii
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-117"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-117"
                    >
                      <a title="" href="https://eukancelaria.pl/o-nas.html">
                        O Nas
                      </a>
                    </li>
                    <li
                      id="menu-item-118"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-118"
                    >
                      <a title="" href="https://eukancelaria.pl/zespol.html">
                        Zespół
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-253"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-253"
                >
                  <a title="Zakres usług" href="#" aria-current="page">
                    Zakres usług
                  </a>
                  <ul className="sub-menu">
                    <li
                      id="menu-item-241"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-241"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-cywilne.html"
                      >
                        Prawo cywilne
                      </a>
                    </li>
                    <li
                      id="menu-item-242"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-242"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-rodzinne-i-opiekuncze.html"
                      >
                        Prawo rodzinne i opiekuńcze
                      </a>
                    </li>
                    <li
                      id="menu-item-243"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-243"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-pracy.html"
                      >
                        Prawo pracy
                      </a>
                    </li>
                    <li
                      id="menu-item-244"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-244"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-medyczne.html"
                      >
                        Prawo medyczne
                      </a>
                    </li>
                    <li
                      id="menu-item-245"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-245"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-gospodarcze-i-spolek.html"
                      >
                        Prawo gospodarcze i spółek
                      </a>
                    </li>
                    <li
                      id="menu-item-246"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-246"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/prawo-upadlosciowe.html"
                      >
                        Prawo upadłościowe
                      </a>
                    </li>
                    <li
                      id="menu-item-247"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-247"
                    >
                      <a
                        title=""
                        href="https://eukancelaria.pl/zakres-uslug/odpowiedzialnosc-dyscyplinarna.html"
                      >
                        Odpowiedzialność dyscyplinarna
                      </a>
                    </li>
                    <li
                      id="menu-item-248"
                      className="menu-item menu-item-type-post_type menu-item-object-post menu-item-248"
                    >
                      <a title="" href="https://eukancelaria.pl/zakres-uslug/rodo.html">
                        Ochrona danych osobowych
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-211"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-211"
                >
                  <a title="" href="https://eukancelaria.pl#footer" aria-current="page">
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="call-button animated tada delay-1s d-none d-lg-block waves-effect waves-light">
            <a href="callto:+48605357507">
              <FontAwesomeIcon icon="phone" className="mr-1" /> 605-357-507
            </a>
          </div>
          <div className="d-block d-md-none d-lg-none">
            <i id="burger" className="material-icons" onClick="burger()">
              menu
            </i>
            <i id="quit" className="material-icons" onClick="quit()">
              clear
            </i>
          </div>
          <div id="links">
            <a href="https://eukancelaria.pl/">Strona główna</a>
            <a href="https://eukancelaria.pl/o-nas.html">O Kancelarii</a>
            <a href="https://eukancelaria.pl/zespol.html">Zespół</a>
            <a href="https://eukancelaria.pl#services">Zakres usług</a>
            <a href="https://eukancelaria.pl#footer">Kontakt</a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
