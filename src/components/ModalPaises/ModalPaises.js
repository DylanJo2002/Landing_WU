import React, {userState} from 'react'
import { makeStyles } from "@material-ui/core";
import { Modal } from "@material-ui/core/styles";


class ModalPaises extends React.Component {

    usersStyles=makeStyles((theme)=> ({
        modal: {
            position: 'absolute',
            width: 400,
            background: 'white',
            borderShadow: theme.shadows[5],
            top: '0%',
            left: '100%',
            transform: 'translate(0%, -100%)'
        }
    }))
    
    render() {
        const styles = this.usersStyles();
    
        const [modal, setModal] = userState(false);
    
        setModal(this.props);

        const abrirCerrarModal = ()=> {
            setModal(!modal);
        }
    
        const body= (
            <div className={styles.modal}>
                <div>
                    <h2>Hola mundo</h2>
                </div>
            </div>
        )
    
        return (
            <div>
                <Modal
                    open={Modal}
                    onClose={abrirCerrarModal}
                >
                    {body}
    
                </Modal>
            </div>
        )
    }
    
}
export default ModalPaises;