import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useTranslation } from "react-i18next";

const contactMeta = [
    { icon: Mail, key: "email", value: "srumboalvarez@gmail.com", href: "mailto:srumboalvarez@gmail.com" },
    { icon: Phone, key: "phone", value: "+34 611841136", href: "tel:+34611841136" },
    { icon: MapPin, key: "location", value: "Sabadell, Barcelona", href: "#" },
]

export const Contact = () =>{
    const { t } = useTranslation();
    const infoLabels = t("contact.infoLabels", { returnObjects: true });
    const contactInfo = contactMeta.map((meta) => ({ ...meta, label: infoLabels[meta.key] }));

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type:null,
        message:""
    });


    const handleChange = async (e) =>{
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type:null, message:""});

        try{
            const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if(!serviceID || !templateID || !publicKey){
                throw new Error("EmailJS configuration is missing. Please check your environment variables.");
            }

            await emailjs.send(serviceID, templateID, {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message
            }, publicKey);

            setSubmitStatus({type:"success", message: t("contact.successMessage")});
            setFormData({name:"", email:"", message:""});

        }catch(error){
            console.error("Error sending email:", error);
            setSubmitStatus({type:"error", message: t("contact.errorMessage")});
        }finally{
            setIsLoading(false);
        }
    }

    return( 
    <section id="contact" className="py-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"/>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            {/* SECTION HEADER */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    {t("contact.label")}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animated-delay-100 text-secondary-foreground">
                    {t("contact.titleLine1")}{" "}
                    <span className="font-serif italic font-normal text-white">
                        {t("contact.titleHighlight")}
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animated-delay-200">
                    {t("contact.subtitle")}
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animated-delay-300">
                    <form className="space-y-6" onSubmit={handleChange}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                {t("contact.formName")}
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                placeholder={t("contact.formNamePlaceholder")}
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"

                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                {t("contact.formEmail")}
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                placeholder={t("contact.formEmailPlaceholder")}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                {t("contact.formMessage")}
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                placeholder={t("contact.formMessagePlaceholder")}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            />
                        </div>

                        <Button className="w-full" type="submit" size="lg" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                {t("contact.sending")}
                                </>
                            ) : (
                                <>
                                {t("contact.send")}
                                <Send className="w-5 h-5"/>
                                </>
                            )}
                        </Button>

                        {submitStatus.type && (
                            <div
                                className={`flex items-center gap-3
                                    p-4 rounded-xl ${
                                        submitStatus.type === "success"
                                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                                    }`}>
                                {submitStatus.type === "success" ? (
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                ) : (
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                )}
                                <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )} 
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 animate-fade-in animated-delay-400">
                    <div className="glass rounded-3xl p-8">
                        <h3 className="text-xl font-semibold mb-6">
                            {t("contact.infoTitle")}
                        </h3>
                        <div className="space-y-4">
                            {contactInfo.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary"/>
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.label}
                                        </div>
                                        <div className="font-medium">
                                            {item.value}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}