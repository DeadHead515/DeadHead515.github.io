import React from 'react';
import PhpIcon from '@mui/icons-material/Php';
import JavascriptIcon from '@mui/icons-material/Javascript';


export class Skills extends React.Component {
    render(){
        return (
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', textShadow: "4px 4px 6px #000000" }}>
                    <h4>Current Skill Set:</h4>
                </div>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', }}>
                    <ul>
                        <li><PhpIcon/>PHP</li>
                        <li><JavascriptIcon/>JavaScript</li>
                        <li>SQL</li>
                        <li>React</li>
                    </ul>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JQuery</li>
                        <li>Material UI</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
            </div>
        )
    };
}

