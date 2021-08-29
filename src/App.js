
import React from 'react';
import './App.css';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

function App() {

    const cityquery = gql`
    {
        cities { 
            name, 
            country{name}, 
      }
        jobs { 
            company{name}, 
            applyUrl, 
        }
    }`

    const { loading, error, data } = useQuery(cityquery);

    if (loading) // If still loading
        return "Loading...";
    if (error) // If something goes wrong 
        return `Error ${error.message}`;


    return (
        <div className="App">
            <table>
                <tbody>
                    {
                        data.cities.map((city, index) =>
                            <tr key={index}>
                                <td>{city.name}</td>
                                <td>{city.country.name}</td>
                            </tr>
                        )

                    } {
                        data.jobs.map((job, index) =>
                            <tr key={index}>
                                <td>{job.company.name}</td>
                                <td><a href={job.applyUrl}>{job.applyUrl}</a></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>           
        </div>
    );
};
export default App;