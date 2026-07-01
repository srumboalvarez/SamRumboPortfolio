import { Mail, MapPin, Phone } from "lucide-react"

const contactInfo = [
    {
        icon: Mail,
        label:"Email",
        value:"srumboalvarez@gmail.com",
        href:"mailto:srumboalvarez@gmail.com"
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+34 611841136",
        href:"tel:+34611841136"
    },
    {
        icon: MapPin,
        label:"Location",
        value: "Sabadell, Barcelona",
        href: "#"
    }
]

export const Contact = () =>{
    return( 
    <section id="contact" className="py-2 relative overflow-hidden">

    </section>
    )
}