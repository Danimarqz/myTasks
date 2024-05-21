#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE DATABASE mytasks_db;
	GRANT ALL PRIVILEGES ON DATABASE mytasks_db TO darkhaiass;
EOSQL