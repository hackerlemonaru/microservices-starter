include dev.env
-include dev-local.env
export

GIT_CHECK_STAGED := $(shell git diff --name-only --cached)

# -------------------------------------
# dev targets
# -------------------------------------
.PHONY: dev
dev:
	npx nodemon \
		--config ./nodemon.json \
		--legacy-watch \
		-- \
			--inspect=$(NODE_INSPECTOR_HOST):$(NODE_INSPECTOR_PORT) \
