import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVehicle,removeVehicle } from './reducers/vehicleReducer';
import { faPlus, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  animListF, animList2 } from '../functions/anim';
import faker from '@faker-js/faker';

const Vehicles = ()=>{
    const vehiclesList = useSelector(state => state.vehicles);
    const dispatch = useDispatch();
    const [newVehicle,setNewVehicle] = useState({
        noPlate:'',
        make:'',
        model:''
    });
    const handleNewVehicleInputs = (event)=>{
        switch(event.target.id){
            case 'noPlate':
                setNewVehicle(prevState =>{
                    return{
                        noPlate:event.target.value,
                        make:prevState.make,
                        model:prevState.model
                    };
                });
                break;
            case 'make':
                setNewVehicle(prevState =>{
                    return{
                        noPlate:prevState.noPlate,
                        make:event.target.value,
                        model:prevState.model
                    };
                });
                break;
            case 'model':
                setNewVehicle(prevState =>{
                    return{
                        noPlate:prevState.noPlate,
                        make:prevState.make,
                        model:event.target.value
                    };
                });
                break;
            default:
                console.log('id not found');
        }
    }
    const randomVehicle = ()=>{
        return{
            noPlate:faker.vehicle.vrm(),
            make:faker.vehicle.manufacturer(),
            model:faker.vehicle.model()
        };
    }

    useEffect(()=>{
        setTimeout(()=>{
            animListF();
        },100);
    },[]);
    
    
    return(<>
        <div className='row mt-4 '>
            <div className='col-sm-12'>
                <h1 className='h1 ps-sm-5 text-primary-darker ' style={{fontWeight:800}}>
                    Vehicles
                </h1>
            </div>
            <div className='col-sm-11  ms-sm-4 '>
                <div className='card shadow bg-lightest-light mb-5 p-1 overflow-auto' style={{height:'70vh'}}>
                    <div className='card-body '>
                        <div className='card-header sticky-top m-0 p-0 border-0 bg-transparent pt-5 pt-sm-0' style={{top:'5px'}}>
                            <div className="input-group  p-2 " >
                                <div className="input-group-prepend shadow">
                                    <button className=" h-100 w-auto btn btn-primary rounded-0 rounded-start" >
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </button>
                                </div>
                                <input type="text" className="form-control shadow" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" style={{height:'50px'}}/>
                                <div className="input-group-prepend shadow">
                                    <button className=" h-100 w-auto btn btn-primary rounded-0 rounded-end" data-bs-toggle="modal" data-bs-target="#exampleModal" type='button'>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </button>
                                </div>
                                
                            </div>
                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Number plate</th>
                                <th scope="col">Make</th>
                                <th scope="col">Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vehiclesList.map((vehicle,index)=>{
                                    
                                    return(<tr key={vehicle.noPlate+index} id={vehicle.noPlate} className="animF anim4">
                                            <th scope="row">{index+=1}</th>
                                            <td>{vehicle.noPlate}</td>
                                            <td>{vehicle.make}</td>
                                            <td>{vehicle.model}</td>
                                            <td>
                                                <button className=' h-100 w-auto btn btn-primary' onClick={()=>{
                                                    document.getElementById(vehicle.noPlate).classList.remove('anim-def');
                                                    document.getElementById(vehicle.noPlate).classList.add('anim5');
                                                    dispatch(removeVehicle(index));
                                                    setTimeout(()=>{
                                                        animList2();
                                                    },100);
                                                }}>
                                                    <FontAwesomeIcon icon={faTrash}/>
                                                </button>
                                            </td>
                                        </tr>);
                                })}
                                {/* <tr onClick={()=>{
                                    // getWorkerData(20);
                                    // animList();
                                }}>
                                    <th>
                                        Load more
                                    </th>
                                </tr> */}
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
       
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add a vehicle</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="noPlate" className="form-label">Number Plate</label>
                        <input type="text" className="form-control" id="noPlate" aria-describedby="emailHelp" value={newVehicle.noPlate} onChange={handleNewVehicleInputs}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="noPlate" className="form-label">Make</label>
                        <input type="text" className="form-control" id="make" aria-describedby="emailHelp" value={newVehicle.make} onChange={handleNewVehicleInputs}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="noPlate" className="form-label">Model</label>
                        <input type="text" className="form-control" id="model" aria-describedby="emailHelp" value={newVehicle.model} onChange={handleNewVehicleInputs}/>
                    </div>
                    
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                    dispatch(addVehicle(newVehicle));
                    setTimeout(()=>{
                        animListF();
                    },100);
                }}>Add</button>
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                    let vehicle = randomVehicle();
                    setNewVehicle(vehicle);
                    dispatch(addVehicle(vehicle));
                    setTimeout(()=>{
                        animListF();
                    },100);
                }}>Random vehicle</button>
            </div>
            </div>
        </div>
        </div>
    </>);
};
export default Vehicles;
