import Footer from "../../components/Footer"
import Header from "../../components/Header"

const CredentialData = [
  {id: 1, fr: '2022-2023', dr: 'Director\'s Report 2022-2023', ar: 'Auditor\'s Report 2022-2023'},
  {id: 2, fr: '2021-2022', dr: 'Director\'s Report 2021-2022', ar: 'Auditor\'s Report 2021-2022'},
  {id: 3, fr: '2020-2021', dr: 'Director\'s Report 2020-2021', ar: 'Auditor\'s Report 2020-2021'},
  {id: 4, fr: '2019-2020', dr: 'Director\'s Report 2019-2020', ar: 'Auditor\'s Report 2019-2020'},
  {id: 5, fr: '2018-2019', dr: 'Director\'s Report 2018-2019', ar: 'Auditor\'s Report 2018-2019'},
]


const AnnualReports = () => {
  return (
    <>
    <Header />
    <>
    <div className=" mx-8 p-4 font-popins">
      <div className="relative">
        <img
          src="/originalpagesimages/annualreport.jpg"
          alt="Financial Report"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <h1 className="text-white text-4xl font-bold font-CormorantUpright">Financial Reports</h1> */}
        </div>
      </div>
      

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 mb-11">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-lg text-yellow-700 uppercase bg-yellow-200 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                Financial Reports
                </th>
                <th scope="col" className="px-6 py-3">
                Director's Report
                </th>
                <th scope="col" className="px-6 py-3">
                Auditor's Report
                </th>
                
                
            </tr>
        </thead>
        <tbody>
            {CredentialData.map((item)=> (
              <tr className="bg-yellow-100 border-b  hover:bg-yellow-400  text-yellow-900 font-medium">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap cursor-pointer">
                  {item.fr}
              </th>
              <td className="px-6 py-4 cursor-pointer">
                  {item.dr}
              </td>
              <td className="px-6 py-4 cursor-pointer">
                  {item.ar}
              </td>
              
              
          </tr>
            ))}
            
        </tbody>
    </table>
</div>

    </div>
    
    </>
    <Footer />
    </>
    
  )
}

export default AnnualReports