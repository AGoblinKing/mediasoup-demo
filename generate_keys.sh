#!/bin/sh

openssl genrsa > server/certs/privkey.pem
openssl req -new -x509 -key server/certs/privkey.pem > server/certs/fullchain.pem