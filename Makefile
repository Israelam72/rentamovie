.PHONY: help web-install api-install web api web-build api-build web-start api-start web-lint clean

help:
	@echo "Available commands:"
	@echo "  make web-install    - Install frontend (web) dependencies"
	@echo "  make api-install    - Install backend (api) dependencies"
	@echo "  make web            - Run frontend (Next.js) in development"
	@echo "  make api            - Run backend (Node/Express) in development"
	@echo "  make web-build      - Build frontend"
	@echo "  make api-build      - Build backend"
	@echo "  make web-start      - Start frontend (production)"
	@echo "  make api-start      - Start backend (production)"
	@echo "  make web-lint       - Lint frontend"
	@echo "  make clean          - Clean artifacts (node_modules/.next/dist)"

web-install:
	cd web && yarn install

api-install:
	cd api && yarn install

web:
	cd web && yarn dev

api:
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
	@echo "Cleaning artifacts..."
	@rm -rf web/node_modules web/.next api/node_modules api/dist