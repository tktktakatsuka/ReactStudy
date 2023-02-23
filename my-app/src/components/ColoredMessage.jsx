export const ColoredMessage  = (props) =>{
    const {message , children} = props;
        
    console.log(props); 
    
    const contentStyle = {  
        color    : props.color ,
        fontSize : "20px"
    };
    return (
    <>
    <p style={contentStyle} >{children}</p>
    <p style={contentStyle} >{message}</p>
    </>
    );
}