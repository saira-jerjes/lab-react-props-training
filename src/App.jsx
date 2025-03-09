import IdCard from "./assets/components/idCard/idCard";
import Greetings from "./assets/components/greetings/greetings";
import Random from "./assets/components/random/random";
import BoxColor from "./assets/components/boxColor/boxColor";
import CreditCard from "./assets/components/creditCard/creditCard";



function App() {
  return (
    <div className="container py-5">
      <IdCard
        className="mb-2"
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        className="mb-2"
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings className="mb-1">Esther</Greetings>
      <Greetings className="mb-1" lang="fr">Julia y Sofia</Greetings>

      <Random className="mb-1" min={0} max={50} />
      <Random className="mb-1" min={1} max={6} />
      <Random className="mb-1" min={2} max={100} />

      <BoxColor className="mb-1" r={255} g={0} b={0} />
      <BoxColor className="mb-1" r={128} g={255} b={0} />
      <BoxColor className="mb-1" r={0} g={255} b={255} />

      <CreditCard 
        className="mb-1"
        card={{
          type: "Visa",
          number: "0123456789016984",
          expirationMonth: 12,
          expirationYear: 2019,
          bank: "CaixaBank",
          owner: "Esther Lopez Perez",
        }}
        bgColor="#ddbb55"
        color="white" 
      />
      <CreditCard
        className="mb-1"
        card={{
          type: "Master Card",
          number: "0123456789010995",
          expirationMonth: 3,
          expirationYear: 2021,
          bank: "N26",
          owner: "Maxence Bouret",
        }}
        bgColor="#eeeeee"
        color="#222222"
      />
    </div>
  );
}

export default App;