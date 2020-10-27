#!/usr/bin/env bash

set -eu

function main() {
    if [ -d "${INPUT_SCRIPT_PATH}" ]; then
    	cd ${INPUT_SCRIPT_PATH}
    else
        echo "Invalid path ${INPUT_SCRIPT_PATH}"
        exit 1;
    fi

    bash ${INPUT_SCRIPT_PATH}
}

main
