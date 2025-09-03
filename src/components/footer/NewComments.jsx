// NewComments.jsx
import { NewCommentsCard } from "./NewCommentsCard";
import { Title } from "../Title";

export const NewComments = () => (
  <section className="ml-5">
    <Title title="New Comments" />
    <NewCommentsCard />
  </section>
);

// import { NewCommentsCard } from "./NewCommentsCard";
// import { Title } from "../Title";

// export const NewComments = () => {
//   return (

//     <>
//       <div>
//         <div className="flex items-center ml-5 gap-2">
//           <Title title="New Comments" />
//         </div>

//         <NewCommentsCard />
//       </div>
//     </>
//   );
// };
