if [[ -f "vendor/bin/phpcs" ]]; then
    vendor/bin/phpcs --config-set installed_paths vendor/wp-coding-standards/wpcs
fi
