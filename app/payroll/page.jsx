import React from 'react'

const Page = () => {
  return (
      <div className="min-h-screen w-screen flex flex-col py-[5vh] px-[5vw] gap-[4vh]">
          <div className="title text-[#546242] text-[2.5vw] font-bold [word-spacing:6px]">
              PRINTABLE  PAY  STUB  TEMPLATE
          </div>
          <div className="part1">
              {
                  array1.map((arr,rowIndex) => (
                      <div className="row flex" key={rowIndex}>
                          <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>
                          <input className="w-[20vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                          <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] text-[#546242] font-bold">{arr[2]}</div>
                          <input className="w-[17vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                          <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] text-[#546242] font-bold">{arr[4]}</div>
                          <input className="w-[17vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                      </div>
                  ))
              }
          </div>
          <div className="part2 flex justify-between">
              <div className="table1 w-[32vw] flex flex-col">
                  <div className="flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">EMPLOYEE INFORMATION</div>
                  {
                      array2.map((arr, rowIndex) => (
                          <div className="row flex" key={rowIndex}>
                              <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>      
                              <input className="w-[20vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />                  
                          </div>    
                      ))
                  }
              </div>
              <div className="table2 w-[32vw] flex flex-col">
                  <div className="headings flex">
                      <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">TAX TYPE</div>
                      <div className="w-[10vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">ALLOWANCES</div>
                      <div className="w-[10vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">ADD-L AMOUNT</div>
                  </div>
                  {
                      array3.map((arr, rowIndex) => (
                          <div className="row flex" key={rowIndex}>
                              <div className="w-[12vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>      
                              <input className="w-[10vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />       
                              <input className="w-[10vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" /> 
                          </div>    
                      ))
                  }
              </div>
          </div>
          <div className="part3">
              <div className="headings flex">
                  <div className="w-[20vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">PAY DESCRIPTION</div>
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">HOURS</div>
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">RATE</div>
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">CURRENT PAY</div>
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">YTD HOURS</div>
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">YTD PAY</div>
              </div>
              {
                  array4.map((arr,rowIndex) => (
                    <div className="row flex" key={rowIndex}>
                        <div className="w-[20vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>
                        <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                        <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                        <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                        <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                        <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                    </div>
                ))                  
              }
              <div className="calculation flex">
                  <div className="w-[48vw] flex justify-end items-center py-[1vh] px-[2vw] border-[#bfbfbf] border-2 bg-[#595959] text-white text-[1vw] font-bold">CURRENT GROSS PAY</div>
                  <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                  <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#595959] text-white text-[1vw] font-bold">YTD TOTAL</div>
                  <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
              </div>
          </div>
          <div className="part4 flex justify-between">
              <div className="table1 w-[48vw] flex flex-col">
                  <div className="headings flex">
                      <div className="w-[20vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">DEDUCTIONS</div>
                      <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">CURRENT</div>
                      <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">YTD</div>
                  </div>
                  {
                      array5.map((arr, rowIndex) => (
                          <div className="row flex" key={rowIndex}>
                              <div className="w-[20vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>      
                              <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />       
                              <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" /> 
                          </div>    
                      ))
                  }
                  <div className="calculation flex">             
                      <div className="w-[20vw] flex justify-end items-center py-[1vh] px-[2vw] border-[#bfbfbf] border-2 bg-[#595959] text-white text-[1vw] font-bold">TOTALS</div>
                      <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                      <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />
                  </div>        
              </div>
              <div className="table2 w-[28vw] flex flex-col">
                  <div className="flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-[1vw] text-white font-bold">TOTAL NET PAY</div>
                  {
                      array6.map((arr, rowIndex) => (
                          <div className="row flex" key={rowIndex}>
                              <div className="w-[14vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#f2f2f2] text-[1vw] font-bold">{arr[0]}</div>      
                              <input className="w-[14vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" />                  
                          </div>    
                      ))
                  }
              </div>
          </div>
          <div className="part5 flex">
              <div className="w-[16vw] flex justify-center items-center py-[1vh] border-[#bfbfbf] border-2 bg-[#546242] text-white text-[1vw] font-bold">MESSAGES</div>       
              <input className="w-[74vw] bg-[#f1f4ff] border-[#bfbfbf] border-2 p-1 outline-none focus:bg-white" /> 
          </div>
    </div>
  )
}

export default Page

const array1 = [
    ["EMPLOYER NAME", "", "EMPLOYEE ID", "", "ISSUE DATE", ""],
    ["ADDRESS LINE1", "", "BUSINESS UNIT", "", "CHECK NO.", ""],
    ["ADDRESS LINE2", "", "PAY GROUP", "", "PAY PD BEGIN", ""],
    ["PHONE","","BENEFITS DATE","","PAY PD END",""]
]

const array2 = [
    ["EMPLOYEE NAME", ""],
    ["ADDRESS LINE1", ""],
    ["ADDRESS LINE2", ""]
]

const array3 = [
    ["FEDERAL", "", ""],
    ["STATE", "", ""],
    ["LOCAL", "", ""]
]

const array4 = [
    ["Regular", "", "", "", "", ""],
    ["Overtime", "", "", "", "", ""],
    ["Holiday", "", "", "", "", ""],
    ["Personal Day", "", "", "", "", ""],
    ["Vacation", "", "", "", "", ""],
    ["Sick Leave", "", "", "", "", ""],
    ["Family Leave of Absence", "", "", "", "", ""],
    ["Bonus", "", "", "", "", ""]
]

const array5 = [
    ["Federal Withholding", "", ""],
    ["Fedearl MED/EE", "", ""],
    ["Fedearl OASDI/EE", "", ""],
    ["State Withholding", "", ""],
    ["Other", "", ""],
    ["Other","",""],
]

const array6 = [
    ["CURRENT", ""],
    ["YID", ""]
]

