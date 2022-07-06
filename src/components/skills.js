import React from 'react';


export class Skills extends React.Component {
    render(){
        return (
            <div>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', }}>
                    <h4>Skill Set:</h4>
                </div>
                <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', }}>
                    <ul>
                        <li>PHP</li>
                        <li>JavaScript</li>
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

