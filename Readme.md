При выполнении тестового задания возникли трудности с записью данных в local-storage.
В целом хранилище работает и зависит от состояния определенных частей store, но так как данные не изменяются в базе данных( из-за того, что по правилам бд все запросы являются фейковыми), то при обновлении страницы приходят посты с уникальными ключами, которые уже есть в хранилище.
и в консоли высвечиваются ошибки...
В связи с этим некоторые запросы так-же работают не корректно, при том, что логика, вроде как, реализованна правильно...

Так же большой обьем работы заняла самостоятельная настройка webpack, я частично использовал готовые решения, так как настраивал его впервые, под react и некоторые плагины настраивал сам.
