import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import './Selector.scss'

function Selector(props) {

    return (
        <div className="selector-wrapper">
            <div className="selector-wrapper__selector">
                <FormControl className="select-form" sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id="uf-select">{props.label}</InputLabel>
                    <Select className="select-form__selector"
                        id="uf-select"
                        label={props.label}
                        onChange={props.handleChange}
                    >
                        {
                            props.menuItems.map(menuItem => {
                                if (props.type == "uf") {
                                    return <MenuItem key={menuItem.sigla} value={menuItem.sigla}>{menuItem.nome}</MenuItem>
                                }
                                if (props.type == "ct")
                                    return <MenuItem key={menuItem.id} value={menuItem.id}>{menuItem.nome}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default Selector;