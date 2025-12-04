.PHONY: help web-install api-install web-dev api-dev web-build api-build web-start api-start web-lint clean

help:
	@echo "Comandos disponíveis:"
	@echo "  make web-install    - Instalar dependências do frontend (web)"
	@echo "  make api-install    - Instalar dependências do backend (api)"
	@echo "  make web-dev        - Rodar o frontend (Next.js) em desenvolvimento"
	@echo "  make api-dev        - Rodar o backend (Node/Express) em desenvolvimento"
	@echo "  make web-build      - Build do frontend"
	@echo "  make api-build      - Build do backend"
	@echo "  make web-start      - Start do frontend (produção)"
	@echo "  make api-start      - Start do backend (produção)"
	@echo "  make web-lint       - Lint do frontend"
	@echo "  make clean          - Limpar artefatos (node_modules/.next/dist)"

web-install:
	cd web && yarn install

api-install:
	cd api && yarn install

web-dev:
	cd web && yarn dev

api-dev:
	cd api && yarn dev

web-build:
	cd web && yarn build

api-build:
	cd api && yarn build

web-start:
	cd web && yarn start

api-start:
	cd api && yarn start

web-lint:
	cd web && yarn lint

clean:
	@echo "Limpando artefatos..."
	@rm -rf web/node_modules web/.next api/node_modules api/dist