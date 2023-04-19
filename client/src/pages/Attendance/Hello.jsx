import React from 'react'
import './hello.css'

export default function Hello(){
    return(
        <>
            <div className="hello container-fluid">
                <div className="monark">
                    <div className="m1">
                        <img id='img' src="https://base.berkadia.com/wp-content/uploads/2022/04/Romano-John-400x400px-278x278.jpg" alt="" height="50px" width="50px"/>
                    </div>
                    <div className="m2">
                        <div>Hello Monark! 👋</div>
                        <div>We hope you are having a good day</div>
                    </div>
                </div>
            </div>
        </>
    )
}