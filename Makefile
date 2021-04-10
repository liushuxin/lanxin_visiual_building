.PHONY: build
APP_NAME = spa_nginx_docker
PORT = 8080
PORT2 = 3000
build:
	npm run build
	docker build -t $(APP_NAME) .
deploy:
	docker run -d -it -p=$(PORT2):$(PORT) --name="$(APP_NAME)" $(APP_NAME)

stop:
	docker stop $(APP_NAME)
	docker rm $(APP_NAME)
	docker rmi $(APP_NAME)