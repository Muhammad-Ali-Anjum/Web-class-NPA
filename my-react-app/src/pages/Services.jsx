import { useEffect, useState } from "react";
import { fetchServices } from "../api/serviceApi";
import ServiceCard from "../components/ServiceCard";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchServices();
      setServices(data);
    };

    load();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

export default Services;