import { Spinner } from "react-bootstrap";

export const Button = (props) => {
    const {
        className,
        type,
        id,
        onClick = () => { },
        value,
        loading
    } = props;
    return (
        <button title={value} className={className} type={type} id={id} onClick={onClick} disabled={loading ? true : false} >
            {
                loading
                    ?
                    <Spinner animation="border" size='sm' />
                    :
                    value
            }


        </button>
    )
}