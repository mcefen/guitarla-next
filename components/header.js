import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../styles/header.module.css'


import Logo from "../public/img/logo.svg";


const Navbar = () => {
    const pathname = usePathname()
   
    return (
      <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
          <Link href={"/"}>
            
              <Image src={Logo} alt="Logo" width={150} height={40} />
            
          </Link>
   
          <nav className={styles.navegacion}>
            
              
                <Link className={`link ${pathname === '/' ? styles.active : ''}`} href="/">Inicio</Link>
              
             
                <Link className={`link ${pathname === '/nosotros' ? styles.active : ''}`} href="/nosotros">Nosotros</Link>

                <Link className={`link ${pathname === '/tienda' ? styles.active : ''}`} href="/tienda">Tienda</Link>
              
              
                <Link className={`link ${pathname === '/blog' ? styles.active : ''}`} href="/blog">Blog</Link>

                <Link legacyBehavior href="/carrito">
                  <a>
                    <Image width={30} height={25} src="/img/carrito.png" alt='imagen carrito'/>
                  </a>
                </Link>
              
              
                
              
    
          </nav>
   
        </div>
      </header>
    );
  };
   
  export default Navbar;
  