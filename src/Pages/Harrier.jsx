import { useState } from 'react';
import { Check, Twitter, Facebook, Share2, Linkedin, Mail } from 'lucide-react';
import { Button, Input, Select, Divider } from 'antd';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const { Option } = Select;

export default function BMWCarRental() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('May 01, 2025');
  const [returnDate, setReturnDate] = useState('May 01, 2025');
  const [selectedImage, setSelectedImage] = useState('https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80');

  const carImages = [
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-side-view.jpeg?isig=0&q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-rear-three-quarter-12.jpeg?isig=0&q=80',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-exterior-right-rear-three-quarter-25.jpeg?isig=0&q=80',
  ];

  const carSpecs = [
    { name: 'Body', value: 'SUV' },
    { name: 'Seat', value: '5 seats' },
    { name: 'Door', value: '4 doors' },
    { name: 'Luggage', value: '150' },
    { name: 'Fuel Type', value: 'Diesel' },
    { name: 'Engine', value: '1956 cc' },
    { name: 'Year', value: '2024' },
    { name: 'Mileage', value: '200' },
    { name: 'Transmission', value: 'Automatic' },
    { name: 'Drive', value: '4WD' },
    { name: 'Fuel Economy', value: '14.6 to 16.8 kmpl' },
    { name: 'Exterior Color', value: 'Sunlit Yellow' },
    { name: 'Interior Color', value: 'Black' }
  ];

  const features = ['Bluetooth', 'Multimedia Player', 'Central Lock', 'Moonroof'];

  const handleBookNow = () => {
    alert('Booking confirmed for the Tata Harrier!');
  };

  return (
    <div>
      <Header />
      <section className="h-85 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">Vehicle Fleet</h1>
      </section>
    <div className="max-w-7xl mx-auto !p-6 font-sans !mt-10 !ml-70">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side: Image + Details */}
        <div>
          <img src={selectedImage} alt="Selected" className="w-full h-96 object-cover shadow" />
          <div className="grid grid-cols-4 gap-2 !mt-4">
            {carImages.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                alt={`thumb-${index}`}
                className={`cursor-pointer rounded-lg border-2 ${selectedImage === img ? 'border-blue-500' : 'border-transparent'}`}
              />
            ))}
          </div>

          <h1 className="text-3xl font-bold text-blue-900 !mt-6 !mb-2">Tata Harrier 2024</h1>
          <p className="text-gray-700 !mb-4">
          The Harrier is a sturdy and imposing SUV, built on a Land Rover platform, and boasts a five-star safety rating. Its spacious and comfortable cabin is replete with tech, 
          features, and a big boot. Driving it is an engaging experience thanks to a potent engine and well-balanced handling.
          </p>

          <h2 className="text-2xl font-bold text-blue-900 !mb-3">Specifications</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
            {carSpecs.map((spec, index) => (
              <div key={index} className="flex justify-between">
                <span>{spec.name}</span>
                <span className="font-medium">{spec.value}</span>
              </div>
            ))}
          </div>

          <Divider />

          <h2 className="text-2xl font-bold text-blue-900 !mb-3">Features</h2>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="!mr-2 text-green-500" size={18} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Booking Form */}
        <div className="bg-white !p-6 rounded-lg shadow-md sticky top-10">
          <div className="!mb-4 bg-gray-100 justify-between text-center !ml-40 !pt-5 w-50 h-30">
            <p className="text-gray-600 text-sm">Daily rate</p>
            <p className="text-4xl font-bold text-blue-900">₹3500</p>
          </div>

          <h2 className="text-xl font-bold !mb-4">Booking this car</h2>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Pick Up Location</label>
            <Input
              placeholder="Enter pickup location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Drop Off Location</label>
            <Input
              placeholder="Enter dropoff location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>

          <div className="!mb-4">
            <label className="block !mb-1 text-gray-700">Pick Up Date & Time</label>
            <div className="flex gap-2">
              <Input value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
              <Select defaultValue="Time" className="w-1/2">
                <Option>9:00 AM</Option>
                <Option>12:00 PM</Option>
                <Option>3:00 PM</Option>
                <Option>6:00 PM</Option>
              </Select>
            </div>
          </div>

          <div className="!mb-6">
            <label className="block !mb-1 text-gray-700">Return Date & Time</label>
            <div className="flex gap-2">
              <Input value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              <Select defaultValue="Time" className="w-1/2">
                <Option>9:00 AM</Option>
                <Option>12:00 PM</Option>
                <Option>3:00 PM</Option>
                <Option>6:00 PM</Option>
              </Select>
            </div>
          </div>

          <Button type="primary" className="w-full" size="large" onClick={handleBookNow}>
            Book Now
          </Button>

          <Divider />

          <h3 className="text-lg font-bold !mb-2">Share</h3>
          <div className="flex gap-2 flex-wrap">
            <Button icon={<Twitter />} shape="circle" />
            <Button icon={<Facebook />} shape="circle" />
            <Button icon={<Linkedin />} shape="circle" />
            <Button icon={<Mail />} shape="circle" />
            <Button icon={<Share2 />} shape="circle" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
      );
}
