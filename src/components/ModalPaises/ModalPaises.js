import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import './ModalPaises.css';
import cerrar_icon from './img/cerrar_icon.png';
import paises_json from './paises.js';

const usersStyles = makeStyles((theme) => ({
    modal: {
      position: "absolute",
      width: 400,
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      background: "white",
      borderShadow: theme.shadows[5],
      top: "100%",
      botton: "0",
      height: "100%",
      right: "0",
      transform: "translate(0%, -100%)",
      display: "flex",
      "flex-direction": "column"
    },
}));

function ModalPaises({state,cerrar}) {

  const styles = usersStyles();

  const [modal, setModal] = useState(state);


  const body = (
    <div className={styles.modal}>

      <div>
        <div className="bg_black modal_sec_cerrar d-flex align-items-center">
          <button className="yellow bg_black btn_cerrar" onClick={cerrar}>
              <img src={cerrar_icon} alt="Cerrar" />
          </button>
          <p className="white mb-0">Cerrar</p>
        </div>
      </div>

      <div>
        <div className="contenedor_centro d-flex justify-content-between align-items-center py-3">
            <h6 className="museoSans mb-0">PAÍS</h6>
            <h6 className="museoSans mb-0">COD</h6>
        </div>
      </div>

      <div className="container_paises">
              {
                  paises_json.paises.map((value,index)=> {
                      let style = '';
                      console.log("Printing countries");
                      style = index%2===0 ? style.concat('bg_soft_grey') : style.concat('bg_white');
                      return (
                          <div className={style} key={index}>
                              <div className="contenedor_centro container_pais">
                                  <p className="mb-0">{value.nombre}</p>
                                  <p className="mb-0 museoSans">{value.codigo}</p>
                              </div>
                          </div>
                      )
                  })
              }
      </div>
    </div>
  );

  return (
    <div className="h-100">
      <Modal open={state} className="h-100">
        {body}
      </Modal>
    </div>
  );
}

export default ModalPaises;
