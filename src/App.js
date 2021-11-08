import logo_ from './svg/logo_.svg';
import vader from './media/vader.jpeg';
import './App.css';
import { Navbar } from "./navbar";
import { Projects } from "./projects"
import { ProjectDemo } from "./projectDemo";
import 'bootstrap/dist/css/bootstrap.min.css';

const bgStyle = {
    backgroundImage: `url(${vader})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%'
};
function App() {

  return (

    <div className='background-image'>
        <div className='container'>
            <Navbar />
            <div className='jedi'>
                <h1>Hello Jedi... </h1>
            </div>

        </div>
        <div className='projects-div'>
            <Projects />
        </div>
        <div className='project-demo-div'>
            <ProjectDemo />
        </div>
    </div>

  );
}
// <div className="App">
//     {/*<header className="App-header">*/}
//     {/*  /!*<img src={logo_} className="App-logo" alt="logo" />*!/*/}
//     {/*  /!*<p>*!/*/}
//     {/*  /!*  Welcome Jedi.*!/*/}
//     {/*  /!*</p>*!/*/}
//     {/*</header>*/}
//     <div className='background-image' >
//         <div>
//             <h1>Hello Jedi... </h1>
//         </div>
//     </div>
// </div>
export default App;
