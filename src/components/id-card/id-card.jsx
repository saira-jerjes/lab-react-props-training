import Panel from "../ui/panel/panel";

function IdCard({ className = '', firstName, lastName, gender, height, birth, picture }) {
  return (
  
      <Panel className={className}>
        <img src={picture} className="img-fluid m-3" alt="profile-picture" />

        <ul className="mb-0 list-unstyled">
          <li >
            <strong>First Name: </strong>
            {firstName}
          </li>
          <li >
            <strong>Last Name: </strong>
            {lastName}
          </li>
          <li >
            <strong>Gender: </strong>
            {gender}
          </li>
          <li >
            <strong>Height: </strong>
            {(height / 100).toFixed(2)} m
          </li>
          <li>
            <strong>Birth: </strong>
            {birth.toDateString()}
          </li>
        </ul>
      </Panel>

  );
}
IdCard.defaultProps = {
  lastName: "",
  firstName: "",
  gender: "",
  height: 0,
  birth: new Date(),
  picture: "",
};

export default IdCard;
