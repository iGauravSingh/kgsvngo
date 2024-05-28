

const Support = () => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
            KGSV needs your support in Rural Areas for
          </h1>
          
          <ul className="list-disc list-inside mb-6 text-lg">
            <li>Education</li>
            <li>Cleanliness</li>
            <li>Health Hygiene Nutrition</li>
            <li>Environmental Conservation</li>
            <li>Women Empowerment</li>
            <li>Vocational Training for Youth</li>
            <li>Agriculture</li>
          </ul>
    
          <div className="text-center mb-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Donate
            </button>
          </div>
    
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
              We wish to Associate
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Enter Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Name"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Enter E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your E-mail"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Enter Phone Nos
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Phone Number"
                />
              </div>
    
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contribution">
                  Area of Proposed Contribution
                </label>
                <textarea
                  id="contribution"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Describe your proposed contribution"
                ></textarea>
              </div>
    
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Support