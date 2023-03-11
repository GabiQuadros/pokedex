import CardMedia from "@mui/material/CardMedia";
import React from "react";
import "./StyledCard.css";
import pikachu from "../../../Assets/025.png";

//Fazer interface para chamar na pagina main somente um card e colocar a descrição de cada um
//Como tipar imagem?
// interface CardProps {
//   foto: any;
//   habilidade: string;
//   descricao: string;
//   imageStatus: any;
// }

//ESSE É SOMENTE PARA VISUALIZAR NA PAGINA
export const Card: React.FC = () => {
  return (
    <React.Fragment>
      <div className="card">
        <div className="content">
          <CardMedia
            component="img"
            height="120"
            image={pikachu}
            alt="Picachu"
          />
          <h4>Trabalho em equipe</h4>
          <h5>Facil convivencia e sempre ajudando os colegas.</h5>
          <h4>Colocar barra de força</h4>
        </div>
      </div>
    </React.Fragment>
  );
};

//USAR ESSE QUANDO ESTIVER PRONTO
// export const Card: React.FC<CardProps> = ({
//   foto,
//   habilidade,
//   descricao,
//   imageStatus,
// }) => {
//   return (
//     <React.Fragment>
//       <div className="card">
//         <div className="content">
//           <CardMedia component="img" height="120" image={foto} alt="Picachu" />
//           <h4>{habilidade}</h4>
//           <h5>{descricao}</h5>
//           <h4>{imageStatus}</h4>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

export default Card;
