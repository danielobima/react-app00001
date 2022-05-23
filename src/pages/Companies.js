import faker from '@faker-js/faker';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect,useState } from 'react';
import {  animList } from '../functions/anim';

const Companies = ()=>{
    const [CompanyList, setCompanyList] = useState([]);


    const getCompanyData = (count)=>{
        let newList = [];
        for(var i= 0;i<count;i++){
            newList.push({
                name:faker.company.companyName(),
                city:faker.address.cityName(),
                sales:faker.random.numeric(6)
            }); 
        }
        
        setCompanyList(CompanyList.concat(newList));
        
    };

    useEffect(()=>{
        getCompanyData(20);
        setTimeout(()=>{
            animList();
        },100);
    },[]);
    
    
    return(<>
        <div className='row mt-4'>
            <div className='col-sm-12'>
                <h1 className='h1 ps-sm-5 text-primary-darker ' style={{fontWeight:800}}>
                    Companies
                </h1>
            </div>
            <div className='col-sm-11  ms-sm-4'>
                <div className='card shadow bg-lightest-light mb-5' style={{minHeight:'50vh'}}>
                    <div className='card-body'>
                        <div className='card-header sticky-top m-0 p-0 border-0 bg-transparent pt-5 pt-sm-0' style={{top:'5px'}}>
                            <div className="input-group  p-2 " >
                                <div className="input-group-prepend shadow">
                                    <button className=" h-100 w-auto btn btn-primary " >
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </div>
                                <input type="text" className="form-control shadow" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" style={{height:'50px'}}/>
                            </div>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Company name</th>
                                <th scope="col">City</th>
                                <th scope="col">sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CompanyList.map((company,index)=>{
                                    
                                    return(<tr key={company.name+index} className="anim anim1">
                                            <th scope="row">{index+=1}</th>
                                            <td>{company.name}</td>
                                            <td>{company.city}</td>
                                            <td>{company.sales}</td>
                                        </tr>);
                                })}
                                <tr onClick={()=>{
                                    getCompanyData(20);
                                    animList();
                                }}>
                                    <th>
                                        Load more
                                    </th>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
       
    </>);
};
export default Companies;
