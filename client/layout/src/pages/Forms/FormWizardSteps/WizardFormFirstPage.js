import React from 'react';
import {  reduxForm } from 'redux-form';
import validate from './validate';

const WizardFormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>

            <h6 className="text-muted">Seller Details</h6>
            <fieldset>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtFirstNameBilling" className="col-lg-3 col-form-label">Contact Person</label>
                            <div className="col-lg-9">
                                <input id="txtFirstNameBilling" name="txtFirstNameBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtLastNameBilling" className="col-lg-3 col-form-label">Mobile No.</label>
                            <div className="col-lg-9">
                                <input id="txtLastNameBilling" name="txtLastNameBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtCompanyBilling" className="col-lg-3 col-form-label">Landline No.</label>
                            <div className="col-lg-9">
                                <input id="txtCompanyBilling" name="txtCompanyBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtEmailAddressBilling" className="col-lg-3 col-form-label">Email Address</label>
                            <div className="col-lg-9">
                                <input id="txtEmailAddressBilling" name="txtEmailAddressBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtAddress1Billing" className="col-lg-3 col-form-label">Address 1</label>
                            <div className="col-lg-9">
                                <textarea id="txtAddress1Billing" name="txtAddress1Billing" rows="4" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtAddress2Billing" className="col-lg-3 col-form-label">Warehouse Address</label>
                            <div className="col-lg-9">
                                <textarea id="txtAddress2Billing" name="txtAddress2Billing" rows="4" className="form-control"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtCityBilling" className="col-lg-3 col-form-label">Company Type</label>
                            <div className="col-lg-9">
                                <input id="txtCityBilling" name="txtCityBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtStateProvinceBilling" className="col-lg-3 col-form-label">Live Market A/C</label>
                            <div className="col-lg-9">
                                <input id="txtStateProvinceBilling" name="txtStateProvinceBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtTelephoneBilling" className="col-lg-3 col-form-label">Product Category</label>
                            <div className="col-lg-9">
                                <input id="txtTelephoneBilling" name="txtTelephoneBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group row">
                            <label htmlFor="txtFaxBilling" className="col-lg-3 col-form-label">Product Sub Category</label>
                            <div className="col-lg-9">
                                <input id="txtFaxBilling" name="txtFaxBilling" type="text" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div id="btn_div" className="float-right">
                <button type="button" className="btn btn-primary previous" disabled style={{ cursor : "no-drop" }} >  Previous </button> &nbsp;
                <button type="submit" className="btn btn-primary next"> Next </button>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)