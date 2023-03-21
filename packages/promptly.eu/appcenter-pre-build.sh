#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n" $ENV_WHITELIST
set | egrep -e $ENV_WHITELIST | sed "s/RN_//g;s/['\]//g;" > .env
printf "\n.env created with contents:\n\n"
cat .env

printf "Copying RN cli:\n"
mkdir -p ./node_modules/react-native/local-cli/
cp ../../node_modules/react-native/local-cli/cli.js ./node_modules/react-native/local-cli/cli.js 