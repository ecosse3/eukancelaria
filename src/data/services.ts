import {
  AcademicCapIcon,
  ArrowCircleDownIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HeartIcon,
  IdentificationIcon,
  OfficeBuildingIcon,
  UserGroupIcon
} from '@heroicons/react/outline';
import PrawoCywilneImg from '../../public/assets/icons/prawo-cywilne/prawo-cywilne.png';
import RodoImg from '../../public/assets/icons/rodo/rodo.png';
import PrawoPracyImg from '../../public/assets/icons/prawo-pracy/prawo_pracy.png';
import PrawoRodzinneImg from '../../public/assets/icons/prawo-rodzinne/prawo-rodzinne-i-opiekuncze.png';
import PrawoMedyczneJpg from '../../public/assets/icons/prawo-medyczne/prawo_medyczne.png';
import PrawoGospodarczeImg from '../../public/assets/icons/prawo-gospodarcze-i-spolek/prawo-gospodarcze-i-spolek.png';
import PrawoUpadloscioweImg from '../../public/assets/icons/prawo-upadlosciowe/prawo_upadlosciowe.png';
import OdpowiedzialnoscImg from '../../public/assets/icons/odpowiedzialnosc-dyscyplinarna/odpowiedzialnosc_dyscyplinarna.png';
import { IService } from '../types/service';

