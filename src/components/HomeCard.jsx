import logo from '../assets/4.png';

const HomeCard = () => {
  return (
    <div className="max-w-md mx-auto bg-transparent shadow-xl rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <div className="flex items-center mb-4">
          <h2 className="text-3xl italic font-bold text-sky-200 mr-4">Bienvenidos a MedicApp</h2>
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <p className="mt-2 text-xl italic font-bold text-cyan-300">
          Tu solución confiable para el manejo de registros de pacientes
           y acceso rápido a sus datos personales en cualquier momento.<br></br>
           Medic App ha sido diseñada pensando en la comodidad y eficiencia 
           de los profesionales de la salud y sus pacientes.
        </p>
      </div>
    </div>
  );
};

export default HomeCard;

