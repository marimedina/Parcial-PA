import React from 'react';
import useSelect from '../Hooks/useSelect';
import ProductList from './ProductList';
import styles from './SearchBar.module.css';

const SearchBar = ({guardarCategoria}) => {

    const opciones = [
        {value: '', label: '--Seleccione--'},
        {value: 'MLA5726', label: 'Electrodomesticos'},
        {value: 'MLA1051', label: 'Celulares y telefonos'},
        {value: 'MLA1276', label: 'Deportes'},
        {value: 'MLA1430', label: 'Moda'},
    ]

    const [categoria, SeleccionarCategoria] = useSelect('MLA1368', opciones)

    const buscarCategoria = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return (
        <div className='container'>
            <div className={`${styles.buscador} row`}>
                <div className="col s12 m7 offest-m2">
                    <form onSubmit={buscarCategoria}>
                        <SeleccionarCategoria/>
                        <div className='input-field col s6 m7'>
                                <input
                                    type='submit'
                                    className='waves-effect waves-light btn-small yellow accent-3'
                                    value='Buscar'
                                    />
                        </div>
                    </form>
                </div>
                <div className='col s6 m5 offest-m8'>
                    
                    aca va opcion filtrado

                    
                </div>
            </div>
        </div>

    );
}
 
export default SearchBar;