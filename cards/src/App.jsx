import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "/Users/berkezap/Desktop/ReactCards/cards/src/images/angular.png";
import CPP from "/Users/berkezap/Desktop/ReactCards/cards/src/images/Cpp.png";
import Boot from "/Users/berkezap/Desktop/ReactCards/cards/src/images/bootstrap.png";
import java from "/Users/berkezap/Desktop/ReactCards/cards/src/images/java.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title={"Angular"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus sit dolore quia neque cum quaerat sequi doloremque quas deleniti eum facere dignissimos ducimus porro dolorem eligendi, laudantium blanditiis?"
                }
              />
            </div>
            <div className="column">
              <Course
                image={java}
                title={"Java"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus sit dolore quia neque cum quaerat sequi doloremque quas deleniti eum facere dignissimos ducimus porro dolorem eligendi, laudantium blanditiis?"
                }
              />
            </div>
            <div className="column">
              <Course
                image={Boot}
                title={"Bootstrap"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus sit dolore quia neque cum quaerat sequi doloremque quas deleniti eum facere dignissimos ducimus porro dolorem eligendi, laudantium blanditiis?"
                }
              />
            </div>
            <div className="column">
              <Course
                image={CPP}
                title={"C++"}
                description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed natus sit dolore quia neque cum quaerat sequi doloremque quas deleniti eum facere dignissimos ducimus porro dolorem eligendi, laudantium blanditiis?"
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
