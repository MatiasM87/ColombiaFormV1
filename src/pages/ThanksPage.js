import humedal from '../images/header.jpg';
import gp from '../images/greenpeace-green.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { CajaImagen } from '../elementos/Formularios.js';


export const ThanksPage = () => {
    return (
        
        <div className="cover-container">
            <nav className="navbar  navbar-green"> 
            <div className="container">
                <div className="navbar-header">
                <img alt="GREENPEACE" className="greenpeace" src={gp}/>
                </div>
            </div>
            
            </nav>
            


            <CajaImagen alt='Background' src={humedal}/>
            <h2>Muchas gracias por sumarte!</h2>

        
       
       
            
        
            
        </div>
    )
}
