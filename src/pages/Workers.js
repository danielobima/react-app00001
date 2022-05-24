import faker from '@faker-js/faker';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect,useState } from 'react';
import {  animList } from '../functions/anim';

const Workers = ()=>{
    const [WorkerList, setWorkerList] = useState([]);


    const getWorkerData = (count)=>{
        let newList = [];
        for(var i= 0;i<count;i++){
            newList.push({
                firstName:faker.name.firstName(),
                lastName:faker.name.lastName(),
                job:faker.name.jobTitle()
            }); 
        }
        
        setWorkerList(WorkerList.concat(newList));
        
    };

    useEffect(()=>{
        getWorkerData(20);
        setTimeout(()=>{
            animList();
        },100);
    },[]);
    
    
    return(<>
        <div className='row mt-4'>
            <div className='col-sm-12'>
                <h1 className='h1 ps-sm-5 text-primary-darker ' style={{fontWeight:800}}>
                    Workers
                </h1>
            </div>
            <div className='col-sm-11  ms-sm-4'>
                <div className='card shadow bg-lightest-light mb-5 overflow-auto' style={{height:'70vh'}}>
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
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">job</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WorkerList.map((person,index)=>{
                                    
                                    return(<tr key={person.firstName+index} className="anim anim1">
                                            <th scope="row">{index+=1}</th>
                                            <td>{person.firstName}</td>
                                            <td>{person.lastName}</td>
                                            <td>{person.job}</td>
                                        </tr>);
                                })}
                                <tr onClick={()=>{
                                    getWorkerData(20);
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

export default Workers;
