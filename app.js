// Part 1 ans:

// Progression 1:
const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React",container);

// Progression 2:
// Functional component
const Container = () =>{
  return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
     React.createElement(`div`,null,`Let's rock and roll`)
     );
}
// Render the Container
const containerTwo = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),containerTwo);

// Progression 3:
// class ReactContainer extends React.Component{
//   // constructor - to initialize the state 

//   // render method to render the react dom 
//     render(){
//         return React.createElement(`div`,null,`Hey Kalvians`,
//         React.createElement(`div`,null,`Let's rock and roll with classes`)
//         );
//     }
  
// }
// const containerThree = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer),container);
  
