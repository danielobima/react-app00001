import React, { useEffect,useState } from 'react';
import { BarChart, options } from '../functions/chart';
import './css/home.scss';
import { faker } from '@faker-js/faker';
import { anim } from '../functions/anim';


const Home = ()=>{
    const [performance,setPerformance] = useState("0%");
    const [attendance,setAttendace] = useState("0%");
    const [chartData, setChartData] = useState({});
    const [dataSet, setData] = useState(false);
    const [vehicleNo, setVehicleNo] = useState({
        active:0,
        inactive:0
    }); 
    const chartOptions = options;
    chartOptions.plugins.title.display = false;
    
   
    useEffect(()=>{
        let perf = faker.random.numeric(2);
        let attend = faker.random.numeric(2);
        setPerformance(`${perf}%`);
        setAttendace(`${attend}%`);
        createChart();
        getVehicleNos();
        anim();
    },[]);
    
    const createChart = ()=>{
        let data = getCompanyData();
        setChartData({
            labels: data.map((Company) => Company.CompanyName),
            datasets: [
              {
                label: "Company sales",
                data: data.map((Company) => Company.Sales),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }

            ]
        });
        setData(true);
    }
    const getVehicleNos = () =>{
       
        setVehicleNo({
            active:faker.random.numeric(4),
            inactive:faker.random.numeric(4)
        });
        
    };
    
    return(<>
    {/*  */}
        <div className='row mt-4'>
            <div className='col-sm-12'>
                <h1 className='h1 ps-sm-5 text-primary-darker' style={{fontWeight:800}}>
                    Dashboard
                </h1>
            </div>
            <div className='col-sm-3  ms-sm-4 mb-5' >
                <div className='card shadow bg-lightest-light hCard mb-5'>
                    <div className='card-body'>
                        <h5 className='card-title mb-4'>Workers</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Performance</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: performance}} >{performance}</div>
                        </div>
                        <h6 className="card-subtitle mb-2 mt-2 text-muted">Attendance</h6>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: attendance}} >{attendance}</div>
                        </div>
                    </div>
                    <div className="card-footer text-end seeMore" onClick={()=>{
                        window.location.href = "/workers";
                    }}>
                        See more &gt;
                    </div>
                </div>
                <div className='card shadow bg-lightest-light hCard mb-sm-5'>
                    <div className='card-body'>
                        <h5 className='card-title anim anim1'>{vehicleNo.active}</h5>
                        <h6 className="card-subtitle mb-2 text-muted ">active vehicles</h6>
                        <h5 className='card-title anim anim1'>{vehicleNo.inactive}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">inactive vehicles</h6>
                        
                    </div>
                    <div className="card-footer text-end seeMore" onClick={()=>{
                        window.location.href = "/vehicles";
                    }}>
                        See more &gt;
                    </div>
                </div>
            
                
            </div>
            <div className='col-sm-8' >
                <div className='card shadow bg-lightest-light hCard mb-5 '>
                    <div className='card-body '>
                        <h5 className='card-title '>Companies</h5>
                        {dataSet &&<BarChart chartData={chartData} classNames="m-2" options={chartOptions}/>}
                        
                    </div>
                    
                    <div className="card-footer  text-end seeMore" onClick={()=>{
                        window.location.href = "/companies";
                    }}>
                        See more &gt;
                    </div>
                </div>

            </div>
        </div>
        
    </>);
};
const getCompanyData=()=>{
    let length = faker.random.numeric(1);
    let list = [];
    for(var i=0;i<length;i++){
        list.push({CompanyName:faker.company.companyName(),Sales:faker.random.numeric(5)});
    }
    return list;

}
export default Home;
