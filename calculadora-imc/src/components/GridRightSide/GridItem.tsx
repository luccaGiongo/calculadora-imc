import { Level } from "../../helpers/imc";
import { Grid, Icon, Title, YourImc, ImcInfo } from "./GridItem.style";
import upImage from "../../imgs/up.png";
import downImage from "../../imgs/down.png";

type Props = {
    item: Level;
}

export const GridItem = ({ item }: Props) => {
    return <Grid color={item.color}>
        <Icon>
            {item.icon === 'up' && <img src={upImage}></img>}
            {item.icon === 'down' && <img src={downImage}></img>}
        </Icon>
        <Title>
            {item.title}
        </Title>
        <YourImc>
            {item.yourImc &&
                `Seu IMC é ${item.yourImc.toFixed(2)} kg/m²`
            }
        </YourImc>

        <ImcInfo>
            IMC está entre <strong>{item.imc[0]}</strong>  e  <strong>{item.imc[1]}</strong>
        </ImcInfo>
    </Grid>
}

