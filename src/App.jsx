import IdCard from "./components/id-card/id-card";
import Greetings from "./components/greetings/greetings";

function App() {
  return (
    <div className="container py-5">
      <IdCard
        className="mb-3"
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
      className="mb-3"
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings className="mb-2" lang = 'es'> Carlos</Greetings>
      <Greetings lang = 'fr'> Juli</Greetings>
    </div>
  );
}

export default App;
