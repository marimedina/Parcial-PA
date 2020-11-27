import React from 'react';
import ProductList from './ProductList';
import styles from './SearchBar.module.css';

const SearchBar = () => {

    return (
        <div className='container'>
            <div className={`${styles.buscador} row black`}>
                <div className="col s12 m7 offest-m2">
                    <form >
                        <div className='input-field col s6 m7'>
                                <input id='producto' 
                                    type='text'
                                    placeholder='Search product'
                                    className='form-control'
                                    name='searchText'
                                    autoComplete='off'
                                    
                                    />
                                <label className='label-icon' htmlFor='producto'>
                                    <i className="material-icons"></i>
                                </label>
                                <a className="waves-effect light-blue darken-2 btn"
                                    type='submit'>
                                    Search
                                </a>
                        </div>
                    </form>
                </div>
                <div className='col s6 m5 offest-m8 white-text'>
                    
                    aca va opcion filtrado

                    
                </div>
            </div>
        </div>

    );
}
 
export default SearchBar;