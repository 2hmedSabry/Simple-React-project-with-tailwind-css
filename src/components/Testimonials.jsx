import { useState } from "react"
import TestimonialBox from "./TestimonialBox"

function Testimonials() {
    const [testData ] = useState([
        {
            id:1,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestias , sit amet elit consectetur',
            img:'profile-1.jpg',
            position:'Founder& CEO, Huddle',
            name:'Ahmed'
        },
        {
            id:2,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestias , sit amet elit consectetur',
            img:'profile-2.jpg',
            position:'Founder& CEO, Huddle',
            name:'Mohamed'
        },
        {
            id:3,
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestias , sit amet elit consectetur',
            img:'profile-3.jpg',
            position:'Founder& CEO, Huddle',
            name:'Eman'
        },

    ])
    return (
        <section className="pb-[350px]">
        <div className="container relative">
        <img src="/src/assets/images/bg-quotes.png"
        alt="quote"
        className="absolute left-[20px] top-[-35px]"
        />

        <div className="grid grid-cols-1 md:gsrid-cols-2 xl:grid-cols-3 gap-[40px] relative z-10">
            {testData.map((item)=>(
                <TestimonialBox 
                key={item.id} 
                desc={item.desc} 
                image={item.img} 
                position={item.position} 
                name={item.name}  />
            ))}
        </div>


        <img src="" alt="" />
        </div>    
        </section>
    )
}

export default Testimonials
