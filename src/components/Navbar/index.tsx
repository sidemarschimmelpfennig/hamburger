import styles from './styles.module.css'


type NavbarProps = {
    logo: string,
    alt: string 
}


export function Navbar({logo, alt}: NavbarProps){
    return(
        <div>
            <div className={styles.nav}>
                <a href="">
                    <img className={styles.logo} src={logo} alt={alt} />
                </a>
                <a href='#'>Fazer Pedido</a>
                <a>Pedidos</a>
            </div>
        </div>
    )
}