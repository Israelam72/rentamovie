.PHONY: migrations migrate run clean install help

# Variáveis
PYTHON = python3
MANAGE = $(PYTHON) manage.py

help:
	@echo "Comandos disponíveis:"
	@echo "  make migrations  - Criar novas migrações"
	@echo "  make migrate    - Aplicar migrações no banco de dados"
	@echo "  make run       - Rodar o servidor de desenvolvimento"
	@echo "  make clean     - Limpar arquivos temporários (*.pyc, __pycache__)"
	@echo "  make install   - Instalar dependências do requirements.txt"

migrations:
	$(MANAGE) makemigrations

migrate:
	$(MANAGE) migrate

run:
	$(MANAGE) runserver

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete

install:
	pip install -r requirements.txt 