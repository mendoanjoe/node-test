# node-test
Build using nestjs using TypeORM, Swagger, and Redis caching response.

## Running
```shell
docker compose up -d
```

## Port
| Name              | Port                      |
| -------------         | -------------             |
| Api     | 80             |
| Postgresql  | 5432 |
| Adminer  | 1945 |

## Route

| Endpoint              | Type                      |
| -------------         | -------------             |
| `GET` http://localhost/     | Hello world             |
| `GET` http://localhost/api  | Swagger Api Documentation |
| `GET` http://localhost/articles  | Load all articles |
| `POST` http://localhost/articles  | Create new article |
| `GET` http://localhost/articles/{id}  | Get article by id |
| `PATCH` http://localhost/articles/{id}  | Patch article by id |
| `DELETE` http://localhost/articles/{id}  | delete article by id |

## Search
`GET` http://localhost/articles
with query search
- query: search column `title` and `body`
- author: search column `author`