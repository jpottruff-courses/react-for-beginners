import React from 'react';


//This can be turned into a Stateless Functional Component 

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch 
//                     <span className="ofThe">
//                         <span className="of">Of</span>
//                         <span className="the">The</span>
//                     </span>
//                     Day
//                 </h1>
//                 <h3 className="tagline">
//                     {/* <span>Fresh Daily!</span> */}
//                     <span>{this.props.tagline}</span>    {/* use PROPS instead of hardcoding*/}
//                 </h3>
//             </header>


//         )
//     }

// }



// STATELESS FUNCTIONAL COMPOENT VERSION
// NOTE: arrow function
// const Header = (props) => {
//     return (
//         <header className="top">
//             <h1>
//                 Catch 
//                 <span className="ofThe">
//                     <span className="of">Of</span>
//                     <span className="the">The</span>
//                 </span>
//                 Day
//             </h1>
//             <h3 className="tagline">
//                 {/* <span>Fresh Daily!</span> */}
//                 <span>{this.props.tagline}</span>    {/* use PROPS instead of hardcoding*/}
//             </h3>
//         </header>
//     );
// }

// STATELESS FUNCTION COMPONENT
// Arrow Function and Implicit Return
const Header = (props) => (
    <header className="top">
        <h1>
            Catch 
            <span className="ofThe">
                <span className="of">Of</span>
                <span className="the">The</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            {/* <span>Fresh Daily!</span> */}
            <span>{props.tagline}</span>    {/* use PROPS instead of hardcoding*/}
        </h3>
    </header>
);



export default Header; 
