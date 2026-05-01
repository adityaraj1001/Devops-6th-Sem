# ❌ Error: MySQL connection refused

## Problem:
Node app could not connect to DB

## Cause:
DB container not ready

## Fix:
Added delay and retry logic

## Learning:
Always handle service startup timing
