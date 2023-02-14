# Pages

É onde deve ficar todas as telas da aplicação.

## Padrões de Desenvolvimento.

- As páginas devem ser separados por pastas representando o "módulo" de navegação da aplicação e devem ser nomeadas com `PascalCase`.

- Cada módulo deve conter os pastas `Template`, `Components`, `SubModule` e o arquivos `routes.tsx`.

## Exemplos de Arquivos

### `Template`.

É a pasta onde será criado uma estrutura padrão comum em todas as páginas do módulo.

Deve seguir os mesmos padrões de componentes, com os seguintes arquivos `index.tsx`, `index.test.tsx` e caso precise, o arquivo de estilo `index.styled.ts`.

### `Components`.

É a pasta onde serão criados os componentes que serão usados internamente pelo módulo e as demais página.

Deve seguir os mesmos padrões de componentes, com os seguintes arquivos `index.tsx`, `index.test.tsx` e caso precise, o arquivo de estilo `index.styled.ts`.

### `SubModule`.

É a pasta onde serão criados os sub módulos das rotas, a estrutura deve repetir a estrutura do módulo, porém sem o arquivo de routes.

### `routes.tsx` (Rotas do módulo).

É onde as rotas devem ser criadas e exportada.

```ts
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LazyRoute } from 'components';

const MyPages = {
	Template: React.lazy(() => import('./Template')),
};

const RoutesComponent = () => {
	return (
		<Routes>
			<Route
				path=''
				element={
					<LazyRoute component={<MyPages.Template />} isDrawer={false} />
				}
			></Route>
		</Routes>
	);
};

export default RoutesComponent;

```

É recomendado que a criação seja feita implementando o Lazyload.
