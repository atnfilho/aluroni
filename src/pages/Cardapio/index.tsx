import './style.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export default function Cardapio() {
    return (
        <main>
            <nav className="menu">
                <Logo />
            </nav>
        </main>
    )
}