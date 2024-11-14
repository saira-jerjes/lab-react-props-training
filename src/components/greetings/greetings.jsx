import Panel from "../ui/panel/panel";

function Greetings({ className = "", lang = "en", children }) {
  let greet = "";
  switch (lang) {
    case "de":
      greet = "Hallo";
      break;
    case "en":
      greet = "Hello";
      break;
    case "es":
      greet = "Holi";
      break;
    case "fr":
      greet = "Bonjour";
      break;
  }

  return (
    <Panel className={className}> {greet} {children} </Panel>
  );
}

export default Greetings;
