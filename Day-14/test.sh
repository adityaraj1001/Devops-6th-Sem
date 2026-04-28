#!/bin/bash

echo "Testing API..."

curl http://localhost:5000
echo ""

curl http://localhost:5000/api
echo ""

echo "Test Completed ✅"
