import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './QuoteDetails.module.css';

class QuoteDetails extends Component {

    checkMandatory() {
        let { plan, propertyCoverage, buildingType, deductible, liabilityCoverage, age} = this.props.state
        if (plan.length && propertyCoverage.length && buildingType.length 
            && deductible.length && liabilityCoverage.length && age.length) {
            return true
        }
        return false
    }

    render() {
        return (
            <section className={styles['container']}>
                <form className={styles['input-grp']}>
                    <h4 className={styles['form-head']}>Plan</h4>
                    <div className={styles['one']}>
                        <label htmlFor='plan'>Select the plan you prefer*</label>
                        <select id='plan' required='true' name='plan' className='form-control' value={this.props.state.plan}
                            onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })}>
                            <option disabled value='default'>Select an option</option>
                            <option value='Standard'>Standard</option>
                            <option value='Preferred'>Preferred</option>
                        </select>
                    </div>
                    <h4 className={styles['form-head']}>Personal Property Coverage</h4>
                    <div className={styles['one']}>
                        <label htmlFor='coverage'>How much Personal Property Coverage do you need?*</label>
                        <div className={styles['tooltip']}>
                            <input type='number' id='coverage' min='50000' max='200000' value={this.props.state.propertyCoverage}
                                required='true' name='propertyCoverage' className='form-control'
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                            <span className={styles['tooltiptext']}>Range:50,000 to 200,000</span>
                        </div>
                    </div>

                    <div className={styles['one']}>
                        <label htmlFor='construction'>What is the constructionof the building you live in?*</label>
                        <select id='construction' required='true' name='buildingType' className='form-control' value={this.props.state.buildingType}
                            onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })}>
                            <option disabled value='default'>Select an option</option>

                            <option value='Frame'>Frame</option>
                            <option value='Brick'>Brick</option>
                        </select>
                    </div>

                    <div className={styles['one']}>
                        <label htmlFor='deductible'>What deductible would you like for your Personal Property Coverage?*</label>
                        <select id='deductible' required='true' name='deductible' className='form-control' value={this.props.state.deductible}
                            onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })}>
                            <option disabled value='default'>Select an option</option>

                            <option value='100'>100</option>
                            <option value='250'>250</option>
                            <option value='500'>500</option>
                        </select>
                    </div>
                    <h4 className={styles['form-head']}>Liability Coverage</h4>
                    <div className={styles['one']}>
                        <label htmlFor='liability'>How much Liability coverage do you want?*</label>
                        <select id='liability' required='true' name='liabilityCoverage' className='form-control' value={this.props.state.liabilityCoverage}
                            onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })}>
                            <option disabled value='default'>Select an option</option>

                            <option value='100000'>100,000</option>
                            <option value='300000'>300,000</option>
                            <option value='500000'>500,000</option>
                        </select>
                    </div>

                    <div className={styles['one']}>
                        <label htmlFor='age'>What is your current age?*</label>
                        <div className={styles['tooltip']}>
                            <input type='number' id='age' min='18' max='70'
                                required='true' name='age' className='form-control' value={this.props.state.age}
                                onChange={(e) => this.props.updateState({ [e.target.name]: e.target.value })} />
                            <span className={styles['tooltiptext']}>Range:18 to 70</span>
                        </div>
                    </div>
                    <div className={styles['nav-btn']}>
                        <div className={styles['previous']}>
                            <Link to='/personal-details'>Previous</Link>
                        </div>
                        {this.checkMandatory() ? 
                        <div className={styles['next']}>
                            <Link to='/final-data'>Submit</Link>       
                        </div> :
                        <div className={styles['next']+' '+styles['tooltip']+' '+styles['disabledCursor']}>
                            <span className={styles['tooltiptext']+' '+styles['tooltip-submit']}>Please fill all mandatory fields</span>
                            <Link>Submit</Link>       
                        </div> }

                    </div>
                </form>
            </section>
        )
    }
}

export default QuoteDetails;