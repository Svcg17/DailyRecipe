import React from 'react'
import { reduxForm } from 'redux-form'
import validate from './validate';

const WizardFormThirdPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <form onSubmit={handleSubmit}>
            <h6 className="text-muted">Bank Details</h6>
            <fieldset>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtNameCard" className="col-lg-3 col-form-label">Name on Card</label>
                            <div className="col-lg-9">
                                <input id="txtNameCard" name="txtNameCard" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="ddlCreditCardType" className="col-lg-3 col-form-label">Credit Card Type</label>
                            <div className="col-lg-9">
                                <select id="ddlCreditCardType" name="ddlCreditCardType" className="form-control">
                                    <option value="">--Please Select--</option>
                                    <option value="AE">American Express</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtCreditCardNumber" className="col-lg-3 col-form-label">Credit Card Number</label>
                            <div className="col-lg-9">
                                <input id="txtCreditCardNumber" name="txtCreditCardNumber" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtCardVerificationNumber" className="col-lg-3 col-form-label">Card Verification Number</label>
                            <div className="col-lg-9">
                                <input id="txtCardVerificationNumber" name="txtCardVerificationNumber" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtExpirationDate" className="col-lg-3 col-form-label">Expiration Date</label>
                            <div className="col-lg-9">
                                <input id="txtExpirationDate" name="txtExpirationDate" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div id="btn_div" className="float-right">
                <button type="button" className="btn btn-primary previous" onClick={previousPage}>  Previous </button> &nbsp;
                        <button type="submit" className="btn btn-primary next"> Next </button>
            </div>
        </form>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)