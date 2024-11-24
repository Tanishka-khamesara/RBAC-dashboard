import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DataContext from './Components/Context/Context';
import PieChart from './Components/Sidebar/PieChart';
import Invoices from './Components/Sidebar/Invoices';
import ManageTeams from './Components/Sidebar/ManageTeams';
import ProfileForm from './Components/Sidebar/ProfileForm';
import Contacts from './Components/Sidebar/ContactsInfo';
import LineChart from './Components/Sidebar/LineChart';
import FAQ from './Components/Sidebar/FaqPage';
import Calendar from './Components/Sidebar/Calendar';
import BarChart from './Components/Sidebar/BarChart'
import GeographyChart from './Components/Sidebar/GeographyChart';
import { UserContext } from './Components/Context/Context';
import { useContext } from 'react';
import SignUp from './SignUp';
function App() {
  const ctx = useContext(UserContext);
  const colorCtx = ctx.colors;
  const Router = createBrowserRouter(
    [{
      path: "SignUp",
      element:<SignUp/>
    },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element:<Home/>
          },
          {
            path: "/ManageTeam",
            element:<ManageTeams/>
          }, 
          {
            path: "/Contacts",
            element:<Contacts/>
          },
          {
            path: "/Invoices",
            element:<Invoices/>
          },
          {
            path: "/ProfileForm",
            element:<ProfileForm/>
          },
          {
            path: "/Calendar",
            element:<Calendar/>
          },
          {
            path: "/FAQ",
            element:<FAQ/>
          },
          {
            path: "/BarChart",
            element:<BarChart/>
          },
          {
            path: "/PieChart",
            element:<PieChart/>
          },
          {
            path: "/LineChart",
            element:<LineChart/>
          },
          {
            path: "/GeographyChart",
            element:<GeographyChart/>
          },
          
        ]
    }
  ])
  return (
    <div className="App" >
      <DataContext>
      <RouterProvider router={Router}></RouterProvider>
      </DataContext>
        
       
   
    </div>
  );
}

export default App;
