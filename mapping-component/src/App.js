import Card from "./componant/Card";
import contacts from "./Contact";

function Creatcard(contacts){
    return (
        <Card 
           key={contacts.id}
            name={contacts.name}
            img={contacts.imgURL}
            tel={contacts.phone}
            email={contacts.email}
        />
    );

}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <>
        {contacts.map(Creatcard)}
      </>
    </div>
  );
}

export default App;