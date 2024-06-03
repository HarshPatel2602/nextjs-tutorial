"use client"
export default function Lecture({params}){
    // console.log(params)     
    return(
        <div>
            <h1>Day of Collage - {params.lecture[0]}</h1>
            <h2>Lecture No. - {params.lecture[1]}</h2>
            <h3>Teacher Name. - {params.lecture[2]}</h3>
            <h4>Subject Name. - {params.lecture[3]}</h4>
        </div>
    )
}