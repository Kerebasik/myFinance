# MY FINANCE

## .env file

| Key              | Description | Type    |
|------------------|-------------|---------|
| VITE_CLIENT_PORT | client port | Number  |
| SERVER_PORT      | server port | Number  |

### For start production:

docker-compose -f docker-compose-production.yml up --build

### For start development

docker-compose -f docker-compose-development.yml up -d
