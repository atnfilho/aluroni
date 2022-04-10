import filtros from './filtos.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';

type iOpcao = typeof filtros[0];
type Props = {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

// interface Opcao {
//     id: number,
//     label: string
// }

export default function Filtros({ filtro, setFiltro }: Props) {

    function selecionarFiltro(opcao: iOpcao): void {
        if(filtro === opcao.id) return setFiltro(null);
        setFiltro(opcao.id);
    }

    return (
        <div className={styles.filtros}>
            {filtros.map(opcao => (
                <button
                    className={classNames({
                        [styles.filtros__filtro]: true,
                        [styles["filtros__filtro--ativo"]]: filtro === opcao.id
                    })}
                    key={opcao.id}
                    onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}


