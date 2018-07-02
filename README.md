# Features


# Usage

## Environment variables

| Name                                | Required | Value            | Purpose                                 |
|-------------------------------------|----------|------------------|-----------------------------------------|
| `NODE_ENV`                          | true     |                  | 環境名                                  |
| `NPM_TOKEN`                         | true     |                  | npm トークン                            |
| `REDIS_HOST`                        | true     |                  | REDISホスト                             |
| `REDIS_PORT`                        | true     |                  | REDISポート                             |
| `REDIS_KEY`                         | true     |                  | REDISキー                               |
| `SSKTS_API_ENDPOINT`                | true     |                  | SSKTS API エンドポイント                 |
| `CLIENT_ID_OAUTH2`                  | true     |                  | OAUTH2クライアントID                     |
| `CLIENT_SECRET_OAUTH2`              | true     |                  | OAUTH2クライアントSECRET                 |
| `AUTHORIZE_SERVER_DOMAIN`           | true     |                  | 認可サーバードメイン                      |
| `OAUTH2_SERVER_DOMAIN`              | true     |                  | OAUTH2認可サーバードメイン                |
| `RESOURCE_SERVER_URL`               | true     |                  | リソースサーバーURL                      |
| `AUTH_REDIRECT_URI`                 | true     |                  | サインインリダイレクトURL                 |
| `AUTH_LOGUOT_URI`                   | true     |                  | サインアウトリダイレクトURL               |
| `DEBUG`                             | false    | sskts-ticket:*   | デバッグ                                |


# Build

ビルドは以下で実行できます。
- typescript
```shell
npm run build
```

# JsDoc

```shell
npm run jsdoc
```

`jsdocを作成できます。./docsに出力されます。