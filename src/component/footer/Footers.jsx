const Footers = () => {
    return (
        <div>
              <div>
                      <div className="absolute left-[96vh] mt-32"><img src="/logo-footer.png" alt="" /></div>
                      <footer className="footer h-[85vh] pt-72 bg-black text-base-content p-10">
                    <nav>
                          
                    </nav>
                    <nav className="text-white">
                         <h6 className="text-white font-bold">About Us</h6>
                         <p className="w-48">We are a passionate team dedicated to providing the best services to our customers.</p>
                   </nav>
                    <nav className="text-white">
                         <h6 className="text-white font-bold">Quick Links</h6>
                         <a className="link link-hover">Home</a>
                         <a className="link link-hover">Service</a>
                         <a className="link link-hover">About</a>
                         <a className="link link-hover">Contack</a>
                   </nav>
               <form>
                   <h6 className="font-bold text-2xl text-white">Subscribe</h6>
                   <fieldset className="form-control w-80">
                            <label className="label">
                              <span className="text-white font-bold mb-4">Subscribe to our newsletter for the latest.</span>
                            </label>
                           <div className="join">
                                <input type="text" placeholder="Enter your email" className="input input-bordered join-item" />
                                <button className="btn btn-warning join-item">Subscribe</button>
                           </div>
                   </fieldset>
              </form>
               </footer>
               <div className="bg-black">
                     <hr />
                     <p className="text-center text-white font-bold p-4">@2024 Your Company All Rights Reserved</p>
               </div>
           </div>
        </div>
    );
};

export default Footers;
