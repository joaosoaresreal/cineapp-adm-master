import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import {Button, SHAPE} from 'baseui/button';

export function NovaCategoria() {
    return (
        <div>
            <h1>CADASTRAR NOVA CATEGORIA</h1>
            <FormControl
                label={() => "NOME DA CATEGORIA"}
                overrides={{
                    ControlContainer: {
                        style: ({ $theme }) => ({
                            outline: `${$theme.colors.warning600} solid`,
                            backgroundColor: $theme.colors.warning600
                        })
                    }
                }}
            >
                <Input />
            </FormControl>
            <Button shape={SHAPE.pill}>SALVAR</Button>
        </div>
    )
}