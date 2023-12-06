import { Button } from 'react-native-paper';



 function WhiteButton( props ) {

     return (
          <Button
          textColor={"black"}
          buttonColor={"white"}
          icon={props.icon} 
          mode={'elevated'} 
          onPress={ props.onPress }
          style={{marginBottom: 10}}>
               {props.Text}
          </Button>
     );
}

export default WhiteButton;