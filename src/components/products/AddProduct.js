import React from 'react'
import './addproduct.css'
export default function AddProduct() {
  return (
    <>
      <div className='add-product-container'>
        <div><h5>Add product</h5></div>

        <div className='section-container'>
          {/* left section  */}
          <section className='left-section'>
            <form className='myform'>

              <div className="myform-group mb-3">
                <label htmlFor="name">Product Name</label>
                <input name="name" type="text" className="form-control validate" required="" />
              </div>

              <div className="myform-group mb-3">
                <label htmlFor="description">Description</label>
                <textarea className="form-control validate" rows="3" style={{ height: '110px' }} required=""></textarea>
              </div>

              <div className="myform-group mb-3">
                <label htmlFor="category">Category</label>
                <select className=" form-control" id="category">
                  <option value=''>Select category</option>
                  <option value="1">New Arrival</option>
                  <option value="2">Most Popular</option>
                  <option value="3">Trending</option>
                </select>
              </div>

              <div className="date-stock">

                <div className="myform-group mb-3 ">
                  <label htmlFor="expire_date">Expire Date
                  </label>
                  <input id="expire_date" name="expire_date" type="text" className="form-control validate hasDatepicker" data-large-mode="true" />
                </div>

                <div className="myform-group mb-3 ">
                  <label htmlFor="stock">Units In Stock
                  </label>
                  <input id="stock" name="stock" type="text" className="form-control validate" required="" />
                </div>

              </div>

            </form>
          </section>

          {/* right section  */}
          <section className='right-section'>
            <div className='img-logo'>
              <i className="fas fa-cloud-upload-alt upload-icon"></i>
              <input type="file" id='fileInput' accept='file_extention|' />
            </div>
            <div className='input_btn_container'>
            <input type="file" id='fileInput' accept='file_extention ' />
            <input type="button" className="btn mt-3 btn-block" value='UPLOAD PRODUCT IMAGE' />
            </div>
          </section> 

        </div>
        <button type="submit" className="btn btn-block text-uppercase">Add Product Now</button>
      </div>
    </>
  )
}
