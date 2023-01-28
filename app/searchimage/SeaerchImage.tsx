'use client'
import {useRouter} from 'next/navigation'
import React, { useState} from "react";

const SeaerchImage = () => {
    const dropDownList = ['small', 'medium', 'large'];

    // setFormData
    const [form, setForm] = useState({imageType:'',no:'',size:dropDownList[0]})
    // handelFormData
    const handelForm = async (e:any) =>{
        e.preventDefault();
        console.log(JSON.stringify(form), 'formData');
        
        const apiResponse = await fetch(`http://localhost:3000/api/openai/imagegenerate`,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json'          
            },
            body: JSON.stringify(form),
        })

        console.log(apiResponse, 'apiResponse'); 
        return apiResponse.json()
    }
  return (
    <>
      <div className="block p-6 rounded-lg shadow-lg bg-white">
        <form className="items-center" onSubmit={handelForm}>
          <div className="form-group mb-6">
            <input
              type="text"
              className="
                w-2/6
                p-1.5
                text-base
                font-normal
                text-gray-700
                border border-solid border-gray-300
                rounded focus:border-blue-600 focus:outline-none"
                value={form.imageType}
                onChange={(e) => setForm({...form,imageType: e.target.value})}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="number"
              className=" w-2/6
              p-1.5
              text-base
              font-normal
              text-gray-700
              border border-solid border-gray-300
              rounded focus:border-blue-600 focus:outline-none"
              placeholder="No of Photos"
              value={form.no}
              onChange={(e) => setForm({...form,no: e.target.value})}
              required
            />
          </div>
          <div className="form-group mb-6">
            <select className=" w-2/6
                p-1.5
                text-base
                font-normal
                text-gray-700
                border border-solid border-gray-300
                rounded focus:border-blue-600 focus:outline-none"
                value={form.size}
                onChange={(e) => setForm({...form,size: e.target.value})}
                required>
                {dropDownList.map(list =><option value={list}>{list}</option> )}
            </select>
          </div>

          <button
            type="submit"
            className="w-2/6 px-6 py-2.5 bg-blue-600 text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
              active:bg-blue-800 active:shadow-lg
              transition
              duration-150
              ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default SeaerchImage;
