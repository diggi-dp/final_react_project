import React from 'react'
import './accounts.css'
function Accounts() {
    return (
        <>
            <div className='account-container'>

                <div style={{ width: '100%', padding: '2rem', backgroundColor: '#435c70' }}>
                    <h5>List of Accounts</h5>
                    <div className="form-group mb-3">
                        <label htmlFor="category">Accounts</label>
                        <select className=" form-control" id="category">
                            <option value='0'>Select account</option>
                            <option value="1">Admin</option>
                            <option value="2">Editor</option>
                            <option value="3">Merchant</option>
                            <option value="4">Customer</option>
                        </select>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <div className="avatar">
                        <h5>Change Avatar</h5>
                        <div className='avtar-img-container'>
                            <img src="https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png" alt="Avtar" className='img-fluid mb-4' />
                            <a className='product-delete-link' href="/"><i className="far fa-trash-alt product-delete-icon"></i></a>
                        </div>
                        <button className="btn btn-block text-uppercase">
                            Upload New Photo
                        </button>
                    </div>

                    <div className="settings">
                        <h5>Account Settings</h5>
                        <form className='form'>
                            <div className="form-group">
                                <label htmlFor="name">Account Name</label>
                                <input id="name" name="name" type="text" className="form-control validate" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Account Email</label>
                                <input id="email" name="email" type="email" className="form-control validate" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" name="password" type="password" className="form-control validate" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Re-enter Password</label>
                                <input id="password2" name="password2" type="password" className="form-control validate" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input id="phone" name="phone" type="tel" className="form-control validate" />
                            </div>
                            <div className="form-group">
                                <label>&nbsp;</label>
                                <button type="submit" className="btn btn-block text-uppercase">
                                    Update Your Profile
                                </button>
                            </div>
                            <div style={{ width: '100%' }}>
                                <button type="submit" className="btn mt-4 btn-block text-uppercase">
                                    Delete Your Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Accounts;
