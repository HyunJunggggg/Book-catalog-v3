import "./ProductForm.css";

function ProductForm() {
    return (
      <div className="form-container">
        <h2>Add Book</h2>
        <form>
          <div className="form-control">
            <label>Title</label>
            <input type="text" placeholder="Book title..." />
          </div>
  
          <div className="form-control">
            <label>Autho:</label>
            <input type="text" placeholder="Author" />
          </div>
  
          <div className="form-control">
            <label>Publisher</label>
            <input type="text" placeholder="Publisher" />
          </div>
  
          <div className="form-control">
            <label>Publication year</label>
            <input type="text"/>
          </div>

          <div className="form-control">
            <label>Language</label>
            <input type="text" placeholder="Language" />
          </div>

          <div className="form-control">
            <label>Pages</label>
            <input type="number"/>   
          </div>
 {/* 고쳐야함  */}
          <button type="submit" className="btn primary">Save</button>
        </form>
      </div>
    );
  }
  
  export default ProductForm;