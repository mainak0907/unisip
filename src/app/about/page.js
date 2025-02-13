import { Footer } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">ABOUT OUR COMPANY</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
            We envision a future where brands and consumers benefit together—brands get visibility, and people get accessibility to safe drinking water.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">OUR MISSION</h2>
          <div className="flex flex-col md:flex-row items-center gap-8"> 
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="https://i.postimg.cc/d18vcDPb/Whats-App-Image-2025-02-13-at-12-08-16-1691e02b.jpg"
                alt="Our Mission"
                width={500}  
                height={350} 
                className="rounded-lg shadow-lg object-cover max-w-full"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-justify">
              <p className="text-xl font-medium leading-relaxed mb-6">
                We transform brand marketing through premium customised label water bottles. The label is used as an advertisement space for the company. The bottles are distributed to the company&apos;s target audience for free or at low cost, ensuring high engagement with attractive label designs, QR Code Integration and a strong network for distribution.
              </p>
              <p className="text-xl font-medium leading-relaxed">
                We help businesses elevate their identity with premium, custom-labeled water bottles featuring their establishment and desired MRP. With on-site sales, these bottles enhance their visibility and create a premium experience for their customers. QR codes on the packaging link consumers to social media pages, delivery applications and offers, ensuring that people connect directly and meaningfully with them.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-gray-100 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">MEET OUR TEAM</h2>
    <div className="flex flex-wrap justify-center">
      {[
        { name: "KRISHNA AGRAWAL", role: "FOUNDER", image: "https://i.postimg.cc/k5jq1pSk/image-3.png" },
        { name: "SANYA BAGARIA", role: "FOUNDER", image: "https://i.postimg.cc/3J4wVYJY/image-6.png" },
      ].map((member, index) => (
        <div key={index} className="w-full md:w-1/3 h-auto flex flex-col items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-[350px] max-w-[1000px] flex flex-col">
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="w-full h-auto object-contain"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Company Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "INNOVATION", description: "We constantly push boundaries and explore new ideas." },
              { title: "INTEGRITY", description: "We uphold the highest ethical standards in all our actions." },
              { title: "COLLABORATION", description: "We believe in the power of teamwork and diverse perspectives." },
              { title: "EXCELLENCE", description: "We strive for excellence in everything we do." },
              { title: "CUSTOMER FOCUS", description: "Our customers are at the heart of our business." },
              {
                title: "SUSTAINABILITY",
                description: "We're committed to creating a positive impact on the environment.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-blue-100 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-blue-50 text-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">READY TO GET STARTED?</h2>
          <p className="text-xl mb-8">We&apos;d love to hear from you and discuss how we can help your business grow.</p>
          <Link
            href="/contactus"
            className="bg-blue-950 text-white py-3 px-8 rounded-full font-semibold text-lg transition duration-300"
          >
            CONTACT US 
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
