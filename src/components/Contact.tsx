
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const hours = [
    { day: "Monday - Sunday ", time: "05:00 Pm - 11:00 PM" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Visit BYD Palace
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience authentic Indochinese cuisine in our warm and welcoming atmosphere.
            We look forward to serving you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">
                  209 Shenley Road<br />
                  Borehamwood,  WD6 1AT<br />
                  United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+447405421830" className="hover:text-red-600 transition-colors">
                    +44-7405421830
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:n.sharma77@yahoo.com" className="hover:text-red-600 transition-colors">
                    n.sharma77@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Hours</h3>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between gap-2 text-gray-600">
                      <span>{schedule.day}</span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-400">Located in the heart of Chinatown</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-500/10 rounded-2xl"></div>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Dine?</h3>
            <p className="mb-6 text-red-100">
              Make a reservation today and experience the finest Indochinese cuisine in the city.
            </p>
            <a
              href="tel:+447405421830"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Call Now to Reserve
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;