import loupe from '../assets/images/loupe.png';
import modify from '../assets/images/pen.png';
import add from '../assets/images/add.png';
import del from '../assets/images/delete.png';

const databouton = [
  {
    titre: 'Consulter la collection',
    logo: loupe,
    description: 'consulter ici tous les vins disponibles dans votre cave',
    link: '/allwine',
  },
  {
    titre: 'Ajouter une bouteille',
    logo: add,
    description: 'Pour ajouter un vin, cliquer ici',
    link: '/addwine',
  },
  {
    titre: 'Modifier une bouteille',
    logo: modify,
    description: 'Pour modifier un vin existante, cliquer ici',
    link: '/allwine',
  },
  {
    titre: 'Supprimer une bouteille',
    logo: del,
    description: 'Pour supprimer un vin, cliquer ici',
    link: '/allwine',
  },
];

export default databouton;
