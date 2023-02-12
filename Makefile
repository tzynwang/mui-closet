include .env

GIT_REPO_URL=`node -p "require('../package.json').repository.url"`

# 在不改動 yarn.lock 的情況下安裝套件
.PHONY: i
i:
	rm -rf node_modules
	yarn install --frozen-lockfile

# 開啟本機伺服器來運行此前端專案
.PHONY: start
start:
	node -r esbuild-runner/register ./script/start.ts

# 移除打包檔案
.PHONY: remove-build
remove-build:
	rm -f -r $(BUILD_DESTINATION)

# 執行打包作業
.PHONY: build
build: remove-build
	node -r esbuild-runner/register ./script/build.ts

# 預覽打包後的結果
.PHONY: preview
preview:
	npx http-server $(BUILD_DESTINATION)

# 部署為 "gh-pages"
.PHONY: deploy
deploy: build
	cd $(BUILD_DESTINATION) && \
	git init && \
	git remote -v | grep -w origin || git remote add origin $(GIT_REPO_URL) && \
	git branch -m gh-pages && \
	git add -A && \
	git commit -m "[feat] deploy as gh-pages `date +'%Y-%m-%d %H:%M:%S'`" && \
	git push -u origin gh-pages -f
