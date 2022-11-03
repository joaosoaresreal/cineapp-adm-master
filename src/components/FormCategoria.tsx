import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

export function FormCategoria() {
    return (
        <FormControl
          label={() => "Categoria"}
          caption={() => "teste"}
        >
          <Input />
        </FormControl>
      );
}