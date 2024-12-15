fill .env with postgresql credentials

```bash
bundle install

rails db:create
rails db:migrate
rails db:seed

rails s
```
