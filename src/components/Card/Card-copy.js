// import React from 'react';
// import './Card.css';

// const Card = props => {
//   //const alternatingColor = ['#fff', '#000'];
//   return (
//     <div>
//       <hr />
//       <p className="card-heading">Projects</p>

//       <div className="flex">
//         {props.projects.map((project, index) => {
//           return index % 2 === 0 /* every other card is different */ ? (
//             <div key={index} className="card-wrapper dark">
//               <div className="card-details">
//                 <div className="card-left">
//                   <img
//                     src={project.imgUrl}
//                     className="thumb-image"
//                     alt="thumbnail"
//                   />
//                 </div>
//                 <div className="card-right">
//                   <h1>{project.title}</h1>
//                   <p>{project.details}</p>
//                 </div>

//                 {/* <div id="thumb1"></div> */}
//               </div>
//             </div>
//           ) : (
//             <div key={index} className="card-wrapper">
//             <div className="card-details">
//                 <div className="card-left">
//                   <img
//                     src={project.imgUrl}
//                     className="thumb-image"
//                     alt="thumbnail"
//                   />
//                 </div>
//                 <div className="card-right">
//                   <h1>{project.title}</h1>
//                   <p>{project.details}</p>
//                 </div>

//                 {/* <div id="thumb1"></div> */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Card;
