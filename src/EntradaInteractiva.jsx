import { useState } from 'react'
import classNames from 'classnames'

export function Entrada() {
    const [activo, setActivo] = useState({
        React: false,
        Java:false,
        Spring: false,
        JavaScript: false,
        PHP: false,
        Python: false
    });
    function encendido (boton) {
        setActivo(prev => {
           const estado = {...prev, [boton] : !prev[boton]};
           console.log (estado[boton]);
           return estado;
           
        })
    };
    function estilos1(boton) {
        if (activo[boton] == true) {
            return "estilos-boton1";
        } else {
            return "";
        }
    }
    function estilos2(boton) {
        if (activo[boton] == true) {
            return "estilos-boton2";
        } else {
            return "";
        }
    }
    function estilos3(boton) {
        if (activo[boton] == true) {
            return "estilos-boton3";
        } else {
            return "";
        }
    }
    function estilos4(boton) {
        if (activo[boton] == true) {
            return "estilos-boton4";
        } else {
            return "";
        }
    }
    function estilos5(boton) {
        if (activo[boton] == true) {
            return "estilos-boton5";
        } else {
            return "";
        }
    }
    function estilos6(boton) {
        if (activo[boton] == true) {
            return "estilos-boton6";
        } else {
            return "";
        }
    }

    const claseImagen1 = classNames('im-imagen1', estilos1('JavaScript'));
    const claseImagen2 = classNames('im-imagen2', estilos2('React'));
    const claseImagen3 = classNames('im-imagen3', estilos3('Java'));
    const claseImagen4 = classNames('im-imagen4', estilos4('Spring'));
    const claseImagen5 = classNames('im-imagen5', estilos5('PHP'));
    const claseImagen6 = classNames('im-imagen6', estilos6('Python'));
    
    return (
        <>
        <div className="contenido-completo">
        <article className="tb-lista">
            <div className="botones">
                <button onClick={()=> encendido('React')}>React</button>
                <button onClick={()=> encendido('Java')}>Java</button>
                <button onClick={()=> encendido('Spring')}>Spring</button>
                <button onClick={()=> encendido('JavaScript')}>JavaScript</button>
                <button onClick={()=> encendido('PHP')}>PHP</button>
                <button onClick={()=> encendido('Python')}>Python</button>
                   
            </div>  
        </article>
           
        <article className="en-article">
            <div > 
                <img className={claseImagen1} src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="javascript" />
            </div>
            <div>
                <img className={claseImagen2} src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="react" />
            </div>
            <div>
                <img className={claseImagen3} src="https://cdn.worldvectorlogo.com/logos/java.svg" alt="java" />
            </div>
            <div>
                <img className={claseImagen4} src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" alt="spring" />
            </div>
            <div>
                <img className={claseImagen5} src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="php" />
            </div>
            <div>
                <img className={claseImagen6} src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="python" />
            </div>
        </article>
        </div>
    </>
    )
}