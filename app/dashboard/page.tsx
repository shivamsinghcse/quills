'use client'
import { Navbar } from "@/components/ui/navbar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard(){
    const token = localStorage.getItem("token")
    const [product,setProduct]=useState([])
    async function fetchData(){
        const data = await axios.get("http://localhost:3000/dashboard",{
            headers: {
                'Authorization': token
              } 
        });
        console.log(token)
        setProduct(data.data.data)
        console.log(data.data.data
        );
    }
    
    // Inside your component
    useEffect(() => {
      fetchData();
      }, []);
    console.log("shivam")
    console.log(product)
    return(
      <div className="bg-white text-black">
        <Navbar></Navbar>
        <h1 className="font-bold text-2xl text-black text-center my-5">Dashboard</h1>
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        {/* <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label> */}
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Mobile No
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
                <th scope="col" className="px-6 py-3">
                    Pincode
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit/Delete
                </th>
             
            </tr>
        </thead>
        <tbody>
        {product.map((info, index) => {
  return (
    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input id={`checkbox-table-search-${index}`} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "></input>
          <label htmlFor={`checkbox-table-search-${index}`} className="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {info.product[0]}
      </th>
      <td className="px-6 py-4">
        {info.product[1]}
    
      </td>
      <td className="px-6 py-4">
        {info.quantity}
      </td>
      <td className="px-6 py-4">
        {info.customer[0]}
      </td>
      <td className="px-6 py-4">
        {info.customer[1]}
        </td>
      <td className="px-6 py-4">
        {info.customer[2]}
       </td>
      <td className="px-6 py-4">
        {info.customer[3]}
       </td>
      <td className="px-6 py-4">
        {info.customer[4]}
       </td>
      <td className="flex items-center px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</a>
      </td>
    </tr>
  );
})}

            
        </tbody>
    </table>
</div>


      </div>
    )
}