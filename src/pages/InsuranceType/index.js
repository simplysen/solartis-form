import React, { Component } from 'react';
import styles from './InsuranceType.module.css';
import { Link } from 'react-router-dom';

class InsuranceType extends Component {
    state = {
        minDate: null
    }
    componentDidMount() {
        let dateObj = new Date()
        let month = dateObj.getMonth()+1
        let date = dateObj.getDate()
        month = (month/10 < 1) ? '0'+month : month
        date = (date/10 < 1) ? '0'+date : date
        let formattedDate = dateObj.getFullYear()+'-'+month+'-'+date
        this.setState({minDate: formattedDate})
        this.props.updateState({startingDate:formattedDate})
    }
    render() {
        return (
            <section className={styles['container']}>
                <h4 className={styles['form-head']}>Insurance type</h4>
                <div className={styles['input-group']}>
                    <label htmlFor='type'>Type of Insurance</label>
                    <select id='type' name='insuranceType' className='form-control' value={this.props.state.insuranceType}
                    onChange={(e) => this.props.updateState({[e.target.name]:e.target.value})} >
                        <option disabled value='default'>Select an option</option>
                        <option value='Renters Insurance'>Renters Insurance</option>
                        
                    </select>
                </div>
                <div className={styles['input-group']}>
                    <label htmlFor='date'>Starting date*</label>
                    <input type='date' id='date' className='form-control' value={this.props.state.startingDate}
                    onChange={(e) => this.props.updateState({[e.target.name]:e.target.value})}
                    min={this.state.minDate} name='startingDate'/>
                </div>
                <div className={styles['nav-btn']}>
                    <div className={styles['next']}>
                        <Link to='/personal-details'>Next</Link>
                    </div>  
                </div>
            </section>
        )
    }
}

export default InsuranceType;