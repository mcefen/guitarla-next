import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
    title={'Nosotros'}
    description={'Sobre nosotros, guitarLA, tienda de música'}
    >
    
    
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800}alt="Imagen sobre nosotros"/>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a accumsan est, non mollis libero. Quisque blandit dui nisi, sit amet faucibus augue mattis et. Donec a ante lacinia, volutpat erat sed, dictum ante. Cras aliquam dolor id aliquam vestibulum. Nulla condimentum lobortis arcu, eget volutpat elit sodales ac. Phasellus placerat egestas augue eget viverra. Aliquam sollicitudin bibendum justo quis lobortis. Nam aliquam nisi eu lorem feugiat pellentesque. .</p>
            <p>Ut id quam mollis, porttitor ipsum et, consectetur elit. Nunc vestibulum augue non magna dignissim lacinia. Aenean et tellus id nisl posuere rhoncus vitae vitae orci. In in ligula in massa molestie tristique. Donec sit amet bibendum est. Donec id nisl mauris. </p>
          </div>
        </div>
      </main>

    </Layout>
  )
}

