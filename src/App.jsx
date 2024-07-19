import {Entrada} from './EntradaInteractiva'
import {Header}  from './Header'
import {Perfil}  from './Perfil'

import './app.css'
import './perfil.css'

/*<Header  />
<Entrada />
<Perfil   />*/

export function AppHeader () {
    return (
        <>
            <Header  />
            <Entrada />
        </>
    )
}