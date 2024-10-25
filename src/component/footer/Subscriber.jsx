const Subscriber = () => {
    return (
        <div>
              <div className="lg:w-[150vh] mx-auto h-[220px] bg-gradient-to-r from-green-200 to-blue-400 rounded-xl outline-offset-8 outline-gray-400 outline"> 
                  <div>
                         <div className="text-center py-10">
                               <h1 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h1>
                               <h4 className="font-semibold mb-3">Get the latest updates and news right in your inbox!</h4> 
                               <div className="flex justify-center">
                                <fieldset className="form-control w-80">
                                   <div className="flex gap-2">
                                           <input type="text" placeholder="Enter your email" className="input input-bordered border border-gray-400 join-item" />
                                           <button className="btn btn-warning font-bold join-item">Subscribe</button>
                                   </div>
                                </fieldset>
                               </div>
                         </div>
                  </div>
              </div>
        </div>
    );
};

export default Subscriber;