import '@/components/header/index';
import './styles.scss';

const button = document.querySelector<HTMLButtonElement>('#button');

button?.addEventListener('click', () => alert('Olá'));