const services: IService[] = [
  {
    id: 1,
    name: 'Prawo cywilne',
    slug: 'prawo-cywilne',
    href: '/zakres-uslug/prawo-cywilne',
    icon: BookOpenIcon,
    image: PrawoCywilneImg,
    imagePath: '/assets/icons/prawo-cywilne/prawo-cywilne.png',
    backgroundColor: '#F4CF88',
    textColor: '#CB85AF',
    items: [
      'dochodzenie należności w postępowaniu sądowym i egzekucyjnym',
      'reprezentowanie stron w postępowaniu sądowym',
      'sporządzanie pozwów, apelacji oraz innych pism procesowych',
      'sporządzanie opinii, umów cywilno-prawnych',
      'pomoc prawna w sprawach spadkowych',
      'pomoc prawna w sprawach z zakresu prawa rzeczowego'
    ]
  },
  {
    id: 2,
    name: 'Prawo rodzinne i opiekuńcze',
    slug: 'prawo-rodzinne-i-opiekuncze',
    href: '/zakres-uslug/prawo-rodzinne-i-opiekuncze',
    icon: UserGroupIcon,
    image: PrawoRodzinneImg,
    imagePath: '/assets/icons/prawo-rodzinne/prawo-rodzinne-i-opiekuncze.png',
    backgroundColor: '#FFDFA5',
    textColor: '#CB85AF',
    items: [
      'sprawy o rozwód, separację, unieważnienie małżeństwa',
      'sprawy o ustanowienie rozdzielności majątkowej między małżonkami',
      'sprawy o podział majątku wspólnego małżonków',
      'sprawy z zakresu zarządu majątkiem wspólnym',
      'sprawy o alimenty na rzecz drugiego małżonka',
      'sprawy o dostarczanie środków utrzymania z tytułu obowiązku zaspokajania potrzeb rodziny',
      'sprawy o nakazanie wypłaty wynagrodzenia lub innych dochodów do rąk drugiego małżonka',
      'sprawy o pozbawienie, ograniczenie, zawieszenie lub przywrócenie władzy rodzicielskiej',
      'sprawy o określenie sposobu wykonywania władzy rodzicielskiej rodziców żyjących w rozłączeniu, w szczególności po orzeczeniu rozwodu lub separacji',
      'określenie sposobu utrzymywania kontaktów z dzieckiem',
      'sprawy o zezwolenie na dokonanie czynności przekraczającej zakres zwykłego zarządu majątkiem dziecka (w tym o zezwolenie na odrzucenie spadku)',
      'sprawy o ustalenie lub zaprzeczenie ojcostwa i macierzyństwa',
      'sprawy o alimenty'
    ]
  },
  {
    id: 3,
    name: 'Prawo pracy',
    slug: 'prawo-pracy',
    href: '/zakres-uslug/prawo-pracy',
    icon: BriefcaseIcon,
    image: PrawoPracyImg,
    imagePath: '/assets/icons/prawo-pracy/prawo_pracy.png',
    backgroundColor: '#D0D9DD',
    textColor: '#CB85AF',
    items: [
      'reprezentowanie pracowników i pracodawców',
      'zastępstwo procesowe przed sądami pracy',
      'dochodzenie należności ze stosunku pracy',
      'udzielanie porad prawnych oraz sporządzanie opinii prawnych',
      'sporządzanie pism procesowych i środków odwoławczych',
      'sporządzanie wniosków, odwołań, zażaleń w sprawach ZUS i KRUS',
      'reprezentacja przed organami ubezpieczeniowo – rentowymi'
    ]
  },
  {
    id: 4,
    name: 'Prawo medyczne',
    slug: 'prawo-medyczne',
    href: '/zakres-uslug/prawo-medyczne',
    icon: HeartIcon,
    image: PrawoMedyczneJpg,
    imagePath: '/assets/icons/prawo-medyczne/prawo_medyczne.png',
    backgroundColor: '#F9E8FF',
    textColor: '#CB85AF',
    items: [
      'obsługa prawna podmiotów leczniczych (wieloletnie doświadczenie i znajomość specyfiki działalności)',
      'udzielanie porad prawnych w zakresie szeroko rozumianego prawa medycznego: praw pacjenta, praw i obowiązków lekarzy, odpowiedzialności za tzw. błędy medyczne i sposobu dochodzenia roszczeń z tym związanych',
      'reprezentowanie przed sądem personelu medycznego oraz pacjentów w sprawach związanych z roszczeniami pacjenta, w tym m.in. o odszkodowanie i zadośćuczynienie za tzw. błędy medyczne',
      'reprezentowanie przed Wojewódzkimi Komisjami do Spaw Orzekania o Zdarzeniach Medycznych w sprawach o zdarzenia medyczne',
      'reprezentowanie pokrzywdzonych w postępowaniu karnym w sprawach związanych z tzw. błędami medycznymi'
    ]
  },
  {
    id: 5,
    name: 'Prawo gospodarcze i spółek',
    slug: 'prawo-gospodarcze-i-spolek',
    href: '/zakres-uslug/prawo-gospodarcze-i-spolek',
    icon: OfficeBuildingIcon,
    image: PrawoGospodarczeImg,
    imagePath: '/assets/icons/prawo-gospodarcze-i-spolek/prawo-gospodarcze-i-spolek.png',
    backgroundColor: '#86B1D6',
    textColor: '#7164BB',
    items: [
      'sporządzanie umów z zakresu prawa cywilnego, gospodarczego, prawa spółek handlowych',
      'reprezentowanie przed Krajowym Rejestrem Sądowym, prowadzenie postępowań rejestracyjnych',
      'udzielanie porad prawnych',
      'sporządzanie opinii prawnych',
      'zastępstwo procesowe przed sądami powszechnymi',
      'reprezentowanie przed organami administracji',
      'sporządzanie pism procesowych i środków odwoławczych',
      'dochodzenie należności w postępowaniu nakazowym i upominawczym',
      'nadzór prawny nad postępowaniem egzekucyjnym'
    ]
  },
  {
    id: 6,
    name: 'Prawo upadłościowe',
    slug: 'prawo-upadlosciowe',
    href: '/zakres-uslug/prawo-upadlosciowe',
    icon: ArrowCircleDownIcon,
    image: PrawoUpadloscioweImg,
    imagePath: '/assets/icons/prawo-upadlosciowe/prawo_upadlosciowe.png',
    backgroundColor: '#EFD9BF',
    textColor: '#CB85AF',
    items: [
      'obsługa dłużnika, w tym również byłego przedsiębiorcy lub członka zarządu spółki, w zakresie postępowania restrukturyzacyjnego lub ogłoszenia upadłości',
      'doradztwo w zakresie upadłości konsumenckiej',
      'reprezentowanie upadłego w postępowaniu upadłościowym',
      'obsługa wierzyciela składającego wniosek o ogłoszenie upadłości dłużnika',
      'obsługa innych podmiotów uczestnicących w postępowaniu upadłościowym, tj. syndyków, nadzorców sądowych, inwestorów'
    ]
  },
  {
    id: 7,
    name: 'Odpowiedzialność dyscyplinarna',
    slug: 'odpowiedzialnosc-dyscyplinarna',
    href: '/zakres-uslug/odpowiedzialnosc-dyscyplinarna',
    icon: IdentificationIcon,
    image: OdpowiedzialnoscImg,
    imagePath:
      '/assets/icons/odpowiedzialnosc-dyscyplinarna/odpowiedzialnosc_dyscyplinarna.png',
    cardSize: '1/2',
    backgroundColor: '#E8D277',
    textColor: '#CB85AF',
    content:
      '<p>W świetle art. 17 ust. 1 Konstytucji RP: w drodze ustawy można tworzyć samorządy zawodowe, reprezentujące osoby wykonujące zawody zaufania publicznego. Jedną z funkcji samorządów zawodowych jest sprawowanie pieczy nad należytym (czyt. prawidłowym) wykonywaniem zawodu - w granicach interesu publicznego i dla jego ochrony.</p><p class="mt-4">Za postępowanie sprzeczne z prawem lub zasadami etyki zawodowej, albo za zachowanie, które narusza godność zawodu, osoba wykonująca zawód zaufania publicznego ponosi odpowiedzialność dyscyplinarną/zawodową. Postępowanie z zakresu odpowiedzialności dyscyplinarnej/zawodowej jest postępowaniem represyjnym – nakładającym pewne sankcje (kary) za czyny, które wypełniają znamiona deliktów dyscyplinarnych. Przepisy prawa, w świetle których prowadzone są postępowania dyscyplinarne/odpowiedzialności zawodowej zostały zawarte w aktach normatywnych regulujących zasady funkcjonowania poszczególnych samorządów zawodowych. W kwestiach nieuregulowanych materią ustawową oraz aktami wewnętrznymi wydawanymi przez organy samorządowe stosuje się – odpowiednio - określone przepisy Kodeksu karnego oraz Kodeksu postępowania karnego. Jedną z naczelnych zasad proces karnego, transponowaną do postępowań dyscyplinarnych/odpowiedzialności zawodowej jest prawo, wyrażone w treści przepisu art. 6 k.p.k – prawo do obrony.</p><p class="mt-4">Kancelaria staje w obronie zapewnienia obwinionemu w procesie z zakresu odpowiedzialności dyscyplinarnej/zawodowej wszystkich dostępnych instrumentami prawa środków, do dochodzenia swoich praw oraz należytej obrony.</p><p class="mt-4">W zakres usług świadczonych przez Kancelarię wchodzą m.in. postępowania:</p><p class="mt-4">z zakresu odpowiedzialności zawodowej:</p><ul class="max-w-2xl text-gray-500 inline-block list-disc text-left pl-4 list-outside mt-4 mx-6"><li class="text-lg mt-2">lekarzy i lekarzy dentystów oraz lekarzy weterynarii</li><li class="text-lg mt-2">pielęgniarek i położnych</li><li class="text-lg mt-2">farmaceutów</li><li class="text-lg mt-2">diagnostów laboratoryjnych</li><li class="text-lg mt-2">fizjoterapeutów</li><li class="text-lg mt-2">psychologów</li></ul><p class="mt-4">oraz odpowiedzialności dyscyplinarnej:</p><ul class="max-w-2xl text-gray-500 inline-block list-disc text-left pl-4 list-outside mt-4 mx-6"><li class="text-lg mt-2">adwokatów</li><li class="text-lg mt-2">prokuratorów</li><li class="text-lg mt-2">sędziów</li><li class="text-lg mt-2">rzeczników patentowych</li></ul>'
  },
  {
    id: 8,
    name: 'Ochrona danych osobowych',
    slug: 'rodo',
    href: '/zakres-uslug/rodo',
    icon: AcademicCapIcon,
    image: RodoImg,
    imagePath: '/assets/icons/rodo/rodo.png',
    cardSize: '1/2',
    backgroundColor: '#FAEBFF',
    textColor: '#8BC6D3',
    content:
      '<p>Kancelaria świadczy również usługi polegające na wdrażaniu obowiązujących w Unii Europejskiej przepisów dot. ochrony danych osobowych (RODO). Usługi Kancelarii polegają na przeprowadzeniu audytu w siedzibie Klienta w przedmiocie zakresu przetwarzania danych osobowych, zabezpieczeń fizycznych, technicznych i organizacyjnych mających chronić dane osobowe zgodnie z przepisami prawa. Po przeprowadzeniu audytu Kancelaria przygotowuje dokumentację zgodną z RODO – dostosowaną do każdego Klienta oraz przeprowadza szkolenia w zakresie ochrony danych osobowych.</p>'
  }
];

export const servicesWithoutIcon = services.map((s) => ({ ...s, icon: null }));

export default services;
