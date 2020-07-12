import React, { Component } from 'react';
import styles from './PersonalDetails.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class PersonalDetails extends Component {
    state = {
        autocomplete: null
    }
    handleAddressChange(e) {
        let url = 'http://photon.komoot.de/api/?q=' + e.target.value;
        axios.get(url)
            .then((response) => {
                if (response.data.features.length) {
                    let details = response.data.features[0].properties
                    if (details.city || details.name) {
                        this.props.updateState({ city: details.city || details.name })
                    }
                    if (details.state) {
                        this.props.updateState({ state: details.state })
                    }
                    if (details.country) {
                        this.props.updateState({ country: details.country })
                    }
                    if (details.postcode) {
                        this.props.updateState({ zip: details.postcode })
                    }

                }
            })
    }

    checkMandatory() {
        let { firstName, lastName, fullAddress, city, state, country, zip } = this.props.state
        if (firstName.length && lastName.length && fullAddress.length
            && city.length && state.length && country.length && zip.length) {
            return true
        }
        return false
    }

    render() {
        return (
            <section className={styles['container']}>
                <h4 className={styles['form-head']}>Tell us about yourself</h4>
                <section>
                    <div className={styles['name']}>
                        <div>
                            <label htmlFor='firstName'>First name*</label>
                            <input type='text' id='firstName' name='firstName'
                                value={this.props.state.firstName} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last name*</label>
                            <input type='text' id='lastName' name='lastName'
                                value={this.props.state.lastName} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles['contact']}>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' name='email'
                                value={this.props.state.email} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <input type='text' id='phone' name='phone'
                                value={this.props.state.phone} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                </section>
                <h4 className={styles['form-head']}>Where do you live</h4>
                <section className={styles['address']}>
                    <div className={styles['street']}>
                        <div>
                            <label htmlFor='autocomplete'>Full address*</label>
                            <input type='text' id='autocomplete' className='form-control'
                                name='fullAddress' value={this.props.state.fullAddress}
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })}
                                onBlur={(e) => this.handleAddressChange(e)} />
                        </div>
                        <div>
                            <label htmlFor='streetNo'>Street number</label>
                            <input type='text' id='streetNo' name='streetNo'
                                value={this.props.state.streetNo} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='streetName'>Street name</label>
                            <input type='text' id='streetName' name='streetName'
                                value={this.props.state.streetName} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles['city']}>
                        <div>
                            <label htmlFor='city'>City*</label>
                            <input type='text' id='city' name='city'
                                value={this.props.state.city} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='state'>State*</label>
                            <input type='text' id='state' name='state'
                                value={this.props.state.state} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                    <div className={styles['country']}>
                        <div>
                            <label htmlFor='country'>Country*</label>
                            <input type='text' id='country' name='country'
                                value={this.props.state.country} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor='zip'>Zip*</label>
                            <input type='text' id='zip' name='zip'
                                value={this.props.state.zip} className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                        </div>
                    </div>
                </section>
                <div className={styles['nav-btn']}>
                    <div className={styles['previous']}>
                        <Link to='/'>Previous</Link>
                    </div>
                    {this.checkMandatory() ? 
                    <div className={styles['next']}>
                        <Link to='/quote-details'>Next</Link>       
                    </div> :
                    <div className={styles['next']+' '+styles['tooltip']+' '+styles['disabledCursor']}>
                        <span className={styles['tooltiptext']}>Please fill all mandatory fields</span>
                        <Link>Next</Link>       
                    </div> }

                </div>
            </section>


        )
    }
}

export default PersonalDetails;