#!/bin/bash

for i in {1..36}
do
    name=$(cat /dev/urandom | tr -dc 'a-z' | fold -w ${1:-$(shuf -i 5-20 -n 1)} | head -n 1)
    icon="./icons/icon_${i}.png"
    link="https://www.github.com"
    date=$(date -d"$((RANDOM%365)) days ago" +'%m/%d/%Y')
    echo -e "{\n\t\"name\": \"$name\",\n\t\"icon\": \"$icon\",\n\t\"iconAlt\": \"$name\",\n\t\"link\": \"$link\",\n\t\"date\": \"$date\"\n}" > project-${i}.json
done