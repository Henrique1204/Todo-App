# Contexts

É onde deve ficar todos os contextos do projeto.

## Padrões de Desenvolvimento.

- Os contextos devem ser separados por pastas e devem ser nomeadas com `PascalCase` e sufixo `.context`.

- Cada pasta deverá conter os seguintes arquivos `index.tsx`, `index.test.tsx`.

- Após a criação do contexto deve importar e exportar ele no index.ts na raiz da pasta `Contexts`, a ordem de importação deve ser alfabética.

## Exemplos de Arquivos

### `index.tsx` (Contexto).

A estrutura esperada para criação dos contextos segue abaixo:

```ts
import React from 'react';

export interface IContextState {}

export type IPartialContextState = Partial<IContextState>;

export interface IProviderNameProps {
  initialState: IPartialContextState;
  children: React.ReactNode;
}

const ContextName = React.createContext<IPartialContextState>({});

const DEFAULT_STATE = {};

export const ProviderName: React.FC<IProviderNameProps> = ({ children }) => {
  return <ContextName.Provider value={{}}>{children}</ContextName.Provider>;
};

export default {
  Context: ContextName,
  Provider: ProviderName,
  useContextName: () => React.useContext(ContextName) as IContextState,
};
```

Recomendável utilizar o snippet `component-init` para criação da estrutura base.

### `index.test.tsx` (Testes unitários).

É o arquivo de testes unitários do contexto, deve conter testes das atualizações dos states e dos principais métodos.

```ts
import { renderHook } from 'tests/CustomRender';

import useHookName from '.';

describe('useHookName', () => {
	it('Testing render.', () => {
		const { state } = renderHook<{}>(() => useHookName());
	});
});
```

Deve se utilizar os métodos do CustomRender em vez do testingLibary.
